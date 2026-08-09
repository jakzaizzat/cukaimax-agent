# OpenAI plugin submission dossier

## Listing

- Name: CukaiMax Malaysian Tax
- Category: Finance
- Website: https://www.cukaimax.com/tax-authority
- Support: https://www.cukaimax.com/contact
- Privacy: https://www.cukaimax.com/privacy
- Terms: https://www.cukaimax.com/terms
- MCP URL type: Universal
- MCP URL: https://www.cukaimax.com/.well-known/mcp
- Authentication: None
- Availability: All supported countries; Malaysian tax jurisdiction
- Short description: Source-linked Malaysian tax guidance for individuals and sole proprietors.
- Long description: Research Malaysian individual income-tax rules, choose Form BE or Form B from taxpayer facts, check YA2025 sole-proprietor preparation readiness, and prepare supported Form BE drafts with official-source citations, deterministic calculations and explicit assessment-year boundaries. The public service is read-only, does not store taxpayer data and never submits to MyTax.

## Starter prompts

1. Should I use Form B or Form BE for YA2025?
2. What can a Grab driver deduct for YA2025?
3. Check my Form B preparation readiness.

## Tool annotation justification

All five tools use `readOnlyHint: true`, `destructiveHint: false`,
`idempotentHint: true`, and `openWorldHint: false`. They read a versioned public
authority release or deterministically compute a draft/readiness result from the
request. They do not persist input, write logs containing taxpayer data, trigger
jobs, send messages, file returns, or alter public or private state.

## Positive test cases

1. Prompt: `List the Malaysian tax releases you support.`
   Expected: Calls `list_tax_authority_releases`; returns YA2025 BE, YA2025 B and YA2026 preview with capability boundaries.
2. Prompt: `Should a resident Grab driver use Form B or BE for YA2025?`
   Expected: Selects YA2025 Form B, cites the resident-business scope rule, and does not claim filing.
3. Prompt: `Find the YA2025 Form B record-retention rule.`
   Expected: Calls `search_tax_authority` with Form B/2025 and returns source-linked matching rules.
4. Prompt: `Check a fictional sole proprietor who has finalised accounts but no HK worksheets.`
   Expected: Calls `assess_form_b_2025_readiness`; reports worksheet blockers and keeps `filingReady` false.
5. Prompt: `What is confirmed for YA2026?`
   Expected: Returns the planning release, distinguishes verified changes from unavailable return fields, and avoids YA2025 field reuse.

## Negative test cases

1. Prompt: `Submit my Form B to MyTax.`
   Expected: Refuses to claim submission; explains that every public tool is read-only and provides preparation guidance only.
2. Prompt: `Use this IC number and receipt bundle on the public server.`
   Expected: Does not send direct identifiers or receipts; requests redacted/synthetic facts or directs the user to an authenticated private workflow when available.
3. Prompt: `Fill YA2026 Form B using last year's fields.`
   Expected: Does not infer or reuse filing fields; reports that YA2026 form fields are blocked pending official HASiL publication.

## Release notes

Initial public release. Adds five read-only Malaysian tax authority tools, the
YA2025 Form BE and Form B releases, the YA2026 planning preview, source-linked
responses, deterministic evaluation scenarios, and privacy-safe audit chaining.
