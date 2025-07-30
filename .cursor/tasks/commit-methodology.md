# Commit Methodology

## Automatic Commit Strategy

### When to propose commits:
1. **After Phase 1 completion** - Initial project setup
2. **After each task completion** - Component, page, or feature
3. **After bug fixes** - When errors are resolved
4. **After refactoring** - When code is improved

### Commit message format:
```bash
# Format: type: description
# Examples:
feat: add UserProfile component
fix: resolve TypeScript error in Navigation
refactor: improve Button component styling
docs: update README with new features
```

### Commit message structure:
```bash
type: brief description

- Detailed bullet point 1
- Detailed bullet point 2
- Detailed bullet point 3
- Ensure no ESLint or TypeScript errors
```

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
feat: add [ComponentName] component

- Create [ComponentName].vue with TypeScript types
- Implement responsive design with Tailwind CSS
- Ensure no ESLint or TypeScript errors
- Follow Vue 3 Composition API best practices
```

### Phase 10+ - Component Development (Complex)
```bash
feat: add [ComponentName] component with full functionality

- Create [ComponentName].vue with TypeScript types
- Implement responsive design with Tailwind CSS
- Add complex interactions and business logic
- Add unit tests for critical functionality
- Ensure no ESLint or TypeScript errors
```

### Bug Fixes
```bash
fix: resolve [IssueDescription]

- Fix [specific issue]
- Update [affected files]
- Ensure all tests pass (if applicable)
- Verify no linting errors
- Test component functionality
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