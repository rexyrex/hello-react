# --- builder ---
    FROM node:22-alpine AS builder
    WORKDIR /app
    
    # Ensure modern pnpm
    RUN corepack enable && corepack prepare pnpm@10.18.2 --activate
    
    # Only deps first for better caching
    COPY package.json pnpm-lock.yaml* ./
    RUN pnpm install --no-frozen-lockfile
    
    # Then the rest
    COPY . .
    RUN pnpm build
    
    # --- runtime ---
    FROM nginx:1.27-alpine AS runtime
    COPY --from=builder /app/dist /usr/share/nginx/html
    # Vite preview paths -> serve index for SPA
    RUN sed -i 's#try_files \$uri /index.html;#try_files \$uri \$uri/ /index.html;#' /etc/nginx/conf.d/default.conf
    
    EXPOSE 5173
    CMD ["nginx", "-g", "daemon off;"]
    