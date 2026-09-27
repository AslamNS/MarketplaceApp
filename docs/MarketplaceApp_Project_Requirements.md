# MarketplaceApp — React Native + TypeScript Learning Project

## 1. Project Purpose

Build a production-style React Native marketplace application using TypeScript and DummyJSON as the initial backend.

The goal is to strengthen practical React Native skills and prepare for React Native interviews through hands-on implementation.

### Learning Rules

- Write the application code manually.
- Do not use AI coding agents/models to generate the implementation.
- Use AI for explanations, debugging guidance, code review, and conceptual help when needed.
- Complete each module before moving to the next.
- Understand why each library and architectural decision is being used.
- Use Git throughout the project.
- Prefer simple solutions first; optimize when there is a real requirement.

---

# 2. Technology Stack

## Core

- React Native
- TypeScript
- JavaScript / ES6+
- React

## Backend / API

- DummyJSON REST API

Documentation: https://dummyjson.com/docs

## State Management

- Zustand
- Redux Toolkit
- React Context where appropriate

## Server State

- TanStack Query

## Local Storage

- AsyncStorage
- SQLite / WatermelonDB concepts and optional implementation

## Navigation

- React Navigation

## Testing

- React Native Testing Library
- Jest

## Development Tools

- Git / GitHub
- VS Code
- Xcode
- Android Studio
- React DevTools

---

# 3. Application Requirements

## 3.1 Authentication

The application should provide:

- Login screen
- Logout
- Authentication state
- Protected application screens
- API authentication/token handling
- Loading state during login
- Login error handling
- Session persistence where appropriate

## 3.2 Products

Users should be able to:

- View products
- View product details
- Search products
- Browse categories
- Filter products
- Refresh product data
- Handle loading states
- Handle API errors
- Handle empty results
- Load products progressively using pagination/infinite scrolling

Product information should include where available:

- Product name
- Description
- Price
- Discount
- Rating
- Stock
- Brand
- Category
- Images

## 3.3 Product Details

The product details screen should provide:

- Product image/gallery
- Product name
- Description
- Price
- Discount
- Rating
- Stock
- Category / brand
- Quantity selector
- Add to Cart button

## 3.4 Cart

Users should be able to:

- Add products to cart
- Remove products
- Increase quantity
- Decrease quantity
- View cart items
- Calculate subtotal
- View total quantity
- Persist appropriate cart data locally
- Handle an empty cart

## 3.5 Favorites

Users should be able to:

- Add/remove products from favorites
- View favorite products
- Persist appropriate favorite data locally

## 3.6 Profile

Profile should display:

- Logged-in user information
- Basic account information
- Logout action
- Application preferences where appropriate

---

# 4. UI / UX Requirements

Every API-driven screen should handle:

### Loading

Show an appropriate loading indicator or skeleton.

### Success

Display the requested content.

### Error

Display a useful error message and retry action.

### Empty

Display an appropriate empty state.

### Refresh

Support pull-to-refresh where appropriate.

The UI should be:

- Responsive
- Reusable
- Component-based
- Accessible where practical
- Consistent in spacing, typography, and interaction patterns

---

# 5. Architecture Requirements

Initial project structure:

```text
src/
├── components/
├── screens/
├── navigation/
├── services/
├── hooks/
├── store/
├── types/
├── utils/
└── constants/
```

As the application grows, improve the structure based on actual requirements.

Avoid creating unnecessary abstractions before they are needed.

---

# 6. State Management Requirements

The project should deliberately demonstrate the difference between client state and server state.

## Client State

Examples:

- Modal visibility
- Selected tab
- UI preferences
- Cart
- Favorites

Possible tools:

- useState
- Context
- Zustand
- Redux Toolkit

## Server State

Examples:

- Products
- Product details
- User data from API
- Categories

Use TanStack Query for server state.

Document why a particular state-management solution is used for each type of state.

---

# 7. Performance Requirements

The product list must be designed to handle large datasets.

Use where appropriate:

- FlatList
- Stable `keyExtractor`
- Lightweight list item components
- `React.memo`
- `useCallback`
- `useMemo`
- `getItemLayout` when item dimensions are fixed
- Pagination / infinite scrolling
- Image optimization
- Appropriate FlatList configuration

Performance decisions should be based on actual behavior rather than blindly adding memoization.

---

# 8. API Requirements

Initial development will use DummyJSON.

Example endpoints:

```text
GET /products
GET /products/{id}
GET /products/search?q={query}
GET /products/categories
```

The API layer should provide:

- Centralized API functions
- TypeScript response types
- Error handling
- Request states
- Query parameters
- Pagination
- Search

---

# 9. Caching Requirements

Use TanStack Query to learn:

- `useQuery`
- `useMutation`
- Query keys
- Query functions
- Caching
- `staleTime`
- `gcTime`
- Retry
- Refetching
- Cache invalidation
- Pagination
- Infinite queries

