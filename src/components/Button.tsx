import React from 'react';
import './Button.css';

// Интерфейс для пропсов кнопки
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  // Новые пропсы для подключения классов
  containerClassName?: string;
  contentClassName?: string;
  loaderClassName?: string;
  // Дополнительные стили
  fullWidth?: boolean;
  rounded?: boolean;
  flat?: boolean;
  // Состояния
  active?: boolean;
  pressed?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  className = '',
  containerClassName = '',
  contentClassName = '',
  loaderClassName = '',
  fullWidth = false,
  rounded = false,
  flat = false,
  active = false,
  pressed = false,
}) => {
  const handleClick = () => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };

  const buttonClasses = [
    'button',
    `button--${variant}`,
    `button--${size}`,
    disabled && 'button--disabled',
    loading && 'button--loading',
    fullWidth && 'button--full-width',
    rounded && 'button--rounded',
    flat && 'button--flat',
    active && 'button--active',
    pressed && 'button--pressed',
    className,
    containerClassName,
  ]
    .filter(Boolean)
    .join(' ');

  const contentClasses = [
    'button__content',
    contentClassName,
  ]
    .filter(Boolean)
    .join(' ');

  const loaderClasses = [
    'button__loader',
    loaderClassName,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled || loading}
    >
      {loading && <span className={loaderClasses}></span>}
      <span className={contentClasses}>{children}</span>
    </button>
  );
};

export default Button; 