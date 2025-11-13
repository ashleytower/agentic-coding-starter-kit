# Stockly Implementation Plan

This is the master implementation plan with checkboxes to track progress across all phases.

---

## 📁 Phase 0: Setup & Cleanup ✅ COMPLETE

- [x] Create specs/stockly/ folder structure
- [x] Create requirements.md
- [x] Create implementation-plan.md (this file)
- [x] Create design-system.md
- [x] Delete boilerplate pages (chat, dashboard, profile)
- [x] Delete boilerplate components (starter-prompt-modal, setup-checklist)
- [x] Update package.json
- [x] Configure .env.local
- [x] Run lint and typecheck

**Completed:** 2025-11-13
**Git Commit:** `ed396a7`

---

## 🎨 Phase 1: Stockly Landing Page ✅ COMPLETE

- [x] Update site-header.tsx with Stockly navigation
- [x] Create hero-section.tsx
- [x] Create problem-section.tsx
- [x] Create how-it-works-section.tsx
- [x] Create features-section.tsx
- [x] Create footer-cta-section.tsx
- [x] Update site-footer.tsx
- [x] Update app/page.tsx with all sections
- [x] Test mobile responsiveness
- [x] Run lint and typecheck

**What Was Built:**
- Modern Stockly landing page with hero, problem statement, features grid, and how-it-works sections
- Added shadcn/ui components: accordion, input, sheet
- Removed all boilerplate starter pages (chat, dashboard, profile)
- Responsive design with mobile-first approach
- Dark mode support throughout

**Completed:** 2025-11-13
**Git Commit:** `ed396a7`

---

## 🔐 Phase 2: Authentication & Protected Routes ✅ COMPLETE

- [x] Verify Better Auth configuration
- [x] Create (inventory)/layout.tsx
- [x] Create bottom-nav.tsx
- [x] Create placeholder inventory pages (home, list, agent)
- [x] Update site-header.tsx for authenticated users
- [x] Test sign-in/sign-out flow
- [x] Run lint and typecheck

**What Was Built:**

### Protected Route Structure
- `src/app/(inventory)/layout.tsx` - Protected route group with session validation
- `src/app/(inventory)/home/page.tsx` - Dashboard with stats, recent activity, low stock alerts
- `src/app/(inventory)/list/page.tsx` - Pickup list with mock items
- `src/app/(inventory)/agent/page.tsx` - Voice agent interface with chat UI

### Authentication Enhancements
- Enhanced Better Auth configuration (`src/lib/auth.ts`):
  - 7-day session expiry
  - Cookie caching for performance (5 min)
  - Cross-subdomain cookies disabled
- Proper session validation: `auth.api.getSession({ headers: await headers() })`
- Null safety checks in protected pages
- `isPending` state handling to prevent layout shift

### Navigation
- `src/components/bottom-nav.tsx` - Mobile-first bottom navigation (Home, List, Agent)
- Updated `src/components/site-header.tsx`:
  - Conditionally shows landing nav only when unauthenticated
  - Logo links to `/home` for authenticated users
  - Uses `isPending` to prevent flash of wrong state

### Auth Flow Updates
- Sign-in redirects to `/home` (was `/dashboard`)
- User profile dropdown links to `/home` instead of `/profile`
- Sign-out uses Better Auth callbacks with proper redirect

### Database Setup
- PostgreSQL database created: `postgres_dev`
- Database user created: `dev_user`
- Better Auth tables migrated: `user`, `session`, `account`, `verification`

### Quality Assurance
- All code reviewed by better-auth-expert agent
- Follows Next.js 15 + Better Auth best practices
- Zero linting errors
- Zero TypeScript errors
- Shadcn/ui component audit passed

**Completed:** 2025-11-13
**Git Commit:** `ed396a7`

---

## 🗄️ Phase 3: Database & Google Sheets ⏭️ NEXT

### Database
- [ ] Update lib/schema.ts with inventory tables
- [ ] Run db:generate and db:migrate
- [ ] Create seed-data.ts with 13 mock items
- [ ] Run seed script

