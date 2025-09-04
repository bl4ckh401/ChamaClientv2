## Multi-stage Dockerfile for Next.js standalone output
## Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* pnpm-lock.yaml* .npmrc* ./
COPY tsconfig.json next.config.ts ./
COPY public ./public
COPY app ./app
COPY components ./components
COPY contexts ./contexts
COPY lib ./lib
COPY utils ./utils
COPY postcss.config.js ./postcss.config.js

# Install build tools required by some native deps
RUN apk add --no-cache python3 make g++ build-base

# Install dependencies (use lockfile if present)
RUN if [ -f package-lock.json ]; then \
			npm ci --prefer-offline; \
		else \
			npm install --prefer-offline; \
		fi

# Build the Next.js app (produces .next/standalone)
RUN npm run build

## Runtime stage
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy built standalone app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
ENV PORT=3000

CMD ["node", "server.js"]
