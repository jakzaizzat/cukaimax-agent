# Anthropic Connectors Directory dossier

## Listing

- Server name: CukaiMax Malaysian Tax
- Tagline: Malaysian tax rules, linked to official sources
- Slug: `cukaimax-malaysian-tax`
- Categories: Finance, Productivity, Research
- Documentation: https://www.cukaimax.com/mcp.md
- Privacy: https://www.cukaimax.com/privacy
- Support: https://www.cukaimax.com/contact
- Company: CukaiMax
- Website: https://www.cukaimax.com
- Server URL: https://www.cukaimax.com/.well-known/mcp
- Transport: Streamable HTTP
- URL model: Same URL for every user
- Authentication: None
- Data access: Read-only public authority data plus stateless deterministic calculations

## Description

CukaiMax helps Claude answer Malaysian individual-tax questions using a
versioned, source-linked authority layer. It distinguishes Form BE from Form B,
searches official-source rules, prepares supported YA2025 Form BE drafts, checks
YA2025 Form B preparation readiness for sole proprietors, freelancers, Grab
drivers and e-commerce sellers, and keeps YA2026 planning separate from filing
fields that HASiL has not published. It never submits to MyTax.

## Primary use cases

1. Select Form BE or Form B from the taxpayer's income facts and assessment year.
2. Research YA2025 Malaysian tax rules with source records and explicit limitations.
3. Check whether a sole proprietor has the accounts, worksheets, schedules and evidence required for manual Form B preparation.
4. Prepare a deterministic YA2025 Form BE draft from reviewed, fictional or redacted inputs.
5. Explain confirmed YA2026 planning changes without inventing return fields.

## Connection prerequisites

No CukaiMax account, API key or paid CukaiMax plan is required. Users should not
send names, identification numbers, credentials, receipt images or account data
to the public connector.

## Reviewer test instructions

Connect the public URL without authentication. Run `list_tax_authority_releases`,
then exercise each tool with fictional inputs using the test cases in
`submissions/openai.md`. Confirm that every tool has a title and read-only safety
annotations, useful validation errors, and a privacy-safe audit event. Confirm
that no tool changes state or claims to file a return.

## Compliance notes

- The underlying tax authority layer and MCP implementation are operated by CukaiMax.
- It does not transfer money or financial assets.
- It does not generate AI media.
- It does not collect Claude conversation history, memory, summaries or files.
- The tool descriptions state function and invocation scope without behavioural or promotional instructions.
