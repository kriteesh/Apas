const QUESTIONS = [
  {
    "question": "What primarily drives the structural design of spacecraft?",
    "options": {
      "A": "Aesthetic preferences for spacecraft appearance.",
      "B": "Dynamic loads during launch and thermal requirements in orbit.",
      "C": "Reducing costs during spacecraft construction.",
      "D": "Standardized designs for commercial satellites."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is the main focus of spacecraft structure design?",
    "options": {
      "A": "Maximizing flexibility.",
      "B": "Increasing payload mass.",
      "C": "Achieving stiffness to decouple vibration modes.",
      "D": "Reducing material usage."
    },
    "correct_answer": "C"
  },
  {
    "question": "Why are the flexible vibration modes of spacecraft subsystems important?",
    "options": {
      "A": "To prevent interference with the spacecraft's onboard navigation systems.",
      "B": "To ensure compatibility with the launch vehicle's vibration modes.",
      "C": "To comply with universal spacecraft design standards.",
      "D": "To enhance the aesthetic appeal of the spacecraft."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is a major event affecting mechanical loads during the launch phase of a spacecraft?",
    "options": {
      "A": "Seismic loads on the launch site.",
      "B": "Thruster firing in orbit.",
      "C": "Engine cutoff and stage separation.",
      "D": "Impact load during landing."
    },
    "correct_answer": "C"
  },
  {
    "question": "Which of the following is a mechanical load experienced during the on-orbit phase?",
    "options": {
      "A": "Meteoroid impact.",
      "B": "SRB end of flight.",
      "C": "Aerodynamic fluctuating pressure.",
      "D": "Transportation loads."
    },
    "correct_answer": "A"
  },
  {
    "question": "What kind of mechanical loads can occur during the descent, entry, and landing phases of a spacecraft?",
    "options": {
      "A": "Seismic and wind loads.",
      "B": "Appendage deployment pyro shock.",
      "C": "Aerodynamic fluctuating pressure and impact loads.",
      "D": "Momentum wheel pump operation."
    },
    "correct_answer": "C"
  },
  {
    "question": "What is an example of a mechanical load caused by ground handling?",
    "options": {
      "A": "Wind turbulence at the launch site.",
      "B": "Transportation via truck or air.",
      "C": "LAM firing post-orbit.",
      "D": "Aerodynamic fluctuating pressure during descent."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which mechanical load can occur under 'Other Loads' during a spacecraft's lifetime?",
    "options": {
      "A": "Heat fluxes during descent.",
      "B": "Seismic loads and wind turbulence on the launch site.",
      "C": "Thruster and appendage deployment shock.",
      "D": "Meteoroid impacts and pump operation."
    },
    "correct_answer": "B"
  },
  {
    "question": "What are steady state static loads associated with?",
    "options": {
      "A": "Unsteady combustion and engine exhaust noise.",
      "B": "Uniform engine thrust, crosswind loads, and vehicle maneuvers.",
      "C": "Shock loads during stage separation.",
      "D": "Broadband random vibrations and sound pressures."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which type of mechanical loads are classified as low frequency sinusoidal vibrations and broadband random vibration?",
    "options": {
      "A": "Acoustic loads.",
      "B": "Mechanical dynamic loads.",
      "C": "Steady state static loads.",
      "D": "Enforced mechanical vibrations."
    },
    "correct_answer": "D"
  },
  {
    "question": "During which phases do acoustic loads typically occur?",
    "options": {
      "A": "Heavy turbulence at high altitudes.",
      "B": "Launch vehicle lift-off and transonic flight phase.",
      "C": "Spacecraft orbit insertion.",
      "D": "Stage separation events."
    },
    "correct_answer": "B"
  },
  {
    "question": "What typically excites high frequency shock loads?",
    "options": {
      "A": "Crosswind loads and vehicle maneuvers.",
      "B": "Engine exhaust noise and turbulent flows.",
      "C": "Pyro firings during stage and spacecraft separation.",
      "D": "Uniform engine thrust."
    },
    "correct_answer": "C"
  },
  {
    "question": "What is a characteristic of mechanical dynamic loads during a flight?",
    "options": {
      "A": "They are caused by steady and uniform thrust.",
      "B": "They involve turbulent flow and engine exhaust noise.",
      "C": "They occur during stage separations and rely on pyro firings.",
      "D": "They primarily happen during the orbital phase."
    },
    "correct_answer": "B"
  },
  {
    "question": "What are the primary loads experienced during lift-off?",
    "options": {
      "A": "High-frequency vibrations and moderate acoustic loads",
      "B": "Very low frequency sine and high intensity acoustic loads",
      "C": "Random thermal shocks from atmospheric layers",
      "D": "Continuous shocks from rapid deceleration"
    },
    "correct_answer": "B"
  },
  {
    "question": "What causes random vibrations during transonic flight and maximum dynamic pressure?",
    "options": {
      "A": "Thermal expansion of vehicle components",
      "B": "Boundary layer turbulence and acoustic noise excitations",
      "C": "Faulty structural designs of the vehicle",
      "D": "Electric disturbances in vehicle systems"
    },
    "correct_answer": "B"
  },
  {
    "question": "Which of the following best describes acoustic loads during lift-off?",
    "options": {
      "A": "Caused by vibrations within the vehicle",
      "B": "Result of high intensity ground reflections",
      "C": "Generated by boundary layer turbulence",
      "D": "Originating from transonic speeds"
    },
    "correct_answer": "B"
  },
  {
    "question": "What type of turbulence affects the exterior surface of the vehicle during maximum dynamic pressure?",
    "options": {
      "A": "Boundary layer turbulence",
      "B": "Shock wave turbulence",
      "C": "Thermal turbulence",
      "D": "Electromagnetic turbulence"
    },
    "correct_answer": "A"
  },
  {
    "question": "What are the predominant frequencies observed during engine cut-off?",
    "options": {
      "A": "Low frequency transients up to 50Hz",
      "B": "Low frequency transients up to 100Hz",
      "C": "High frequency transients beyond 300Hz",
      "D": "No significant transients observed"
    },
    "correct_answer": "B"
  },
  {
    "question": "What is the main characteristic of pressure oscillations inside the solid rocket booster (SRB) combustion chamber at the end of flight?",
    "options": {
      "A": "They are random and unpredictable.",
      "B": "They are predominantly of high frequency.",
      "C": "They are mainly harmonic and correspond to cavity acoustic modes.",
      "D": "They cease completely."
    },
    "correct_answer": "C"
  },
  {
    "question": "What forms the cavity whose acoustic modes affect the SRB pressure oscillations?",
    "options": {
      "A": "The fuel injectors and combustion chamber",
      "B": "The nozzle and surrounding air",
      "C": "The chamber formed by the strapon boosters",
      "D": "The launch pad structures"
    },
    "correct_answer": "C"
  },
  {
    "question": "What is the minimum global longitudinal frequency requirement for PSLV stiffness specifications?",
    "options": {
      "A": "20 Hz",
      "B": "30 Hz",
      "C": "40 Hz",
      "D": "50 Hz"
    },
    "correct_answer": "C"
  },
  {
    "question": "Which of the following is true about the global lateral frequency specification for PSLV?",
    "options": {
      "A": "It must be greater than 10 Hz.",
      "B": "It must be less than 40 Hz.",
      "C": "It must be exactly 18 Hz.",
      "D": "It must be greater than 18 Hz."
    },
    "correct_answer": "D"
  },
  {
    "question": "What is the purpose of the Dynamic Coupled Load Analysis (CLA) for a specific launch mission?",
    "options": {
      "A": "To design the spacecraft's external structure.",
      "B": "To predict the expected responses of the spacecraft during flight.",
      "C": "To adjust the orbit trajectory after launch.",
      "D": "To optimize the satellite's operational lifespan."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which inputs are required to perform the CLA for a launcher mission?",
    "options": {
      "A": "Previous measured flight loads and aerodynamic data.",
      "B": "Atmospheric pressure readings and spacecraft material properties.",
      "C": "The mathematical model of the launch vehicle (LV) and spacecraft.",
      "D": "Thermal degradation data of the spacecraft."
    },
    "correct_answer": "C"
  },
  {
    "question": "What do CLA results typically help in during the sine vibration test of the spacecraft?",
    "options": {
      "A": "Determining system power requirements.",
      "B": "Response limiting for the spacecraft.",
      "C": "Improving the spacecraftu2019s communication systems.",
      "D": "Adjusting the satellite payload configurations."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which of the following are important results obtained from the CLA for the spacecraft?",
    "options": {
      "A": "Electromagnetic properties and thermal responses.",
      "B": "Fuel consumption rates and material degradation.",
      "C": "Base forces, base moments, and responses at salient locations.",
      "D": "Aerodynamic performance and thermal ablation rates."
    },
    "correct_answer": "C"
  },
  {
    "question": "What do typical CLA results at the spacecraft interface include?",
    "options": {
      "A": "Thermal loading patterns.",
      "B": "Interface accelerations.",
      "C": "Power consumption metrics.",
      "D": "Communication signal delays."
    },
    "correct_answer": "B"
  },
  {
    "question": "What document typically specifies the mechanical design/test loads for spacecraft subsystems?",
    "options": {
      "A": "Structural Analysis Report (SAR)",
      "B": "Environmental Test Level Specifications (ETLS)",
      "C": "Launcher Load Requirements (LLR)",
      "D": "Subsystem Performance Guide (SPG)"
    },
    "correct_answer": "B"
  },
  {
    "question": "What factors are mechanical test loads for spacecraft subsystems based on?",
    "options": {
      "A": "Launcher loads, dynamic spacecraft characteristics, and mission event loads",
      "B": "Satellite orbit type and propulsion system requirements",
      "C": "Ground control systems and satellite signal strength",
      "D": "Solar panel efficiency and fuel consumption rates"
    },
    "correct_answer": "A"
  },
  {
    "question": "Who is responsible for generating the mechanical test levels for spacecraft subsystems?",
    "options": {
      "A": "Mission Operations Team",
      "B": "Propulsion Analysis Team",
      "C": "Satellite Structural Team",
      "D": "Thermal Systems Team"
    },
    "correct_answer": "C"
  },
  {
    "question": "Which of the following is NOT a type of mechanical test load for spacecraft subsystems?",
    "options": {
      "A": "Stiffness",
      "B": "Sine vibration",
      "C": "Data transmission rate",
      "D": "Shock and thermal"
    },
    "correct_answer": "C"
  },
  {
    "question": "What tool is typically used to predict the overall dynamic characteristics of the spacecraft?",
    "options": {
      "A": "Computational Fluid Dynamics (CFD)",
      "B": "Finite Element Analysis (FEA)",
      "C": "Mission Planning Software",
      "D": "Thermal Simulation Models"
    },
    "correct_answer": "B"
  },
  {
    "question": "What is the primary purpose of a Structural Test Model (STM)?",
    "options": {
      "A": "To conduct static and dynamic tests at qualification level.",
      "B": "To carry out thermal tests on the spacecraft.",
      "C": "To perform tests for payload compatibility.",
      "D": "To simulate space environment conditions."
    },
    "correct_answer": "A"
  },
  {
    "question": "Which model is designed for conducting dynamic tests at the acceptance level?",
    "options": {
      "A": "Structural Test Model (STM)",
      "B": "Qualification Model (QM)",
      "C": "Flight Model (FM)",
      "D": "Proto Flight Model (PFM)"
    },
    "correct_answer": "C"
  },
  {
    "question": "What is a key advantage of the Proto Flight Model (PFM) approach?",
    "options": {
      "A": "It enhances thermal resistance of the spacecraft.",
      "B": "It eliminates the need for qualification tests.",
      "C": "It reduces project schedule and cost.",
      "D": "It improves payload integration."
    },
    "correct_answer": "C"
  },
  {
    "question": "How is the Proto Flight Model (PFM) typically transitioned into the Flight Model (FM)?",
    "options": {
      "A": "Through repeat qualification-level tests.",
      "B": "By refurbishing the PFM for FM use.",
      "C": "With additional static tests at the dynamic level.",
      "D": "By replacing critical components with upgraded versions."
    },
    "correct_answer": "B"
  },
  {
    "question": "What type of testing is associated with a Qualification Model (QM)?",
    "options": {
      "A": "Static and thermal tests at acceptance level.",
      "B": "Dynamic tests at qualification level.",
      "C": "Environmental testing at spacecraft launch conditions.",
      "D": "Payload testing for compatibility analysis."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is the main purpose of structural testing?",
    "options": {
      "A": "To analyze environmental impacts on a structure.",
      "B": "To validate the load-carrying capability and mechanical integrity.",
      "C": "To improve the aesthetic appeal of structural models.",
      "D": "To redesign structures for better thermal resistance."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which type of tests are typically performed on full-scale models?",
    "options": {
      "A": "Mechanical property evaluation tests.",
      "B": "Environmental impact tests.",
      "C": "Qualification or design validation tests.",
      "D": "Shear load experimentation."
    },
    "correct_answer": "C"
  },
  {
    "question": "What determines the type of structural test method used?",
    "options": {
      "A": "The size of the structure being tested.",
      "B": "The type of load acting on the structure.",
      "C": "The environmental conditions during testing.",
      "D": "The budget allocated for testing procedures."
    },
    "correct_answer": "B"
  },
  {
    "question": "How are structural tests primarily categorized?",
    "options": {
      "A": "Axial and Shear tests.",
      "B": "Large scale and Small scale tests.",
      "C": "Static and Dynamic tests.",
      "D": "Nondestructive and Destructive tests."
    },
    "correct_answer": "C"
  },
  {
    "question": "What forms part of the success criteria for structural testing?",
    "options": {
      "A": "Visual design inspection.",
      "B": "Enhanced thermal efficiency.",
      "C": "Nondestructive evaluation tests and post-test checks.",
      "D": "The use of full-scale testing methods exclusively."
    },
    "correct_answer": "C"
  },
  {
    "question": "What materials are commonly used for spacecraft structural members' faceskin?",
    "options": {
      "A": "Titanium and stainless steel",
      "B": "Aluminum and CFRP",
      "C": "Copper and nickel alloys",
      "D": "Magnesium and glass fiber"
    },
    "correct_answer": "B"
  },
  {
    "question": "Which are considered major structural members of a spacecraft?",
    "options": {
      "A": "Fuel injectors and cooling systems",
      "B": "Navigation panels and solar arrays",
      "C": "Central cylinder, shear panels, and decks",
      "D": "Antennas and communication hubs"
    },
    "correct_answer": "C"
  },
  {
    "question": "How are subsystems like propellant tanks and electronic packages connected to the spacecraft?",
    "options": {
      "A": "Via welded joints",
      "B": "Through mounting inserts",
      "C": "Using magnetic couplings",
      "D": "With adhesive materials"
    },
    "correct_answer": "B"
  },
  {
    "question": "What is the primary purpose of designing spacecraft structural members and joints?",
    "options": {
      "A": "To maximize weight savings",
      "B": "To meet specific load requirements",
      "C": "To enable faster production",
      "D": "To reduce manufacturing costs"
    },
    "correct_answer": "B"
  },
  {
    "question": "What is the primary purpose of spacecraft structural tests?",
    "options": {
      "A": "To test the spacecraft's functionality in space.",
      "B": "To evaluate structural integrity under various conditions.",
      "C": "To improve the design of onboard software systems.",
      "D": "To ensure compatibility with launch vehicles."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which materials are characterized during spacecraft structural tests?",
    "options": {
      "A": "CFRP, stainless steel, and glass.",
      "B": "CFRP, Al. Alloy, and Sandwich structures.",
      "C": "Aluminum, titanium, and ceramics.",
      "D": "Fiberglass, carbon fiber, and iron alloys."
    },
    "correct_answer": "B"
  },
  {
    "question": "What kind of tests are performed at the spacecraft level?",
    "options": {
      "A": "Static load test and thermal distortions test.",
      "B": "Vibration, acoustic, and shock tests.",
      "C": "Short cylinder test and cylinder joint test.",
      "D": "Plate shear test and flat-wise tension test."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which of the following is an example of a special test mentioned in the text?",
    "options": {
      "A": "Insert pullout load test.",
      "B": "Modal test.",
      "C": "Thermal distortion test.",
      "D": "Flat wise tension test."
    },
    "correct_answer": "C"
  },
  {
    "question": "What type of test is repeated at spacecraft, subsystem, and component levels?",
    "options": {
      "A": "Short cylinder test.",
      "B": "Non-destructive testing (NDT).",
      "C": "Micro-vibration distortion test.",
      "D": "Joint characterization tests."
    },
    "correct_answer": "C"
  },
  {
    "question": "What type of test involves evaluating the vibration characteristics of a spacecraft?",
    "options": {
      "A": "Thermal distortion test",
      "B": "Spacecraft vibration test",
      "C": "Insert shear load test",
      "D": "Modal test"
    },
    "correct_answer": "B"
  },
  {
    "question": "Which of the following is NOT classified as a static test?",
    "options": {
      "A": "Spacecraft vibration test",
      "B": "Insert pullout load test",
      "C": "CFRP coupon load test",
      "D": "Load tests on structural members"
    },
    "correct_answer": "A"
  },
  {
    "question": "What is the purpose of the Modal test in spacecraft structural testing?",
    "options": {
      "A": "To simulate space acoustics",
      "B": "To measure the spacecraft's natural frequencies",
      "C": "To evaluate joint load strength",
      "D": "To monitor thermal distortion"
    },
    "correct_answer": "B"
  },
  {
    "question": "Which test is part of the special tests category for spacecraft structures?",
    "options": {
      "A": "Modal test",
      "B": "Thermal distortion test",
      "C": "Static test on structural members",
      "D": "Base joint load test"
    },
    "correct_answer": "B"
  },
  {
    "question": "What is the primary focus of spacecraft structural load tests?",
    "options": {
      "A": "To determine thermal resistance",
      "B": "To assess structural strength and response to loads",
      "C": "To analyze joint vibrations in space conditions",
      "D": "To measure microgravity effects on components"
    },
    "correct_answer": "B"
  },
  {
    "question": "What is the primary purpose of the spacecraft static test?",
    "options": {
      "A": "To simulate the spacecraft's orbital operations.",
      "B": "To assess the structural integrity under large loads.",
      "C": "To evaluate the spacecraft's thermal performance.",
      "D": "To test the spacecraft's propulsion system."
    },
    "correct_answer": "B"
  },
  {
    "question": "How is the load applied during the static test?",
    "options": {
      "A": "Using magnetic fields.",
      "B": "Through mechanical springs.",
      "C": "Using hydraulic actuators or jacks.",
      "D": "By applying manual force."
    },
    "correct_answer": "C"
  },
  {
    "question": "What method is used to measure structure displacements in the static test?",
    "options": {
      "A": "Thermal sensors.",
      "B": "LVDT (Linear Variable Differential Transformer).",
      "C": "Optical imaging systems.",
      "D": "Gyroscopic sensors."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is the purpose of the post-test non-destructive evaluation?",
    "options": {
      "A": "To prepare the structure for the next test run.",
      "B": "To identify any damage to the structure.",
      "C": "To improve the propulsion system's efficiency.",
      "D": "To evaluate the spacecraft's electrical systems."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is simulated by the test adaptor during the static test?",
    "options": {
      "A": "Thermal conditions in space.",
      "B": "The interface of the launch vehicle.",
      "C": "Vibrations from the ground station.",
      "D": "The spacecraft's propulsion system."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is the primary purpose of the static qualification test for a spacecraft structure?",
    "options": {
      "A": "To evaluate thermal resistance of the structure.",
      "B": "To assess the connection strength of components like bottom corner joints.",
      "C": "To test the spacecraft's propulsion performance.",
      "D": "To measure the efficiency of electrical systems."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which tool is mentioned as part of the load application process during static structural tests?",
    "options": {
      "A": "Torque wrench",
      "B": "Hydraulic jack",
      "C": "Laser scanner",
      "D": "Impact hammer"
    },
    "correct_answer": "B"
  },
  {
    "question": "What instrument is specifically used to measure strain in spacecraft structural tests?",
    "options": {
      "A": "Accelerometers",
      "B": "Thermocouples",
      "C": "Strain gauges",
      "D": "Pressure transducers"
    },
    "correct_answer": "C"
  },
  {
    "question": "What aspect of spacecraft payload support structures is tested in static tests?",
    "options": {
      "A": "Flexibility during dynamic motion.",
      "B": "Performance under load stress conditions.",
      "C": "Electromagnetic shielding capacity.",
      "D": "Thermodynamic efficiency."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is the purpose of subjecting electronic packages to Quasi Static Loads (QSL)?",
    "options": {
      "A": "To simulate cosmic radiation effects.",
      "B": "To test their performance under environmental loads.",
      "C": "To evaluate their electrical conductivity.",
      "D": "To measure their weight and mass."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which document specifies the Quasi Static Loads (QSL) for electronic packages?",
    "options": {
      "A": "Structural Test Guidelines (STG)",
      "B": "Environmental Test Level Specifications (ETLS)",
      "C": "Load Verification Handbook (LVH)",
      "D": "Spacecraft Dynamics Manual (SDM)"
    },
    "correct_answer": "B"
  },
  {
    "question": "How are electronic packages typically tested for Quasi Static Loads (QSL)?",
    "options": {
      "A": "Using high-speed wind tunnels.",
      "B": "Through centrifuge testing or vibration shaker at low frequency.",
      "C": "By exposing them to thermal vacuum chambers.",
      "D": "Using magnetic resonance testing."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is the primary purpose of comparing test-measured strains with FEA predicted values in spacecraft structural tests?",
    "options": {
      "A": "To analyze material composition.",
      "B": "To validate the finite element (FE) model.",
      "C": "To improve spacecraft aesthetics.",
      "D": "To reduce cost of structural design."
    },
    "correct_answer": "B"
  },
  {
    "question": "What type of evaluation is performed after the structural tests to identify potential damage?",
    "options": {
      "A": "Destructive evaluation.",
      "B": "Detailed non-destructive evaluation.",
      "C": "Quantitative failure analysis.",
      "D": "Thermal stress testing."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which of the following issues are NOT observed in the structural tests as mentioned in the text?",
    "options": {
      "A": "Local buckling and delaminations.",
      "B": "Face sheet failures and dimpling.",
      "C": "Debonds and face sheet wrinkling.",
      "D": "Residual deformations and strains."
    },
    "correct_answer": "D"
  },
  {
    "question": "What does the term 'residual deformations' refer to in the context of structural testing?",
    "options": {
      "A": "Permanent changes in shape after the test.",
      "B": "Vibrational stress during testing.",
      "C": "Thermal expansion of materials.",
      "D": "Strains that dissipate quickly post-test."
    },
    "correct_answer": "A"
  },
  {
    "question": "What is one of the outcomes of the static test as listed in the text?",
    "options": {
      "A": "Evaluation of orbit performance.",
      "B": "Identification of design margins.",
      "C": "Implementation of new FE models.",
      "D": "Redesign of spacecraft components."
    },
    "correct_answer": "B"
  },
  {
    "question": "What standards are used for characterizing CFRP specimens in coupon level tests?",
    "options": {
      "A": "ISO Standards",
      "B": "ASTM Standards",
      "C": "DIN Standards",
      "D": "ANSI Standards"
    },
    "correct_answer": "B"
  },
  {
    "question": "Which of the following is NOT mentioned as a test conducted during coupon level testing?",
    "options": {
      "A": "Tensile test",
      "B": "Compression test",
      "C": "Ultrasonic test",
      "D": "Shear test"
    },
    "correct_answer": "C"
  },
  {
    "question": "What is the purpose of insert pullout tests in the described procedure?",
    "options": {
      "A": "To improve the aerodynamic efficiency of the spacecraft.",
      "B": "For periodic qualification of sandwich decks.",
      "C": "To determine thermal properties of the materials.",
      "D": "For enhancing surface finish of composite structures."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is the main purpose of conducting spacecraft structural tests on components like tank joints and handling joints?",
    "options": {
      "A": "To ensure compatibility with electronic systems.",
      "B": "To establish design margins.",
      "C": "To improve corrosion resistance.",
      "D": "To verify spacecraft propulsion systems."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which test is specifically mentioned as being related to spacecraft handling joints?",
    "options": {
      "A": "DSS Bracket Load Test",
      "B": "Flatwise Tensile Test",
      "C": "Insert Pullout Test",
      "D": "Plate Compression Test"
    },
    "correct_answer": "A"
  },
  {
    "question": "What is the primary purpose of spacecraft dynamic test campaigns?",
    "options": {
      "A": "Determining operational software efficiency.",
      "B": "Evaluating the structural and subsystem response under simulated conditions.",
      "C": "Analyzing thermal resistance of spacecraft materials.",
      "D": "Testing spacecraft communication protocols."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which type of monitoring device is used during spacecraft dynamic tests to monitor structures and subsystems?",
    "options": {
      "A": "Gyroscopes",
      "B": "Accelerometers",
      "C": "Thermometers",
      "D": "Barometers"
    },
    "correct_answer": "B"
  },
  {
    "question": "What factors influence the location selection for response measurement during dynamic tests?",
    "options": {
      "A": "Payload dimensions and fuel type",
      "B": "Type of test and analytical results",
      "C": "Spacecraft weight and orbit trajectory",
      "D": "Communication bandwidth and subsystem configuration"
    },
    "correct_answer": "B"
  },
  {
    "question": "What types of tests are included in spacecraft dynamic testing?",
    "options": {
      "A": "Thermal, vibration, and electromagnetic tests",
      "B": "Sine, acoustic, random, and shock tests",
      "C": "Operational, structural, and endurance tests",
      "D": "Aerodynamic, propulsion, and power tests"
    },
    "correct_answer": "B"
  },
  {
    "question": "Which characteristic is considered when selecting accelerometers for spacecraft dynamic testing?",
    "options": {
      "A": "Type of test being conducted",
      "B": "Spacecraft color scheme",
      "C": "Power requirements for spacecraft subsystems",
      "D": "Distance from ground station"
    },
    "correct_answer": "A"
  },
  {
    "question": "What is the primary purpose of the spacecraft sine vibration test?",
    "options": {
      "A": "To test communication systems during launch.",
      "B": "To simulate vibration loads experienced during launch and transportation.",
      "C": "To ensure the spacecraft's fuel tanks are fully operational.",
      "D": "To prepare the spacecraft for thermal pressure changes."
    },
    "correct_answer": "B"
  },
  {
    "question": "What axis is the vibration test performed on?",
    "options": {
      "A": "Only lateral axis.",
      "B": "Only vertical axis.",
      "C": "All three axes.",
      "D": "Both lateral and horizontal axes."
    },
    "correct_answer": "C"
  },
  {
    "question": "Which spacecraft components are critical during the sine vibration test?",
    "options": {
      "A": "Navigation systems and sensors.",
      "B": "Reflectors, solar panels, and tanks.",
      "C": "Batteries and thermal shields.",
      "D": "Communication modules and fuel reservoirs."
    },
    "correct_answer": "B"
  },
  {
    "question": "How is the success of the sine vibration test verified?",
    "options": {
      "A": "By confirming readiness for thermal environments.",
      "B": "By performing a post-launch vibration check.",
      "C": "By ensuring structural integrity and functional performance.",
      "D": "By monitoring acceleration responses only."
    },
    "correct_answer": "C"
  },
  {
    "question": "Which parameter is monitored on the spacecraft during the vibration test?",
    "options": {
      "A": "Acceleration and strain responses.",
      "B": "Thermal conductivity.",
      "C": "Fuel efficiency.",
      "D": "Communication latency."
    },
    "correct_answer": "A"
  },
  {
    "question": "What is input notching during a spacecraft vibration test aimed at achieving?",
    "options": {
      "A": "Enhancing the spacecraft's aesthetics.",
      "B": "Ensuring vibration levels stay within design limits.",
      "C": "Increasing the frequency of vibration modes.",
      "D": "Eliminating all vibrations from the spacecraft."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is the minimum notching criterion during spacecraft dynamic tests?",
    "options": {
      "A": "Testing at levels below CLA results.",
      "B": "Aligning with or exceeding CLA results.",
      "C": "Matching baseline testing frequency.",
      "D": "Ensuring no vibration occurs during testing."
    },
    "correct_answer": "B"
  },
  {
    "question": "During vibration testing, at which modes is test input notched?",
    "options": {
      "A": "Primary and tertiary modes.",
      "B": "Only the primary mode.",
      "C": "Primary and secondary modes.",
      "D": "All modes regardless of type."
    },
    "correct_answer": "C"
  },
  {
    "question": "What does CLA refer to in the context of spacecraft dynamic tests?",
    "options": {
      "A": "Critical Limit Analysis.",
      "B": "Computational Lab Assessment.",
      "C": "Coupled Load Analysis.",
      "D": "Calibrated Load Algorithm."
    },
    "correct_answer": "C"
  },
  {
    "question": "What is the primary purpose of an FMD in the context of measurements?",
    "options": {
      "A": "To enhance visual clarity of bending moments.",
      "B": "To measure base force and bending moment.",
      "C": "To estimate material resistance to stress.",
      "D": "To monitor thermal variations in dynamic systems."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which response is obtained using the FMD according to the text?",
    "options": {
      "A": "Thermal response.",
      "B": "COG (center of gravity) response.",
      "C": "Structural fracture response.",
      "D": "Dynamic vibration response."
    },
    "correct_answer": "B"
  },
  {
    "question": "What does 'Dynamic Base Force Measurement' involve?",
    "options": {
      "A": "Tracking thermal changes in the base structure.",
      "B": "Measuring the interaction between force and gravity.",
      "C": "Assessing both base force and bending moment.",
      "D": "Determining material fatigue over time."
    },
    "correct_answer": "C"
  },
  {
    "question": "What is the primary objective of subjecting the test article to vibration tests as mentioned?",
    "options": {
      "A": "To simulate the temperature conditions of space environments.",
      "B": "To measure the response of the structure to mechanical loads.",
      "C": "To analyze the color changes of materials under stress.",
      "D": "To evaluate the performance of the rocket's engine systems."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which parameter is validated to ensure the structural response matches theoretical predictions?",
    "options": {
      "A": "Thermal stress factors.",
      "B": "Measured structural responses like acceleration and strain.",
      "C": "Rocket fuel efficiency.",
      "D": "Temperature fluctuation levels in components."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is verified after the full level vibration test of the structure?",
    "options": {
      "A": "Alignment and torque of interface bolts.",
      "B": "Color variations in materials.",
      "C": "Rocket assembly fuel levels.",
      "D": "Pressure changes in joints."
    },
    "correct_answer": "A"
  },
  {
    "question": "Which outcome is considered unacceptable after structural testing?",
    "options": {
      "A": "No observed functional anomalies.",
      "B": "Structure misalignment or anomalies in deployment.",
      "C": "Structural behavior matching theoretical predictions.",
      "D": "Successful completion of alignment checks."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is the reason for conducting non-destructive tests after vibration testing?",
    "options": {
      "A": "To reduce the weight of the test specimen.",
      "B": "To ensure structural integrity without damaging the specimen.",
      "C": "To analyze changes in thermal conductivity.",
      "D": "To predict fuel consumption of launch vehicles."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is the purpose of a Reverberation Chamber in spacecraft acoustic tests?",
    "options": {
      "A": "To generate a vacuum environment for testing.",
      "B": "To simulate acoustic loads during launch and transonic phase.",
      "C": "To measure temperature and thermal resistance.",
      "D": "To test radio frequency interference with the spacecraft."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which subsystem characteristics make them critical to acoustic loads?",
    "options": {
      "A": "High thermal conductivity and large mass.",
      "B": "Large surface area and minimal mass.",
      "C": "Compact design and high density.",
      "D": "Heavy material composition and small size."
    },
    "correct_answer": "B"
  },
  {
    "question": "During spacecraft acoustic tests, how are the acoustic levels measured?",
    "options": {
      "A": "Using accelerometers.",
      "B": "Using microphones.",
      "C": "Using thermal sensors.",
      "D": "Using laser interferometers."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which acoustic medium is used in spacecraft acoustic tests?",
    "options": {
      "A": "Helium or compressed oxygen.",
      "B": "Vacuum or carbon dioxide.",
      "C": "Compressed air or gaseous nitrogen.",
      "D": "Liquid nitrogen or argon."
    },
    "correct_answer": "C"
  },
  {
    "question": "What signifies the success of a spacecraft acoustic test?",
    "options": {
      "A": "Confirmation of radio frequency compatibility.",
      "B": "Achieving the desired temperature levels.",
      "C": "Monitoring acceleration responses only.",
      "D": "Verifying structural integrity and functional performance."
    },
    "correct_answer": "D"
  },
  {
    "question": "What is the purpose of Direct Field Acoustic Testing (DFAT)?",
    "options": {
      "A": "To minimize sound distortion in spacecraft audio systems.",
      "B": "To expose test articles to direct acoustic fields for testing.",
      "C": "To evaluate the soundproofing capabilities of spacecraft.",
      "D": "To test the aerodynamic performance of spacecraft."
    },
    "correct_answer": "B"
  },
  {
    "question": "What level of sound field can be generated during Direct Field Acoustic Testing (DFAT)?",
    "options": {
      "A": "120 dB SPL",
      "B": "100 dB SPL",
      "C": "142 dB SPL",
      "D": "150 dB SPL"
    },
    "correct_answer": "C"
  },
  {
    "question": "What technology is being evaluated for spacecraft DFAT?",
    "options": {
      "A": "Boeing Acoustic Module",
      "B": "Siemens DFAN module",
      "C": "NASA Thermal Module",
      "D": "SpaceX DFAT equipment"
    },
    "correct_answer": "B"
  },
  {
    "question": "What is a significant advantage of DFAT when compared to traditional testing methods?",
    "options": {
      "A": "Requires no speakers for acoustic simulation.",
      "B": "Reduces facility and infrastructure costs significantly.",
      "C": "Eliminates the need for equipment calibration.",
      "D": "Generates sound fields above 200 dB SPL."
    },
    "correct_answer": "B"
  },
  {
    "question": "Why is DFAT considered flexible in scheduling?",
    "options": {
      "A": "It eliminates the need for software controls.",
      "B": "It uses non-portable equipment for increased efficiency.",
      "C": "Its portability avoids the need to transport test articles to testing facilities.",
      "D": "It requires less manpower for setup and operation."
    },
    "correct_answer": "C"
  },
  {
    "question": "What is the primary method used to perform the spacecraft level shock test?",
    "options": {
      "A": "Thermal expansion test",
      "B": "Clamp band release",
      "C": "Pressure chamber test",
      "D": "Vacuum sealing"
    },
    "correct_answer": "B"
  },
  {
    "question": "Why are electronic components critical during shock tests?",
    "options": {
      "A": "They serve as a backup for propulsion systems.",
      "B": "They are the heaviest part of the spacecraft.",
      "C": "They are sensitive to shock loads.",
      "D": "They determine spacecraft alignment."
    },
    "correct_answer": "C"
  },
  {
    "question": "How is the success of the spacecraft shock test verified?",
    "options": {
      "A": "By performing another test.",
      "B": "By analyzing acceleration responses.",
      "C": "By confirming the spacecraft functional test.",
      "D": "By measuring vibration levels."
    },
    "correct_answer": "C"
  },
  {
    "question": "What is monitored on the spacecraft during the shock test?",
    "options": {
      "A": "Temperature changes",
      "B": "Acceleration responses",
      "C": "Communication signals",
      "D": "Fuel levels"
    },
    "correct_answer": "B"
  },
  {
    "question": "What does the PSLV Shock Specification involve?",
    "options": {
      "A": "Focuses on thermal resistance of the spacecraft.",
      "B": "Is specified along all three axes.",
      "C": "Measures electrical load on spacecraft systems.",
      "D": "Tests only axial forces acting on the spacecraft."
    },
    "correct_answer": "B"
  },
  {
    "question": "What does the test measure in relation to the PSLV Shock Specification?",
    "options": {
      "A": "Shock resistance along one axis only.",
      "B": "Impact of thermal loads on the spacecraft.",
      "C": "Shock versus the specification values.",
      "D": "Structural durability under static conditions."
    },
    "correct_answer": "C"
  },
  {
    "question": "What type of tests are mentioned in the text for spacecraft validation?",
    "options": {
      "A": "Space environment thermal tests.",
      "B": "Spacecraft dynamic tests.",
      "C": "Optical alignment tests.",
      "D": "Pressure endurance tests."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is the purpose of a Shock Qualification Test for equipment?",
    "options": {
      "A": "To test the thermal capacity of the equipment.",
      "B": "To assess the tolerance of equipment to shock loads.",
      "C": "To measure the electrical performance under stress.",
      "D": "To evaluate the radiation resistance of the spacecraft."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which axis orientations are used during shock tests?",
    "options": {
      "A": "Vertical and horizontal",
      "B": "Radial and diagonal",
      "C": "Longitudinal and lateral",
      "D": "Rotational and angular"
    },
    "correct_answer": "C"
  },
  {
    "question": "What is one limitation of using a vibration shaker for shock testing?",
    "options": {
      "A": "It requires a vacuum environment.",
      "B": "It cannot measure mass accurately.",
      "C": "There are constraints with frequency, shock level, and specimen mass.",
      "D": "It only works for nanosat-sized equipment."
    },
    "correct_answer": "C"
  },
  {
    "question": "Where are nanosat shock tests performed based on the text?",
    "options": {
      "A": "On a universal shock absorber unit.",
      "B": "On a shock test bench developed at ISRO.",
      "C": "On a zero-gravity vibration table.",
      "D": "On a noise and vibration isolation pad."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is the primary objective of thermo-elastic distortion measurements using photogrammetry?",
    "options": {
      "A": "To measure the weight of the specimen under vacuum conditions.",
      "B": "To capture the chemical composition of the material.",
      "C": "To determine the elastic deformation of the structure under thermal loads.",
      "D": "To monitor the external environment of the thermovac chamber."
    },
    "correct_answer": "C"
  },
  {
    "question": "Why is thermo-elastic distortion measurement critical for structures like large-profiled antennas?",
    "options": {
      "A": "Because they operate in environments with minimal thermal fluctuations.",
      "B": "Because their performance depends on stability under thermal loads.",
      "C": "Because they require constant mechanical adjustments in orbit.",
      "D": "Because they rely heavily on chemical stability rather than thermal factors."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is the purpose of the optical glass window in the test setup?",
    "options": {
      "A": "To cool down the specimen rapidly under thermal loads.",
      "B": "To allow the specimen to heat up uniformly.",
      "C": "To provide a clear camera view into the thermo-vacuum chamber.",
      "D": "To increase insulation and reduce heat transfer."
    },
    "correct_answer": "C"
  },
  {
    "question": "What is the role of the optical coded targets mounted on the specimen?",
    "options": {
      "A": "To assist in monitoring the external temperature of the chamber.",
      "B": "To enhance the camera's ability to record deformation patterns.",
      "C": "To ensure the specimen remains fixed during the test.",
      "D": "To support the mechanical rotation of the specimen."
    },
    "correct_answer": "B"
  },
  {
    "question": "What does the internal rotating adapter and turning fixture (MGSE) do in the test setup?",
    "options": {
      "A": "It ensures thermal loads are evenly distributed on the chamber.",
      "B": "It rotates and repositions the specimen for comprehensive testing.",
      "C": "It provides insulation for the optical glass window.",
      "D": "It maintains the stability of the fixed camera."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is the main purpose of the microvibration measurement test?",
    "options": {
      "A": "To enhance the spacecraft's communication abilities.",
      "B": "To measure disturbances at payload locations caused by specific operational components.",
      "C": "To optimize fuel consumption in spacecraft navigation.",
      "D": "To assess the spacecraft's thermal control system efficiency."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which of the following factors can affect the performance of high-resolution optical payloads?",
    "options": {
      "A": "Microvibrations at the payload locations.",
      "B": "Unoptimized thermal protection systems.",
      "C": "Low battery power in the spacecraft.",
      "D": "Insufficient communication bandwidth."
    },
    "correct_answer": "A"
  },
  {
    "question": "What can be done to reduce on-orbit microvibrations in spacecraft?",
    "options": {
      "A": "Improving cooling system performance for payload components.",
      "B": "Adopting suitable vibration isolation methods.",
      "C": "Using higher-powered antennas for communication.",
      "D": "Increasing the number of reaction wheels."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which components were specified as sources of disturbances for the payload locations during the test?",
    "options": {
      "A": "Cryo-coolers, antennas, and solar panels.",
      "B": "Reaction wheels, IRU, and cryo-coolers.",
      "C": "IRU, communication systems, and sensors.",
      "D": "Cryo-coolers, reaction wheels, and batteries."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is the primary purpose of Non-Destructive Tests (NDT) on structural members?",
    "options": {
      "A": "To improve the appearance of the structure.",
      "B": "To ensure the quality of the structure.",
      "C": "To reduce the manufacturing costs of the structure.",
      "D": "To test the durability through destructive methods."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which of the following is a Non-Destructive Testing (NDT) technique used for structural members?",
    "options": {
      "A": "Sandblasting",
      "B": "Ultrasonics",
      "C": "Laser Cutting",
      "D": "Punch Testing"
    },
    "correct_answer": "B"
  },
  {
    "question": "What type of panels are specifically mentioned as being tested using NDT methods?",
    "options": {
      "A": "Ceramic panels",
      "B": "Embedded heat pipe panels",
      "C": "Metallic surface panels",
      "D": "Solid steel panels"
    },
    "correct_answer": "B"
  },
  {
    "question": "Which of these techniques is NOT listed as an NDT technique in the text?",
    "options": {
      "A": "Radiography",
      "B": "Acoustic Emission",
      "C": "Shearography",
      "D": "Welding Analysis"
    },
    "correct_answer": "D"
  }
]