# Axis Knowledge City — real-world navigation base

This is the verified outdoor-campus base extracted from the supplied Google Maps satellite screenshots dated 20 August 2026. It is the source of truth for the first navigation model; it intentionally does not invent rooms, entrances, or shortcuts that are not visible in the imagery.

## Reference position

- Campus reference: Axis Colleges Canteen/Cafeteria — approximately `26.3448578, 80.4527173`
- Western boundary / external approach: Varanasi–Kanpur Road (AH1 / NH-2)
- Internal road visible throughout the campus: Axis Ave

## Confirmed outdoor locations

| ID | Place | Zone in satellite view | Evidence |
| `main-gate` | Main Gate | south-west Axis Ave approach, near the AH1-facing side | user-confirmed map annotation |
|---|---|---|---|
| `architecture` | Axis Institute of Architecture | north-west of cafeteria | Google Maps label |
| `fashion` | Axis Institute of Fashion Technology | north-west of cafeteria | Google Maps label |
| `hospital` | Axis Hospital and Research Center | west of Architecture | Google Maps label |
| `park` | Axis Park | north of Architecture/Fashion | Google Maps label |
| `canteen` | Axis Colleges Canteen/Cafeteria | central-north campus | Google Maps label / pinned location |
| `colleges` | Axis Colleges | south-west of cafeteria | Google Maps label |
| `diploma` | Axis Institute of Diploma Engineering | south-east of cafeteria | Google Maps label |
| `pharmacy` | Axis Institute of Pharmacy | east of sports area | Google Maps label |
| `sports` | Outdoor sports courts | south-east of Diploma Engineering | visible courts |
| `bus-yard` | Bus parking yard | north-east of the main academic cluster | visible buses |
| `workshop` | Axis College Workshop | north-west campus, near AH1 | Google Maps label |

## Outdoor route network to model

1. **West approach:** AH1/Varanasi–Kanpur Road → campus-side internal approach.
2. **North academic corridor:** Hospital ↔ Architecture ↔ Fashion ↔ Canteen.
3. **Central Axis Ave:** Canteen ↔ Axis Colleges cluster ↔ Diploma Engineering.
4. **East activity corridor:** Diploma Engineering ↔ sports courts ↔ Pharmacy.
5. **North-east service corridor:** academic cluster ↔ bus yard.

## Data still required before claiming turn-by-turn accuracy

- Official main gate and any separate pedestrian gate
- Building entrances students actually use
- Which internal lanes are walkable, one-way, or restricted
- Hostels, administration, library, auditorium, departments, and room numbers
- Accessibility details: ramps, lifts, stairs, and wheelchair-friendly paths

The satellite image accurately gives building zones and outdoor-road geometry. The remaining details need a brief on-campus check, because they cannot be confirmed from satellite imagery alone.
