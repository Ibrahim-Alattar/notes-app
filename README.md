# Notes App

A minimal notes application built with React and Tailwind CSS. Create, search, edit, and delete notes — everything persists in the browser via `localStorage`, so there is no backend, no sign-up, and no data leaving your device.

**Live demo:** https://notes-app-iota-wheat.vercel.app/

## Features

- Create notes with a title and body
- Full-text search across titles and bodies, filtered as you type
- Edit any note in place without losing your place in the list
- Delete notes with a confirmation step
- Automatic persistence to `localStorage` — notes survive a refresh or a closed tab
- Responsive layout: single column on phones, two-column grid from small screens up
- Accessible by default: labelled inputs, visible focus rings, keyboard-operable cards

## Tech stack

| Layer | Choice |
| --- | --- |
| UI | React (function components + hooks) |
| Build tool | Vite |
| Styling | Tailwind CSS v4 via the official `@tailwindcss/vite` plugin |
| Storage | Browser `localStorage` |
| Deployment | Vercel |

No state management library, no router, no UI kit. React's `useState` and `useEffect` cover everything this app needs.

## Getting started

Requires Node.js 18 or newer.

```bash
git clone https://github.com/your-username/notes-app.git
cd notes-app
npm install
npm run dev
```

Open the URL Vite prints, usually http://localhost:5173.

To test on a phone over your local network:

```bash
npm run dev -- --host
```

Then open the `Network` address on your device. Note that `crypto.randomUUID()` only exists in secure contexts, so some browsers need the HTTPS or localhost address for note creation to work.

### Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── Notes.jsx        # owns all state: notes, search term, selected id; syncs to localStorage
├── AddNote.jsx      # controlled form for new notes
├── EditNote.jsx     # controlled form prefilled with the selected note
├── NotesList.jsx    # responsive grid, maps notes to cards
├── NoteCard.jsx     # single note: truncated preview + delete control
├── SearchBox.jsx    # controlled search input
├── Card.jsx         # shared surface wrapper
├── index.css        # @import "tailwindcss";
└── main.jsx         # entry point
```

State lives in one place. `Notes.jsx` holds the array of notes plus the search string and the id of the note being edited; children receive values and callbacks as props. Search results and the selected note are derived during render rather than stored, so they can never drift out of sync with the source of truth.

## Data model

```js
{
  id: string,    // crypto.randomUUID()
  title: string,
  body: string,
}
```

All notes are stored as a single JSON array under the `notes` key in `localStorage`.

## What I learned building this

- Deriving filtered results in render beats keeping a second piece of state in sync
- Storing the *id* of the selected note instead of a copy of the note avoids stale data
- Reading `localStorage` through a `useState` function initializer runs it once, not on every render
- `min-w-0` on flex and grid children is what stops long content from breaking a layout
- Inputs need `text-base` on mobile — anything under 16px makes iOS Safari zoom the page on focus

