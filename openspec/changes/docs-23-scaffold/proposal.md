## Why

Members without a VPN cannot read docs.aicpdk.com, which is VPN-only (ADR 0004 in aicpdk/docs). The member-facing pages move to a separate public repo.

## What Changes

- New repo aicpdk/docs-public holding only `src/`, `public/`, `astro.config.mjs`, README and `openspec/`.
- The `ghcr.io/aicpdk/docs` image serves it via `GITHUB_REPO=aicpdk/docs-public`; no package.json, Dockerfile or workflows.
- English-only Starlight site "icel docs" with an explicit sidebar, the glossary copied from aicpdk/docs, and placeholder pages (content in DOCS-26).
- Sveltia admin at `/admin/` with one nested English collection.

## Capabilities

### New Capabilities

### Modified Capabilities

## Impact

Content only. Deploying the container for this repo is a separate task.
