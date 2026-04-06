/**
 * ATP Mobile Lab 4900.00 — Equipment Enrichment Data
 *
 * This file maps experiment numbers to Smart Tray assignments,
 * and equipment name keywords to ATP part list codes and digital sensor alternatives.
 * Used by OverviewPane to enrich the equipment list display without modifying
 * the base experiment data files.
 */

// ─── Smart Tray assignments per experiment number ──────────────────────────

export const SMART_TRAYS: Record<number, string[]> = {
  // ── Physics: Mechanics ──────────────────────────────────────────
  1:  ['Mechanics'],
  2:  ['Mechanics'],
  3:  ['Mechanics'],
  4:  ['Mechanics'],
  5:  ['Mechanics'],
  6:  ['Mechanics'],
  8:  ['Mechanics'],
  9:  ['Mechanics'],
  10: ['Mechanics'],
  11: ['Mechanics'],
  12: ['Mechanics'],
  13: ['Mechanics'],
  14: ['Mechanics'],
  15: ['Mechanics'],
  16: ['Mechanics'],
  17: ['Mechanics'],
  18: ['Mechanics'],
  25: ['Mechanics'],
  // ── Physics: Heat ───────────────────────────────────────────────
  19: ['Heat'],
  20: ['Heat'],
  21: ['Heat'],
  22: ['Heat'],
  23: ['Heat'],
  24: ['Heat'],
  // ── Physics: Acoustics (forks from Acoustics; stands from Mechanics) ──
  26: ['Acoustics', 'Mechanics'],
  27: ['Acoustics', 'Mechanics'],
  28: ['Acoustics'],
  // ── Physics: Optics ─────────────────────────────────────────────
  29: ['Optics'],
  30: ['Optics'],
  31: ['Optics'],
  32: ['Optics'],
  33: ['Optics'],
  34: ['Optics'],
  35: ['Optics'],
  36: ['Optics'],
  // ── Physics: Magnetism ──────────────────────────────────────────
  37: ['Magnetism'],
  38: ['Magnetism'],
  39: ['Magnetism'],
  40: ['Magnetism'],
  // ── Physics: Electricity ────────────────────────────────────────
  41: ['Electricity'],
  42: ['Electricity'],
  // ── Chemistry: Matter & Solutions ───────────────────────────────
  101: ['Chemistry'],
  102: ['Chemistry'],
  103: ['Chemistry'],
  104: ['Chemistry'],
  105: ['Chemistry'],
  106: ['Chemistry'],
  107: ['Chemistry'],
  108: ['Chemistry'],
  109: ['Chemistry'],
  110: ['Chemistry'],
  // ── Chemistry: Acids & Bases ────────────────────────────────────
  111: ['Chemistry'],
  112: ['Chemistry'],
  113: ['Chemistry'],
  114: ['Chemistry'],
  115: ['Chemistry'],
  116: ['Chemistry'],
  117: ['Chemistry'],
  118: ['Chemistry'],
  119: ['Chemistry'],
  120: ['Chemistry'],
  // ── Chemistry: Gas Chemistry ────────────────────────────────────
  121: ['Chemistry'],
  122: ['Chemistry'],
  123: ['Chemistry'],
  124: ['Chemistry'],
  125: ['Chemistry'],
  126: ['Chemistry'],
  127: ['Chemistry'],
  128: ['Chemistry'],
  129: ['Chemistry'],
  130: ['Chemistry'],
  // ── Chemistry: Electrochemistry (electrodes + wires) ────────────
  131: ['Chemistry', 'Electricity'],
  132: ['Chemistry', 'Electricity'],
  133: ['Chemistry', 'Electricity'],
  134: ['Chemistry', 'Electricity'],
  135: ['Chemistry'],
  136: ['Chemistry', 'Electricity'],
  137: ['Chemistry', 'Electricity'],
  138: ['Chemistry', 'Electricity'],
  139: ['Chemistry'],
  140: ['Chemistry'],
  // ── Chemistry: Plant Physiology ─────────────────────────────────
  141: ['Chemistry'],
  142: ['Chemistry'],
  143: ['Chemistry'],
  144: ['Chemistry'],
  145: ['Chemistry'],
  146: ['Chemistry'],
  147: ['Chemistry'],
  148: ['Chemistry'],
  149: ['Chemistry'],
  150: ['Chemistry'],
}

