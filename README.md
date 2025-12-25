# Ducati Case

Portal for managing and publishing real estate listings.

## 📦 Project Structure

```
ducati-case/
├── app/                    # Next.js App Router pages
│   ├── studio/             # Sanity Studio
│   ├── immobili/[id]/      # Property detail pages
│   └── page.tsx            # Homepage
├── components/             # React components
├── sanity/                # Sanity CMS configuration
│   ├── schemaTypes/       # Content schemas
│   └── lib/               # Client and GROQ queries
├── hooks/                 # Custom React hooks
├── store/                 # Zustand state management
└── utils/                 # Utility functions
```

## 🛠️ Tech Stack

- **Next.js 16** (App Router) with TypeScript
- **Sanity.io** for CMS and content management
- **Tailwind CSS v4** for styling
- **shadcn/ui** for UI components
- **Leaflet** for interactive maps
- **Zustand** for state management
- **Biome** for linting and formatting

## 📝 Commands

| Command        | Description                           |
| -------------- | ------------------------------------- |
| `pnpm dev`     | Start development server              |
| `pnpm build`   | Build for production                  |
| `pnpm start`   | Start production server               |
| `pnpm lint`    | Check code with Biome                 |
| `pnpm format`  | Format code with Biome                |
| `pnpm typegen` | Generate TypeScript types from Sanity |