### Google Sheets
- [ ] Create Google Cloud project
- [ ] Enable Sheets API
- [ ] Create service account
- [ ] Download JSON key
- [ ] Add credentials to .env.local
- [ ] Create Google Sheet with 3 tabs
- [ ] Share with service account
- [ ] Add sheet ID to .env.local

### Sync
- [ ] Install googleapis package
- [ ] Create google-sheets/client.ts
- [ ] Create google-sheets/sync.ts
- [ ] Create api/sync/sheets/route.ts
- [ ] Test bidirectional sync
- [ ] Run lint and typecheck

---

## 🎨 Phase 4: Inventory Pages UI

### Home/Dashboard
- [ ] Build (inventory)/home/page.tsx with stats
- [ ] Add recent usage log
- [ ] Add low stock alerts
- [ ] Add quick action buttons

### Pickup List
- [ ] Build (inventory)/list/page.tsx
- [ ] Create pickup-item-card.tsx
- [ ] Create add-pickup-item-dialog.tsx
- [ ] Add empty state

### Agent/Voice
- [ ] Build (inventory)/agent/page.tsx
- [ ] Create microphone-button.tsx
- [ ] Create chat-message.tsx
- [ ] Add example prompt chips
- [ ] Add mock conversation data

### Polish
- [ ] Add loading skeletons
- [ ] Add error states
- [ ] Add empty states
- [ ] Test mobile layouts
- [ ] Run lint and typecheck

---

## 🎤 Phase 5: Voice Integration

- [ ] Get 11 Labs API key
- [ ] Research 11 Labs SDK
- [ ] Install 11 Labs client
- [ ] Integrate 11 Labs in agent page
- [ ] Handle voice input events
- [ ] Display transcriptions
- [ ] Play AI responses via TTS
- [ ] Create speech-recognition.ts (fallback)
- [ ] Create speech-synthesis.ts (fallback)
- [ ] Implement button states (idle, listening, processing, speaking)
- [ ] Add microphone permission handling
- [ ] Test voice flow end-to-end
- [ ] Run lint and typecheck

---

## 🧠 Phase 6: AI Agent & Inventory Logic

### Inventory Manager
- [ ] Install fuse.js
- [ ] Create inventory/types.ts
- [ ] Create inventory/fuzzy-match.ts
- [ ] Create inventory/manager.ts with 7 functions:
  - [ ] queryInventory()
  - [ ] checkLowStock()
  - [ ] recordUsage()
  - [ ] recordUsageBatch()
  - [ ] addToPickupList()
  - [ ] markPickedUp()
  - [ ] restockItem()

### API Routes
- [ ] Create api/inventory/query/route.ts
- [ ] Create api/inventory/usage/route.ts
- [ ] Create api/inventory/pickup/route.ts
- [ ] Create api/inventory/restock/route.ts
- [ ] Create api/inventory/low-stock/route.ts
- [ ] Add authentication middleware

### AI Agent
- [ ] Update api/chat/route.ts with OpenRouter
- [ ] Define 7 tools
- [ ] Implement tool execution
- [ ] Create voice-friendly system prompt
- [ ] Test all 7 functions
- [ ] Run lint and typecheck

---

## 🔗 Phase 7: Connect Frontend to Backend

### Agent Page
- [ ] Connect to /api/chat
- [ ] Stream AI responses
- [ ] Display tool calls
- [ ] Add loading states

### Pickup List Page
- [ ] Fetch from /api/inventory/pickup
- [ ] POST to add items
- [ ] PATCH to mark picked up
- [ ] Add toast notifications

### Home Page
- [ ] Fetch low stock items
- [ ] Fetch usage logs
- [ ] Calculate real stats
- [ ] Remove mock data

### Testing
- [ ] Test Flow 1: Voice query
- [ ] Test Flow 2: Voice usage recording
- [ ] Test Flow 3: Voice add to pickup
- [ ] Test Flow 4: Manual mark picked up
- [ ] Test Flow 5: Voice low stock check
- [ ] Run lint and typecheck

---

## ✨ Phase 8: Polish & Production

