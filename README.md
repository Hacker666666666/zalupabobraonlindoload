# 🔮 Cryven

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-7c3aed?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**OSINT Intelligence Platform**

*Агрегация цифровых следов • Поиск по открытым источникам • Real-time анализ*

[Демо](#demo) • [Установка](#installation) • [Документация](#docs) • [API](#api)

</div>

---

## ⚡ О проекте

Cryven — платформа для поиска и анализа информации из открытых источников (OSINT). Позволяет находить связанные данные по номеру телефона, email или ID социальных сетей.

```
┌─────────────────────────────────────────────────────────┐
│  INPUT: phone / email / social ID                       │
│                      ↓                                  │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐   │
│  │ Sources │→ │ Crawl   │→ │ Correlate│→ │ Output │   │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘   │
│                      ↓                                  │
│  OUTPUT: aggregated profile data                        │
└─────────────────────────────────────────────────────────┘
```

## ✨ Возможности

| Функция | Описание |
|---------|----------|
| 🔍 **Multi-search** | Поиск по телефону, email, VK/Telegram ID |
| 🔗 **Корреляция** | Связывание данных из разных источников |
| ⚡ **Real-time** | Мгновенный поиск без задержек |
| 🔒 **Приватность** | Данные не сохраняются на серверах |
| 📱 **Telegram** | Интеграция с Telegram Web App |
| 🛠 **API** | REST API для интеграции |

## 🚀 Быстрый старт

```bash
# Клонировать репозиторий
git clone https://github.com/username/cryven.git
cd cryven

# Установить зависимости
npm install

# Запустить dev-сервер
npm run dev
```

Открыть [http://localhost:5173](http://localhost:5173)


## 🛠 Технологии

- **React 18** — UI библиотека
- **TypeScript** — типизация
- **Tailwind CSS** — стилизация
- **Vite** — сборка
- **Lucide** — иконки

## 📄 Переменные окружения

```env
# .env.local
VITE_API_URL=https://api.example.com
VITE_TELEGRAM_BOT=@CryvenBot
```

## 🔐 API

```bash
# Поиск по телефону
curl -X POST https://api.cryven.io/search \
  -H "Authorization: Bearer TOKEN" \
  -d '{"query": "+79991234567", "type": "phone"}'
```

<details>
<summary>Пример ответа</summary>

```json
{
  "status": "success",
  "data": {
    "phone": "+79991234567",
    "name": "Иван Иванов",
    "socials": ["vk.com/id123"],
    "sources": 3,
    "confidence": 0.87
  }
}
```

</details>

## 📝 Лицензия

MIT © 2025

---

<div align="center">

**[⬆ Наверх](#-cryven)**

</div>
