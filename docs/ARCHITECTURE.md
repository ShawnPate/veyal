# VEYAL — Architecture Notes

This is a proposed lightweight architecture. Adjust it as prototypes reveal actual needs.

## Principles

- Keep the game runnable from local files where browser security permits.
- Separate simulation, rendering, controls, and map generation.
- Keep simulation deterministic where practical.
- Avoid framework or dependency commitments until needed.
- Make subsystems replaceable.

## Suggested module boundaries

- **Map generation:** seeded random generator, ground elevation, water placement, source placement, validation.
- **Simulation state:** cell data, structures, sources, energy, overall game state.
- **Fluid simulation:** Ooze production/spreading, water movement, displacement and boundary rules.
- **Combat:** targeting, firing schedules, damage, source destruction, Ooze removal.
- **Rendering:** canvas drawing of terrain, fluids, structures, effects, and overlays.
- **Input/UI:** selection, placement, pause, speed, seed controls, status panels.
- **Persistence:** later, serialise settings, scenarios, and saved games.

## Performance

- Use a fixed or bounded simulation timestep rather than tying simulation speed to frame rate.
- Separate rendering frequency from simulation frequency.
- Track changed cells or regions when practical.
- Avoid expensive global fluid recalculation after every weapon event.
- Measure performance before adding workers, WebAssembly, or complex optimisation.
- Keep map dimensions configurable for tests.

## Testing

Use deterministic small cases and diagnostics for:
- same seed produces the same terrain/source positions;
- source count and placement constraints;
- fluid depths never become invalid or negative;
- water volume is conserved except for explicit boundary flows;
- Ooze removal does not change ground elevation;
- win/loss conditions trigger correctly;
- pausing stops simulation updates.

## Data model sketch

Each cell conceptually contains permanent `groundHeight`, mutable `waterDepth`, mutable `oozeDepth`, and optional terrain/building identifiers. Typed arrays may help performance after the model stabilises. Document units.

## Avoid premature complexity

Do not begin with a full ECS, elaborate plugin loader, external backend, or realistic fluid solver. First build a small, understandable, testable game loop.
