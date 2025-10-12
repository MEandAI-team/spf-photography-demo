# Repository Overview

## Project Summary
- **Name**: Photography Website Homepage
- **Purpose**: Marketing site for a photography studio with portfolio, about, work, and videography sections.
- **Framework**: React 18 with Vite build tooling and TailwindCSS utility classes.

## Key Commands
1. **Development server**: `npm run dev`
2. **Production build**: `npm run build`

## Notable Directories
- **`/public/images`**: Static assets for galleries and backgrounds.
- **`/src/components/pages`**: Page-level React components (Home, About, Work, Videography, Contact, etc.).
- **`/src/components`**: Shared UI elements (carousels, navigation, galleries).
- **`/src/styles`**: Tailwind and global CSS customizations.

## Routing Notes
- The project relies on React Router for page navigation; check `/src/components/pages` and any router configuration in `App.tsx` for route definitions.

## Testing / Linting
- No automated test or lint scripts are defined; manual verification is recommended after changes.