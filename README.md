# React Button Component

Компонент кнопки для React приложений с TypeScript интерфейсом.

## 🚀 Особенности

- **TypeScript поддержка** - Полная типизация с интерфейсами
- **Множественные варианты** - Primary, Secondary, Outline, Ghost
- **Различные размеры** - Small, Medium, Large
- **Состояния** - Loading, Disabled, Active
- **Современный дизайн** - Градиенты, анимации, hover эффекты
- **Адаптивность** - Оптимизировано для мобильных устройств
- **Доступность** - Поддержка клавиатуры и скринридеров

## 📦 Установка

```bash
# Клонируйте репозиторий
git clone <repository-url>
cd Rect-btn

# Установите зависимости
npm install

# Запустите проект
npm run dev
```

## 🎯 Использование

### Базовое использование

```tsx
import Button from './components/Button';

function App() {
  const handleClick = () => {
    console.log('Кнопка нажата!');
  };

  return (
    <Button onClick={handleClick}>
      Нажми меня
    </Button>
  );
}
```

### Варианты кнопок

```tsx
// Primary кнопка (по умолчанию)
<Button variant="primary">Primary</Button>

// Secondary кнопка
<Button variant="secondary">Secondary</Button>

// Outline кнопка
<Button variant="outline">Outline</Button>

// Ghost кнопка
<Button variant="ghost">Ghost</Button>
```

### Размеры

```tsx
<Button size="small">Маленькая</Button>
<Button size="medium">Средняя</Button>
<Button size="large">Большая</Button>
```

### Состояния

```tsx
// Загрузка
<Button loading={true}>Загрузка...</Button>

// Отключена
<Button disabled={true}>Отключена</Button>

// Комбинированное состояние
<Button loading={isLoading} disabled={isDisabled}>
  {isLoading ? 'Загрузка...' : 'Отправить'}
</Button>
```

### Типы кнопок

```tsx
<Button type="button">Обычная кнопка</Button>
<Button type="submit">Отправить форму</Button>
<Button type="reset">Сбросить форму</Button>
```

## 🔧 Интерфейс компонента

```typescript
interface ButtonProps {
  children: React.ReactNode;        // Содержимое кнопки
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';  // Стиль кнопки
  size?: 'small' | 'medium' | 'large';                      // Размер кнопки
  disabled?: boolean;               // Отключена ли кнопка
  loading?: boolean;                // Показывать ли индикатор загрузки
  onClick?: () => void;             // Обработчик клика
  type?: 'button' | 'submit' | 'reset';                     // Тип кнопки
  className?: string;               // Дополнительные CSS классы
}
```

## 🎨 Стилизация

Компонент использует CSS модули с BEM методологией. Основные классы:

- `.button` - базовый класс кнопки
- `.button--{variant}` - варианты стилей
- `.button--{size}` - размеры
- `.button--disabled` - отключенное состояние
- `.button--loading` - состояние загрузки

### Кастомизация

Вы можете переопределить стили, добавив свои CSS классы:

```tsx
<Button className="my-custom-button" variant="primary">
  Кастомная кнопка
</Button>
```

## 📱 Адаптивность

Компонент автоматически адаптируется под размер экрана:

- **Desktop**: Полные размеры и отступы
- **Tablet**: Уменьшенные отступы
- **Mobile**: Компактные размеры для удобного использования

## ♿ Доступность

- Поддержка навигации с клавиатуры
- Правильные ARIA атрибуты
- Фокус индикаторы
- Поддержка скринридеров

## 🛠️ Технологии

- **React 18** - Основная библиотека
- **TypeScript** - Типизация
- **Vite** - Сборщик проекта
- **CSS3** - Стилизация с современными возможностями

## 📁 Структура проекта

```
src/
├── components/
│   ├── Button.tsx      # Основной компонент кнопки
│   └── Button.css      # Стили кнопки
├── App.tsx             # Главный компонент с демонстрацией
├── App.css             # Стили приложения
└── main.tsx            # Точка входа
```

## 🚀 Скрипты

```bash
# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Предварительный просмотр сборки
npm run preview

# Проверка типов TypeScript
npm run type-check

# Линтинг кода
npm run lint
---
