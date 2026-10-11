# VEYAL

**An open-source, browser-based real-time strategy game about holding back an advancing, living terrain threat.**

VEYAL is an independent game with original code, rules, art, terminology, and presentation. It takes inspiration from the broad strategy-game idea of defending territory against a spreading fluid-like threat; it is not an official remake of any existing game.

## The premise

Nobody knows how the Veyal Ooze got here, or where it came from.

We know only that, on the day Viktor Veyal discovered the first sample frozen in the tundra, everything changed.

Perhaps Viktor was too curious. Perhaps some things were never meant to be found. Perhaps they should have left that first sample frozen.

But the Ooze has spread, and it will stop at nothing.

Now, across an increasingly hostile world, new sources emerge without warning. Each one feeds the growing mass, threatening to overwhelm everything in its path.

There is no cure. No way to reason with it. No guarantee that any defence will hold.

All we can do now is survive, push back the advancing Ooze, and destroy every source before it is too late.

## Project goals

- Play directly in a modern browser.
- Prefer local/offline play; no mandatory account, server, or external API.
- Build a readable, testable simulation.
- Generate replayable maps from seeds.
- Make terrain, water, energy, structures, and Ooze interact meaningfully.
- Eventually support optional real-world elevation data and community-created scenarios.
- Welcome contributions under GNU GPL version 3.

## Current status

**Early scaffold.** The included page is a runnable terrain-preview prototype, not yet a complete strategy game. The fluid simulation, energy economy, structures, combat, and victory/defeat loop are future milestones.

## Run locally

1. Download or clone the repository.
2. Open `index.html` in a modern desktop browser.

The scaffold uses local files and has no build step or backend. If browser restrictions become an issue as development grows, a simple local static server may be used; the core game should not require a backend.

## Project documents

- [Game design](docs/GAME_DESIGN.md)
- [Roadmap](docs/ROADMAP.md)
- [Architecture notes](docs/ARCHITECTURE.md)
- [Decision log](docs/DECISIONS.md)
- [Contributing](CONTRIBUTING.md)

## Guiding principles

1. Playable early: each milestone should leave the project runnable.
2. Simulation before spectacle: establish understandable rules before visual complexity.
3. Performance matters: update affected regions where practical.
4. Deterministic where possible: a seed should reproduce a map.
5. Offline-first: core play should not depend on third-party services.
6. Clean-room development: use original code and properly licensed assets.

## License

VEYAL is intended to be distributed under the GNU General Public License, version 3. See `LICENSE`.
