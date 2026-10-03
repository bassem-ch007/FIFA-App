# MATCHDAY — React TP2

A small university project demonstrating **components, props, map(), and reuse** in one React/Vite application.

## Run

```sh
npm install
npm run dev
```

Use the four exercise links at the top of the page.

| URL | Learning step |
| --- | --- |
| `/?ex=1` | One PlayerCard with fictitious default information |
| `/?ex=2` | Players array → props → PlayersList → map() → PlayerCard |
| `/?ex=3` | Matches array → props → MatchesList → map() → MatchCard |
| `/?ex=4` or `/` | Compose the shared components into a football page |

The default page is Exercise 4. Each exercise contains its own simple demonstration data. Player and match components are shared rather than copied.

## Structure

```text
src/
├── components/
│   ├── PlayerCard.jsx
│   ├── PlayersList.jsx
│   ├── MatchCard.jsx
│   └── MatchesList.jsx
├── exercises/
│   ├── ex1/App.jsx
│   ├── ex2/App.jsx
│   ├── ex3/App.jsx
│   └── ex4/App.jsx
├── styles/app.css
├── App.jsx
└── main.jsx
```

## Technologies

React, React DOM, Bootstrap, React-Bootstrap, Vite, and ESLint.

All views are static. No hooks, search, filters, router, API calls, or state management are used. Props are passed explicitly, and map() appears directly in PlayersList and MatchesList.

The navy and green design uses responsive grids and React-Bootstrap Cards. Player information appears below each image. Images and logos use public HTTPS URLs.

Profiles and match results are fictional examples. Stock portraits do not identify real athletes. See [image sources](docs/IMAGE_SOURCES.md).

## Checks

```sh
npm run lint
npm run build
npm run preview
```

Read [the specification](docs/TP2_SPEC.md) for the project rules. Commit the source, documentation, configuration, and lockfile; dependencies and build output are ignored.
