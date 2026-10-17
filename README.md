# Vivaha Studio

An open-source digital wedding invitation studio inspired by Indian weddings. Create a beautiful invitation that feels like your traditions, your people, and your kind of love.

## Phase 1: Design studio

The first phase includes the responsive landing page and a gallery of 12 original invitation concepts. Browse by style or language, search the collection, open a detailed preview, and select a design. The current gallery is a clearly labeled demo; selections are held only in the current page session and are not saved to a backend.

## Run locally

Requires Node.js 22.12 or newer.

```sh
npm install
npm run dev
```

To verify a production build:

```sh
npm run lint
npm run build
npm run preview
```

## Project status

The wizard, invitation editor, public invitation pages, RSVP management, and optional Supabase persistence are planned for later phases. No Supabase credentials or backend are required for the Phase 1 demo.

## License

MIT. See [LICENSE](LICENSE).
