# CukaiMax for AI agents

[![Smithery](https://smithery.ai/badge/jakzaizzat/cukaimax-tax-authority)](https://smithery.ai/servers/jakzaizzat/cukaimax-tax-authority)

CukaiMax gives ChatGPT, Codex, Claude, Gemini, Cursor, VS Code, GitHub Copilot,
Kiro and any
Streamable HTTP MCP client a source-linked Malaysian individual-tax authority
layer.

The public server covers:

- YA2025 Form BE authority search and deterministic draft preparation.
- YA2025 Form B authority search and preparation-readiness checks for
  sole proprietors, freelancers, Grab drivers and e-commerce sellers.
- YA2026 source-verified planning changes, with filing fields blocked until
  HASiL publishes the official form and explanatory notes.

Endpoint: `https://www.cukaimax.com/.well-known/mcp`

No CukaiMax API key is required.

## Install

### Portable Agent Plugin

This repository is an [Agent Plugins 1.0](https://agent-plugins.org/)
package. Its root `plugin.json`, `mcp.json`, `skills/` directory and public
Streamable HTTP server can be loaded together by compatible clients including
ChatGPT/Codex, Cursor, VS Code, GitHub Copilot and Kiro.

Install the repository URL through the selected client's plugin interface:

```text
https://github.com/jakzaizzat/cukaimax-agent
```

### ChatGPT and Codex

Paste this into the agent:

```text
Read https://www.cukaimax.com/install-agent.md and install the CukaiMax Tax Authority for this project. Verify it by listing supported releases.
```

The repository also contains a complete OpenAI plugin package with an MCP
connection and the CukaiMax tax-authority skill.

### Claude Code

```sh
claude mcp add --transport http --scope project \
  cukaimax-tax-authority https://www.cukaimax.com/.well-known/mcp
```

### Gemini CLI

Install this repository as an extension:

```sh
gemini extensions install jakzaizzat/cukaimax-agent
```

Or add only the MCP connection:

```sh
gemini mcp add --transport http --scope project cukaimax-tax-authority \
  https://www.cukaimax.com/.well-known/mcp
```

### VS Code / GitHub Copilot

```sh
code --add-mcp '{"name":"cukaimax-tax-authority","type":"http","url":"https://www.cukaimax.com/.well-known/mcp"}'
```

### Cursor

Use the one-click installer on
[cukaimax.com/install-agent](https://www.cukaimax.com/install-agent), or merge:

```json
{
  "mcpServers": {
    "cukaimax-tax-authority": {
      "type": "http",
      "url": "https://www.cukaimax.com/.well-known/mcp"
    }
  }
}
```

### Kiro

Open the Powers panel, choose **Add Custom Power → Import power from GitHub**,
and install:

```text
https://github.com/jakzaizzat/cukaimax-agent
```

Kiro loads the portable skill and manages the remote MCP connection from the
Agent Plugins manifests.

### Smithery

Discover, inspect, and connect the same hosted MCP through the
[CukaiMax Smithery listing](https://smithery.ai/servers/jakzaizzat/cukaimax-tax-authority).
Smithery has indexed all five read-only tools and eight public resources.

## Example prompts

- Should I use Form B or Form BE for YA2025?
- What records should a Grab driver keep for deductible expenses?
- Which YA2025 Form B worksheets apply to an e-commerce seller?
- Check whether my fictional Form B example is ready for manual preparation.
- What is confirmed for YA2026, and what is still blocked pending HASiL forms?

## Safety and privacy

The public MCP is read-only and stateless. Do not send taxpayer names,
identification numbers, credentials, receipts or account data. No tool files or
submits a return to MyTax. CukaiMax source verification is not official HASiL
approval.

- [Documentation](https://www.cukaimax.com/mcp.md)
- [AI for Malaysian Tax guide](https://www.cukaimax.com/en/malaysia-tax-ai)
- [Privacy](https://www.cukaimax.com/privacy)
- [Security](https://www.cukaimax.com/data-security)
- [Support](https://www.cukaimax.com/contact)
- [Terms](https://www.cukaimax.com/terms)
- [Live playground](https://www.cukaimax.com/tax-authority/playground)

## License

The integration package is MIT licensed. Official tax materials remain subject
to their publishers' terms. See the linked CukaiMax release records for source
provenance.