The application should avoid unnecessary API requests where cached data is appropriate.

---

# 10. Local Storage Requirements

Use AsyncStorage for suitable persistent, non-sensitive data.

Examples:

- Onboarding state
- Preferences
- Non-sensitive cached values
- Appropriate local application state

Understand the difference between:

- AsyncStorage
- SQLite
- WatermelonDB
- Secure credential storage

Do not treat AsyncStorage as secure storage for sensitive credentials.

---

# 11. Testing Requirements

Introduce testing after the main functionality is working.

Tests should cover important user behavior such as:

- Product card rendering
- Product list rendering
- Search
- Login
- Add to cart
- Remove from cart
- Quantity changes
- Favorites
- Error states
- Loading states

Focus on user behavior rather than implementation details.

---

# 12. Git Requirements

Use Git throughout the project.

Suggested branches:

```text
main
develop
feature/navigation
feature/products
feature/cart
feature/auth
feature/testing
```

Commit frequently with meaningful messages.

Examples:

```text
feat: add product listing
feat: add product search
feat: add cart store
fix: handle product API error
test: add cart interaction tests
```

---

# 13. Modules

## MODULE 0 — Project Setup

### Goal

Create a clean React Native TypeScript project.

### Tasks

- Initialize React Native project
- Confirm TypeScript configuration
- Run Android
- Run iOS
- Initialize Git
- Create initial repository
- Understand basic project structure

Do not add Redux, Zustand, TanStack Query, AsyncStorage, or navigation yet.

---

## MODULE 1 — Architecture & Navigation

### Goal

Create the application screen structure.

### Screens

```text
Login
Home
Products
Product Details
Cart
Favorites
Profile
```

### Tasks

- Install React Navigation
- Create navigation structure
- Create screen components
- Navigate between screens
- Pass product ID through navigation
- Add TypeScript navigation types

### Concepts

- Components
- Props
- Navigation
- Route parameters
- TypeScript typing

---

## MODULE 2 — DummyJSON API

### Goal

Connect the React Native application to a REST API.

### Tasks

- Explore DummyJSON
- Understand API responses
- Create TypeScript models/types
- Create API service
- Fetch products
- Fetch product details
- Handle loading
- Handle errors

### Concepts

- REST
- HTTP
- JSON
- API services
- TypeScript interfaces/types
- Async operations

---

## MODULE 3 — Product Listing & FlatList

### Goal

Build a performant product list.

### Tasks

- Create ProductCard
- Display products with FlatList
- Add stable keys
- Add pull-to-refresh
- Add loading state
- Add error state
- Add empty state

### Concepts

- FlatList
- ScrollView vs FlatList
- Virtualization
- renderItem
- keyExtractor
- RefreshControl

---

## MODULE 4 — Search & Categories

### Goal

Allow users to find products efficiently.

### Tasks

- Search input
- Product search API
- Category list
- Category filtering
- Debounced search
- Empty search results
- Loading/error handling

### Concepts

- Controlled components
- useState
- useEffect
- Debouncing
- API query parameters

---

## MODULE 5 — Product Details

### Goal

Create a complete product details experience.

### Tasks

- Receive product ID
- Fetch product details
- Display product information
- Display images
- Quantity selector
- Add to Cart button

### Concepts

- Navigation params
- API calls
- Component state
- Conditional rendering

---

## MODULE 6 — TanStack Query

### Goal

Move server-state management to TanStack Query.

### Tasks

- Install TanStack Query
- Configure QueryClient
- Create product query
- Create product-details query
- Understand query keys
- Implement caching
- Configure stale time
- Configure garbage collection
- Implement retry
- Implement refetch
- Handle mutations
- Learn cache invalidation

### Interview Topics

- Server state
- Client state
- Cache
- Stale data
- Query invalidation
- Refetching

---

## MODULE 7 — Zustand

### Goal

Learn lightweight client-state management.

### Tasks

- Create Zustand store
- Store favorites
- Add/remove favorites
- Create selectors
- Store cart state
- Calculate cart totals

### Concepts

- Global state
- Store
- Actions
- Selectors
- Derived state

---

## MODULE 8 — Cart

### Goal

Build a complete cart workflow.

### Tasks

- Add item
- Remove item
- Increase quantity
- Decrease quantity
- Calculate subtotal
- Calculate total quantity
- Empty cart
- Cart badge

### Concepts

- Global state
- Derived values
- Selectors
- useMemo where appropriate
- Component composition

---

## MODULE 9 — Authentication

### Goal

Implement authentication using DummyJSON.

### Tasks

- Login form
- Validation
- Login API
- Authentication state
- Token handling
- Protected navigation
- Logout
- Error handling
- Loading state

### Concepts

- Authentication
- JWT
- Authorization headers
- Protected screens
- Session state

---

## MODULE 10 — AsyncStorage & Persistence

### Goal

Persist appropriate application data.

