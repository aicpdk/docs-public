# docs-public

Content for the icel member docs at https://docs.aicpdk.com.

This repo holds only content: `src/`, `public/` and `astro.config.mjs`. The `ghcr.io/aicpdk/docs` image serves it (set `GITHUB_REPO=aicpdk/docs-public`). Its updater checks out those three paths and builds with the dependencies baked into the image.

Internal docs live in [aicpdk/docs](https://github.com/aicpdk/docs).
