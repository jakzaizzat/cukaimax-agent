# Glama builds this image, starts the process, and runs MCP introspection
# (initialize + tools/list) over stdio. Production clients should use the
# hosted Streamable HTTP endpoint, not this catalog adapter.
FROM node:22-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY catalog.json stdio-server.mjs ./

USER node
CMD ["node", "stdio-server.mjs"]
