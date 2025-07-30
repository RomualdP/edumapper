# Phase 3: Tailwind CSS Setup

## Tasks to complete

### 3.1 Install Tailwind CSS
- [ ] Install Nuxt Tailwind module: `@nuxtjs/tailwindcss`
- [ ] Add module to `nuxt.config.ts`
- [ ] Verify installation completed successfully

### 3.2 Configure Tailwind v4.1
- [ ] Create `tailwind.css` file in `assets/`
- [ ] Configure custom CSS variables
- [ ] Define project color palette
- [ ] Configure custom breakpoints

### 3.3 Advanced configuration
- [ ] Configure custom utilities
- [ ] Define base components
- [ ] Configure custom animations
- [ ] Optimize for production

## Commands to execute

```bash
# Install Tailwind CSS
npm install @nuxtjs/tailwindcss

# Verify installation
npm list @nuxtjs/tailwindcss
```

## Nuxt Configuration

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true
  }
})
```

## Tailwind CSS File

```css
/* assets/css/tailwind.css */
@import "tailwindcss";

/* Custom CSS variables */
:root {
  --color-primary: #3b82f6;
  --color-secondary: #64748b;
  --color-accent: #f59e0b;
}

/* Custom utilities */
@utility btn-primary {
  background-color: var(--color-primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
}
```

## Notes
- Tailwind v4.1 uses CSS-native approach
- CSS variables are preferred over hardcoded values
- Configuration optimized for Nuxt 3 