# Forklift LMS — Project Structure

## Repository Layout

```
Forklift_LMS/                  # Git repository root
├── .git/                      # Git version control (commit history)
├── .gitignore                 # Ignore node_modules, .next, env files
├── forklift.code-workspace    # VS Code workspace (recommended: open this)
├── package.json               # Node.js dependencies and scripts
├── package-lock.json          # Locked versions (do not edit)
├── tsconfig.json              # TypeScript configuration
├── next.config.ts             # Next.js configuration
├── postcss.config.mjs          # Tailwind CSS setup
├── eslint.config.mjs          # ESLint configuration
│
├── app/                       # Next.js App Router (source code)
│   ├── page.tsx              # Homepage (GET /)
│   ├── layout.tsx            # Root layout wrapper
│   ├── globals.css           # Global styles
│   ├── favicon.ico           # Browser tab icon
│   │
│   └── login/                # Login page route
│       └── page.tsx          # Login form (GET /login) — Client Component
│
├── public/                    # Static files served directly
│   ├── next.svg              # Next.js logo (unused in current design)
│   ├── vercel.svg            # Vercel logo (unused)
│   ├── file.svg              # Icon assets
│   ├── globe.svg
│   ├── window.svg
│
├── forklift.lms/              # **Deprecated nested folder** (safe to ignore)
│   └── (duplicate copy of app/, public/, package.json, etc.)
│       node_modules/          # ❌ DELETED — safe to remove if folder exists
│       .next/                 # ❌ DELETED — build cache
│
├── node_modules/              # 3rd party packages (generated — NOT committed)
└── .next/                     # Next.js build cache (generated — NOT committed)
```

## Important Notes

- **Repository Root**: `C:\Users\PC\Desktop\programming\Forklift_LMS` (contains `.git`)
  - Source files are here (app/, public/, package.json)
  - Vercel builds from here
  - GitHub shows files here

- **Nested `forklift.lms/` Folder**: 
  - ⚠️ Contains a duplicate copy of the project (from initial setup)
  - Safe to delete entirely (source is at repo root)
  - `node_modules` and `.next` already removed from inside it

- **Generated Folders** (NOT committed, auto-created when needed):
  - `node_modules/` — 3rd party dependencies (run `npm install`)
  - `.next/` — Next.js build cache (auto-created on `npm run dev` or `npm run build`)
  - Both are listed in `.gitignore` and never pushed to GitHub/Vercel

## How to Navigate in VS Code

1. **Open the workspace**: File → Open Workspace → select `forklift.code-workspace`
   - Explorer will hide `node_modules`, `.next`, and `.git` (cleaner view)
   - Recommended extensions appear in the Extensions tab

2. **Source code** is in `app/` and `public/` — these are what you edit

3. **Configuration files**:
   - `package.json` — add new npm packages here
   - `tsconfig.json` — TypeScript settings
   - `next.config.ts` — Next.js settings
   - `.gitignore` — files to ignore when committing

## Workflow

1. **Development**: `npm run dev` (builds `.next/` cache, runs server on localhost:3000)
2. **Commit & Push**: Files from `app/`, `public/`, `package.json` etc. only
3. **Deploy to Vercel**: Vercel rebuilds from source in GitHub; generates `node_modules` and `.next` on their servers

## Next Steps

- [ ] Delete the leftover `forklift.lms/` folder when ready (optional, safe)
- [ ] Trigger Vercel redeploy to test the live site
- [ ] Start building features in `app/` (create new routes, components, etc.)
