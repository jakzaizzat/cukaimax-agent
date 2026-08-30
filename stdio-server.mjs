#!/usr/bin/env node
/**
 * Catalog adapter for Glama and other stdio introspectors.
 *
 * Production clients should connect to the hosted Streamable HTTP endpoint:
 *   https://www.cukaimax.com/.well-known/mcp
 *
 * This process only answers initialize, tools/list, and resources/list using
 * the public catalog exported from that endpoint. It does not invent tax
 * tools or return LHDN content on tools/call or resources/read.
 */
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListResourcesRequestSchema,
  ListToolsRequestSchema,
  ReadResourceRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const catalog = JSON.parse(
  readFileSync(join(dirname(fileURLToPath(import.meta.url)), "catalog.json"), "utf8"),
);

const HOSTED = catalog.source;

const server = new Server(
  {
    name: catalog.serverInfo.name,
    version: catalog.serverInfo.version,
  },
  {
    capabilities: catalog.capabilities,
    instructions: catalog.instructions,
  },
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: catalog.tools,
}));

server.setRequestHandler(ListResourcesRequestSchema, async () => ({
  resources: catalog.resources,
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => ({
  content: [
    {
      type: "text",
      text: [
        `Tool "${request.params.name}" is served by the hosted CukaiMax endpoint.`,
        `Connect to ${HOSTED} instead of this stdio catalog adapter.`,
        "This process exists so registries can run initialize and tools/list.",
      ].join(" "),
    },
  ],
  isError: true,
}));

server.setRequestHandler(ReadResourceRequestSchema, async (request) => ({
  contents: [
    {
      uri: request.params.uri,
      mimeType: "text/plain",
      text: [
        `Resource "${request.params.uri}" is served by the hosted CukaiMax endpoint.`,
        `Read it from ${HOSTED}.`,
        "This stdio process does not embed tax content.",
      ].join(" "),
    },
  ],
}));

const transport = new StdioServerTransport();
await server.connect(transport);