// ─── Sensor alternative definitions ───────────────────────────────────────

export interface SensorAlternative {
  name: string
  description: string
}

const S_TEMPERATURE: SensorAlternative = {
  name: 'Temperature Sensor',
  description: 'Connect to data logger for real-time temperature graphs',
}
const S_PHOTOGATE: SensorAlternative = {
  name: 'Photogate Sensor',
  description: 'Automatic timing with light-gate precision (±0.001 s)',
}
const S_FORCE: SensorAlternative = {
  name: 'Force Sensor',
  description: 'Measure forces digitally with real-time graphing',
}
const S_VOLTAGE: SensorAlternative = {
  name: 'Voltage Sensor',
  description: 'Continuous voltage logging with graphing',
}
const S_CURRENT_VOLTAGE: SensorAlternative = {
  name: 'Current Sensor + Voltage Sensor',
  description: 'Separate probes for simultaneous current and voltage data',
}
const S_PH: SensorAlternative = {
  name: 'pH Sensor',
  description: 'Continuous pH measurement with 0.01 precision',
}
const S_ROTARY: SensorAlternative = {
  name: 'Rotary Motion Sensor',
  description: 'Measure angles and angular velocity digitally',
}
const S_MAGNETIC: SensorAlternative = {
  name: 'Magnetic Field Sensor',
  description: 'Quantitative field strength measurement in Tesla',
}
const S_DISTANCE: SensorAlternative = {
  name: 'Ultrasonic Distance Sensor',
  description: 'Track position, velocity, and acceleration in real time',
}

// ─── Code & sensor rules ───────────────────────────────────────────────────
// Each rule: if any of `terms` appears as a substring (case-sensitive) in the
// equipment item name → apply `code` and/or `sensor`.

export interface EquipmentRule {
  terms: string[]
  code?: string
  sensor?: SensorAlternative
}

