FROM node:24.15.0-alpine AS base

RUN corepack enable && corepack prepare pnpm@12.4.2 --activate

RUN addgroup -g 1001 digital_cardgroup && \
    adduser -u 1001 -G digital_cardgroup -s /bin/sh -D -h /home/digital_card digital_card

FROM base AS build

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run contract:emit
RUN pnpm run build

FROM base AS production

WORKDIR /app

ENV NODE_ENV=production

COPY --chown=digital_card:digital_cardgroup package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY --chown=digital_card:digital_cardgroup --from=build /app/node_modules ./node_modules
COPY --chown=digital_card:digital_cardgroup --from=build /app/dist ./dist
COPY --chown=digital_card:digital_cardgroup --from=build /app/src/prisma ./src/prisma
COPY --chown=digital_card:digital_cardgroup --from=build /app/prisma.config.ts ./
COPY --chown=digital_card:digital_cardgroup --from=build /app/migrations ./migrations

USER digital_card

EXPOSE 3000

CMD ["pnpm", "start"]