import { useState } from 'react'
import Button from './components/Button'
import './App.css'

function App() {
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const handleClick = () => {
    console.log('Кнопка нажата!')
  }

  const handleLoadingClick = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  const toggleDisabled = () => {
    setDisabled(!disabled)
  }

  return (
    <div className="app">

      <div className="button-showcase">

        <div className="button-group">
          <h3>Варианты стилей</h3>
          <Button variant="primary" onClick={handleClick}>
            Primary кнопка
          </Button>
          <Button variant="secondary" onClick={handleClick}>
            Secondary кнопка
          </Button>
          <Button variant="outline" onClick={handleClick}>
            Outline кнопка
          </Button>
          <Button variant="ghost" onClick={handleClick}>
            Ghost кнопка
          </Button>
        </div>

        <div className="button-group">
          <h3>Размеры</h3>
          <Button size="small" onClick={handleClick}>
            Маленькая
          </Button>
          <Button size="medium" onClick={handleClick}>
            Средняя
          </Button>
          <Button size="large" onClick={handleClick}>
            Большая
          </Button>
        </div>

        <div className="button-group">
          <h3>Состояния</h3>
          <Button
            variant="primary"
            loading={loading}
            onClick={handleLoadingClick}
          >
            {loading ? 'Загрузка...' : 'Нажми для загрузки'}
          </Button>

          <Button
            variant="secondary"
            disabled={disabled}
            onClick={handleClick}
          >
            {disabled ? 'Отключена' : 'Активна'}
          </Button>

          <Button
            variant="outline"
            onClick={toggleDisabled}
          >
            {disabled ? 'Включить' : 'Отключить'} кнопки
          </Button>
        </div>

        <div className="button-group">
          <h3>Типы кнопок</h3>
          <Button type="button" onClick={handleClick}>
            Обычная кнопка
          </Button>
          <Button type="submit" onClick={handleClick}>
            Кнопка отправки
          </Button>
          <Button type="reset" onClick={handleClick}>
            Кнопка сброса
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
