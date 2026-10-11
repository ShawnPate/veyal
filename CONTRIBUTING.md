# Contributing to VEYAL

Thanks for your interest in helping build VEYAL. The project is in an early stage, so focused, well-documented changes are especially valuable.

## Before starting

1. Read `README.md`.
2. Read `docs/GAME_DESIGN.md` for intended rules.
3. Check `docs/ROADMAP.md` to see what is in scope.
4. For a substantial feature, open a GitHub issue or discussion first.

## Principles

- Keep the game runnable after each change.
- Keep simulation, rendering, controls, and map generation separate.
- Do not add mandatory cloud services, accounts, analytics, or external APIs.
- Explain the need for any new dependency.
- Keep simulation rules explicit and testable.
- Preserve map-seed reproducibility where practical.
- Avoid full-map recalculation inside frequent simulation or weapon-update loops.
- Update documentation when changing rules.
- Use original code and original or appropriately licensed assets. Do not copy protected code, graphics, maps, audio, or other content from existing games.
- Be respectful and constructive.

## Suggested workflow

1. Fork the repository.
2. Create a branch for one change.
3. Implement the smallest useful version.
4. Test in a modern desktop browser.
5. Describe the change, how it was tested, and known limitations.
6. Open a pull request.

## Code style

- Use readable, descriptive names.
- Prefer modern browser JavaScript.
- Avoid adding a framework without a clear need.
- Keep simulation logic separate from rendering and UI code.
- Comment on the reason for non-obvious rules rather than every line.
- Handle invalid input and edge cases deliberately.

## Useful bug reports

Include browser and operating system, steps to reproduce, expected and actual results, map seed if relevant, and screenshots where useful.
