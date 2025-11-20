const QUESTIONS = [
    {
      "question": "What does LEOS stand for in the context of this presentation?",
      "options": {
        "A": "Laboratory for Electro-Optics Systems",
        "B": "Laboratory for Electronics Operation Studies",
        "C": "Laboratory for Electromagnetic Optical Science",
        "D": "Laboratory for Energy-Optics Solutions"
      },
      "correct_answer": "A"
    },
    {
      "question": "Which year marks the establishment or a key milestone related to LEOS?",
      "options": {
        "A": "1992",
        "B": "2025",
        "C": "1985",
        "D": "2000"
      },
      "correct_answer": "A"
    },
    {
      "question": "What does the timeline 1992 to 2025 likely signify in the context of LEOS?",
      "options": {
        "A": "It represents the duration LEOS has been operational.",
        "B": "The period marking space exploration missions.",
        "C": "The timeline for building the laboratory.",
        "D": "A range of financial data for LEOS projects."
      },
      "correct_answer": "A"
    },
    {
      "question": "Which of the following is NOT part of the space environment as described in the text?",
      "options": {
        "A": "Vacuum Environment",
        "B": "Plasma Environment",
        "C": "Tropical Environment",
        "D": "Micrometeoroids/Orbital Debris Environment"
      },
      "correct_answer": "C"
    },
    {
      "question": "What is the approximate temperature range in the thermal environment of space?",
      "options": {
        "A": "-250u00b0C to +250u00b0C",
        "B": "-150u00b0C to +120u00b0C",
        "C": "-50u00b0C to +200u00b0C",
        "D": "-100u00b0C to +100u00b0C"
      },
      "correct_answer": "B"
    },
    {
      "question": "What is one key characteristic of the vacuum environment in space?",
      "options": {
        "A": "10-5 to 10-9 BAR",
        "B": "High atmospheric pressure",
        "C": "Consistent temperature",
        "D": "Presence of abundant oxygen"
      },
      "correct_answer": "A"
    },
    {
      "question": "What does 'attitude' refer to in the context of spacecraft?",
      "options": {
        "A": "The mood of the spacecraft systems.",
        "B": "The orientation of the body in space.",
        "C": "The speed at which the spacecraft travels.",
        "D": "The ability of the spacecraft to communicate with Earth."
      },
      "correct_answer": "B"
    },
    {
      "question": "What provides the attitude of a spacecraft?",
      "options": {
        "A": "Attitude sensors",
        "B": "Propulsion systems",
        "C": "Fuel regulators",
        "D": "Thermal shields"
      },
      "correct_answer": "A"
    },
    {
      "question": "Attitude is determined with respect to what?",
      "options": {
        "A": "The shape of the spacecraft",
        "B": "The speed of the spacecraft",
        "C": "A reference frame",
        "D": "The sound waves in space"
      },
      "correct_answer": "C"
    },
    {
      "question": "What does the translational motion of a spacecraft describe?",
      "options": {
        "A": "The orbital and attitude dynamics of the spacecraft.",
        "B": "The motion of the center of mass defined by position and velocity.",
        "C": "Rotation about the center of mass and its rate.",
        "D": "The relationship between attitude orientation and spacecraft navigation."
      },
      "correct_answer": "B"
    },
    {
      "question": "Rotational motion of a spacecraft is primarily described by which of the following?",
      "options": {
        "A": "Position and velocity of the spacecraft.",
        "B": "Orbit analysis and celestial mechanics.",
        "C": "Attitude orientation and its rate.",
        "D": "The motion of the spacecraft center of mass."
      },
      "correct_answer": "C"
    },
    {
      "question": "Which of the following fields is related to the study of translational spacecraft motion?",
      "options": {
        "A": "Orbit analysis and celestial mechanics.",
        "B": "Spacecraft dynamics and attitude analysis.",
        "C": "Material engineering for spacecraft shields.",
        "D": "Energy system optimization for spacecraft."
      },
      "correct_answer": "A"
    },
    {
      "question": "What does ECI (Earth Centered Inertial) refer to in the context of reference frames?",
      "options": {
        "A": "A fixed reference frame attached to the spacecraft.",
        "B": "A rotating reference frame aligned with Earth's surface.",
        "C": "A non-rotating reference frame centered on Earth.",
        "D": "A reference frame focused on orbital parameters."
      },
      "correct_answer": "C"
    },
    {
      "question": "Which representation is NOT commonly used to define attitude in space systems?",
      "options": {
        "A": "Direction Cosine Matrix",
        "B": "Euler Angles",
        "C": "Quaternion",
        "D": "Linear Velocity"
      },
      "correct_answer": "D"
    },
    {
      "question": "What type of reference frame is 'Body' in the context of the course?",
      "options": {
        "A": "Earth-centered and rotating with the planet.",
        "B": "Spacecraft-fixed and rotating.",
        "C": "Orbit-based and rotating around Earth.",
        "D": "A geostationary reference point."
      },
      "correct_answer": "B"
    },
    {
      "question": "What is a Quaternion commonly used for in attitude representation?",
      "options": {
        "A": "To calculate velocity vectors.",
        "B": "To describe orientation and rotation.",
        "C": "To model forces acting on a satellite.",
        "D": "To map Earth's surface coordinates."
      },
      "correct_answer": "B"
    },
    {
      "question": "What is one of the primary reasons for attitude control in a satellite?",
      "options": {
        "A": "To reduce fuel consumption during launch.",
        "B": "To point solar panels to the Sun for power generation.",
        "C": "To ensure satellites remain stationary in orbit.",
        "D": "To improve signal encryption for communication."
      },
      "correct_answer": "B"
    },
    {
      "question": "Which of the following is NOT a function of attitude control?",
      "options": {
        "A": "Control heat dissipation.",
        "B": "Point payload cameras towards the target.",
        "C": "Orient thrusters for launching the satellite.",
        "D": "Avoid damage to sensitive components."
      },
      "correct_answer": "C"
    },
    {
      "question": "Which of the following is a method of representing satellite attitude?",
      "options": {
        "A": "Euler Angles",
        "B": "Gravitational Vector",
        "C": "Tangent Frames",
        "D": "Orbital Inclination"
      },
      "correct_answer": "A"
    },
    {
      "question": "What is one of the causes of environmental disturbance torques listed in the presentation?",
      "options": {
        "A": "Solar radiation pressure/torque",
        "B": "Thrust misalignment",
        "C": "Reaction wheel friction",
        "D": "Fuel slosh"
      },
      "correct_answer": "A"
    },
    {
      "question": "Which of the following is a reason for using attitude control?",
      "options": {
        "A": "To optimize solar radiation",
        "B": "To counter internal disturbance torques",
        "C": "To eliminate aerodynamic torque",
        "D": "To prevent atmospheric drag"
      },
      "correct_answer": "B"
    },
    {
      "question": "Which internal disturbance torque is caused by the movement of liquid inside a spacecraft?",
      "options": {
        "A": "Reaction wheel friction",
        "B": "Thermal shocks",
        "C": "Fuel slosh",
        "D": "Magnetic torque"
      },
      "correct_answer": "C"
    },
    {
      "question": "What type of imaging is mentioned in the presentation?",
      "options": {
        "A": "Thermal imaging",
        "B": "Optical remote sensing and microwave imaging",
        "C": "Ultrasound imaging",
        "D": "X-ray imaging"
      },
      "correct_answer": "B"
    },
    {
      "question": "Which of the following is NOT listed as an application of satellites?",
      "options": {
        "A": "Weather monitoring",
        "B": "Disaster management",
        "C": "Medical diagnostics",
        "D": "Satellite-aided navigation"
      },
      "correct_answer": "C"
    },
    {
      "question": "Which of the following missions is focused on planetary exploration?",
      "options": {
        "A": "Mangalyaan",
        "B": "INSAT",
        "C": "GSAT",
        "D": "RISAT"
      },
      "correct_answer": "A"
    },
    {
      "question": "What is the primary purpose of IRS and RISAT satellites?",
      "options": {
        "A": "Weather forecasting",
        "B": "Remote sensing and imaging",
        "C": "Telecommunication",
        "D": "Science missions to outer planets"
      },
      "correct_answer": "B"
    },
    {
      "question": "Which missions are associated with human space exploration?",
      "options": {
        "A": "INSAT and GSAT",
        "B": "Mangalyaan and IRS",
        "C": "Chandrayaan and Astrosat",
        "D": "Human space missions"
      },
      "correct_answer": "D"
    },
    {
      "question": "What are among the types of attitude sensors mentioned in the text?",
      "options": {
        "A": "Radar detectors and spectrum analyzers",
        "B": "Earth Sensors, Sun Sensors, and Star Sensors",
        "C": "Thermal monitors and signal amplifiers",
        "D": "Magnetic fields and oscilloscopes"
      },
      "correct_answer": "B"
    },
    {
      "question": "What components are common to all the sensors listed?",
      "options": {
        "A": "Power supply and cooling system",
        "B": "Data storage, wireless transmitters, and resistors",
        "C": "Detector, Focusing Optics, Processing Electronics, and Alignment",
        "D": "External shielding and voltage regulators"
      },
      "correct_answer": "C"
    },
    {
      "question": "Which of the following is not listed as an attitude sensor in the text?",
      "options": {
        "A": "Magnetometers",
        "B": "Earth Sensors",
        "C": "Satellite Positioning System",
        "D": "Gyroscopes"
      },
      "correct_answer": "C"
    },
    {
      "question": "What type of sensor is used to detect magnetic fields in the described system?",
      "options": {
        "A": "Analog Magnetometer",
        "B": "Star Sensor",
        "C": "MicroSS",
        "D": "MK-II SS"
      },
      "correct_answer": "A"
    },
    {
      "question": "Which of the following is NOT explicitly mentioned as an attitude sensor?",
      "options": {
        "A": "Digital Magnetometer",
        "B": "MK-III SS",
        "C": "Star Sensor",
        "D": "Lidar Scanner"
      },
      "correct_answer": "D"
    },
    {
      "question": "What does 'MK' likely refer to in the context of the described sensors?",
      "options": {
        "A": "Magnetometer Kit",
        "B": "Mark or Model",
        "C": "Measurement Knowledge",
        "D": "Micro Kit"
      },
      "correct_answer": "B"
    },
    {
      "question": "What is the primary goal of the Design Verification Phase in the sensors design flow?",
      "options": {
        "A": "Environmental Testing of the spacecraft.",
        "B": "Temporary assembly and testing of components like PCB and optics.",
        "C": "Procurement of detectors and materials.",
        "D": "Final assembly and spacecraft integration."
      },
      "correct_answer": "B"
    },
    {
      "question": "During the PCB matching step, which of the following activities is most relevant?",
      "options": {
        "A": "Matching PCBs with mechanical parts.",
        "B": "Performing environmental testing on the PCB.",
        "C": "Configuring FPGA development tools like Libero.",
        "D": "Procurement of necessary system detectors."
      },
      "correct_answer": "A"
    },
    {
      "question": "Which testing is conducted after the fabrication of PCBs, optics, and mechanical parts?",
      "options": {
        "A": "Environmental Testing.",
        "B": "Functional Testing.",
        "C": "FPGA Review.",
        "D": "Thermal Analysis."
      },
      "correct_answer": "B"
    },
    {
      "question": "What is one of the initial steps in the test sequence for sensors?",
      "options": {
        "A": "Permanent Assembly",
        "B": "Detector Mounting",
        "C": "Dynamic Range Verification",
        "D": "Environment Tests"
      },
      "correct_answer": "B"
    },
    {
      "question": "What is the purpose of Dynamic Range Verification in the test sequence for sensors?",
      "options": {
        "A": "To test data interface with electronics",
        "B": "To confirm alignment at null",
        "C": "To validate performance across MFOV and CFOV",
        "D": "To test EMI/EMC properties"
      },
      "correct_answer": "C"
    },
    {
      "question": "At which stage is the Conformal Coating & Potting process performed in the test sequence for sensors?",
      "options": {
        "A": "After Interface tests",
        "B": "Before IBT",
        "C": "As soon as Detector Mounting is complete",
        "D": "During Environment Tests"
      },
      "correct_answer": "B"
    },
    {
      "question": "What type of magnetometer is mentioned in the text?",
      "options": {
        "A": "Hall Effect Magnetometer",
        "B": "Peaking type fluxgate magnetometer",
        "C": "Optical Magnetometer",
        "D": "Superconducting Magnetometer"
      },
      "correct_answer": "B"
    },
    {
      "question": "Which processing method is highlighted for use in magnetometers?",
      "options": {
        "A": "Analog Processing",
        "B": "Quantum Processing",
        "C": "Digital Magnetometer Processing",
        "D": "Manual Processing"
      },
      "correct_answer": "C"
    },
    {
      "question": "What term is used to describe a smaller version of a magnetometer?",
      "options": {
        "A": "Nano Magnetometer",
        "B": "Mini Magnetometer",
        "C": "Compact Magnetometer",
        "D": "Micro Magnetometer"
      },
      "correct_answer": "B"
    },
    {
      "question": "What is the primary function of the Digital Sun Sensor (APSS)?",
      "options": {
        "A": "Detecting external magnetic fields.",
        "B": "Measuring sun radiation intensity.",
        "C": "Determining the centroid of the sun image on a detector.",
        "D": "Increasing the brightness of sunlight for solar panels."
      },
      "correct_answer": "C"
    },
    {
      "question": "How is the two axes attitude computed in the Digital Sun Sensor?",
      "options": {
        "A": "Using a gyroscope to track angular movements.",
        "B": "By analyzing the sun's image through a transfer function.",
        "C": "With the help of external GPS signals.",
        "D": "By using multiple cameras for image triangulation."
      },
      "correct_answer": "B"
    },
    {
      "question": "What role does the Neutral Density Filter (NDF) assembly play in the sensor?",
      "options": {
        "A": "It focuses the image of the sun on the sensor.",
        "B": "It enhances the sunlight for better detection.",
        "C": "It reduces the intensity of sunlight entering the sensor.",
        "D": "It splits sunlight into different wavelengths for analysis."
      },
      "correct_answer": "C"
    },
    {
      "question": "What is the main purpose of the scanning earth sensors in GEO satellites?",
      "options": {
        "A": "To detect radiation differences between the Sun and Earth.",
        "B": "To measure radiation differences between Space and Earth.",
        "C": "To monitor Earth's visible light spectrum.",
        "D": "To control communication bandwidth in GEO satellites."
      },
      "correct_answer": "B"
    },
    {
      "question": "What wavelength band is primarily used for earth detection in scanning earth sensors?",
      "options": {
        "A": "8-12 micron Infrared band",
        "B": "10-12 micron Ultraviolet band",
        "C": "14-16 micron Infrared band",
        "D": "5-7 micron Visible light band"
      },
      "correct_answer": "C"
    },
    {
      "question": "What technology is used in the optics for collecting infrared radiation in scanning earth sensors?",
      "options": {
        "A": "Silicon lenses",
        "B": "Germanium optics",
        "C": "Quartz prisms",
        "D": "Carbon fiber optics"
      },
      "correct_answer": "B"
    },
    {
      "question": "Which types of detectors are used in scanning earth sensors?",
      "options": {
        "A": "Solar cells, photodiodes, and CCD sensors",
        "B": "Thermocouples, thermocamera, and RTDs",
        "C": "Thermistor bolometer, thermopile, and pyro-electric detectors",
        "D": "Piezoelectric, quantum dots, and CMOS detectors"
      },
      "correct_answer": "C"
    },
    {
      "question": "What two axes are used for scanning in GEO earth sensors?",
      "options": {
        "A": "Yaw and Pitch",
        "B": "Pitch and Roll",
        "C": "Roll and Yaw",
        "D": "Yaw and Tilt"
      },
      "correct_answer": "B"
    },
    {
      "question": "What was the difference in technology between INSAT-3 and INSAT-2 for scanning earth sensors?",
      "options": {
        "A": "INSAT-2 used FPGA while INSAT-3 used ASIC.",
        "B": "INSAT-3 used ASIC/FPGA while INSAT-2 used discrete components.",
        "C": "INSAT-2 used in-house detectors while INSAT-3 outsourced them.",
        "D": "Both used the same technology."
      },
      "correct_answer": "B"
    },
    {
      "question": "What does 'Roll' represent in the context of Conical Scanning Earth Sensors in LEO?",
      "options": {
        "A": "The measurement of pitch deviation.",
        "B": "The difference between North & South chord widths.",
        "C": "The angular velocity of the satellite.",
        "D": "The shift in the chord relative to the center."
      },
      "correct_answer": "B"
    },
    {
      "question": "What does 'Pitch' indicate in Conical Scanning Earth Sensors for LEO?",
      "options": {
        "A": "The satellite's rotation speed about its axis.",
        "B": "The angular deviation of the satellite towards Earth.",
        "C": "The shift in the chord with respect to the center.",
        "D": "The difference between the North and South chord widths."
      },
      "correct_answer": "C"
    },
    {
      "question": "What key component is highlighted in the context of star sensors?",
      "options": {
        "A": "Light-out",
        "B": "Attitude Quaternion",
        "C": "Thermal management systems",
        "D": "Data compression algorithms"
      },
      "correct_answer": "B"
    },
    {
      "question": "What is a primary function of a star sensor based on the context provided?",
      "options": {
        "A": "To generate atmospheric data",
        "B": "To determine the attitude quaternion",
        "C": "To track satellite velocity",
        "D": "To map Earth's surface"
      },
      "correct_answer": "B"
    },
    {
      "question": "Which term mentioned relates to the imagery component of a star sensor?",
      "options": {
        "A": "Spectrum",
        "B": "Sound wave",
        "C": "Pixel",
        "D": "Electromagnetic interference"
      },
      "correct_answer": "C"
    },
    {
      "question": "What is the primary function of the '3 Axis autonomous absolute attitude sensor' discussed in the text?",
      "options": {
        "A": "To control spacecraft propulsion systems.",
        "B": "To measure and determine spacecraft attitude autonomously.",
        "C": "To communicate data with ground stations.",
        "D": "To monitor and manage space debris."
      },
      "correct_answer": "B"
    },
    {
      "question": "Which of the following is NOT a feature of the star sensor mentioned?",
      "options": {
        "A": "Low cost and high accuracy.",
        "B": "High agility tolerance.",
        "C": "Operates within a temperature range of -15 to +55u00b0C.",
        "D": "Completely immune to radiation."
      },
      "correct_answer": "D"
    },
    {
      "question": "Which spacecrafts have utilized the LEOS Nano Star Sensor?",
      "options": {
        "A": "INS-2TD and Hubble Space Telescope.",
        "B": "BHUTANSAT and INS-2TD.",
        "C": "Voyager 1 and BHUTANSAT.",
        "D": "LEONIDAS and INS-2TD."
      },
      "correct_answer": "B"
    },
    {
      "question": "What demonstrates the space heritage of the sensor described in the text?",
      "options": {
        "A": "Its application in Mars rover missions.",
        "B": "Its flawless onboard performance for over a year.",
        "C": "Information stated by the manufacturer.",
        "D": "Its innovative design."
      },
      "correct_answer": "B"
    },
    {
      "question": "What is the primary purpose of a Star Tracker Optical Simulator?",
      "options": {
        "A": "To analyze images of distant galaxies.",
        "B": "To dynamically simulate star patterns in the sky.",
        "C": "To measure the brightness of stars.",
        "D": "To track satellites in Earth's orbit."
      },
      "correct_answer": "B"
    },
    {
      "question": "Which of the following is NOT listed as a feature or purpose of the systems described in the course?",
      "options": {
        "A": "Accuracy calibration.",
        "B": "Functional testing of star sensors.",
        "C": "Analyzing atmospheric cloud patterns.",
        "D": "Simulating orbit disturbances."
      },
      "correct_answer": "C"
    },
    {
      "question": "What is a key function of the High Accuracy Star Simulator?",
      "options": {
        "A": "To measure gravity waves.",
        "B": "To provide functional testing for star sensors.",
        "C": "To map unknown stars in the galaxy.",
        "D": "To manage satellite communication systems."
      },
      "correct_answer": "B"
    },
    {
      "question": "What physical phenomenon does the Fiber Optic Gyro utilize to measure angular velocity?",
      "options": {
        "A": "Doppler Effect",
        "B": "Sagnac Effect",
        "C": "Photoelectric Effect",
        "D": "Faraday Effect"
      },
      "correct_answer": "B"
    },
    {
      "question": "What is the function of the detector in the Fiber Optic Gyro?",
      "options": {
        "A": "To modulate the light source wavelength",
        "B": "To introduce angular velocity to the system",
        "C": "To measure phase difference of the light",
        "D": "To amplify the light source output"
      },
      "correct_answer": "C"
    },
    {
      "question": "What is the operating light source used in the Fiber Optic Gyro system?",
      "options": {
        "A": "Laser",
        "B": "SLED with 20 mW",
        "C": "Solar light",
        "D": "LED with 10 mW"
      },
      "correct_answer": "B"
    },
    {
      "question": "What is one key reason for the high reliability of the FOG?",
      "options": {
        "A": "Its use of advanced software algorithms.",
        "B": "Its solid-state technology with no moving parts.",
        "C": "Its compatibility with all types of devices.",
        "D": "Its ability to operate underwater."
      },
      "correct_answer": "B"
    },
    {
      "question": "Which of the following is an example of the high versatility of the FOG?",
      "options": {
        "A": "Functioning in extreme underwater conditions.",
        "B": "Compatibility with both Telecom and Earth Observation missions using the same design.",
        "C": "Ability to adapt to any thermal condition within seconds.",
        "D": "Automatic error correction."
      },
      "correct_answer": "B"
    },
    {
      "question": "How quickly does the FOG deliver inertial data after power-on?",
      "options": {
        "A": "Immediately upon power-on.",
        "B": "After 10 seconds of initialization.",
        "C": "After 3 seconds of power-on.",
        "D": "After 1 minute of calibration."
      },
      "correct_answer": "C"
    },
    {
      "question": "What is NOT required for the FOG to function properly after power-on?",
      "options": {
        "A": "Special startup commands.",
        "B": "Special thermal conditions.",
        "C": "A lengthy maintenance process.",
        "D": "Inertial data processing."
      },
      "correct_answer": "A"
    },
    {
      "question": "Which of the following satellites operates on a single-axis system?",
      "options": {
        "A": "GSAT-19",
        "B": "GSAT-14",
        "C": "CARTOSAT-3",
        "D": "GISAT"
      },
      "correct_answer": "B"
    },
    {
      "question": "CARTOSAT-3 is an example of which axis system?",
      "options": {
        "A": "Single Axis",
        "B": "Dual Axis",
        "C": "Tri Axis",
        "D": "Multi Axis"
      },
      "correct_answer": "C"
    },
    {
      "question": "What is common between GSAT-19 and GISAT in terms of system configuration?",
      "options": {
        "A": "They use a single-axis system.",
        "B": "They use a dual-axis system.",
        "C": "They use a tri-axis system.",
        "D": "They are only experimental satellites."
      },
      "correct_answer": "B"
    },
    {
      "question": "What is the main function of the Three-axis MEMS accelerometer (MEMSAP)?",
      "options": {
        "A": "Measures rotational motion and magnetic field strength.",
        "B": "Calculates the speed of light in vacuum conditions.",
        "C": "Measures linear acceleration and provides 3-axis accumulated delta V.",
        "D": "Monitors temperature and pressure changes in spacecraft."
      },
      "correct_answer": "C"
    },
    {
      "question": "What type of sensors are used in MEMSAP as mentioned in the text?",
      "options": {
        "A": "MEMS Thermal Sensors",
        "B": "MEMS Capacitive Sensors",
        "C": "MEMS Piezoelectric Sensors",
        "D": "MEMS Optical Sensors"
      },
      "correct_answer": "B"
    },
    {
      "question": "What does 'ILSA' stand for in the context of lunar studies?",
      "options": {
        "A": "Instrument for Lunar Surface Assessment",
        "B": "Instrument for Lunar Seismic Activity",
        "C": "International Lunar Seismic Appliance",
        "D": "Initiative for Lunar Science Advancements"
      },
      "correct_answer": "B"
    },
    {
      "question": "What is the primary purpose of ILSA as mentioned in the text?",
      "options": {
        "A": "Studying Earth's seismic activity",
        "B": "Analyzing rover navigation routes",
        "C": "Investigating lunar seismic activity",
        "D": "Tracking unidentified space events"
      },
      "correct_answer": "C"
    },
    {
      "question": "Which phase focuses on setting the spacecraft in a specific direction during operations?",
      "options": {
        "A": "Launch Phase",
        "B": "Mission Operations",
        "C": "Acquisition Phase",
        "D": "Station Keeping Maneuver"
      },
      "correct_answer": "B"
    },
    {
      "question": "What is required during Mission Operations to align the spacecraft?",
      "options": {
        "A": "Station Keeping Maneuver",
        "B": "Capability to orient the spacecraft",
        "C": "Acquisition of payload data",
        "D": "Completion of the Launch Phase"
      },
      "correct_answer": "B"
    },
    {
      "question": "The Station Keeping Maneuver is most likely related to which operational phase?",
      "options": {
        "A": "Payload Operation",
        "B": "Mission Operations",
        "C": "Launch Phase",
        "D": "Acquisition Phase"
      },
      "correct_answer": "B"
    },
    {
      "question": "What are the primary components needed for GEO or MARS missions as mentioned in the text?",
      "options": {
        "A": "Advanced robotics and propulsion systems.",
        "B": "Attitude sensors and accelerometers.",
        "C": "Communication satellites and drones.",
        "D": "Heat shields and solar panels."
      },
      "correct_answer": "B"
    },
    {
      "question": "Which of the following missions is mentioned in the text?",
      "options": {
        "A": "Venus Mission.",
        "B": "Lunar Mission.",
        "C": "GEO and Mars Missions.",
        "D": "Asteroid Mining Mission."
      },
      "correct_answer": "C"
    }
  ]
