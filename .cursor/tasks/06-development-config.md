# Phase 6: Development Configuration

## Tasks to complete

### 6.1 Configure environment variables
- [ ] Create `.env.example` file
- [ ] Create `.env.local` file (ignored by Git)
- [ ] Configure base variables:
  - [ ] `NUXT_PUBLIC_API_BASE_URL`
  - [ ] `NUXT_PUBLIC_APP_NAME`
  - [ ] `NUXT_PUBLIC_APP_VERSION`

### 6.2 Setup Git and .gitignore
- [ ] Initialize Git if not already done
- [ ] Configure `.gitignore` for Nuxt
- [ ] First commit with base structure
- [ ] Configure Git hooks (optional)

### 6.3 VS Code configuration
- [ ] Create `.vscode/` folder
- [ ] Configure `settings.json`
- [ ] Configure `extensions.json`

## Environment Variables

### .env.example
```bash
# Application
NUXT_PUBLIC_APP_NAME=EduMapper
NUXT_PUBLIC_APP_VERSION=1.0.0

# API
NUXT_PUBLIC_API_BASE_URL=http://localhost:3001/api

# Development
NODE_ENV=development
```

## Commands to execute

```bash
# Initialize Git
git init

# Add files
git add .

# First commit
git commit -m "Initial commit: Setup Nuxt 3 project structure"

# Verify environment variables
npm run dev
```

## Notes
- Environment variables start with `NUXT_PUBLIC_` to be accessible client-side
- VS Code configuration optimized for Vue 3 + TypeScript + Tailwind
- Complete .gitignore to avoid committing sensitive files 