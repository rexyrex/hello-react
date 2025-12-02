# React Enterprise Starter (Vite + TS + pnpm)

Includes: MobX (mobx, mobx-react-lite, mobx-state-tree), TanStack Query v5, Axios, Recharts, React Hook Form,
React Router v6, React Toastify, material-ui-confirm (+ MUI v6), Quill (react-quill), Mermaid, PowerBI Client (+ React),
Azure MSAL (browser + react), AntV G6, KaTeX (react-katex), HTML2Canvas, ESLint + Prettier, Vite + SVGR.

## Quick use
1) Replace image in `docker-compose.yml` with your repo: `ghcr.io/rexyrex/react-enterprise-starter:${IMAGE_TAG}`.
2) Push to GitHub (public repo recommended). CI builds and pushes image to GHCR and updates branch `deploy`.
3) In Portainer stack (Repository method):
   - Repo URL: `https://github.com/<OWNER>/<REPO>.git`
   - Reference/branch: `deploy`
   - Compose path: `docker-compose.yml`
   - GitOps: Polling
   - Auth: OFF (if public)
4) Test: http://192.168.0.20:2281

## Local dev
```bash
pnpm install
pnpm dev  # http://localhost:5173
```

## Optional envs
Create `.env` (not to confuse with docker .env):
```
VITE_AZURE_AD_CLIENT_ID=...
VITE_AZURE_AD_AUTHORITY=...
VITE_POWERBI_EMBED_URL=...
VITE_POWERBI_REPORT_ID=...
VITE_POWERBI_EMBED_TOKEN=...
```

- feature 2

## Notes
- PowerBI & MSAL require real credentials to function; without them the pages show helpful placeholders.
- The container serves a static build via Nginx.
- Feature added for achievements
