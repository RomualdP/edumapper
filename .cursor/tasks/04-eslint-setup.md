# Phase 4: ESLint Setup

## Tasks to complete

### 4.1 Install ESLint and configurations
- [ ] Install `@nuxtjs/eslint-config`
- [ ] Install `@typescript-eslint/eslint-plugin`
- [ ] Install `@typescript-eslint/parser`
- [ ] Install `eslint-plugin-vue`

### 4.2 Configure ESLint
- [ ] Create `.eslintrc.js` file
- [ ] Configure TypeScript rules
- [ ] Configure Vue 3 rules
- [ ] Configure Nuxt rules

### 4.3 Configure linting scripts
- [ ] Add scripts to `package.json`
- [ ] Configure automatic linting
- [ ] Configure automatic formatting

## Commands to execute

```bash
# Install ESLint and plugins
npm install --save-dev @nuxtjs/eslint-config @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-vue

# Verify installation
npm list @nuxtjs/eslint-config
```

## ESLint Configuration

```javascript
// .eslintrc.js
module.exports = {
  root: true,
  extends: [
    '@nuxtjs/eslint-config',
    '@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'warn'
  }
}
```

## Package.json Scripts

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "type-check": "nuxt typecheck"
  }
}
```

## VS Code Configuration (optional)

```json
// .vscode/settings.json
{
  "eslint.validate": [
    "javascript",
    "typescript",
    "vue"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Notes
- Configuration optimized for Nuxt 3 + TypeScript + Vue 3
- Strict rules to maintain code quality
- Integration with development standards 