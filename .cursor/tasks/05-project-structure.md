# Phase 5: Project Structure

## Tasks to complete

### 5.1 Create folder structure
- [ ] Verify/Create `pages/` for routing
- [ ] Verify/Create `components/` for components
- [ ] Verify/Create `composables/` for reusable logic
- [ ] Verify/Create `layouts/` for layouts
- [ ] Verify/Create `server/` for API
- [ ] Verify/Create `middleware/` for middlewares
- [ ] Verify/Create `plugins/` for plugins
- [ ] Verify/Create `utils/` for utilities
- [ ] Verify/Create `types/` for TypeScript types

### 5.2 Configure base files
- [ ] Configure main `app.vue`
- [ ] Create default layout in `layouts/default.vue`
- [ ] Create homepage in `pages/index.vue`
- [ ] Configure base metadata

### 5.3 Component organization
- [ ] Create structure for UI components
- [ ] Organize components by feature
- [ ] Configure component auto-import

## Recommended Structure

```
├── pages/                 # File-based routing
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   └── features/         # Feature-specific components
├── composables/           # Reusable logic
├── layouts/               # Page layouts
├── server/                # API and server logic
├── middleware/            # Client middleware
├── plugins/               # Nuxt plugins
├── utils/                 # Utility functions
├── types/                 # TypeScript types
├── assets/                # Static resources
└── public/                # Public files
```

## Base files to create

### app.vue
```vue
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// Global application configuration
</script>
```

### layouts/default.vue
```vue
<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow">
      <!-- Navigation -->
    </header>
    
    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>
    
    <footer class="bg-gray-800 text-white">
      <!-- Footer -->
    </footer>
  </div>
</template>
```

### pages/index.vue
```vue
<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold text-gray-900">
      Welcome to EduMapper
    </h1>
    <p class="mt-4 text-gray-600">
      Your educational mapping application
    </p>
  </div>
</template>

<script setup lang="ts">
// Homepage logic
</script>
```

## Notes
- Structure based on Nuxt 3 conventions
- Clear and scalable organization
- Auto-import configured for easier development 