# VEYAL — Decision Log

Record important decisions here so implementation does not accidentally reverse them. Add dated entries when new decisions are agreed.

## Initial baseline

### Identity
- Project: **VEYAL**.
- Threat: **Veyal Ooze**.
- Lore includes the discovery of the first sample by Viktor Veyal.
- VEYAL is independent, not an official remake of another game.

### Licence and delivery
- Chosen licence: GNU GPL version 3.
- Target: browser-based HTML5/JavaScript.
- Core gameplay should not require a server, account, external API, or internet connection.
- Community contributions are welcome.

### Terrain
- Initial representation is a grid.
- Every cell has permanent underlying ground elevation.
- Ooze growth/removal never changes ground elevation.
- At least 80% of each map is land; water occupies no more than 20%.
- Terrain Intensity is planned near -100 to +100; 0 preserves base elevation differences.

### Sources
- Default target: five sources per level.
- Map-size variation: approximately three to seven sources.
- Place sources above median ground elevation.
- Use ground elevation, not water-surface elevation, to calculate the median.
- Sources continue producing Ooze while submerged.
- Submerging a source does not disable it.

### Water and Ooze
- Ooze is much denser than water.
- Water and Ooze occupy distinct vertical layers.
- Ooze accumulates below water in low areas and displaces water; it does not convert water.
- Ooze above water level may spread across land and displace water.
- Water can back up behind a blockage and may find an alternate route.
- Use a simplified hydraulic approximation, not full fluid dynamics.
- Conserve water except for explicit map-boundary inflows/outflows.
- When Ooze is removed, water should flow into newly available space.

## Changing a decision

1. State the old rule.
2. State the new rule.
3. Explain why it changed.
4. Update `GAME_DESIGN.md` and affected code/tests.