### UI/UX
- [ ] Add Framer Motion animations
- [ ] Optimize mobile experience
- [ ] Add sound effects (optional)

### Error Handling
- [ ] Handle voice recognition errors
- [ ] Handle API failures
- [ ] Handle fuzzy matching failures
- [ ] Handle edge cases

### Documentation
- [ ] Create docs/page.tsx
- [ ] Create privacy/page.tsx
- [ ] Create terms/page.tsx
- [ ] Update navigation

### Performance
- [ ] Optimize images
- [ ] Add lazy loading
- [ ] Optimize API responses
- [ ] Add caching
- [ ] Run Lighthouse audit

### Accessibility
- [ ] Add ARIA labels
- [ ] Test keyboard navigation
- [ ] Test screen readers
- [ ] Check color contrast
- [ ] Add focus indicators

### Testing
- [ ] Test on iOS Safari
- [ ] Test on Android Chrome
- [ ] Test on desktop browsers
- [ ] Test on tablets
- [ ] Test with slow network

### Deployment
- [ ] Run final build checks
- [ ] Set up production database
- [ ] Run migrations on production
- [ ] Seed production data
- [ ] Create production Google Sheet
- [ ] Deploy to Vercel
- [ ] Configure environment variables
- [ ] Update Google OAuth settings
- [ ] Test production deployment
- [ ] Enable waitlist collection
- [ ] Share landing page

---

## 💰 Phase 9: Pricing (Future)

- [ ] Create pricing/page.tsx
- [ ] Define plan features
- [ ] Integrate payment provider
- [ ] Add usage tracking
- [ ] Implement rate limiting
- [ ] Create billing dashboard

---

## 📊 Progress Tracking

**Current Phase:** Phase 3 - Database & Google Sheets
**Status:** Ready to Start
**Last Updated:** 2025-11-13
**Git Branch:** `master`
**Latest Commit:** `ed396a7`

### Completed Phases:
- ✅ Phase 0: Setup & Cleanup
- ✅ Phase 1: Stockly Landing Page
- ✅ Phase 2: Authentication & Protected Routes

### Next Session Quick Start:

When starting a new Claude Code session on a different computer:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ashleytower/agentic-coding-starter-kit.git
   cd agentic-coding-starter-kit
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Set up environment variables:**
   - Copy `.env.local` or create new one with required vars (see `.env.example`)
   - Ensure PostgreSQL credentials match your setup

4. **Set up database:**
   ```bash
   # Create database and user (if needed)
   psql postgres -c "CREATE USER dev_user WITH PASSWORD 'dev_password';"
   psql postgres -c "CREATE DATABASE postgres_dev OWNER dev_user;"

   # Run migrations
   POSTGRES_URL="postgresql://dev_user:dev_password@localhost:5432/postgres_dev" pnpm run db:migrate
   ```

5. **Start dev server:**
   ```bash
   pnpm dev
   ```

6. **Tell Claude:**
   ```
   I'm working on Stockly. We've completed Phase 1 (landing page) and Phase 2 (authentication).

   Please read:
   - specs/stockly/implementation-plan.md (this file)
   - specs/stockly/requirements.md
   - The latest git commit (ed396a7)

   I'm ready to start Phase 3: Database & Google Sheets Integration.
   ```

### Key Files to Review:
- `specs/stockly/requirements.md` - Full project requirements
- `specs/stockly/design-system.md` - Design tokens and patterns
- `src/app/(inventory)/` - Protected route structure
- `src/lib/auth.ts` - Better Auth configuration
- `src/components/bottom-nav.tsx` - Mobile navigation

### Database Connection String:
```
POSTGRES_URL=postgresql://dev_user:dev_password@localhost:5432/postgres_dev
```

### Tech Stack Reference:
- **Framework:** Next.js 15 with App Router, React 19, TypeScript
- **Auth:** Better Auth with Google OAuth
- **Database:** PostgreSQL with Drizzle ORM
- **UI:** shadcn/ui + Tailwind CSS 4
- **AI:** OpenRouter (not direct OpenAI)
