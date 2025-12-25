# Ducati Case

A modern Next.js application integrated with Sanity CMS for managing and displaying property listings. This project demonstrates a full-stack implementation with a headless CMS, TypeScript, and modern React patterns.

## 🎯 Purpose

This application serves as a property management system with:

- Dynamic property listings fetched from Sanity CMS
- Integrated Sanity Studio for content management
- Type-safe content queries and data handling
- Modern UI with dark mode support
- State management with Zustand
- Analytics tracking capabilities

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router)
- **CMS:** [Sanity.io](https://www.sanity.io)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + SCSS Modules
- **State Management:** Zustand
- **Package Manager:** pnpm
- **Code Quality:** Biome (linting & formatting)

## 📦 Project Structure

```
ducati-case/
├── app/              # Next.js App Router pages
│   ├── studio/       # Sanity Studio routes
│   └── page.tsx      # Home page with properties list
├── components/       # React components
├── sanity/          # Sanity CMS configuration
│   ├── schemaTypes/ # Content schemas (property, article)
│   └── lib/         # Sanity client & queries
├── hooks/           # Custom React hooks
├── store/           # Zustand state management
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- pnpm (recommended)

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

Access the Sanity Studio at [http://localhost:3000/studio](http://localhost:3000/studio) to manage content.

### Build

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## 📝 Available Commands

| Command       | Description              |
| ------------- | ------------------------ |
| `pnpm dev`    | Start development server |
| `pnpm build`  | Build for production     |
| `pnpm start`  | Start production server  |
| `pnpm lint`   | Check code with Biome    |
| `pnpm format` | Format code with Biome   |

## 🎨 Key Features

- **Sanity Studio Integration:** Built-in CMS accessible at `/studio`
- **Content Schemas:** Property and Article content types
- **Type Safety:** Full TypeScript support with Sanity typegen
- **Responsive Design:** Mobile-first approach with Tailwind CSS
- **Dark Mode:** Built-in dark mode support
- **Analytics Ready:** Integrated analytics utilities

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🚢 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/ducati-case)

Make sure to configure your Sanity environment variables in your deployment platform.
