# 🐍 Snake Game

[![GitHub Pages](https://img.shields.io/badge/demo-live-success?style=for-the-badge&logo=github)](https://dcversus.github.io/snake-game/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Quality](https://img.shields.io/github/actions/workflow/status/dcversus/snake-game/quality.yml?style=for-the-badge&label=Quality)](https://github.com/dcversus/snake-game/actions)
[![Tests](https://img.shields.io/badge/tests-15%20passing-success?style=for-the-badge)](https://github.com/dcversus/snake-game/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
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

- **TypeScript** — строгая типизация
- **Vite** — быстрый zero-config бандлер
- **HTML5** Canvas для рендеринга
- **Vitest** — unit-тестирование
- **GitHub Pages** для хостинга
- **GitHub Actions** для CI/CD

## 🚀 Локальный запуск

```bash
# Клонировать репозиторий
git clone https://github.com/dcversus/snake-game.git

# Перейти в папку
cd snake-game

# Установить зависимости
npm install

# Запустить dev-сервер
npm run dev

# Или собрать для production
npm run build
npm run preview
```

## 🧪 Разработка

```bash
# Запустить тесты
npm test

# Запустить тесты в watch mode
npm run test:watch

# Проверить типы TypeScript
npm run typecheck

# Собрать проект
npm run build
```

## 📦 Структура проекта

```
snake-game/
├── src/
│   ├── __tests__/      # Unit-тесты
│   ├── Bot.ts          # Логика AI ботов
│   ├── Game.ts         # Основная игровая логика
│   ├── constants.ts    # Константы игры
│   ├── types.ts        # TypeScript типы
│   ├── utils.ts        # Утилиты
│   ├── main.ts         # Точка входа
│   └── style.css       # Стили
├── index.html          # HTML страница
├── package.json        # Зависимости
├── tsconfig.json       # TypeScript конфигурация
├── vite.config.ts      # Vite + Vitest конфигурация
└── .github/
    └── workflows/
        └── quality.yml # Quality Pipeline CI/CD
```

## 🔧 Quality Pipeline

Проект использует GitHub Actions с автоматическими проверками:

- ✅ **TypeScript check** — проверка типов
- ✅ **Unit Tests** — запуск всех тестов (15 тестов)
- ✅ **Build** — сборка проекта с Vite
- ✅ **Deploy** — автоматический деплой на GitHub Pages
- ✅ Запуск при каждом push в main и PR

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
