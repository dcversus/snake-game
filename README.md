# 🐍 Snake Game

[![GitHub Pages](https://img.shields.io/badge/demo-live-success?style=for-the-badge&logo=github)](https://dcversus.github.io/snake-game/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![CI/CD](https://img.shields.io/github/actions/workflow/status/dcversus/snake-game/deploy.yml?style=for-the-badge&label=CI/CD)](https://github.com/dcversus/snake-game/actions)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

Классическая игра "Змейка" с современным минималистичным дизайном и 3D эффектами, созданная с помощью AI-ассистента **Ampcode**.

> 💭 **Небольшая история:** Этот проект был создан в шутку для друга, чтобы показать, как легко и весело можно создавать крутые штуки с помощью AI! Надеюсь, это вдохновит тебя изучать программирование и экспериментировать с новыми технологиями! 🚀

## 🎮 [Играть онлайн](https://dcversus.github.io/snake-game/)

## ✨ Особенности

- 🎨 Минималистичный дизайн в стиле Nebius Academy
- 🤖 **3 AI-бота противника** с умным поведением
- 🍎 **8 яблочек** на поле одновременно
- ⚡ **Динамическая скорость** — растёт с длиной змейки
- 🎭 **3D эффекты** — градиенты, тени, плавные переходы
- 🔊 **Простые звуки** при поедании еды и проигрыше
- 📐 **Большое поле** 800×600 пикселей
- 💾 Сохранение рекорда в localStorage
- ⌨️ Управление стрелками или WASD
- ⏸️ Пауза на пробел
- 🌀 Проход сквозь стены

## 🎯 Управление

- **← ↑ → ↓** или **W A S D** — движение змейки
- **Пробел** — пауза/продолжить
- **Кнопка "Играть снова"** — рестарт после проигрыша

## 🤖 О создании

Этот проект создан как демонстрация возможностей [**Ampcode**](https://ampcode.com) — AI-ассистента для разработки от Sourcegraph.

### 🧠 Технологии AI

Проект полностью разработан с использованием:
- **Claude 3.7 Sonnet** — основная модель для генерации кода и архитектурных решений

### 🛠️ Стек технологий

- Чистый **HTML5** Canvas
- Vanilla **JavaScript** (ES6+)
- **CSS3** с градиентами и анимациями
- **GitHub Pages** для хостинга
- **GitHub Actions** для автоматического деплоя

## 🚀 Локальный запуск

```bash
# Клонировать репозиторий
git clone https://github.com/dcversus/snake-game.git

# Перейти в папку
cd snake-game

# Открыть в браузере
open index.html
# или для Linux
xdg-open index.html
# или для Windows
start index.html
```

Либо просто откройте файл `index.html` в любом современном браузере.

## 📦 Структура проекта

```
snake-game/
├── index.html          # Основной файл игры (HTML + CSS + JS)
├── README.md           # Документация
├── LICENSE             # Лицензия MIT
└── .github/
    └── workflows/
        └── deploy.yml  # CI/CD конфигурация
```

## 🔧 CI/CD

Проект использует GitHub Actions для автоматического деплоя:

- ✅ Валидация HTML
- ✅ Проверка JavaScript синтаксиса
- ✅ Автоматический деплой на GitHub Pages
- ✅ Запуск при каждом push в main

## 📝 Лицензия

Этот проект распространяется под лицензией MIT. Подробности в файле [LICENSE](LICENSE).

## 🙏 Благодарности

- **Ampcode** за помощь в разработке
- **Sourcegraph** за создание Ampcode
- **Claude (Anthropic)** за AI-модель

## 🔗 Ссылки

- [🎮 Демо игры](https://dcversus.github.io/snake-game/)
- [📖 Ampcode](https://ampcode.com)
- [🐙 GitHub репозиторий](https://github.com/dcversus/snake-game)

---

<div align="center">
Made with ❤️ and 🤖 by <a href="https://ampcode.com">Ampcode</a>
</div>
