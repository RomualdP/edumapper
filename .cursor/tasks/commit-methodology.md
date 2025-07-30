# Commit Methodology

## Automatic Commit Strategy

### When to propose commits:
1. **After Phase 1 completion** - Initial project setup
2. **After each task completion** - Component, page, or feature
3. **After bug fixes** - When errors are resolved
4. **After refactoring** - When code is improved

### Commit message format:
```bash
# Format: <type>[optional scope]: <description>
# Examples:
feat: add UserProfile component
feat(auth): add login functionality
fix: resolve TypeScript error in Navigation
fix(ui): correct button alignment
refactor: improve Button component styling
docs: update README with new features
```

### Commit message structure:
```bash
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Conventional Commits Types:
- **feat**: A new feature for the user
- **fix**: A bug fix for the user
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies
- **ci**: Changes to CI configuration files and scripts
- **chore**: Other changes that don't modify src or test files
- **revert**: Reverts a previous commit

### Scope Examples:
- **feat(auth)**: Authentication related features
- **fix(ui)**: User interface fixes
- **refactor(api)**: API related refactoring
- **docs(readme)**: README documentation updates

## Task Completion Criteria

### For each task:
1. **No ESLint errors** - `npm run lint` passes
2. **No TypeScript errors** - `npm run type-check` passes
3. **Component works as expected** - Visual and functional requirements met
4. **Tests pass** - Unit tests pass (only if tests are necessary)
5. **Ready for commit** - All changes documented and ready

### If errors persist:
- [ ] Analyze error details
- [ ] Attempt to fix common issues
- [ ] If stuck, ask for user validation
- [ ] Document the issue for later resolution

## Testing Strategy

### When to add unit tests:
- ✅ **Complex business logic** - Calculations, validations, algorithms
- ✅ **User interactions** - Form submissions, state changes, events
- ✅ **API integrations** - Data fetching, error handling, responses
- ✅ **Component communication** - Props, events, emits, parent-child interactions
- ✅ **Critical user flows** - Login, checkout, data submission

### When NOT to add unit tests:
- ❌ **Simple static components** - Basic display elements, text, images
- ❌ **Pure styling components** - CSS-only components, layout wrappers
- ❌ **Simple wrappers** - Components that just pass props through
- ❌ **Third-party component wrappers** - Unless custom logic is added
- ❌ **Basic UI elements** - Simple buttons, icons, labels (unless complex interactions)

### Test priority levels:
1. **High priority** - Business logic, user flows, API calls
2. **Medium priority** - Complex interactions, form validations
3. **Low priority** - Simple display components, basic styling

## Commit Templates by Phase

### Phase 1 - Project Initialization
```bash
feat: initialize Nuxt 3 project setup

- Create Nuxt 3 project with TypeScript
- Configure Tailwind CSS v4.1
- Setup ESLint with Vue 3 and TypeScript rules
- Create basic project structure
- Ensure all configurations are working
```

### Phase 10+ - Component Development (Simple)
```bash
feat(ui): add [ComponentName] component

- Create [ComponentName].vue with TypeScript types
- Implement responsive design with Tailwind CSS
- Ensure no ESLint or TypeScript errors
- Follow Vue 3 Composition API best practices
```

### Phase 10+ - Component Development (Complex)
```bash
feat(ui): add [ComponentName] component with full functionality

- Create [ComponentName].vue with TypeScript types
- Implement responsive design with Tailwind CSS
- Add complex interactions and business logic
- Add unit tests for critical functionality
- Ensure no ESLint or TypeScript errors
```

### Bug Fixes
```bash
fix(ui): resolve [IssueDescription]

- Fix [specific issue]
- Update [affected files]
- Ensure all tests pass (if applicable)
- Verify no linting errors
- Test component functionality
```

### Performance Improvements
```bash
perf(ui): optimize [ComponentName] rendering

- Implement virtual scrolling for large lists
- Add lazy loading for images
- Optimize component re-renders
- Reduce bundle size impact
```

### Code Refactoring
```bash
refactor(ui): improve [ComponentName] architecture

- Extract reusable composables
- Simplify component logic
- Improve type safety
- Enhance code maintainability
```

### Testing
```bash
test(ui): add unit tests for [ComponentName]

- Add comprehensive test coverage
- Mock external dependencies
- Test user interactions
- Verify component behavior
```

### Documentation
```bash
docs: update component documentation

- Add JSDoc comments
- Update README with new features
- Document component props and events
- Include usage examples
```

## Error Handling Process

### When errors occur:
1. **Analyze the error** - Understand what's wrong
2. **Attempt common fixes** - Try standard solutions
3. **Check documentation** - Look up specific issues
4. **Ask for guidance** - If still stuck, ask user
5. **Document the issue** - For future reference

### Common error types:
- **ESLint errors** - Code style and quality issues
- **TypeScript errors** - Type checking issues
- **Build errors** - Compilation problems
- **Runtime errors** - Functionality issues

## Quality Gates

### Before proposing any commit:
- [ ] All ESLint errors resolved
- [ ] All TypeScript errors resolved
- [ ] All tests pass (if tests exist)
- [ ] Component functionality verified
- [ ] Code follows project conventions
- [ ] Documentation updated if needed

### If quality gates fail:
- [ ] Fix the issues
- [ ] Re-run quality checks
- [ ] Only propose commit when all gates pass
- [ ] Ask for user validation if stuck

## Notes
- Always prioritize code quality over speed
- Each commit should represent a complete, working feature
- Never commit broken or incomplete code
- Always test before proposing commits
- Add tests only when they provide real value
- Focus on functionality and user experience
- Document any technical decisions made 