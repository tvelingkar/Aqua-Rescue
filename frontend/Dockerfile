# Production image, copy all the files and run next
FROM node:18-bullseye-slim AS runner

WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

COPY next.config.js ./
COPY public ./public
COPY package.json ./package.json

# Automatically leverage output traces to reduce image size 
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --chown=1001:0 .next/standalone ./
COPY --chown=1001:0 .next/static ./.next/static
RUN chmod -R 777 /app

USER 1001

EXPOSE 3000

ENV PORT 3000

CMD node --optimize_for_size --gc_interval=10000 server.js