### Tasks

- Store onboarding state
- Persist preferences
- Persist appropriate cart/favorite state
- Restore state on application startup
- Handle storage errors

### Concepts

- Persistent storage
- Serialization
- Hydration
- AsyncStorage limitations
- Secure credential storage

---

## MODULE 11 — Redux Toolkit

### Goal

Learn Redux Toolkit by implementing part of the application with it.

### Tasks

- Configure Redux store
- Create slices
- Create reducers
- Create actions
- Dispatch actions
- Create selectors
- Connect components
- Compare Redux Toolkit with Zustand

### Concepts

- Store
- Slice
- Reducer
- Action
- Dispatch
- Selector
- Middleware

Document when you would choose:

```text
useState
Context
Zustand
Redux Toolkit
TanStack Query
```

---

## MODULE 12 — Pagination & Infinite Scrolling

### Goal

Handle large product datasets efficiently.

### Tasks

- Implement limit/skip pagination
- Load additional products
- Use `onEndReached`
- Prevent duplicate requests
- Show loading-more indicator
- Handle pagination errors
- Implement infinite query where appropriate

### Interview Scenario

Explain how you would handle 5,000+, 100,000+, or 1,000,000+ products without loading everything into memory.

---

## MODULE 13 — React Native Performance

### Goal

Optimize the application based on measurable problems.

### Tasks

- Profile slow screens
- Optimize ProductCard
- Apply React.memo where appropriate
- Apply useCallback where useful
- Apply useMemo where useful
- Use getItemLayout for fixed-size rows
- Tune FlatList
- Optimize images
- Reduce unnecessary state updates
- Avoid expensive renderItem work

### Concepts

- Re-rendering
- Memoization
- Virtualization
- Component rendering
- List performance

---

## MODULE 14 — Production UI States

### Goal

Make the application robust.

### Tasks

Implement consistent:

- Loading states
- Error states
- Empty states
- Retry actions
- Pull-to-refresh
- Network error handling
- Disabled states
- Form validation

---

## MODULE 15 — Offline & Local Database

### Goal

Understand offline-first architecture.

### Topics

Compare:

```text
AsyncStorage
SQLite
WatermelonDB
```

### Tasks

- Understand use cases
- Understand relational/local databases
- Understand offline-first architecture
- Optionally implement a local database
- Learn synchronization concepts

---

## MODULE 16 — Testing

### Goal

Test important user workflows.

### Tasks

- Configure Jest
- Configure React Native Testing Library
- Test components
- Test user interactions
- Mock API calls
- Test loading/error states
- Test cart behavior
- Test authentication flow

---

## MODULE 17 — Production Readiness

### Goal

Prepare the application like a real project.

### Tasks

- Environment configuration
- API configuration
- App icon
- Splash screen
- Android build
- iOS build
- Version management
- Release configuration
- Crash/error monitoring concepts
- README documentation

---

## MODULE 18 — Interview Preparation

### Goal

Turn the project into interview preparation.

### Topics

- Why React Native?
- React Native architecture
- React vs React Native
- FlatList performance
- useState / useEffect
- useMemo / useCallback
- React.memo
- Redux Toolkit
- Zustand
- Context
- TanStack Query
- Server state vs client state
- Caching
- AsyncStorage
- SQLite
- WatermelonDB
- Authentication
- JWT
- Pagination
- Performance
- Testing
- Error handling
- Offline support
- App architecture

For each question:

1. Answer without looking at notes.
2. Explain using the project.
3. Identify gaps.
4. Correct the answer.
5. Repeat later.

---

# 14. Definition of Done

- [ ] React Native TypeScript project runs on Android
- [ ] React Native TypeScript project runs on iOS
- [ ] Git repository is maintained
- [ ] Navigation is implemented
- [ ] DummyJSON API is integrated
- [ ] Products are displayed with FlatList
- [ ] Search works
- [ ] Categories work
- [ ] Product details work
- [ ] TanStack Query is implemented
- [ ] Server-state caching is understood
- [ ] Zustand is implemented
- [ ] Cart works
- [ ] Favorites work
- [ ] Authentication works
- [ ] Appropriate local persistence works
- [ ] Redux Toolkit is implemented and understood
- [ ] Pagination/infinite scrolling works
- [ ] FlatList performance is optimized
- [ ] Loading/error/empty states are implemented
- [ ] Offline/database concepts are understood
- [ ] Important user flows are tested
- [ ] Android release build works
- [ ] iOS release build works
- [ ] README documents architecture and decisions
- [ ] Project can be explained confidently in an interview

---

# 15. Recommended Learning Method

For every module:

```text
Understand
   ↓
Plan
   ↓
Implement yourself
   ↓
Run / test
   ↓
Debug
   ↓
Review
   ↓
Explain what you built
   ↓
Move to next module
```

The objective is to be able to answer:

> Why did you implement it this way?

not merely:

> How did you implement it?
