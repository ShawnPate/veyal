# VEYAL — Roadmap

Every milestone should leave the game runnable. Progress is measured by working features, not calendar promises.

## Milestone 0 — Repository foundation

- [x] Public repository created.
- [x] GPL-3.0 selected.
- [ ] Review and add project documentation.
- [ ] Establish a browser entry point.
- [ ] Agree code organisation and testing approach.

**Exit criteria:** contributors can understand the project and run it locally.

## Milestone 1 — Playable simulation slice

- [ ] Generate a small terrain grid from a reproducible seed.
- [ ] Render terrain elevation.
- [ ] Add one Ooze source and source-driven spreading.
- [ ] Let the player place one defensive structure.
- [ ] Let the structure damage and destroy the source.
- [ ] Add a simple energy constraint.
- [ ] Add visible win/loss states.
- [ ] Add pause and restart controls.

**Exit criteria:** a player can start a map, understand the threat, build a defence, and win or lose.

## Milestone 2 — Terrain and fluid interaction

- [ ] Generate meaningful basins, ridges, and channels.
- [ ] Track water and Ooze independently.
- [ ] Implement the documented hydraulic approximation.
- [ ] Make Ooze displace water rather than convert it.
- [ ] Support water backing up and finding alternate routes where possible.
- [ ] Ensure removing Ooze leaves ground elevation unchanged and water can refill cleared space.
- [ ] Add water-volume and performance diagnostics.

**Exit criteria:** terrain and fluid interactions produce consistent, explainable outcomes.

## Milestone 3 — Tactics and replayability

- [ ] Add multiple sources, normally five and typically three to seven.
- [ ] Use median ground elevation for source placement.
- [ ] Add a small set of distinct structures.
- [ ] Add difficulty settings.
- [ ] Add map seed entry/copying.
- [ ] Add save/load if appropriate.
- [ ] Add survival mode after the core loop is stable.

**Exit criteria:** different seeds create varied, repeatable games with meaningful choices.

## Milestone 4 — Usability and polish

- [ ] Improve controls, tooltips, and feedback.
- [ ] Add clear displays for energy, sources, and threat.
- [ ] Add sound and effects after readability is reliable.
- [ ] Test performance on ordinary desktop hardware.
- [ ] Document browser support and limitations.

## Milestone 5 — Optional real-world terrain

- [ ] Select a suitable elevation-data source.
- [ ] Design location search and terrain preview.
- [ ] Convert elevation data to the game's grid format.
- [ ] Implement Terrain Intensity near -100 to +100.
- [ ] Handle import failures gracefully and retain offline procedural maps.
- [ ] Document attribution, caching, resolution, and limitations.

## Milestone 6 — Community scenarios

- [ ] Define a versioned scenario/map format.
- [ ] Allow import/export of custom maps.
- [ ] Document scenario creation.
- [ ] Consider extension points for structures and rules.
- [ ] Validate imported content; do not execute untrusted code by default.
- [ ] Establish compatibility guidelines.

## Non-goals for the early prototype

- Full scientific fluid dynamics.
- Mandatory multiplayer, accounts, or cloud services.
- Real-world elevation as a prerequisite.
- Many structures before the core loop is fun.
- Reuse of proprietary code or assets from existing games.
