# Stockly Implementation Plan

This is the master implementation plan with checkboxes to track progress across all phases.

---

## 📁 Phase 0: Setup & Cleanup ✅

- [x] Create specs/stockly/ folder structure
- [x] Create requirements.md
- [x] Create implementation-plan.md (this file)
- [ ] Create design-system.md
- [ ] Delete boilerplate pages (chat, dashboard, profile)
- [ ] Delete boilerplate components (starter-prompt-modal, setup-checklist)
- [ ] Update package.json
- [ ] Configure .env.local
- [ ] Run lint and typecheck

---

## 🎨 Phase 1: Stockly Landing Page

- [ ] Update site-header.tsx with Stockly navigation
- [ ] Create hero-section.tsx
- [ ] Create problem-section.tsx
- [ ] Create how-it-works-section.tsx
- [ ] Create features-section.tsx
- [ ] Create footer-cta-section.tsx
- [ ] Update site-footer.tsx
- [ ] Update app/page.tsx with all sections
- [ ] Test mobile responsiveness
- [ ] Run lint and typecheck

---

## 🔐 Phase 2: Authentication

- [ ] Verify Better Auth configuration
- [ ] Create (inventory)/layout.tsx
- [ ] Create bottom-nav.tsx
- [ ] Create placeholder inventory pages (home, list, agent)
- [ ] Update site-header.tsx for authenticated users
- [ ] Test sign-in/sign-out flow
- [ ] Run lint and typecheck

---

## 🗄️ Phase 3: Database & Google Sheets

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

## Progress Tracking

**Current Phase:** Phase 0 - Setup & Cleanup
**Status:** In Progress
**Last Updated:** 2025-11-12
