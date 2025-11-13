# Stockly - Requirements Document

## Project Overview

**Name:** Stockly
**Tagline:** "Inventory at the speed of speech"
**Description:** A voice-first inventory management system that allows businesses to manage their inventory through natural speech commands, with automatic synchronization to Google Sheets for easy manual editing and reporting.

---

## Functional Requirements

### FR1: Voice-First Interface
- Users can speak commands to manage inventory
- Support for 11 Labs Conversational AI for high-quality speech-to-speech
- Fallback to Web Speech API for browser-based speech recognition
- Voice commands converted to text and displayed in chat interface
- AI responses played back as speech

### FR2: Inventory Management
- **Query Inventory**: Check stock levels of specific items
- **Record Usage**: Log items used at events/services
- **Batch Usage Recording**: Record multiple items used in one command
- **Low Stock Alerts**: Identify items below threshold levels
- **Restock Items**: Manually increase inventory quantities
- **Fuzzy Matching**: Handle typos and variations in product names (60% similarity threshold)

### FR3: Shopping/Pickup List
- Add items to pickup list via voice or manual entry
- Mark items as "picked up" which automatically restocks inventory
- View pending and completed pickup items
- Delete items from pickup list

### FR4: Google Sheets Integration
- **Bidirectional Sync**: Changes in Google Sheets reflect in app, changes in app reflect in Sheets
- **Three Sheet Tabs**:
  - Inventory: name, quantity, unit, threshold, category
  - Usage Log: item, quantity, event, user, timestamp
  - Pickup List: item, quantity, unit, status, added, completed
- **Manual Editing**: Users can edit Google Sheets directly for bulk changes
- **Conflict Resolution**: Sheets-wins strategy (manual edits take priority)

### FR5: Authentication & Multi-User Access
- Google OAuth sign-in
- Multiple users can access the same inventory (shared per business)
- User identification for usage log tracking
- Protected routes requiring authentication

### FR6: Dashboard & Analytics
- Display total items in inventory
- Show low stock item count
- Recent activity log (last 10 usage entries)
- Quick action buttons for common tasks

### FR7: Landing Page & Waitlist
- Professional landing page showcasing product value
- Pre-launch waitlist email collection
- Problem-solution-features narrative structure
- Mobile responsive design

---

## Non-Functional Requirements

### NFR1: Performance
- API response time < 2 seconds for inventory queries
- Google Sheets sync completes within 5 seconds
- Voice recognition latency < 1 second
- Page load time < 3 seconds

### NFR2: Usability
- Mobile-first design
- Accessible to screen readers (WCAG AA compliance)
- Dark theme with high contrast
- Clear error messages and user feedback
- Touch-friendly tap targets (minimum 44x44px)

### NFR3: Reliability
- 99.9% uptime for production deployment
- Automatic retry logic for failed API calls
- Graceful degradation if voice features unavailable
- Data consistency between PostgreSQL and Google Sheets

### NFR4: Security
- Secure authentication via OAuth 2.0
- API routes protected with session validation
- Environment variables for all secrets
- No exposure of API keys in client-side code

### NFR5: Scalability
- Support for 100+ inventory items per business
- Handle 1000+ usage log entries
- PostgreSQL database for fast queries
- Efficient batch operations for bulk updates

### NFR6: Maintainability
- TypeScript for type safety
- ESLint and Prettier for code quality
- Modular component architecture
- Clear separation of concerns (UI, business logic, data access)
- Comprehensive error handling

---

## User Stories

### US1: Voice Inventory Query
**As a** bar manager
**I want to** ask "How much vodka do we have?"
**So that** I can quickly check stock without searching through spreadsheets

### US2: Voice Usage Recording
**As a** catering staff member
**I want to** say "I used 3 vodkas, 2 gins, and 4 shakers at the wedding"
**So that** inventory updates automatically without manual data entry

### US3: Voice Shopping List
**As a** restaurant owner
**I want to** say "Add 6 limes to pickup list"
**So that** I can build a shopping list hands-free while cooking

### US4: Manual Sheet Editing
**As a** business owner
**I want to** edit quantities directly in Google Sheets
**So that** I can make bulk adjustments easily when doing physical inventory counts

### US5: Low Stock Alerts
**As a** inventory manager
**I want to** see which items are running low
**So that** I can reorder before running out

### US6: Multi-User Access
**As a** team member
**I want to** access the inventory from my own phone
**So that** multiple staff can update inventory simultaneously

---

## Acceptance Criteria

### AC1: Voice Command Accuracy
- Voice commands recognized with >90% accuracy in quiet environments
- Fuzzy matching finds correct items even with typos
- AI provides conversational, natural responses

### AC2: Google Sheets Sync
- Changes in Sheets appear in app within 30 seconds
- Changes in app appear in Sheets within 30 seconds
- No data loss during sync conflicts
- Manual Sheets edits override app changes

### AC3: Inventory Operations
- Query returns accurate quantity/unit/category
- Usage recording decreases inventory correctly
- Pickup list marks items correctly
- Low stock detection uses correct thresholds

### AC4: Mobile Experience
- All features work on iOS Safari and Android Chrome
- Touch targets are finger-friendly
- Bottom navigation accessible with thumb
- Text is readable without zooming

### AC5: Error Handling
- Microphone permission errors show helpful instructions
- Network failures show retry options
- Invalid voice commands provide suggestions
- API errors don't crash the app

---

## Technical Constraints

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Database**: PostgreSQL (Neon or Vercel Postgres)
- **ORM**: Drizzle ORM
- **Authentication**: BetterAuth with Google OAuth
- **AI Provider**: OpenRouter (not direct OpenAI)
- **Voice**: 11 Labs Conversational AI + Web Speech API fallback
- **Styling**: Tailwind CSS 4 + shadcn/ui components
- **Deployment**: Vercel

---

## Out of Scope (Future Phases)

- Payment/subscription system (Phase 10)
- Multi-business/tenant support (single business only)
- Mobile native apps (web app only)
- Offline mode
- Advanced analytics dashboard
- Supplier integration
- Barcode scanning
- Recipe management