export const EQUIPMENT_RULES: EquipmentRule[] = [
  // ── Mechanics: Levers & masses ──────────────────────────────────────────
  { terms: ['Lever bar', 'Lever Holed', 'balance arm', 'Beam balance'],   code: '4114.13' },
  { terms: ['S-hook', 'S-hooks'],                                          code: '4113.35' },
  { terms: ['Cylindrical mass', 'Cylindrical masses'],                     code: '4111.08, 4111.10, 4111.12' },
  { terms: ['Tare mass (310 mg)'],                                         code: '2221.16' },
  { terms: ['Test masses (10 g', 'Masses (10 g'],                         code: '4111.08, 4111.10, 4111.12' },
  { terms: ['Masses (50 g', 'Masses (65 g', 'Masses (10–100',
            'Mass (measured', 'Masses (100', 'Masses (150',
            'Masses (200'],                                                 code: '4111.08, 4111.10, 4111.12, 2221.32' },
  { terms: ['Mass hanger'],                                                code: '4111.56' },
  { terms: ['Slotted Mass'],                                               code: '4111.51' },
  { terms: ['Scale Pan'],                                                  code: '4113.27' },
  // ── Mechanics: Measurement ──────────────────────────────────────────────
  { terms: ['Vernier caliper', 'Vernier calliper'],                        code: '2213.10' },
  { terms: ['Goniometric circle'],                                         code: '2216.10', sensor: S_ROTARY },
  { terms: ['Tape measure', 'Millimetre ruler'],                           code: '2211.10' },
  { terms: ['Ruler or metre', 'Ruler (mm'],                               code: '2211.10' },
  { terms: ['Stopwatch', 'Digital chronometer'],                           code: '2231.52', sensor: S_PHOTOGATE },
  { terms: ['Timer (1 min'],                                               code: '2231.52', sensor: S_PHOTOGATE },
  { terms: ['Measuring cylinder (10'],                                     code: '1226.00' },
  { terms: ['Measuring cylinder (50'],                                     code: '1226.15' },
  // ── Mechanics: Springs & pulleys ────────────────────────────────────────
  { terms: ['Helical spring', 'Steel Spring'],                             code: '4110.81' },
  { terms: ['Spring dynamometer', 'spring dynamometer',
            'Spring balance', 'spring balance'],                           code: '4110.21', sensor: S_FORCE },
  { terms: ['Fixed pulley on support', 'Fixed pulley (for',
            'Fixed pulley (guide)'],                                       code: '4112.10' },
  { terms: ['Movable pulley'],                                             code: '4112.24' },
  { terms: ['Differential Pulley'],                                        code: '4112.40' },
  { terms: ['Inextensible string', 'Polyester string',
            'String', 'string'],                                           code: '4113.20' },
  // ── Mechanics: Support hardware ─────────────────────────────────────────
  { terms: ['Inclined plane'],                                             code: '5491.11' },
  { terms: ['Clamp and stand', 'Support stand', 'Bosshead'],              code: '5401.22, 5408.81.L500' },
  // ── Mechanics: Fluids ───────────────────────────────────────────────────
  { terms: ['Communicating vessel', 'communicating tube',
            'communicating tubes'],                                        code: '4180.60' },
  { terms: ['Coloured water', 'Food Colouring'],                          code: '4207.56' },
  // ── Heat ────────────────────────────────────────────────────────────────
  { terms: ['Thermometer', 'thermometer'],                                 code: '2240.15', sensor: S_TEMPERATURE },
  { terms: ['Calorimeter', 'Mixing Calorimeter'],                         code: '4230.60' },
  { terms: ['Specific heat cylinders', 'Metal samples (steel, copper)',
            'Copper cylinder', 'Iron cylinder', 'Steel cylinder',
            'Brass cylinder', 'Metal cylinders'],                          code: '4230.96' },
  { terms: ['Pulse glass'],                                                code: '4210.50' },
  { terms: ['Spirit burner', 'Bunsen burner', 'Camping Burner'],          code: '4999.52' },
  { terms: ['Tripod stand'],                                               code: '5533.10' },
  { terms: ['Wire gauze'],                                                 code: '5534.25' },
  // ── Acoustics ───────────────────────────────────────────────────────────
  { terms: ['Tuning fork', 'tuning fork'],                                 code: '4317.40' },
  // ── Optics ──────────────────────────────────────────────────────────────
  { terms: ['Biconvex lens', 'biconvex lens', 'Set of biconvex',
            'Converging lens', 'Short focal length lens',
            'Medium focal length lens', 'Long focal length lens'],         code: '4445.00' },
  { terms: ['Biconcave lens', 'biconcave lens', 'Set of biconcave'],      code: '4441.00' },
  { terms: ['Projector', 'Halogen lamp', 'Illuminated object (lamp',
            'White light source'],                                         code: '4414.18' },
  { terms: ['White metal screen', 'Screen (white', 'White screen'],       code: '4418.35' },
  { terms: ['Equilateral glass prism', 'Glass equilateral prism'],        code: '4450.10' },
  { terms: ['Object slide with arrow', 'Holder for slides'],              code: '4414.03' },
  { terms: ['Concave mirror'],                                             code: '4435.00' },
  { terms: ['Convex mirror'],                                              code: '4431.00' },
  { terms: ['Hartl disk', 'Hartl Disk'],                                  code: '4419.01' },
  { terms: ['Diaphragm', 'diaphragm'],                                     code: '4414.12' },
  { terms: ['Slider for holder', 'Slider for projector'],                 code: '4417.01' },
  // ── Magnetism ───────────────────────────────────────────────────────────
  { terms: ['bar magnet', 'Bar magnet', 'bar magnets', 'Bar magnets',
            'Plastic Cased Bar Magnet'],                                   code: '4611.40' },
  { terms: ['U-shaped (horseshoe)', 'Horseshoe', 'horseshoe'],            code: '4611.71' },
  { terms: ['U Shaped Magnet', 'U-shaped magnet'],                        code: '4611.71' },
  { terms: ['2D field chamber', 'Magnetic Field Chamber',
            'field chamber'],                                              code: '4611.10' },
  { terms: ['Iron filling', 'Iron Filling', 'iron filing', 'iron filings'], code: '4612.12' },
  { terms: ['Demonstration compass', 'Magnetic compass',
            'Compass (to identify', 'compass'],                            code: '4614.50', sensor: S_MAGNETIC },
  // ── Electricity ─────────────────────────────────────────────────────────
  { terms: ['Voltmeter', 'voltmeter'],                                     code: '4762.60', sensor: S_VOLTAGE },
  { terms: ['Digital Multimeter', 'Digital multimeter',
            'Ammeter and voltmeter', 'Ammeter (mA'],                      code: '2275.10', sensor: S_CURRENT_VOLTAGE },
  { terms: ['Resistor ~100', 'Resistors R₁ = R₂ = 100',
            'Two resistors'],                                              code: '4763.18' },
  { terms: ['Resistor 220', 'Resistor 470', 'Resistor 1 k',
            'Resistor 4.7'],                                              code: '4763.20' },
  { terms: ['Stackable Plug Lead', 'Connecting wires'],                   code: '2522.02, 2522.07' },
  { terms: ['Breadboard', 'Boards for Electricity', 'circuit board'],    code: '4762.02' },
  { terms: ['Bulb Lamp', 'Bulb lamp', 'Lamp holder'],                    code: '2505.61' },
  { terms: ['Crocodile clip', 'Alligator clip connecting'],               code: '2531.52' },
  { terms: ['Cell Holder', 'Two Cell'],                                   code: '4762.28' },
  { terms: ['Toggle Switch', 'Push Button Switch'],                       code: '4762.70' },
  // ── Chemistry: Glassware ────────────────────────────────────────────────
  { terms: ['Electronic balance', 'Analytical balance',
            'Balance (±0.01', 'Balance to weigh'],                        code: '2219.30' },
  { terms: ['Test tube', 'test tube'],                                     code: '1473.60' },
  { terms: ['Sealed Erlenmeyer flask (250', 'Conical flask (250',
            'Round-bottom flask', 'Erlenmeyer flask (250'],               code: '1322.20' },
  { terms: ['Conical flask (150', 'Conical flask with bung'],             code: '1322.10' },
  { terms: ['Beaker (50', 'Beaker low form 50'],                         code: '1118.15' },
  { terms: ['Beaker (100', '(100 mL)', '100 mL x', '(100ml)'],          code: '1118.20' },
  { terms: ['Beaker (250', 'Beaker of hot water (~60', '(250 mL)'],      code: '1118.35' },
  { terms: ['Beaker (500', '(500 mL)', 'Large beaker', 'large beaker',
            'Beakers of water', 'Beaker of NaHCO₃'],                     code: '1118.50' },
  { terms: ['Graduated cylinder (100', 'Graduated Cylinder'],            code: '1226.15' },
  { terms: ['Dropper pipette', 'Dropping Pipette', 'Dropper with'],      code: '1441.50' },
  { terms: ['Graduated pipette', 'Pipette (25 mL'],                      code: '1436.40' },
  { terms: ['Graduated pipette (1'],                                      code: '1436.36' },
  { terms: ['Stirring rod', 'Stirring Glass rod', 'stirring rod'],       code: '1444.10' },
  { terms: ['Evaporating dish'],                                           code: '1920.15' },
  { terms: ['Porcelain mortar', 'Mortar and pestle', 'mortar'],          code: '1951.05' },
  { terms: ['Watch Glass'],                                               code: '1489.05' },
  { terms: ['Petri dish', 'Petri Dish', 'Petri dishes'],                 code: '1253.00' },
  { terms: ['Funnel for Liquid', 'funnels', 'funnel'],                   code: '1343.15' },
  { terms: ['Filter paper'],                                              code: '8340.08' },
  { terms: ['Separating funnel'],                                          code: '1359.00' },
  { terms: ['Volumetric flask'],                                           code: '1337.15' },
  { terms: ['Glass funnel', 'Glass Funnel'],                              code: '1343.15' },
  { terms: ['Delivery tube', 'glass delivery tube', 'Glass delivery'],   code: '1468.02' },
  { terms: ['Rubber stopper', 'Rubber bung', 'rubber stopper',
            'One-hole rubber stopper', 'One hole rubber'],                code: '5450.08' },
  { terms: ['Test tube rack', 'test tube rack', 'rack'],                 code: '1680.06' },
  // ── Chemistry: pH & safety ──────────────────────────────────────────────
  { terms: ['pH paper', 'pH meter or pH', 'pH meter or narrow',
            'Litmus', 'litmus', 'Universal indicator solution',
            'Universal Litmus'],                                           code: '8884.02', sensor: S_PH },
  { terms: ['Safety goggles', 'Goggles'],                                 code: '2148.25' },
  { terms: ['Vinyl Gloves', 'Gloves'],                                    code: '2162.16' },
  // ── Chemistry: Support hardware ─────────────────────────────────────────
  { terms: ['Retort stand', 'Iron Stand', 'retort stand'],                code: '5404.52' },
  { terms: ['Extension Clamp', 'Extension clamp'],                        code: '5416.20' },
  { terms: ['Right Angle Clamp', 'Right angle clamp'],                   code: '5401.16' },
  { terms: ['Test tube holder', 'Hardwood test tube'],                   code: '5423.30' },
  { terms: ['Spatula', 'spatula'],                                         code: '5460.34' },
  { terms: ['Mohr clip'],                                                  code: '5431.05' },
  { terms: ['Cork stopper'],                                               code: '5453.20' },
  { terms: ['Cork Borer'],                                                 code: '5453.82' },
  { terms: ['Triangle for crucibles'],                                     code: '5535.04' },
  { terms: ['Silicone tubing', 'silicon tubing'],                         code: '5449.25.L2000' },
  // ── Chemistry: Electrodes ───────────────────────────────────────────────
  { terms: ['Platinum electrode', 'Carbon or platinum'],                  code: '4716.12' },
  { terms: ['Zinc electrode', 'Zinc nails', 'Zinc foil', 'Zinc foil',
            'Zinc strip', 'Zinc and copper', 'Zinc granules',
            'zinc', 'Zinc'],                                               code: '4716.16' },
  { terms: ['Copper electrode', 'Copper strip (anode)',
            'Copper foil', 'Two copper electrodes', 'copper electrodes',
            'copper coins'],                                               code: '4716.21' },
  { terms: ['Iron electrode', 'Iron nail', 'Iron nails',
            'iron nail', 'iron nails'],                                    code: '4716.23' },
  { terms: ['Lead electrode'],                                             code: '4716.24' },
  { terms: ['Test cells cover'],                                           code: '4718.10' },
  // ── Chemistry: Burners ──────────────────────────────────────────────────
  { terms: ['Camping Burner', 'Bunsen burner', 'spirit burner',
            'Bunsen', 'hot plate', 'Hot plate', 'Hotplate',
            'Hotplate or Bunsen'],                                         code: '4999.52' },
  // ── Chemistry: Biology / Plant Physiology ───────────────────────────────
  { terms: ['Microscope'],                                                 code: '8542.12' },
  { terms: ['Microscope slide', 'microscope slides', 'Microscope slides'], code: '1388.00' },
  { terms: ['Cover glass', 'coverslip', 'Coverslip'],                     code: '1397.05' },
  { terms: ['Scalpel'],                                                    code: '8262.02' },
  { terms: ['Dissecting'],                                                 code: '8267.15' },
  { terms: ['Metal tweezers', 'tweezers', 'forceps', 'Forceps'],         code: '8261.30' },
  { terms: ['Osmotic pressure apparatus'],                                 code: '4182.62' },
  { terms: ['Double Osmotic membrane'],                                    code: '4182.61' },
  // ── Chemistry: Chemical reagents ────────────────────────────────────────
  { terms: ['Chemical reagents'],                                          code: '0001.40' },
  // ── Chemistry: Voltmeter / multimeter (may also appear in chem) ────────
  { terms: ['Digital voltmeter', 'Voltmeter (digital'],                   code: '2275.10', sensor: S_VOLTAGE },
]

/**
 * Look up ATP code and sensor alternative for a given equipment item name.
 * Returns the FIRST matching rule.
 */
export function lookupEquipment(name: string): { code?: string; sensor?: SensorAlternative } {
  for (const rule of EQUIPMENT_RULES) {
    if (rule.terms.some((t) => name.includes(t))) {
      return { code: rule.code, sensor: rule.sensor }
    }
  }
  return {}
}
