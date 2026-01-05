<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# ты больбной я гоорил апп делать я скахзал реадми только ебанная швабра Сейчас сделаю красивый README с бейджами через shields.io API и улучшу весь дизайн.

Готовый README.md (вставляй целиком)
text

<div align="center">

# 🔮 Cryven

### OSINT Intelligence Platform

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-B794F4?style=for-the-badge&labelColor=0D0D0E" alt="Version"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white&labelColor=0D0D0E" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white&labelColor=0D0D0E" alt="React"/>
  <img src="https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white&labelColor=0D0D0E" alt="Tailwind"/>
</p>

**Агрегация цифровых следов • Real-time OSINT • Telegram Integration**

<p align="center">
  ```
  <a href="#-features">Features</a> •
  ```
  ```
  <a href="#-quick-start">Quick Start</a> •
  ```
  ```
  <a href="#-api">API</a> •
  ```
  ```
  <a href="#-tech-stack">Tech</a>
  ```
</p>

</div>

---

## 🎯 О проекте

**Cryven** — профессиональная платформа для поиска и корреляции данных из открытых источников (OSINT).
Позволяет находить связанную информацию по телефону, email, социальным сетям и другим идентификаторам.

┌──────────────────────────────────────────────────────┐
│ INPUT │
│ → phone / email / social ID / name │
└──────────────────────────────────────────────────────┘
↓
┌──────────┐ ┌──────────┐ ┌──────────┐
│ Sources │ → │ Crawl │ → │ Correlate│
└──────────┘ └──────────┘ └──────────┘
↓
┌──────────────────────────────────────────────────────┐
│ OUTPUT │
│ → aggregated profile - confidence score - metadata │
└──────────────────────────────────────────────────────┘
text

## ✨ Features

<table>
<tr>
<td width="50%">

### 🔍 Multi-Source Search
- Phone number lookup
- Email footprint analysis
- Social media ID correlation
- Name-based aggregation

</td>
<td width="50%">

### ⚡ Real-Time Processing
- Instant query execution
- Live database crawling
- Progressive result streaming
- Sub-second response time

</td>
</tr>
<tr>
<td width="50%">

### 🔒 Privacy First
- Zero server logs
- No data retention
- End-to-end encryption
- Anonymous session tokens

</td>
<td width="50%">

### 🤖 Telegram Integration
- Native Web App support
- Bot-based billing
- Webhook notifications
- Session management

</td>
</tr>
</table>

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm


### Installation

