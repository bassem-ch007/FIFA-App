# TP2 React specification

## Objective

A small university React TP that clearly demonstrates components, props, arrays, map(), React-Bootstrap Cards, and component reuse. Readable educational code takes priority over application features.

## Structure

One JavaScript/JSX Vite project:

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

Keep the four shared components flat and use one stylesheet. Keep static arrays inside the exercise App files; do not add data, utility, layout, or hook folders.

## Exercise progression

- **Ex1:** Render one `<PlayerCard />` with fictitious default information written in the shared component: name, team, nationality, jersey number, age, and image. Use React-Bootstrap Card. No array or map() in this exercise.
- **Ex2:** Define at least four players inside `ex2/App.jsx`. Pass the array explicitly as `<PlayersList players={players} />`. PlayersList uses `players.map()` and passes each of the six fields explicitly to PlayerCard.
- **Ex3:** Define a static matches array inside `ex3/App.jsx`. Fields: team1, team2, logo1, logo2, score, date, time, status. Pass the array to MatchesList. Its `matches.map()` passes each field explicitly to MatchCard.
- **Ex4:** Define the static player and match arrays in its App file. Compose a simple navbar, hero/introduction, Featured Players using PlayersList, Matches using MatchesList, and footer. Reuse all four shared components through the lists.

Duplicating the small demonstration datasets between exercise files is intentional: each exercise remains self-contained and easy to explain. Do not duplicate the shared component implementations.

## Navigation and simplicity

Four ordinary links at the top: Exercise 1, Exercise 2, Exercise 3, Exercise 4. Select the view using `?ex=1` through `?ex=4` and simple conditionals. Default and invalid selections show Ex4.

No useState, useEffect, other hooks, search, filtering, sorting, event handlers for application features, Redux, Context, React Router, API calls, Axios, or JavaScript abstractions. Keep props explicit; avoid object spreads, configuration objects, and helper functions.

## Design and images

- Dark navy/charcoal background, white text, one green accent.
- Clean rounded cards, subtle borders, readable typography and spacing.
- No gold FIFA cards, excessive gradients, animations, effects, or large shadows.
- PlayerCard uses Card.Img above Card.Body. All information is below the image. Name is strongest; team is secondary; nationality, jersey number, and age are smaller.
- MatchCard shows status, two logo URLs and team names, score, date, and time. No extra statistics or controls.
- Responsive grids: four player cards on desktop, two on tablet, one on mobile.
- Use stable HTTPS player-image and team-logo URLs directly in the arrays. No generated images, local asset system, or custom image-loading logic.
- Player profiles, fixtures, scores, and statuses are static examples, not real athlete records or live results. Image credits are recorded in IMAGE_SOURCES.md.

## Dependencies and repository

Runtime dependencies: React, React DOM, Bootstrap, React-Bootstrap. Keep the Vite/ESLint development tooling. Remove unused extras and add no dependencies without explicit approval.

Preserve a clean .gitignore, the package lockfile, and a concise README. Keep the repository ready for GitHub.

## Verification

Verify all four exercises independently, including the default page and exercise links. Confirm that props and map() are visible in the list components, React-Bootstrap Cards are used, and no hooks or feature state remain. Check desktop and mobile layouts, run lint, and run `npm run build`.
