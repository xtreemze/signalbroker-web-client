const services = () => {
    return [ // from https://en.wikipedia.org/wiki/OBD-II_PIDs
        [],
        [ // Service 1
            'PIDs supported [01-20]', // 0 PID Dec
            'Monitor status since DTCs cleared. (Includes malfunction indicator lamp (MIL) status and number of DTCs.)',
            'Freeze DTC',
            'Fuel system status',
            'Calculated engine load',
            'Engine coolant temperature',
            'Short term fuel trim-- Bank 1',
            'Long term fuel trim-- Bank 1',
            'Short term fuel trim-- Bank 2',
            'Long term fuel trim-- Bank 2',
            'Fuel pressure',
            'Intake manifold absolute pressure',
            'Engine RPM',
            'Vehicle speed',
            'Timing advance',
            'Intake air temperature',
            'MAF air flow rate',
            'Throttle position',
            'Commanded secondary air status',
            'Oxygen sensors present (in 2 banks)',
            'Oxygen Sensor 1 A: Voltage B: Short term fuel trim',
            'Oxygen Sensor 2 A: Voltage B: Short term fuel trim',
            'Oxygen Sensor 3 A: Voltage B: Short term fuel trim',
            'Oxygen Sensor 4 A: Voltage B: Short term fuel trim',
            'Oxygen Sensor 5 A: Voltage B: Short term fuel trim',
            'Oxygen Sensor 6 A: Voltage B: Short term fuel trim',
            'Oxygen Sensor 7 A: Voltage B: Short term fuel trim',
            'Oxygen Sensor 8 A: Voltage B: Short term fuel trim',
            'OBD Standards this vehicle conforms to',
            'Oxygen sensors present (in 4 banks)',
            'Auxiliary input status',
            'Run time since engine start',
            'PIDs supported [21 - 40]',
            'Distance traveled with malfunction indicator lamp (MIL) on',
            'Fuel Rail Guage Pressure (diesel, or gasoline direct injection)',
            'Oxygen Sensor 1 AB: Fuel--Air Equivalence Ratio CD: Voltage',
            'Oxygen Sensor 2 AB: Fuel--Air Equivalence Ratio CD: Voltage',
            'Oxygen Sensor 3 AB: Fuel--Air Equivalence Ratio CD: Voltage',
            'Oxygen Sensor 4 AB: Fuel--Air Equivalence Ratio CD: Voltage',
            'Oxygen Sensor 5 AB: Fuel--Air Equivalence Ratio CD: Voltage',
            'Oxygen Sensor 6 AB: Fuel--Air Equivalence Ratio CD: Voltage',
            'Oxygen Sensor 7 AB: Fuel--Air Equivalence Ratio CD: Voltage',
            'Oxygen Sensor 8 AB: Fuel--Air Equivalence Ratio CD: Voltage',
            'Commanded EGR',
            'EGR Error',
            'Commanded evaporative purge',
            'Fuel Tank Level Input',
            'Warm-ups since codes cleared',
            'Distance traveled since codes cleared',
            'Evap. System Vapor Pressure',
            'Absolute Barometric Pressure',
            'Oxygen Sensor 1 AB: Fuell--Air Equivalence Ratio CD: Current',
            'Oxygen Sensor 2 AB: Fuell--Air Equivalence Ratio CD: Current',
            'Oxygen Sensor 3 AB: Fuell--Air Equivalence Ratio CD: Current',
            'Oxygen Sensor 4 AB: Fuell--Air Equivalence Ratio CD: Current',
            'Oxygen Sensor 5 AB: Fuell--Air Equivalence Ratio CD: Current',
            'Oxygen Sensor 6 AB: Fuell--Air Equivalence Ratio CD: Current',
            'Oxygen Sensor 7 AB: Fuell--Air Equivalence Ratio CD: Current',
            'Oxygen Sensor 8 AB: Fuell--Air Equivalence Ratio CD: Current',
            'Catalyst Temperature Bank 1, Sensor 1',
            'Catalyst Temperature Bank 2, Sensor 1',
            'Catalyst Temperature Bank 1, Sensor 2',
            'Catalyst Temperature Bank 2, Sensor 2',
            'PIDs supported [41 - 60]',
            'Monitor status this drive cycle',
            'Control module voltage',
            'Absolute load value',
            'Fuel--Air commanded Equivalence ratio',
            'Relative throttle position',
            'Ambient air temperature',
            'Absolute throttle position B',
            'Absolute throttle position C',
            'Absolute throttle position D',
            'Absolute throttle position E',
            'Absolute throttle position F',
            'Commanded throttle actuator',
            'Time run with MIL on',
            'Time since trouble codes cleared',
            'Maximum value for Fuel--Air equivalence ratio, oxygen sensor voltage, oxygen sensor current, and intake manifold absolute pressure',
            'Maximum value for air flow rate from mass air flow sensor',
            'Fuel Type',
            'Ethanol fuel %',
            'Absolute Evap system Vapor Pressure',
            'Evap syustem vapor pressure',
            'Short term secondary oxygen sensor trim, A: bank 1, B: bank 3',
            'Long term secondary oxygen sensor trim, A: bank 1, B: bank 3',
            'Short term secondary oxygen sensor trim, A: bank 2, B: bank 4',
            'Long term secondary oxygen sensor trim, A: bank 2, B: bank 4',
            'Fuel rail absolute pressure',
            'Relative accelerator pedal position',
            'Hybrid battery pack remaining life',
            'Engine oil temperature',
            'Fuel injection timing',
            'Engine fuel rate',
            'Emission requirements to which vehicle is designed',
            'PIDs supported [61 - 80]',
            "Driver's demand engine - percent torque",
            'Actual engine - percent torque',
            'Engine reference torque',
            'Engine percent torque data',
            'Auxiliary input / output supported',
            'Mass air flow sensor',
            'Engine coolant temperature',
            'Intake air temperature sensor',
            'Commanded EGR and EGR Error',
            'Commanded Diesel intake air flow control and relative intake air flow position',
            'Exhaust gas recirculation temperature',
            'Commanded throttle actuator control and relative throttle position',
            'Fuel pressure control system',
            'Injection pressure control system',
            'Turbocharger compressor inlet pressure',
            'Boost pressure control',
            'Variable Geometry turobo (VGT) control',
            'Wastegate control',
            'Exhaust pressure',
            'Turbocharger RPM',
            'Turbocharger temperature',
            'Turbocharger temperature',
            'Charge air cooler temperature (CACT)',
            'Exhaust Gas temperature (EGT) Bank 1',
            'Exhaust Gas temperature (EGT) Bank 2',
            'Diesel particulate filter (DPF)',
            'Diesel particulate filter (DPF)',
            'Diesel particulate filter (DPF) temperature',
            'NOx NTE (Not-To-Exceed) control area status',
            'PM NTE (Not-To-Exceed) control area status',
            'Engine run time',
            'PIDs supported [81 - A0]',
            'Engine run time for Auxiliary Emissions Control Device(AECD)',
            'Engine run time for Auxiliary Emissions Control Device(AECD)',
            'NOx sensor',
            'Manifold surface temperature',
            'NOx reagent system',
            'Particulate matter (PM) sensor',
            'Intake manifold absolute pressure',
            'SCR Induce System',
            'Run Time for AECD #11-#15',
            'Run Time for AECD #16-#20',
            'Diesel Aftertreatment',
            'O2 Sensor (Wide Range)',
            'Throttle Position G',
            'Engine Friction - Percent Torque',
            'PM Sensor Bank 1 & 2',
            'WWH-OBD Vehicle OBD System Information',
            'WWH-OBD Vehicle OBD System Information',
            'Fuel System Control',
            'WWH-OBD Vehicle OBD Counters support',
            'NOx Warning and Inducement System',
            'Exhaust Gas Temperature Sensor',
            'Exhaust Gas Temperature Sensor',
            'Hybrid/EV Vehicle System Data, Battery, Voltage',
            'Diesel Exhaust Fluid Sensor Data',
            'O2 Sensor Data',
            'Engine Fuel Rate',
            'Engine Exhaust Flow Rate',
            'Fuel System Percentage Use',
            'PIDs supported [A1 - C0]',
            'NOx Sensor Corrected Data',
            'Cylinder Fuel Rate',
            'Evap System Vapor Pressure',
            'Transmission Actual Gear',
            'Diesel Exhaust fluid Dosing',
            'Odometer',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            'PIDs supported [C1 - E0]',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
            '?',
        ],
        ['', '', 'DTC that caused freeze frame to be stored'], // Service 2
        [], // Service 3
        [], // Service 4
        [], // Service 5
        [], // Service 6
        [], // Service 7
        [], // Service 8
        [ // Service 9
            'Service 9 supported PIDs [01 - 20]',
            'VIN Message Count in PID 02',
            'Vehicle Identification Number (VIN)',
            'Calibration ID message count for PID 04',
            'Calibration ID',
            'Calibration Verification numbers (CVN) message count for PID 06',
            'Calibration Verification numbers (CVN) Several CVN can be outputed',
            'In-use performance tracking message count for PID 08 and 0B',
            'In-use performance tracking for spark ignition vehicles',
            'ECU name message count for PID 0A',
            'ECU name',
            'In-use performance tracking for compression ignition vehicles',
        ], // Service 9
        [], // Service 10
        [], // Service 11
        [], // Service 12
        [], // Service 13
        [], // Service 14
        [], // Service 15
        [], // Service 16
        [], // Service 17
        [], // Service 18
        [], // Service 19
        [], // Service 20
        [], // Service 21
        [], // Service 22
        [], // Service 23
        [], // Service 24
        [], // Service 25
        [], // Service 26
        [], // Service 27
        [], // Service 28
        [], // Service 29
        [], // Service 30
        [], // Service 31
        [], // Service 32
        [], // Service 33
        [ // Service 34
            '?', // 0
        ], // Service 34
    ]
}
export default services