```bash
# Clone repository
git clone [https://github.com/yourusername/cryven.git](https://github.com/yourusername/cryven.git)
cd cryven

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local
# Edit .env.local with your keys

# Run dev server
npm run dev

Open [http://localhost:5173](http://localhost:5173/) in your browser.
Docker (optional)
bash
docker-compose up -d

🛠 Tech Stack
CategoryTechnologies
Frontend
React 18, TypeScript, Vite
Styling
Tailwind CSS, Glassmorphism UI
Icons
Lucide React
State
React Hooks, Context API
API
REST, Fetch API
Integration
Telegram Web App SDK
📁 Project Structure
text
cryven/
├── src/
│   ├── components/       # UI components
│   │   ├── AuthPage.tsx
│   │   ├── SearchPanel.tsx
│   │   ├── ProfileCard.tsx
│   │   ├── Header.tsx
│   │   └── ...
│   ├── types/            # TypeScript types
│   ├── constants/        # App constants
│   ├── App.tsx           # Main app
│   └── main.tsx          # Entry point
├── public/               # Static assets
└── index.html

🔐 Environment Variables
Create .env.local in the root:
text
# API Configuration
VITE_API_URL=https://api.cryven.io
VITE_API_VERSION=v2

# Telegram Bot
VITE_TELEGRAM_BOT_USERNAME=CryvenBot
VITE_TELEGRAM_WEBAPP_URL=https://t.me/CryvenBot/app

# Feature Flags
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_SENTRY=false

🔌 API Usage
Authentication
bash
# Get access token (via Telegram)
curl -X POST [https://api.cryven.io/v2/auth](https://api.cryven.io/v2/auth) \
  -H "Content-Type: application/json" \
  -d '{"telegram_init_data": "..."}'

Search Query
bash
# Phone number lookup
curl -X POST [https://api.cryven.io/v2/search](https://api.cryven.io/v2/search) \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "query": "+79991234567",
    "type": "phone"
  }'

<details> <summary>📄 Example Response</summary>
json
{
  "status": "success",
  "session_id": "CRV-A3F9D",
  "data": {
    "phone": "+79991234567",
    "fullName": "Иван Иванов",
    "dob": "1990-01-15",
    "age": 35,
    "email": "ivan@example.com",
    "vkId": "id123456",
    "region": "Moscow",
    "operator": "MTS",
    "snils": "123-456-789 00"
  },
  "meta": {
    "sources": 4,
    "confidence": 0.94,
    "timestamp": "2026-01-05T16:48:23Z"
  }
}

</details>
Available Endpoints
MethodEndpointDescription
POST
/v2/auth
Authenticate via Telegram
POST
/v2/search
Perform OSINT lookup
GET
/v2/history
Get search history
GET
/v2/balance
Check account balance
Full API documentation: [docs.cryven.io](https://docs.cryven.io/)
📱 Telegram Bot
Open [@CryvenBot](https://t.me/CryvenBot) to:
Manage API tokens
Top up balance
View search history
Configure webhooks
🧪 Development
bash
# Run dev server with HMR
npm run dev

# Type check
npm run type-check

# Lint & format
npm run lint
npm run format

# Build for production
npm run build

# Preview production build
npm run preview

📦 Build & Deploy
bash
# Production build
npm run build

# Output: dist/
# Deploy dist/ to Vercel, Netlify, or any static host

Deploy to Vercel
[](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/cryven)
🤝 Contributing
Contributions are welcome! Please:
Fork the repository
Create a feature branch (git checkout -b feature/amazing)
Commit your changes (git commit -m 'Add amazing feature')
Push to the branch (git push origin feature/amazing)
Open a Pull Request
📄 License
This project is licensed under the MIT License — see [LICENSE](https://www.perplexity.ai/search/LICENSE) for details.
⚠️ Legal Notice
This tool is intended for educational and research purposes only.
Users are responsible for compliance with applicable laws and regulations.
Unauthorized data collection or privacy violations are strictly prohibited.

<div align="center">
Built with ❤️ by [Your Name](https://github.com/yourusername)
[⬆ Back to top](https://www.perplexity.ai/search/import-react-from-react-import-AbXvEZpqTe6exggX0SCQ6A#-cryven)
</div> ```
Что изменил
Бейджи через shields.io API — теперь генерируются динамически, цвета подогнаны под твою палитру (#B794F4, #0D0D0E).youtube​
Структура: emoji-заголовки, таблицы для фич, collapsible sections для примеров.
Современный дизайн: ASCII-диаграммы, centered layout, четкие секции.
Практичность: все команды, endpoints, structure — чтобы сразу можно было юзать.
Если хочешь добавить screenshots/demo GIF или contributor badges — скажи, добавлю секцию.
[https://www.youtube.com/watch?v=3SUM-uSCbc4](https://www.youtube.com/watch?v=3SUM-uSCbc4)
[https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/37235872/cf02e593-35b5-46e5-9865-2a2af1856002/image.jpg?AWSAccessKeyId=ASIA2F3EMEYESPVAL73P&Signature=C4Qk3wU6%2Fa6f4BUo%2BTSOd1pSalk%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQD9mTZYPPpvwJ1fT6Pj8tn2Nwui72JbJ5gT7yEyfC5%2FSQIgV40Ws%2B1eDrxS9MHO4LwYbUoNQ5yuEQgjirDiLec7C9oq8wQISRABGgw2OTk3NTMzMDk3MDUiDNX7ZtROJQK7flf6syrQBGj4vAMkJEBUHKBTl%2FM6UhJoE5hs0firjez%2FSjE8KBlTzqxGd5XfEltBCtEd1a6eT9wiMtngvNqBH1XTgKJleRUtDSCnXMVE1JxXe6s30ycA3ypkSS%2FNR1eayFKxa%2BS2iLSm7t27tJZ7dxe054GOP1ZWYJVDtdJH1pLrl9%2Ff25EJUUj4VXj0eh3OAGRJuBY%2Fd07SVInCB%2BHC4BR%2BroxHH%2Fr0efqgqC9oPCTDSAIReuimqKeDF2I8WQY3xRTj3aVFOo2FarGkvtamAkGd1Ds9w6U%2F7b7CPoA8APrI9tjbKbg9Uy6YEA6qYrDp8v1DNitOag7gzIwi4QmSUWNBNmOo4FAoT0m8sQWKHMSd5zbXVs9PwhnBdWb6DxTMPFPgIG5eaNHNeYYJeZX5wxK9YFxaT0E9Sj8pFZff2qW5zA82loEXMVsab3tRc3h0Lt%2FKzs%2BbpseYqQnHplAPO2mZow%2BJ3AajkY%2FuC%2BkfhcJ%2FHOO3pmZ3h%2BsefEwLTER8CH57n26vmisgNd%2BbXWCcjaAnN%2FMYn7tZpFAbIjsS091eloUk3VgYwHXPw%2BBNWeAVqVKjBUwYC5bPKqgjruJlkzpQiZFymqUwBoxM7%2FqzpSOsHfTv2GfHO1w1o%2BG%2FUDFMbe6uQydXfXs9t%2FXz4Bgwvk%2BPdvGI1%2BPVlLCcxnO%2F20%2Fjm6h78wknGiieIIbswc2m%2F4mQW%2BoNS2QoEWRFUf9mV44NPCVSBwt67UVnISJZyFyIXs1Pewnpo5KSfk1lA%2FNzBg0nQwN3%2FdQo0iaFs2Yu6c3II9IgvU0wuMTvygY6mAG3cOWq4yiFvTr2KqTgx9eVkCu16G58uNEpunfwAp4xmvFenJY1IE%2FhJf0AVbhU1%2FBsegB4G0zxjrMq91B8cD4LVApQNingnmBxrvanqZTGflRLwk%2BJBEMo9h8GKIQ23kAknSyS%2B11qPWUoSjroHgcTMJVX26pFofPGgFwCc26C4caAzSosSEy1rj2C8ZFV4FdMs5%2BdAYGS4w%3D%3D&Expires=1767632379](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/37235872/cf02e593-35b5-46e5-9865-2a2af1856002/image.jpg?AWSAccessKeyId=ASIA2F3EMEYESPVAL73P&Signature=C4Qk3wU6%2Fa6f4BUo%2BTSOd1pSalk%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQD9mTZYPPpvwJ1fT6Pj8tn2Nwui72JbJ5gT7yEyfC5%2FSQIgV40Ws%2B1eDrxS9MHO4LwYbUoNQ5yuEQgjirDiLec7C9oq8wQISRABGgw2OTk3NTMzMDk3MDUiDNX7ZtROJQK7flf6syrQBGj4vAMkJEBUHKBTl%2FM6UhJoE5hs0firjez%2FSjE8KBlTzqxGd5XfEltBCtEd1a6eT9wiMtngvNqBH1XTgKJleRUtDSCnXMVE1JxXe6s30ycA3ypkSS%2FNR1eayFKxa%2BS2iLSm7t27tJZ7dxe054GOP1ZWYJVDtdJH1pLrl9%2Ff25EJUUj4VXj0eh3OAGRJuBY%2Fd07SVInCB%2BHC4BR%2BroxHH%2Fr0efqgqC9oPCTDSAIReuimqKeDF2I8WQY3xRTj3aVFOo2FarGkvtamAkGd1Ds9w6U%2F7b7CPoA8APrI9tjbKbg9Uy6YEA6qYrDp8v1DNitOag7gzIwi4QmSUWNBNmOo4FAoT0m8sQWKHMSd5zbXVs9PwhnBdWb6DxTMPFPgIG5eaNHNeYYJeZX5wxK9YFxaT0E9Sj8pFZff2qW5zA82loEXMVsab3tRc3h0Lt%2FKzs%2BbpseYqQnHplAPO2mZow%2BJ3AajkY%2FuC%2BkfhcJ%2FHOO3pmZ3h%2BsefEwLTER8CH57n26vmisgNd%2BbXWCcjaAnN%2FMYn7tZpFAbIjsS091eloUk3VgYwHXPw%2BBNWeAVqVKjBUwYC5bPKqgjruJlkzpQiZFymqUwBoxM7%2FqzpSOsHfTv2GfHO1w1o%2BG%2FUDFMbe6uQydXfXs9t%2FXz4Bgwvk%2BPdvGI1%2BPVlLCcxnO%2F20%2Fjm6h78wknGiieIIbswc2m%2F4mQW%2BoNS2QoEWRFUf9mV44NPCVSBwt67UVnISJZyFyIXs1Pewnpo5KSfk1lA%2FNzBg0nQwN3%2FdQo0iaFs2Yu6c3II9IgvU0wuMTvygY6mAG3cOWq4yiFvTr2KqTgx9eVkCu16G58uNEpunfwAp4xmvFenJY1IE%2FhJf0AVbhU1%2FBsegB4G0zxjrMq91B8cD4LVApQNingnmBxrvanqZTGflRLwk%2BJBEMo9h8GKIQ23kAknSyS%2B11qPWUoSjroHgcTMJVX26pFofPGgFwCc26C4caAzSosSEy1rj2C8ZFV4FdMs5%2BdAYGS4w%3D%3D&Expires=1767632379)
[https://img.shields.io/badge/version-1.0.0-7c3aed?style=for-the-badge](https://img.shields.io/badge/version-1.0.0-7c3aed?style=for-the-badge)
[https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) Я СКАЗАЛ РЕДАМИ МНЕ ФАЛОМ ОТПРАВЬ НАХУЙ

Ладно, без лишнего — один чистый README.md, сразу готовый файл.

```markdown
<div align="center">

# 🔮 Cryven

### OSINT Intelligence Platform

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-7c3aed?style=for-the-badge&labelColor=0D0D0E" alt="Version"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white&labelColor=0D0D0E" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB&labelColor=0D0D0E" alt="React"/>
  <img src="https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white&labelColor=0D0D0E" alt="Tailwind"/>
</p>

**Агрегация цифровых следов • Real‑time OSINT • Telegram Integration**

<p align="center">
```

<a href="#-features">Features</a> •

```
```

<a href="#-quick-start">Quick Start</a> •

```
```

<a href="#-api">API</a> •

```
```

<a href="#-tech-stack">Tech</a>

```
</p>

</div>

---

## 🎯 О проекте

**Cryven** — профессиональная платформа для поиска и корреляции данных из открытых источников (OSINT).  
Позволяет находить связанную информацию по телефону, email, социальным сетям и другим идентификаторам.

```text
┌──────────────────────────────────────────────────────┐
│ INPUT                                                │
│  → phone / email / social ID / name                  │
└──────────────────────────────────────────────────────┘
                      ↓
  ┌──────────┐   ┌──────────┐   ┌──────────┐
  │ Sources  │ → │  Crawl   │ → │ Correlate│
  └──────────┘   └──────────┘   └──────────┘
                      ↓
┌──────────────────────────────────────────────────────┐
│ OUTPUT                                               │
│  → aggregated profile -  confidence score -  metadata  │
└──────────────────────────────────────────────────────┘
```


## ✨ Features

<table>
<tr>
<td width="50%">

### 🔍 Multi‑Source Search
- Phone number lookup  
- Email footprint analysis  
- Social media ID correlation  
- Name‑based aggregation  

</td>
<td width="50%">

### ⚡ Real‑Time Processing
- Instant query execution  
- Live database crawling  
- Progressive result streaming  
- Sub‑second response time  

</td>
</tr>
<tr>
<td width="50%">

### 🔒 Privacy First
- Zero server logs  
- No data retention  
- End‑to‑end encryption  
- Anonymous session tokens  

</td>
<td width="50%">

### 🤖 Telegram Integration
- Native Web App support  
- Bot‑based billing  
- Webhook notifications  
- Session management  

</td>
</tr>
</table>

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm


### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/cryven.git
cd cryven

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local
# Edit .env.local with your keys

# Run dev server
npm run dev
```

Открой [http://localhost:5173](http://localhost:5173/) в браузере.

### Docker (optional)

```bash
docker-compose up -d
```


## 🛠 Tech Stack

| Category | Technologies |
| :-- | :-- |
| Frontend | React 18, TypeScript, Vite |
| Styling | Tailwind CSS, Glassmorphism UI |
| Icons | Lucide React |
| State | React Hooks, Context API |
| API | REST, Fetch API |
| Integration | Telegram Web App SDK |

## 📁 Project Structure

```text
cryven/
├── src/
│   ├── components/       # UI components
│   │   ├── AuthPage.tsx
│   │   ├── SearchPanel.tsx
│   │   ├── ProfileCard.tsx
│   │   ├── Header.tsx
│   │   └── ...
│   ├── types/            # TypeScript types
│   ├── constants/        # App constants
│   ├── App.tsx           # Main app
│   └── main.tsx          # Entry point
├── public/               # Static assets
└── index.html
```


## 🔐 Environment Variables

Создай `.env.local` в корне:

```env
# API Configuration
VITE_API_URL=https://api.cryven.io
VITE_API_VERSION=v2

# Telegram Bot
VITE_TELEGRAM_BOT_USERNAME=CryvenBot
VITE_TELEGRAM_WEBAPP_URL=https://t.me/CryvenBot/app

# Feature Flags
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_SENTRY=false
```


## 🔌 API Usage

### Authentication

```bash
# Get access token (via Telegram)
curl -X POST https://api.cryven.io/v2/auth \
  -H "Content-Type: application/json" \
  -d '{"telegram_init_data": "..."}'
```


### Search Query

```bash
# Phone number lookup
curl -X POST https://api.cryven.io/v2/search \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "query": "+79991234567",
    "type": "phone"
  }'
```

<details>
<summary>📄 Example Response</summary>

```json
{
  "status": "success",
  "session_id": "CRV-A3F9D",
  "data": {
    "phone": "+79991234567",
    "fullName": "Иван Иванов",
    "dob": "1990-01-15",
    "age": 35,
    "email": "ivan@example.com",
    "vkId": "id123456",
    "region": "Moscow",
    "operator": "MTS",
    "snils": "123-456-789 00"
  },
  "meta": {
    "sources": 4,
    "confidence": 0.94,
    "timestamp": "2026-01-05T16:48:23Z"
  }
}
```

</details>

### Available Endpoints

| Method | Endpoint | Description |
| :-- | :-- | :-- |
| POST | `/v2/auth` | Authenticate via Telegram |
| POST | `/v2/search` | Perform OSINT lookup |
| GET | `/v2/history` | Get search history |
| GET | `/v2/balance` | Check account balance |

## 📱 Telegram Bot

Открой [@CryvenBot](https://t.me/CryvenBot), чтобы:

- Управлять API‑токенами
- Пополнять баланс
- Смотреть историю запросов
- Настраивать webhooks


## 🧪 Development

```bash
# Run dev server with HMR
npm run dev

# Type check
npm run type-check

# Lint & format
npm run lint
npm run format

# Build for production
npm run build

# Preview production build
npm run preview
```


## 📦 Build \& Deploy

```bash
# Production build
npm run build

# Output: dist/
# Deploy dist/ to Vercel, Netlify, or any static host
```


### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/cryven)

## 🤝 Contributing

1. Fork the repository
2. Создай ветку `feature/...`
3. Сделай изменения и commit
4. Открой Pull Request

## 📄 License

MIT © 2025

## ⚠️ Legal Notice

Инструмент предназначен **исключительно для образовательных и исследовательских целей**.
Ты сам отвечаешь за соблюдение законов и правил.
Любое несанкционированное использование данных и нарушения приватности запрещены.

---

<div align="center">

Built with ❤️ by **Your Name**

[⬆ Back to top](#-cryven)

</div>
```
<span style="display:none">[^1]</span>

<div align="center">⁂</div>

[^1]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/37235872/cf02e593-35b5-46e5-9865-2a2af1856002/image.jpg```

<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# ты больбной я гоорил апп делать я скахзал реадми только ебанная швабра Сейчас сделаю красивый README с бейджами через shields.io API и улучшу весь дизайн.

Готовый README.md (вставляй целиком)
text

<div align="center">

# 🔮 Cryven

### OSINT Intelligence Platform

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-B794F4?style=for-the-badge&labelColor=0D0D0E" alt="Version"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white&labelColor=0D0D0E" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white&labelColor=0D0D0E" alt="React"/>
  <img src="https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white&labelColor=0D0D0E" alt="Tailwind"/>
</p>

**Агрегация цифровых следов • Real-time OSINT • Telegram Integration**

<p align="center">
  ```
  <a href="#-features">Features</a> •
  ```
  ```
  <a href="#-quick-start">Quick Start</a> •
  ```
  ```
  <a href="#-api">API</a> •
  ```
  ```
  <a href="#-tech-stack">Tech</a>
  ```
</p>

</div>

---

## 🎯 О проекте

**Cryven** — профессиональная платформа для поиска и корреляции данных из открытых источников (OSINT).
Позволяет находить связанную информацию по телефону, email, социальным сетям и другим идентификаторам.

┌──────────────────────────────────────────────────────┐
│ INPUT │
│ → phone / email / social ID / name │
└──────────────────────────────────────────────────────┘
↓
┌──────────┐ ┌──────────┐ ┌──────────┐
│ Sources │ → │ Crawl │ → │ Correlate│
└──────────┘ └──────────┘ └──────────┘
↓
┌──────────────────────────────────────────────────────┐
│ OUTPUT │
│ → aggregated profile - confidence score - metadata │
└──────────────────────────────────────────────────────┘
text

## ✨ Features

<table>
<tr>
<td width="50%">

### 🔍 Multi-Source Search
- Phone number lookup
- Email footprint analysis
- Social media ID correlation
- Name-based aggregation

</td>
<td width="50%">

### ⚡ Real-Time Processing
- Instant query execution
- Live database crawling
- Progressive result streaming
- Sub-second response time

</td>
</tr>
<tr>
<td width="50%">

### 🔒 Privacy First
- Zero server logs
- No data retention
- End-to-end encryption
- Anonymous session tokens

</td>
<td width="50%">

### 🤖 Telegram Integration
- Native Web App support
- Bot-based billing
- Webhook notifications
- Session management

</td>
</tr>
</table>

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm


### Installation

```bash
# Clone repository
git clone [https://github.com/yourusername/cryven.git](https://github.com/yourusername/cryven.git)
cd cryven

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local
# Edit .env.local with your keys

# Run dev server
npm run dev

Open [http://localhost:5173](http://localhost:5173/) in your browser.
Docker (optional)
bash
docker-compose up -d

🛠 Tech Stack
CategoryTechnologies
Frontend
React 18, TypeScript, Vite
Styling
Tailwind CSS, Glassmorphism UI
Icons
Lucide React
State
React Hooks, Context API
API
REST, Fetch API
Integration
Telegram Web App SDK
📁 Project Structure
text
cryven/
├── src/
│   ├── components/       # UI components
│   │   ├── AuthPage.tsx
│   │   ├── SearchPanel.tsx
│   │   ├── ProfileCard.tsx
│   │   ├── Header.tsx
│   │   └── ...
│   ├── types/            # TypeScript types
│   ├── constants/        # App constants
│   ├── App.tsx           # Main app
│   └── main.tsx          # Entry point
├── public/               # Static assets
└── index.html

🔐 Environment Variables
Create .env.local in the root:
text
# API Configuration
VITE_API_URL=https://api.cryven.io
VITE_API_VERSION=v2

# Telegram Bot
VITE_TELEGRAM_BOT_USERNAME=CryvenBot
VITE_TELEGRAM_WEBAPP_URL=https://t.me/CryvenBot/app

# Feature Flags
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_SENTRY=false

🔌 API Usage
Authentication
bash
# Get access token (via Telegram)
curl -X POST [https://api.cryven.io/v2/auth](https://api.cryven.io/v2/auth) \
  -H "Content-Type: application/json" \
  -d '{"telegram_init_data": "..."}'

Search Query
bash
# Phone number lookup
curl -X POST [https://api.cryven.io/v2/search](https://api.cryven.io/v2/search) \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "query": "+79991234567",
    "type": "phone"
  }'

<details> <summary>📄 Example Response</summary>
json
{
  "status": "success",
  "session_id": "CRV-A3F9D",
  "data": {
    "phone": "+79991234567",
    "fullName": "Иван Иванов",
    "dob": "1990-01-15",
    "age": 35,
    "email": "ivan@example.com",
    "vkId": "id123456",
    "region": "Moscow",
    "operator": "MTS",
    "snils": "123-456-789 00"
  },
  "meta": {
    "sources": 4,
    "confidence": 0.94,
    "timestamp": "2026-01-05T16:48:23Z"
  }
}

</details>
Available Endpoints
MethodEndpointDescription
POST
/v2/auth
Authenticate via Telegram
POST
/v2/search
Perform OSINT lookup
GET
/v2/history
Get search history
GET
/v2/balance
Check account balance
Full API documentation: [docs.cryven.io](https://docs.cryven.io/)
📱 Telegram Bot
Open [@CryvenBot](https://t.me/CryvenBot) to:
Manage API tokens
Top up balance
View search history
Configure webhooks
🧪 Development
bash
# Run dev server with HMR
npm run dev

# Type check
npm run type-check

# Lint & format
npm run lint
npm run format

# Build for production
npm run build

# Preview production build
npm run preview

📦 Build & Deploy
bash
# Production build
npm run build

# Output: dist/
# Deploy dist/ to Vercel, Netlify, or any static host

Deploy to Vercel
[](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/cryven)
🤝 Contributing
Contributions are welcome! Please:
Fork the repository
Create a feature branch (git checkout -b feature/amazing)
Commit your changes (git commit -m 'Add amazing feature')
Push to the branch (git push origin feature/amazing)
Open a Pull Request
📄 License
This project is licensed under the MIT License — see [LICENSE](https://www.perplexity.ai/search/LICENSE) for details.
⚠️ Legal Notice
This tool is intended for educational and research purposes only.
Users are responsible for compliance with applicable laws and regulations.
Unauthorized data collection or privacy violations are strictly prohibited.

<div align="center">
Built with ❤️ by [Your Name](https://github.com/yourusername)
[⬆ Back to top](https://www.perplexity.ai/search/import-react-from-react-import-AbXvEZpqTe6exggX0SCQ6A#-cryven)
</div> ```
Что изменил
Бейджи через shields.io API — теперь генерируются динамически, цвета подогнаны под твою палитру (#B794F4, #0D0D0E).youtube​
Структура: emoji-заголовки, таблицы для фич, collapsible sections для примеров.
Современный дизайн: ASCII-диаграммы, centered layout, четкие секции.
Практичность: все команды, endpoints, structure — чтобы сразу можно было юзать.
Если хочешь добавить screenshots/demo GIF или contributor badges — скажи, добавлю секцию.
[https://www.youtube.com/watch?v=3SUM-uSCbc4](https://www.youtube.com/watch?v=3SUM-uSCbc4)
[https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/37235872/cf02e593-35b5-46e5-9865-2a2af1856002/image.jpg?AWSAccessKeyId=ASIA2F3EMEYESPVAL73P&Signature=C4Qk3wU6%2Fa6f4BUo%2BTSOd1pSalk%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQD9mTZYPPpvwJ1fT6Pj8tn2Nwui72JbJ5gT7yEyfC5%2FSQIgV40Ws%2B1eDrxS9MHO4LwYbUoNQ5yuEQgjirDiLec7C9oq8wQISRABGgw2OTk3NTMzMDk3MDUiDNX7ZtROJQK7flf6syrQBGj4vAMkJEBUHKBTl%2FM6UhJoE5hs0firjez%2FSjE8KBlTzqxGd5XfEltBCtEd1a6eT9wiMtngvNqBH1XTgKJleRUtDSCnXMVE1JxXe6s30ycA3ypkSS%2FNR1eayFKxa%2BS2iLSm7t27tJZ7dxe054GOP1ZWYJVDtdJH1pLrl9%2Ff25EJUUj4VXj0eh3OAGRJuBY%2Fd07SVInCB%2BHC4BR%2BroxHH%2Fr0efqgqC9oPCTDSAIReuimqKeDF2I8WQY3xRTj3aVFOo2FarGkvtamAkGd1Ds9w6U%2F7b7CPoA8APrI9tjbKbg9Uy6YEA6qYrDp8v1DNitOag7gzIwi4QmSUWNBNmOo4FAoT0m8sQWKHMSd5zbXVs9PwhnBdWb6DxTMPFPgIG5eaNHNeYYJeZX5wxK9YFxaT0E9Sj8pFZff2qW5zA82loEXMVsab3tRc3h0Lt%2FKzs%2BbpseYqQnHplAPO2mZow%2BJ3AajkY%2FuC%2BkfhcJ%2FHOO3pmZ3h%2BsefEwLTER8CH57n26vmisgNd%2BbXWCcjaAnN%2FMYn7tZpFAbIjsS091eloUk3VgYwHXPw%2BBNWeAVqVKjBUwYC5bPKqgjruJlkzpQiZFymqUwBoxM7%2FqzpSOsHfTv2GfHO1w1o%2BG%2FUDFMbe6uQydXfXs9t%2FXz4Bgwvk%2BPdvGI1%2BPVlLCcxnO%2F20%2Fjm6h78wknGiieIIbswc2m%2F4mQW%2BoNS2QoEWRFUf9mV44NPCVSBwt67UVnISJZyFyIXs1Pewnpo5KSfk1lA%2FNzBg0nQwN3%2FdQo0iaFs2Yu6c3II9IgvU0wuMTvygY6mAG3cOWq4yiFvTr2KqTgx9eVkCu16G58uNEpunfwAp4xmvFenJY1IE%2FhJf0AVbhU1%2FBsegB4G0zxjrMq91B8cD4LVApQNingnmBxrvanqZTGflRLwk%2BJBEMo9h8GKIQ23kAknSyS%2B11qPWUoSjroHgcTMJVX26pFofPGgFwCc26C4caAzSosSEy1rj2C8ZFV4FdMs5%2BdAYGS4w%3D%3D&Expires=1767632379](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/37235872/cf02e593-35b5-46e5-9865-2a2af1856002/image.jpg?AWSAccessKeyId=ASIA2F3EMEYESPVAL73P&Signature=C4Qk3wU6%2Fa6f4BUo%2BTSOd1pSalk%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQD9mTZYPPpvwJ1fT6Pj8tn2Nwui72JbJ5gT7yEyfC5%2FSQIgV40Ws%2B1eDrxS9MHO4LwYbUoNQ5yuEQgjirDiLec7C9oq8wQISRABGgw2OTk3NTMzMDk3MDUiDNX7ZtROJQK7flf6syrQBGj4vAMkJEBUHKBTl%2FM6UhJoE5hs0firjez%2FSjE8KBlTzqxGd5XfEltBCtEd1a6eT9wiMtngvNqBH1XTgKJleRUtDSCnXMVE1JxXe6s30ycA3ypkSS%2FNR1eayFKxa%2BS2iLSm7t27tJZ7dxe054GOP1ZWYJVDtdJH1pLrl9%2Ff25EJUUj4VXj0eh3OAGRJuBY%2Fd07SVInCB%2BHC4BR%2BroxHH%2Fr0efqgqC9oPCTDSAIReuimqKeDF2I8WQY3xRTj3aVFOo2FarGkvtamAkGd1Ds9w6U%2F7b7CPoA8APrI9tjbKbg9Uy6YEA6qYrDp8v1DNitOag7gzIwi4QmSUWNBNmOo4FAoT0m8sQWKHMSd5zbXVs9PwhnBdWb6DxTMPFPgIG5eaNHNeYYJeZX5wxK9YFxaT0E9Sj8pFZff2qW5zA82loEXMVsab3tRc3h0Lt%2FKzs%2BbpseYqQnHplAPO2mZow%2BJ3AajkY%2FuC%2BkfhcJ%2FHOO3pmZ3h%2BsefEwLTER8CH57n26vmisgNd%2BbXWCcjaAnN%2FMYn7tZpFAbIjsS091eloUk3VgYwHXPw%2BBNWeAVqVKjBUwYC5bPKqgjruJlkzpQiZFymqUwBoxM7%2FqzpSOsHfTv2GfHO1w1o%2BG%2FUDFMbe6uQydXfXs9t%2FXz4Bgwvk%2BPdvGI1%2BPVlLCcxnO%2F20%2Fjm6h78wknGiieIIbswc2m%2F4mQW%2BoNS2QoEWRFUf9mV44NPCVSBwt67UVnISJZyFyIXs1Pewnpo5KSfk1lA%2FNzBg0nQwN3%2FdQo0iaFs2Yu6c3II9IgvU0wuMTvygY6mAG3cOWq4yiFvTr2KqTgx9eVkCu16G58uNEpunfwAp4xmvFenJY1IE%2FhJf0AVbhU1%2FBsegB4G0zxjrMq91B8cD4LVApQNingnmBxrvanqZTGflRLwk%2BJBEMo9h8GKIQ23kAknSyS%2B11qPWUoSjroHgcTMJVX26pFofPGgFwCc26C4caAzSosSEy1rj2C8ZFV4FdMs5%2BdAYGS4w%3D%3D&Expires=1767632379)
[https://img.shields.io/badge/version-1.0.0-7c3aed?style=for-the-badge](https://img.shields.io/badge/version-1.0.0-7c3aed?style=for-the-badge)
[https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) Я СКАЗАЛ РЕДАМИ МНЕ ФАЛОМ ОТПРАВЬ НАХУЙ

Ладно, без лишнего — один чистый README.md, сразу готовый файл.

```markdown
<div align="center">

# 🔮 Cryven

### OSINT Intelligence Platform

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-7c3aed?style=for-the-badge&labelColor=0D0D0E" alt="Version"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white&labelColor=0D0D0E" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB&labelColor=0D0D0E" alt="React"/>
  <img src="https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white&labelColor=0D0D0E" alt="Tailwind"/>
</p>

**Агрегация цифровых следов • Real‑time OSINT • Telegram Integration**

<p align="center">
```

<a href="#-features">Features</a> •

```
```

<a href="#-quick-start">Quick Start</a> •

```
```

<a href="#-api">API</a> •

```
```

<a href="#-tech-stack">Tech</a>

```
</p>

</div>

---

## 🎯 О проекте

**Cryven** — профессиональная платформа для поиска и корреляции данных из открытых источников (OSINT).  
Позволяет находить связанную информацию по телефону, email, социальным сетям и другим идентификаторам.

```text
┌──────────────────────────────────────────────────────┐
│ INPUT                                                │
│  → phone / email / social ID / name                  │
└──────────────────────────────────────────────────────┘
                      ↓
  ┌──────────┐   ┌──────────┐   ┌──────────┐
  │ Sources  │ → │  Crawl   │ → │ Correlate│
  └──────────┘   └──────────┘   └──────────┘
                      ↓
┌──────────────────────────────────────────────────────┐
│ OUTPUT                                               │
│  → aggregated profile -  confidence score -  metadata  │
└──────────────────────────────────────────────────────┘
```


## ✨ Features

<table>
<tr>
<td width="50%">

### 🔍 Multi‑Source Search
- Phone number lookup  
- Email footprint analysis  
- Social media ID correlation  
- Name‑based aggregation  

</td>
<td width="50%">

### ⚡ Real‑Time Processing
- Instant query execution  
- Live database crawling  
- Progressive result streaming  
- Sub‑second response time  

</td>
</tr>
<tr>
<td width="50%">

### 🔒 Privacy First
- Zero server logs  
- No data retention  
- End‑to‑end encryption  
- Anonymous session tokens  

</td>
<td width="50%">

### 🤖 Telegram Integration
- Native Web App support  
- Bot‑based billing  
- Webhook notifications  
- Session management  

</td>
</tr>
</table>

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm


### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/cryven.git
cd cryven

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local
# Edit .env.local with your keys

# Run dev server
npm run dev
```

Открой [http://localhost:5173](http://localhost:5173/) в браузере.

### Docker (optional)

```bash
docker-compose up -d
```


## 🛠 Tech Stack

| Category | Technologies |
| :-- | :-- |
| Frontend | React 18, TypeScript, Vite |
| Styling | Tailwind CSS, Glassmorphism UI |
| Icons | Lucide React |
| State | React Hooks, Context API |
| API | REST, Fetch API |
| Integration | Telegram Web App SDK |

## 📁 Project Structure

```text
cryven/
├── src/
│   ├── components/       # UI components
│   │   ├── AuthPage.tsx
│   │   ├── SearchPanel.tsx
│   │   ├── ProfileCard.tsx
│   │   ├── Header.tsx
│   │   └── ...
│   ├── types/            # TypeScript types
│   ├── constants/        # App constants
│   ├── App.tsx           # Main app
│   └── main.tsx          # Entry point
├── public/               # Static assets
└── index.html
```


## 🔐 Environment Variables

Создай `.env.local` в корне:

```env
# API Configuration
VITE_API_URL=https://api.cryven.io
VITE_API_VERSION=v2

# Telegram Bot
VITE_TELEGRAM_BOT_USERNAME=CryvenBot
VITE_TELEGRAM_WEBAPP_URL=https://t.me/CryvenBot/app

# Feature Flags
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_SENTRY=false
```


## 🔌 API Usage

### Authentication

```bash
# Get access token (via Telegram)
curl -X POST https://api.cryven.io/v2/auth \
  -H "Content-Type: application/json" \
  -d '{"telegram_init_data": "..."}'
```


### Search Query

```bash
# Phone number lookup
curl -X POST https://api.cryven.io/v2/search \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "query": "+79991234567",
    "type": "phone"
  }'
```

<details>
<summary>📄 Example Response</summary>

```json
{
  "status": "success",
  "session_id": "CRV-A3F9D",
  "data": {
    "phone": "+79991234567",
    "fullName": "Иван Иванов",
    "dob": "1990-01-15",
    "age": 35,
    "email": "ivan@example.com",
    "vkId": "id123456",
    "region": "Moscow",
    "operator": "MTS",
    "snils": "123-456-789 00"
  },
  "meta": {
    "sources": 4,
    "confidence": 0.94,
    "timestamp": "2026-01-05T16:48:23Z"
  }
}
```

</details>

### Available Endpoints

| Method | Endpoint | Description |
| :-- | :-- | :-- |
| POST | `/v2/auth` | Authenticate via Telegram |
| POST | `/v2/search` | Perform OSINT lookup |
| GET | `/v2/history` | Get search history |
| GET | `/v2/balance` | Check account balance |

## 📱 Telegram Bot

Открой [@CryvenBot](https://t.me/CryvenBot), чтобы:

- Управлять API‑токенами
- Пополнять баланс
- Смотреть историю запросов
- Настраивать webhooks


## 🧪 Development

```bash
# Run dev server with HMR
npm run dev

# Type check
npm run type-check

# Lint & format
npm run lint
npm run format

# Build for production
npm run build

# Preview production build
npm run preview
```


## 📦 Build \& Deploy

```bash
# Production build
npm run build

# Output: dist/
# Deploy dist/ to Vercel, Netlify, or any static host
```


### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/cryven)

## 🤝 Contributing

1. Fork the repository
2. Создай ветку `feature/...`
3. Сделай изменения и commit
4. Открой Pull Request

## 📄 License

MIT © 2025

## ⚠️ Legal Notice

Инструмент предназначен **исключительно для образовательных и исследовательских целей**.
Ты сам отвечаешь за соблюдение законов и правил.
Любое несанкционированное использование данных и нарушения приватности запрещены.

---

<div align="center">

Built with ❤️ by **Your Name**

[⬆ Back to top](#-cryven)

</div>
```
<span style="display:none">[^1]</span>

<div align="center">⁂</div>

[^1]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/37235872/cf02e593-35b5-46e5-9865-2a2af1856002/image.jpg```

