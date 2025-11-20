const QUESTIONS = [
  {
    "question": "What is the primary purpose of satellite mission planning and operations?",
    "options": {
      "A": "To develop new satellite technologies for future missions.",
      "B": "To manage and control satellite activities from launch to end of operational life.",
      "C": "To analyze past satellite failures and create preventive measures.",
      "D": "To focus solely on Earth observation and weather monitoring."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which of the following is NOT a potential service provided by satellite operations?",
    "options": {
      "A": "Communication services like ISL, P2P, P2M.",
      "B": "Scientific research such as IP and in-situ studies.",
      "C": "Local terrestrial transportation management.",
      "D": "Navigation and weather monitoring services."
    },
    "correct_answer": "C"
  },
  {
    "question": "What does 'RS & Atm Dyn' refer to in the context of satellite operations?",
    "options": {
      "A": "Robotics Systems and Automation Dynamics.",
      "B": "Remote Sensing and Atmospheric Dynamics.",
      "C": "Radar Surveillance and Aeronautical Dynamics.",
      "D": "Radio Signaling and Astronomical Dynamics."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is meant by 'PNT' in satellite navigation services?",
    "options": {
      "A": "Point-to-Node Transmission.",
      "B": "Precise Navigational Telemetry.",
      "C": "Performance and Navigation Tracking.",
      "D": "Position, Navigation, and Timing."
    },
    "correct_answer": "D"
  },
  {
    "question": "Which satellite operation service includes Rendezvous and Docking?",
    "options": {
      "A": "Communication Services.",
      "B": "Scientific Research Services.",
      "C": "Other Services.",
      "D": "Navigation Services."
    },
    "correct_answer": "C"
  },
  {
    "question": "What is the altitude range for Low Earth Orbits (LEO)?",
    "options": {
      "A": "1,000 - 10,000 km",
      "B": "200 - 2,000 km",
      "C": "10,000 - 20,000 km",
      "D": "35,781 km"
    },
    "correct_answer": "B"
  },
  {
    "question": "Which orbit type is positioned at an altitude of approximately 35,781 km?",
    "options": {
      "A": "Low Earth Orbit (LEO)",
      "B": "Medium Earth Orbit (MEO)",
      "C": "Geostationary Orbit (GEO)",
      "D": "Polar Orbit"
    },
    "correct_answer": "C"
  },
  {
    "question": "What is the inclination angle of a polar orbit?",
    "options": {
      "A": "0u00b0",
      "B": "90u00b0",
      "C": "45u00b0",
      "D": "180u00b0"
    },
    "correct_answer": "B"
  },
  {
    "question": "Which of the following describes a hyperbolic orbit shape?",
    "options": {
      "A": "Escape orbit with e > 1",
      "B": "A circular orbit with e = 0",
      "C": "An inclined orbit with e = 90u00b0",
      "D": "An elliptical orbit with 0 < e < 1"
    },
    "correct_answer": "A"
  },
  {
    "question": "What is the approximate altitude of GPS orbits?",
    "options": {
      "A": "10,000 km",
      "B": "20,000 km",
      "C": "35,781 km",
      "D": "200 - 2,000 km"
    },
    "correct_answer": "B"
  },
  {
    "question": "What is the primary focus of mission planning?",
    "options": {
      "A": "Improving financial resource allocation for space agencies.",
      "B": "Defining how a mission will achieve its objectives.",
      "C": "Designing rocket propulsion systems.",
      "D": "Focusing solely on ground operations."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which of the following is a key aspect of system requirements in mission planning?",
    "options": {
      "A": "Developing new spacecraft designs for each mission.",
      "B": "Defining payload capabilities, orbit parameters, and lifetime.",
      "C": "Focusing only on data transmission capabilities.",
      "D": "Ensuring ground-based operations have complete autonomy."
    },
    "correct_answer": "B"
  },
  {
    "question": "How does mission planning address resource optimization?",
    "options": {
      "A": "By focusing on cost reduction only.",
      "B": "By improving power and data rate capabilities while balancing thermal and propellant needs.",
      "C": "By allocating more resources to one mission segment over others.",
      "D": "By relying on external resource estimates."
    },
    "correct_answer": "B"
  },
  {
    "question": "What strategy is employed in mission planning to ensure reliability?",
    "options": {
      "A": "Eliminating secondary objectives.",
      "B": "Relying solely on manual processes.",
      "C": "Using redundancy, simulation, and contingency planning.",
      "D": "Reducing the number of mission segments."
    },
    "correct_answer": "C"
  },
  {
    "question": "When does mission planning typically begin?",
    "options": {
      "A": "During the prototype testing phase.",
      "B": "Several months before the launch date.",
      "C": "Years before launch and continues through operations and end-of-life.",
      "D": "After the design of the ground operations system."
    },
    "correct_answer": "C"
  },
  {
    "question": "In addition to defining system requirements, what other goal is emphasized in mission planning?",
    "options": {
      "A": "Reducing mission scope to fit available technologies.",
      "B": "Maintaining cost and schedule control while meeting performance metrics.",
      "C": "Minimizing all risks, even at the cost of performance.",
      "D": "Focusing solely on user segment coordination."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is the primary purpose of selecting an orbit during mission planning?",
    "options": {
      "A": "To determine the satellite's color and design.",
      "B": "To define satellite coverage, revisit time, and radiation exposure.",
      "C": "To calculate the financial budget for the mission.",
      "D": "To select the ground team for satellite operations."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which orbit type is most commonly used for Earth observation and remote sensing missions?",
    "options": {
      "A": "GEO (Geostationary Orbit)",
      "B": "MEO (Medium Earth Orbit)",
      "C": "LEO (Low Earth Orbit)",
      "D": "IPO (Inter Planetary Orbit)"
    },
    "correct_answer": "C"
  },
  {
    "question": "Which orbit type is utilized for navigation systems like NavIC or GPS?",
    "options": {
      "A": "SSO (Sun-Synchronous Orbit)",
      "B": "MEO (Medium Earth Orbit)",
      "C": "GEO (Geostationary Orbit)",
      "D": "IPO (Inter Planetary Orbit)"
    },
    "correct_answer": "B"
  },
  {
    "question": "What is a key characteristic of a Sun-Synchronous Orbit (SSO)?",
    "options": {
      "A": "It provides consistent lighting for imaging missions.",
      "B": "It is located at an altitude of 10,000u201320,000 km.",
      "C": "It supports communication and weather satellites.",
      "D": "It is exclusive to interplanetary exploration."
    },
    "correct_answer": "A"
  },
  {
    "question": "What does trajectory design determine during mission planning?",
    "options": {
      "A": "The satellite's color and style.",
      "B": "The cost of satellite manufacturing.",
      "C": "Launch window selection and velocity change (u0394v) needed for insertion.",
      "D": "The location of satellite service stations."
    },
    "correct_answer": "C"
  },
  {
    "question": "What is the primary purpose of a communication plan in mission planning?",
    "options": {
      "A": "To ensure proper hardware assembly on spacecraft.",
      "B": "To enable continuous telemetry, tracking, and command (TT&C) data flow.",
      "C": "To minimize spacecraft fuel usage during operation.",
      "D": "To schedule crew time on board spacecraft effectively."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which frequency bands are mentioned as compliant with ITU regulations for communication?",
    "options": {
      "A": "L, X, Ku",
      "B": "S, L, Ka",
      "C": "S, X, Ka",
      "D": "X, Ku, C"
    },
    "correct_answer": "C"
  },
  {
    "question": "What is the purpose of link budget analysis in ground segment planning?",
    "options": {
      "A": "To determine the lifetime of spacecraft batteries.",
      "B": "To calculate adequate signal-to-noise ratios.",
      "C": "To optimize spacecraft orbital positions.",
      "D": "To enhance the structural design of communication antennas."
    },
    "correct_answer": "B"
  },
  {
    "question": "What does the ground segment in mission operations typically include?",
    "options": {
      "A": "Only mission control centers.",
      "B": "Spacecraft thrusters and fuel tanks.",
      "C": "Mission control centers, data processing hubs, and user distribution systems.",
      "D": "Ground-based radar systems for atmospheric studies."
    },
    "correct_answer": "C"
  },
  {
    "question": "What is the role of scheduling systems in communication ground systems?",
    "options": {
      "A": "To schedule spacecraft launches.",
      "B": "To allocate antenna time among multiple missions.",
      "C": "To calculate weather conditions for mission planning.",
      "D": "To organize astronaut work schedules."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is one of the primary goals of mission planning?",
    "options": {
      "A": "Maximizing the duration of payload operation regardless of power usage.",
      "B": "Defining duty cycles for payload operation to maintain power balance.",
      "C": "Eliminating the need for onboard data storage through continuous transmission.",
      "D": "Avoiding the use of autonomous planning algorithms."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which resource is NOT mentioned as being limited onboard?",
    "options": {
      "A": "Fuel",
      "B": "Memory",
      "C": "Oxygen",
      "D": "Data bandwidth"
    },
    "correct_answer": "C"
  },
  {
    "question": "What is one purpose of attitude maneuver planning?",
    "options": {
      "A": "To avoid thermal constraints on sensitive components.",
      "B": "To optimize the use of onboard memory.",
      "C": "To optimize fuel use.",
      "D": "To maximize data downlink rates."
    },
    "correct_answer": "C"
  },
  {
    "question": "Why is data downlink scheduling important in space missions?",
    "options": {
      "A": "To ensure power balance during payload operations.",
      "B": "To prevent onboard storage saturation.",
      "C": "To reduce the need for attitude maneuver planning.",
      "D": "To avoid thermal damage to sensitive components."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is a key feature of advanced missions?",
    "options": {
      "A": "Manual management of onboard resources.",
      "B": "Continuous reliance on ground-based planning algorithms.",
      "C": "Autonomous planning algorithms for real-time resource management.",
      "D": "Avoiding external disturbance torques and forces."
    },
    "correct_answer": "C"
  },
  {
    "question": "What is the primary purpose of the Launch and Early Orbit Phase (LEOP)?",
    "options": {
      "A": "To perform deorbit burns or relocation.",
      "B": "To conduct initial health checks and orbit correction.",
      "C": "To calibrate and validate payloads.",
      "D": "To carry out routine data collection."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which phase involves calibration and validation of payloads?",
    "options": {
      "A": "Extended Mission Phase",
      "B": "Commissioning Phase",
      "C": "Nominal Operations Phase",
      "D": "End-of-Life Operations Phase"
    },
    "correct_answer": "B"
  },
  {
    "question": "What marks the End-of-Life Operations phase in a mission?",
    "options": {
      "A": "Calibration and validation tasks.",
      "B": "Routine data collection.",
      "C": "Deorbit burn or relocation.",
      "D": "Initial health check and orbit correction."
    },
    "correct_answer": "C"
  },
  {
    "question": "What is the primary focus of the Extended Mission phase?",
    "options": {
      "A": "Routine data collection and ground contacts.",
      "B": "Calibration of payloads after the nominal operations phase.",
      "C": "Continuation of the mission beyond its design life.",
      "D": "Execution of recovery plans under failure conditions."
    },
    "correct_answer": "C"
  },
  {
    "question": "What is described by the Concept of Operations (CONOPS)?",
    "options": {
      "A": "The outline of all events in a mission from launch to deorbit.",
      "B": "The sequence and control of mission activities.",
      "C": "Specific health check and maintenance maneuvers.",
      "D": "The recovery procedures under contingency conditions."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is one of the most critical decisions for any space mission related to the space segment?",
    "options": {
      "A": "Selecting the mission's launch date.",
      "B": "Choosing the required orbit.",
      "C": "Determining the type of fuel for the spacecraft.",
      "D": "Planning the training schedule for astronauts."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which of the following is a consideration for deciding the altitude of a satellite?",
    "options": {
      "A": "Communication bandwidth",
      "B": "Launch site selection",
      "C": "LEO, MEO, or GEO requirements",
      "D": "Spacecraft color and design"
    },
    "correct_answer": "C"
  },
  {
    "question": "What does the term 'revisit time' refer to in the context of space missions?",
    "options": {
      "A": "The time needed to prepare the next mission.",
      "B": "The interval between repeated observations of the same area.",
      "C": "The launch duration for satellites to reach orbit.",
      "D": "The lifespan of a satellite in space."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is one of the legal or operational constraints affecting orbit selection?",
    "options": {
      "A": "Compliance with ITU regulations.",
      "B": "Meeting thermal subsystem requirements.",
      "C": "Generating power for payload operations.",
      "D": "Selecting orbital debris for analysis."
    },
    "correct_answer": "A"
  },
  {
    "question": "Why are environmental constraints important when selecting an orbit for a space mission?",
    "options": {
      "A": "To ensure thermal balance and payload reliability.",
      "B": "To reduce the weight of the satellite.",
      "C": "To align with the mission's communication goals.",
      "D": "To improve astronaut safety during launch."
    },
    "correct_answer": "A"
  },
  {
    "question": "What is the primary role of the Ground Segment in a satellite system?",
    "options": {
      "A": "Designing satellite components in space.",
      "B": "Ensuring satellite command, control, communication, and data handling.",
      "C": "Building and launching satellites into orbit.",
      "D": "Only tracking the satellite's journey from Earth."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which of the following is a key element of the Ground Segment?",
    "options": {
      "A": "Orbit determination and event generation system.",
      "B": "Manufacturing rocket components.",
      "C": "Astronaut training modules.",
      "D": "Satellite propulsion design."
    },
    "correct_answer": "A"
  },
  {
    "question": "Which system is responsible for processing, displaying, and archiving housekeeping data in a satellite system?",
    "options": {
      "A": "Data Reception and Processing centers.",
      "B": "Orbit Determination system.",
      "C": "Housekeeping Data Processing system.",
      "D": "Payload Planning system."
    },
    "correct_answer": "C"
  },
  {
    "question": "What is the primary focus of the Mission Planning and Scheduling System in the Ground Segment?",
    "options": {
      "A": "Planning and scheduling satellite construction activities.",
      "B": "Organizing launch events.",
      "C": "Planning and scheduling satellite operations and tasks.",
      "D": "Coordinating astronaut schedules for satellite repair."
    },
    "correct_answer": "C"
  },
  {
    "question": "Which component connects the Ground Segment with the user of satellite services?",
    "options": {
      "A": "Mission Control Center.",
      "B": "User segment interface.",
      "C": "Data Reception and Processing centers.",
      "D": "Communication links."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is one of the primary functions of the Mission Control Center (MCC) or Satellite Control Center (SCC)?",
    "options": {
      "A": "To design and manufacture satellites.",
      "B": "To support mission operations during all phases of the mission.",
      "C": "To handle marketing and publicity for satellite launches.",
      "D": "To train astronauts for upcoming missions."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which of the following is a major element of MCC/SCC infrastructure?",
    "options": {
      "A": "Satellite assembly plants",
      "B": "Mission Control Software for game simulations",
      "C": "Computer workstations and display systems",
      "D": "Weather prediction software"
    },
    "correct_answer": "C"
  },
  {
    "question": "What is the primary purpose of the large wall display systems in MCC/SCC?",
    "options": {
      "A": "To display movies for relaxation of the operations team.",
      "B": "To project important events during mission operations.",
      "C": "To test satellite camera functionality.",
      "D": "To perform energy monitoring for satellites."
    },
    "correct_answer": "B"
  },
  {
    "question": "What software is used for determining and predicting the orbit and key mission events?",
    "options": {
      "A": "Communication enhancement software",
      "B": "Flight dynamics software",
      "C": "Payload simulation tools",
      "D": "Data encryption software"
    },
    "correct_answer": "B"
  },
  {
    "question": "How does the MCC/SCC facilitate communication between operations teams and subsystem experts?",
    "options": {
      "A": "Through email protocols",
      "B": "Via intercom facilities for audio conversations",
      "C": "Using satellite broadcasts",
      "D": "Through automated chatbots"
    },
    "correct_answer": "B"
  },
  {
    "question": "What is the primary role of Ground Stations?",
    "options": {
      "A": "To launch satellites into space.",
      "B": "To manage satellite construction.",
      "C": "To act as an interface between Satellite and Mission Control Center.",
      "D": "To replace failed satellite components."
    },
    "correct_answer": "C"
  },
  {
    "question": "What is the primary function of the uplink chains in the antenna system?",
    "options": {
      "A": "Performing Telecommand and Tracking functions.",
      "B": "Receiving Payload data.",
      "C": "Providing temporary data storage.",
      "D": "Generating look angles for tracking satellites."
    },
    "correct_answer": "A"
  },
  {
    "question": "Which component in the Ground Station software is responsible for generating look angles using state vectors or TLE?",
    "options": {
      "A": "Servo systems",
      "B": "Station computers",
      "C": "Antenna systems",
      "D": "Software that provides Azimuth and Elevation profiles with time"
    },
    "correct_answer": "D"
  },
  {
    "question": "What do downlink chains in the antenna system primarily handle?",
    "options": {
      "A": "Telecommand generation.",
      "B": "Data reception for Telemetry, Tracking, and Payload.",
      "C": "Antenna direction adjustments.",
      "D": "Communication link establishment with MCC."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is the role of servo systems in Ground Stations?",
    "options": {
      "A": "To temporarily store data for later retrieval.",
      "B": "To point antennas in the required direction for communication.",
      "C": "To amplify satellite signals for processing.",
      "D": "To generate tracking data using signal profiles."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is the primary purpose of Link Margin computation in the context of Ground Stations?",
    "options": {
      "A": "To enhance the physical structure of ground stations.",
      "B": "To optimize resources for station maintenance.",
      "C": "To ensure reliable telemetry reception.",
      "D": "To decode encrypted communications."
    },
    "correct_answer": "C"
  },
  {
    "question": "What aspect of satellite communications is most closely linked to 'Telemetry reception'?",
    "options": {
      "A": "Data uplink accuracy.",
      "B": "Ground station design aesthetics.",
      "C": "Receiving and interpreting data from satellites.",
      "D": "Programming satellite trajectories."
    },
    "correct_answer": "C"
  },
  {
    "question": "What is the primary focus of 'Link Margin Computation' in uplink communication?",
    "options": {
      "A": "To calculate the bandwidth required for data transmission.",
      "B": "To ensure signal strength is adequate to overcome losses and interference.",
      "C": "To establish the exact coordinates of the ground station.",
      "D": "To determine the optimal frequency for signal transmission."
    },
    "correct_answer": "B"
  },
  {
    "question": "In the context of ground stations, what does 'uplink' refer to?",
    "options": {
      "A": "Transmission of signals from satellites to ground stations.",
      "B": "A backup communication channel.",
      "C": "Transmission of signals from ground stations to satellites.",
      "D": "Storage of data in the station's database."
    },
    "correct_answer": "C"
  },
  {
    "question": "What is the primary purpose of a link margin in the context of uplink tele-commands?",
    "options": {
      "A": "To reduce power usage during communications.",
      "B": "To ensure reliable communication despite potential signal degradation.",
      "C": "To limit the range of ground stations.",
      "D": "To maximize the speed of data transfer."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is an uplink in the context of ground station operations?",
    "options": {
      "A": "Transmitting signals from a satellite to Earth.",
      "B": "Transmitting commands from Earth to a satellite.",
      "C": "A backup communication link for ground stations.",
      "D": "An unused communication channel."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is the main purpose of satellite operations during the 'Launch & Early Orbit Phase'?",
    "options": {
      "A": "Designing mission objectives.",
      "B": "Testing ground elements.",
      "C": "Monitoring and stabilizing the satellite post-launch.",
      "D": "Decommissioning the satellite."
    },
    "correct_answer": "C"
  },
  {
    "question": "Which of the following is NOT an activity mentioned in satellite spacecraft operations?",
    "options": {
      "A": "Input to Mission Design.",
      "B": "Establishment of Ground Interface.",
      "C": "Post-failure salvage operations.",
      "D": "Pre Launch Simulations."
    },
    "correct_answer": "C"
  },
  {
    "question": "What is the primary goal of satellite operations during the commissioning phase?",
    "options": {
      "A": "To decommission the satellite.",
      "B": "To ensure the satellite is fully functional and operational.",
      "C": "To simulate ground testing.",
      "D": "To design mission requirements."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which phase occurs after the 'Normal Phase Operations' in satellite operation life cycle?",
    "options": {
      "A": "Launch & Early Orbit Phase.",
      "B": "Pre Launch Simulations.",
      "C": "Decommissioning.",
      "D": "Mission Design Input Phase."
    },
    "correct_answer": "C"
  },
  {
    "question": "What is the primary role of 'Ground Elements T&E' in satellite operations?",
    "options": {
      "A": "Testing and evaluating ground-based systems for satellite communication.",
      "B": "Decommissioning ground stations after satellite retirement.",
      "C": "Handling satellite reuse operations.",
      "D": "Designing the satellite mission goals."
    },
    "correct_answer": "A"
  },
  {
    "question": "What does 'Satellite Mission Operations' primarily involve?",
    "options": {
      "A": "Network security and online streaming systems.",
      "B": "Scheduling, flight dynamics, and communication links.",
      "C": "Manufacturing satellites exclusively for research purposes.",
      "D": "Repairing damaged satellites in orbit."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which of the following is NOT directly part of Satellite Mission Operations?",
    "options": {
      "A": "Data Reception Stations.",
      "B": "Payload Planning Management.",
      "C": "S/C Ops Operations Management.",
      "D": "Astronaut Training Protocols."
    },
    "correct_answer": "D"
  },
  {
    "question": "What does TTC in 'TTC Ground Station' stand for?",
    "options": {
      "A": "Tracking, Telemetry, and Command.",
      "B": "Transport, Technology, and Communication.",
      "C": "Territory, Technology, and Coverage.",
      "D": "Transmission, Telemetry, and Computing."
    },
    "correct_answer": "A"
  },
  {
    "question": "What is the function of a Backup Control Center in Satellite Mission Operations?",
    "options": {
      "A": "To prevent hacking attempts in a satellite system.",
      "B": "To serve as a secondary operations center in case of failures.",
      "C": "To store excess satellite data for later retrieval.",
      "D": "To control ground-based antenna maintenance."
    },
    "correct_answer": "B"
  },
  {
    "question": "What role do 'External Agencies' play in Satellite Mission Operations?",
    "options": {
      "A": "Conducting ground-focused research only.",
      "B": "Collaborating for data exchange and operational support.",
      "C": "Developing software systems for satellites.",
      "D": "Maintaining the TTC ground stations globally."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which of the following is NOT a phase in Satellite Mission Operations?",
    "options": {
      "A": "Pre-Launch Phase",
      "B": "Initial Phase",
      "C": "Exploration Phase",
      "D": "Terminal Phase"
    },
    "correct_answer": "C"
  },
  {
    "question": "What is the first phase in Satellite Mission Operations?",
    "options": {
      "A": "Terminal Phase",
      "B": "Pre-Launch Phase",
      "C": "Normal Phase",
      "D": "Initial Phase"
    },
    "correct_answer": "B"
  },
  {
    "question": "Which phase typically occurs after the Launch and Early Orbit phase?",
    "options": {
      "A": "Initial Phase",
      "B": "Terminal Phase",
      "C": "Normal Phase",
      "D": "Pre-Launch Phase"
    },
    "correct_answer": "A"
  },
  {
    "question": "What is the final phase of Satellite Mission Operations called?",
    "options": {
      "A": "Initial Phase",
      "B": "Normal Phase",
      "C": "Terminal Phase",
      "D": "Launch Phase"
    },
    "correct_answer": "C"
  },
  {
    "question": "What is the main goal of the pre-launch phase mission operations?",
    "options": {
      "A": "Identifying potential locations for missions.",
      "B": "Ensuring readiness of all ground segment elements.",
      "C": "Focusing on post-launch data analysis.",
      "D": "Reducing the training time for the operations team."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which of the following is NOT included in pre-launch phase mission operations activities?",
    "options": {
      "A": "Prelaunch simulations.",
      "B": "Autonomous Checks (AC).",
      "C": "Orbital trajectory calculations.",
      "D": "Full Dress Rehearsals (FDR)."
    },
    "correct_answer": "C"
  },
  {
    "question": "What is the purpose of Full Dress Rehearsals (FDR) in the pre-launch phase?",
    "options": {
      "A": "To test and evaluate spacecraft designs.",
      "B": "To conduct complete and realistic simulations of operations.",
      "C": "To validate the launch site's weather conditions.",
      "D": "To streamline data processing post-launch."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which term refers to verifying the functionality and efficiency of data transmission in pre-launch operations?",
    "options": {
      "A": "Autonomous Checks (AC).",
      "B": "Data Flow Checks (DFC).",
      "C": "Total Network Simulation (TNS).",
      "D": "Ground readiness evaluation."
    },
    "correct_answer": "B"
  },
  {
    "question": "What role does training for the operations team play in pre-launch phase mission operations?",
    "options": {
      "A": "Enhances the autonomy of spacecraft systems.",
      "B": "Prepares the team to effectively manage and execute mission operations.",
      "C": "Ensures network compatibility between ground segments.",
      "D": "Focuses on the creation of mission databases."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is one of the key steps in the Launch and Early Phase Mission Operations?",
    "options": {
      "A": "Spacecraft decommissioning and disposal.",
      "B": "Spacecraft power ON and initialization commanding operation.",
      "C": "Post-mission data analysis.",
      "D": "Construction of the spacecraft."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is the purpose of Preliminary Orbit Determination (POD)?",
    "options": {
      "A": "To plan future spacecraft missions.",
      "B": "To generate and disseminate state vectors.",
      "C": "To shut down the spacecraft systems.",
      "D": "To monitor earthu2019s atmosphere."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which activity is involved in the monitoring phase of space missions?",
    "options": {
      "A": "3-axis earth/sun acquisition using thrusters.",
      "B": "Constructing the spacecraft's solar panels.",
      "C": "Injecting the spacecraft back into Earth's atmosphere.",
      "D": "Analyzing post-mission data."
    },
    "correct_answer": "A"
  },
  {
    "question": "What happens during the Lift Off and Launch Phase monitoring?",
    "options": {
      "A": "Tracking changes in the sun's position.",
      "B": "Solar panel deployment and injection monitoring.",
      "C": "Decommissioning of the spacecraft.",
      "D": "Planning the next mission phase."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is the significance of disseminating state vectors to tracking stations?",
    "options": {
      "A": "It ensures accurate spacecraft tracking by all stations.",
      "B": "It helps shut down unused systems on the spacecraft.",
      "C": "It finalizes the mission's end-of-life cycle.",
      "D": "It determines the launch site for future missions."
    },
    "correct_answer": "A"
  },
  {
    "question": "What does the initial phase of mission operations begin with?",
    "options": {
      "A": "Subsystem performance evaluation",
      "B": "3-Axes Acquisition",
      "C": "Calibration of sensors",
      "D": "Payload commissioning"
    },
    "correct_answer": "B"
  },
  {
    "question": "Which activity is NOT part of the initial phase of mission operations?",
    "options": {
      "A": "Subsystem performance validation",
      "B": "Tuning of database limits",
      "C": "Payload commissioning",
      "D": "Full deployment of ground software for normal operations"
    },
    "correct_answer": "D"
  },
  {
    "question": "What is the purpose of stabilizing ground software during the initial phase?",
    "options": {
      "A": "To validate subsystem performance",
      "B": "To transition to the normal phase",
      "C": "To achieve orbit acquisition",
      "D": "To monitor critical alarms"
    },
    "correct_answer": "B"
  },
  {
    "question": "What does orbit acquisition and phasing involve?",
    "options": {
      "A": "Validation of payload system functionality",
      "B": "Adjusting satellites into the desired orbit",
      "C": "Calibrating ground station sensors",
      "D": "Stabilizing software for ground operations"
    },
    "correct_answer": "B"
  },
  {
    "question": "What does 'orbit maintenance' primarily involve in the context of spacecraft operations?",
    "options": {
      "A": "Changing the mission plan entirely.",
      "B": "Keeping the spacecraft on its designated path around Earth or another body.",
      "C": "Switching to a backup subsystem to avoid malfunctions.",
      "D": "Communicating with ground control to adjust software settings."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is the purpose of switching to redundant systems during spacecraft operations?",
    "options": {
      "A": "To avoid using excessive system resources.",
      "B": "To replace failed systems and ensure continued functionality.",
      "C": "To perform ordinary maintenance tasks.",
      "D": "To prevent collision avoidance maneuvers."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is the role of 'collision avoidance maneuvers' in spacecraft operations?",
    "options": {
      "A": "To maintain a spacecraft's attitude.",
      "B": "To adjust the temperature of the spacecraft.",
      "C": "To prevent spacecraft from colliding with other objects.",
      "D": "To perform security key management."
    },
    "correct_answer": "C"
  },
  {
    "question": "What does 'fine-tuning of subsystem parameters' aim to achieve?",
    "options": {
      "A": "Optimizing subsystems to meet mission-specific requirements.",
      "B": "Changing the spacecraft's orbit entirely.",
      "C": "Adjusting the spacecraft's attitude manually.",
      "D": "Performing backup operations for collision avoidance."
    },
    "correct_answer": "A"
  },
  {
    "question": "Why is the 'management of security keys' critical in spacecraft operations?",
    "options": {
      "A": "To maintain spacecraft communication integrity and security.",
      "B": "To recover lost subsystems during malfunctions.",
      "C": "To ensure the fine-tuning of system parameters.",
      "D": "To enable redundant system switchover."
    },
    "correct_answer": "A"
  },
  {
    "question": "What is the primary purpose of collision avoidance maneuvers in space operations?",
    "options": {
      "A": "To improve satellite communication efficiency.",
      "B": "To prevent proximity alerts with functioning satellites.",
      "C": "To avoid potential collisions with space debris or other objects.",
      "D": "To redirect spacecraft for optimized energy usage."
    },
    "correct_answer": "C"
  },
  {
    "question": "What is the role of the SOPA (Space Object Proximity Analysis) team?",
    "options": {
      "A": "To deploy satellites into orbit.",
      "B": "To monitor space object debris and issue proximity alerts.",
      "C": "To develop new technologies for spacecraft propulsion.",
      "D": "To perform weather predictions for space launches."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is a significant characteristic of space debris?",
    "options": {
      "A": "It only includes large objects like discarded rocket stages.",
      "B": "It consists of functioning satellites near Earth's orbit.",
      "C": "It includes both large objects and microscopic materials like paint chips.",
      "D": "It mostly exists beyond 2,000 km in geostationary orbit."
    },
    "correct_answer": "C"
  },
  {
    "question": "Approximately how many pieces of space debris larger than 10 cm exist in Earth's orbit?",
    "options": {
      "A": "15,000",
      "B": "25,000",
      "C": "35,000",
      "D": "45,000"
    },
    "correct_answer": "C"
  },
  {
    "question": "What is true about the location of most space debris?",
    "options": {
      "A": "It is concentrated in geostationary orbits above 36,000 km.",
      "B": "It is mostly found in low Earth orbit within 2,000 km.",
      "C": "It is equally distributed across all orbital levels.",
      "D": "It is primarily located in interplanetary space regions."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is a primary focus during the terminal phase of LEO missions?",
    "options": {
      "A": "Payload deployment.",
      "B": "Health monitoring and payload programming.",
      "C": "Launching the spacecraft into orbit.",
      "D": "Increasing the satellite's operational lifespan."
    },
    "correct_answer": "B"
  },
  {
    "question": "Why is fuel budgeting essential during the terminal phase of LEO missions?",
    "options": {
      "A": "To increase power generation.",
      "B": "To prevent system degradation.",
      "C": "To bring the satellite to a lower orbit for re-entry.",
      "D": "To enable communication with the payload."
    },
    "correct_answer": "C"
  },
  {
    "question": "What is the recommended orbital life for a space object after mission completion, as per international guidelines?",
    "options": {
      "A": "10 years.",
      "B": "15 years.",
      "C": "20 years.",
      "D": "Less than 25 years."
    },
    "correct_answer": "D"
  },
  {
    "question": "Which of the following challenges is NOT mentioned as a concern during the terminal phase of LEO missions?",
    "options": {
      "A": "Systems degradation.",
      "B": "Orbit maintenance due to fuel.",
      "C": "Loss of redundancy.",
      "D": "Atmospheric interference."
    },
    "correct_answer": "D"
  },
  {
    "question": "What is the importance of ensuring re-entry in a non-habitat area?",
    "options": {
      "A": "To minimize the impact on Earth's climate.",
      "B": "To prevent damage or harm to human populations.",
      "C": "To allow the satellite to continue monitoring health parameters.",
      "D": "To maximize fuel efficiency for further operations."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is the primary focus of flight dynamics operations?",
    "options": {
      "A": "Designing spacecraft structures.",
      "B": "Managing satellite communication protocols.",
      "C": "Generating events and analyzing orbital data.",
      "D": "Forecasting weather for space missions."
    },
    "correct_answer": "C"
  },
  {
    "question": "Which type of information is included in flight dynamics operations?",
    "options": {
      "A": "Equatorial crossing data.",
      "B": "Spacecraft material stress analysis.",
      "C": "Satellite manufacturing designs.",
      "D": "Astronaut health monitoring."
    },
    "correct_answer": "A"
  },
  {
    "question": "What is the purpose of ephemeris generation in flight dynamics operations?",
    "options": {
      "A": "Studying the spacecraft's internal systems.",
      "B": "Predicting the trajectory and position of a spacecraft.",
      "C": "Developing energy systems for satellites.",
      "D": "Analyzing satellite imagery."
    },
    "correct_answer": "B"
  },
  {
    "question": "What do co-efficient commands for Fourier Power Series relate to in this context?",
    "options": {
      "A": "Data analysis and modeling of orbital transitions.",
      "B": "Improving spacecraft propulsion systems.",
      "C": "Managing power supply for satellites.",
      "D": "Simulating deep-space communication signals."
    },
    "correct_answer": "A"
  },
  {
    "question": "Which of the following is NOT mentioned as part of flight dynamics operations?",
    "options": {
      "A": "Ground trace analysis.",
      "B": "TTC & payload station visibility checks.",
      "C": "Astronaut training programs.",
      "D": "South/North Pole information."
    },
    "correct_answer": "C"
  },
  {
    "question": "What is one primary goal of scheduling operations for spacecraft?",
    "options": {
      "A": "To optimize ground resource usage for TTC and payload visibilities.",
      "B": "To determine the orbit of the spacecraft.",
      "C": "To resolve hardware malfunctions in real-time.",
      "D": "To manage communication delays in deep space missions."
    },
    "correct_answer": "A"
  },
  {
    "question": "Which of the following is a key requirement for scheduling operations software?",
    "options": {
      "A": "To eliminate the need for emergency payload programming.",
      "B": "To prioritize support requirements under resource constraints.",
      "C": "To provide unlimited accessibility to ground stations.",
      "D": "To automate real-time spacecraft repairs."
    },
    "correct_answer": "B"
  },
  {
    "question": "In payload planning operations, what is one responsibility of software tools?",
    "options": {
      "A": "To ensure continuous ground station support.",
      "B": "To generate command sequences for satellite uplink.",
      "C": "To avoid overlap of satellite transmissions.",
      "D": "To monitor crew activities on-board a spacecraft."
    },
    "correct_answer": "B"
  },
  {
    "question": "What does TTC stand for in the context of spacecraft operations?",
    "options": {
      "A": "Time-Task Coordination.",
      "B": "Tracking, Telemetry, and Command.",
      "C": "Transmission-Telecom Connection.",
      "D": "Technical Training and Certification."
    },
    "correct_answer": "B"
  },
  {
    "question": "Why is the consolidation of visibilities important in spacecraft scheduling?",
    "options": {
      "A": "To maintain 24/7 operations without downtime.",
      "B": "To ensure adherence to spacecraft constraints.",
      "C": "To maximize payload power usage.",
      "D": "To allow multiple satellites to share the same orbit."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is the primary focus of 'Future mission operations'?",
    "options": {
      "A": "Reducing the scale of exploration to conserve resources.",
      "B": "Preparing in advance to handle and execute upcoming missions.",
      "C": "Studying past spacecraft operation failures extensively.",
      "D": "Avoiding the use of automation in managing spacecraft."
    },
    "correct_answer": "B"
  },
  {
    "question": "What key technological concept is emphasized in future spacecraft operations?",
    "options": {
      "A": "Decreasing manual intervention through automation.",
      "B": "Increasing reliance on human operators for mission management.",
      "C": "Reducing the complexity of spacecraft design.",
      "D": "Focusing on building spacecraft with higher payload capacities."
    },
    "correct_answer": "A"
  },
  {
    "question": "Why might automation be significant for spacecraft operations?",
    "options": {
      "A": "It reduces human error and increases efficiency.",
      "B": "It eliminates the need for spacecraft maintenance.",
      "C": "It ensures the spacecraft operates manually when necessary.",
      "D": "It solely focuses on improving resolution of onboard cameras."
    },
    "correct_answer": "A"
  },
  {
    "question": "What is a primary aspect of next-generation satellite mission operations?",
    "options": {
      "A": "Increased security protocols on Earth.",
      "B": "Increasing autonomy and AI-based operations.",
      "C": "Reduction in satellite launches.",
      "D": "Manual ground control operations."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is one of the goals of future satellite mission operations?",
    "options": {
      "A": "Complete removal of AI-based systems.",
      "B": "Enhanced manual control for satellites.",
      "C": "Prediction of anomalies in advance.",
      "D": "Decreasing satellite network integration."
    },
    "correct_answer": "C"
  },
  {
    "question": "Which of the following is NOT a focus of next-generation satellite operations?",
    "options": {
      "A": "Dynamic resource allocation.",
      "B": "Automated collision avoidance.",
      "C": "Manual recovery of satellite data.",
      "D": "Autonomous network coordination."
    },
    "correct_answer": "C"
  },
  {
    "question": "What concept does 'fully integrated constellation management' align with?",
    "options": {
      "A": "Managing a group of satellite operations seamlessly.",
      "B": "Operating satellites individually with limited communication.",
      "C": "Decentralized network control for space probes.",
      "D": "Independent recovery of satellite issues."
    },
    "correct_answer": "A"
  },
  {
    "question": "How will dynamic resource allocation benefit satellite operations?",
    "options": {
      "A": "By minimizing resource usage across Earth-based stations.",
      "B": "By improving efficiency and adaptability in space missions.",
      "C": "By completely removing AI reliance.",
      "D": "By limiting the number of active satellites in space."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is one key feature of future mission operations?",
    "options": {
      "A": "Fixed ground stations with limited accessibility.",
      "B": "Virtualized, cloud-based control centers.",
      "C": "Exclusive reliance on analog communication systems.",
      "D": "Disconnection from global networks."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is a benefit of cloud-based ground systems for mission operations?",
    "options": {
      "A": "Increased hardware dependency.",
      "B": "Limited scalability and accessibility.",
      "C": "Cost reduction through shared resources.",
      "D": "Decreasing the security of telemetry storage."
    },
    "correct_answer": "C"
  },
  {
    "question": "What does the concept of 'Ground Station as a Service (GSaaS)' involve?",
    "options": {
      "A": "Building new ground stations in remote locations.",
      "B": "Renting antenna time on shared global networks.",
      "C": "Eliminating the need for ground stations entirely.",
      "D": "Installing traditional fixed ground stations globally."
    },
    "correct_answer": "B"
  },
  {
    "question": "Which of the following is an advantage of interconnected global ground networks?",
    "options": {
      "A": "Reduction in data analysis capability.",
      "B": "Exclusive use by a single agency or company.",
      "C": "Cost reduction through shared global networks.",
      "D": "Elimination of cloud-based technologies."
    },
    "correct_answer": "C"
  },
  {
    "question": "How will operations software and telemetry storage function in future mission operations?",
    "options": {
      "A": "Through dedicated local servers.",
      "B": "On secure cloud infrastructure.",
      "C": "On analog-based systems.",
      "D": "Via disconnected, static systems."
    },
    "correct_answer": "B"
  },
  {
    "question": "What is a key feature of future spacecraft as discussed in the text?",
    "options": {
      "A": "Predefined, fixed transponders for mission-specific tasks.",
      "B": "Hardware-based payloads without in-orbit modifications.",
      "C": "Reconfigurable transponders and software-defined payloads.",
      "D": "Increased reliance on manual control operations from Earth."
    },
    "correct_answer": "C"
  },
  {
    "question": "How can communication satellites change functionality in orbit, according to the text?",
    "options": {
      "A": "Through physical upgrades and repair missions.",
      "B": "By modifying their hardware components mechanically.",
      "C": "Using software commands to alter frequency bands or beam coverage.",
      "D": "With constant pre-launch adjustments to configurations."
    },
    "correct_answer": "C"
  },
  {
    "question": "What shift in mission operations is anticipated with the evolution of spacecraft design?",
    "options": {
      "A": "Increased focus on hardware builds pre-launch.",
      "B": "Greater emphasis on software updates and dynamic tasking.",
      "C": "Dependence only on traditional pre-launch planning.",
      "D": "Reduced reliance on onboard programming."
    },
    "correct_answer": "B"
  },
  {
    "question": "Why is space traffic control becoming increasingly important?",
    "options": {
      "A": "Because satellites are being launched by only a few countries.",
      "B": "Due to failures in long-term space exploration missions.",
      "C": "As thousands of satellites are being launched, raising the risk of collisions.",
      "D": "To ensure propulsion systems are optimized for fast travel."
    },
    "correct_answer": "C"
  },
  {
    "question": "Which activity is NOT included in future mission operations for space sustainability?",
    "options": {
      "A": "Continuous tracking of debris.",
      "B": "Collision avoidance automation.",
      "C": "End-of-life deorbiting planning.",
      "D": "Construction of on-orbit repair stations."
    },
    "correct_answer": "D"
  },
  {
    "question": "What is the role of ground operators in future mission operations?",
    "options": {
      "A": "To manually handle all monitoring and decision-making tasks.",
      "B": "To act as supervisors supported by AI copilots handling routine monitoring.",
      "C": "To rely solely on traditional manual control methods.",
      "D": "To eliminate human involvement in monitoring tasks."
    },
    "correct_answer": "B"
  },
  {
    "question": "How will decision support systems assist in future mission operations?",
    "options": {
      "A": "By providing real-time recommendations during anomalies or maneuvers.",
      "B": "By replacing ground operators entirely in critical decisions.",
      "C": "By only focusing on hardware-related issues.",
      "D": "By minimizing the use of AI technologies in operations."
    },
    "correct_answer": "A"
  },
  {
    "question": "What does the concept of a 'spaceu2013ground continuum' enable?",
    "options": {
      "A": "Slower data delivery and reduced connectivity.",
      "B": "Enhanced cooperation between space agencies and ground networks.",
      "C": "Instant Earth observation data delivery and IoT data access worldwide.",
      "D": "Exclusive integration of NavIC systems with cloud-based networks."
    },
    "correct_answer": "C"
  },
  {
    "question": "What is a significant feature of the integration between satellite operations and terrestrial networks?",
    "options": {
      "A": "Seamless navigation augmentation using NavIC and 5G integration.",
      "B": "The inability to link space systems with terrestrial networks.",
      "C": "Limited access to IoT data in remote regions.",
      "D": "Exclusive reliance on 4G technology for satellite operations."
    },
    "correct_answer": "A"
  },
  {
    "question": "How are satellite mission operations evolving?",
    "options": {
      "A": "From human-supervised centers to intelligent, cloud-driven, dynamic systems.",
      "B": "From advanced systems back to fully manual control methods.",
      "C": "Towards reducing autonomy and increasing human intervention.",
      "D": "Towards removing all ground-based operations entirely."
    },
    "correct_answer": "A"
  },
  {
    "question": "What is Olympus Mons primarily known for?",
    "options": {
      "A": "Being the largest crater on Mars.",
      "B": "Its status as a large shield volcano.",
      "C": "Hosting the densest atmosphere on Mars.",
      "D": "Its location in the Martian polar regions."
    },
    "correct_answer": "B"
  },
  {
    "question": "How tall is Olympus Mons compared to Mount Everest?",
    "options": {
      "A": "Almost twice as tall as Mount Everest.",
      "B": "Equal in height to Mount Everest.",
      "C": "Almost three times as tall as Mount Everest.",
      "D": "Half the height of Mount Everest."
    },
    "correct_answer": "C"
  },
  {
    "question": "During which geological period on Mars did Olympus Mons form?",
    "options": {
      "A": "Hesperian Period",
      "B": "Precambrian Period",
      "C": "Amazonian Period",
      "D": "Noachian Period"
    },
    "correct_answer": "C"
  },
  {
    "question": "Which factor is detected by MCC around the Olympus Mons region?",
    "options": {
      "A": "Seismic activity",
      "B": "Cloud formation",
      "C": "Soil composition",
      "D": "Polar ice fields"
    },
    "correct_answer": "B"
  },
  {
    "question": "What is a notable feature of AstroSat compared to GALEX?",
    "options": {
      "A": "It operates in the infrared spectrum.",
      "B": "It has three times higher spatial resolution.",
      "C": "It is solely used for black hole studies.",
      "D": "It has a smaller field of view."
    },
    "correct_answer": "B"
  },
  {
    "question": "What type of telescope is GALEX, which AstroSat is compared to?",
    "options": {
      "A": "An X-ray telescope.",
      "B": "A ground-based optical telescope.",
      "C": "A UV telescope.",
      "D": "A radio telescope."
    },
    "correct_answer": "C"
  },
  {
    "question": "What is the main focus of the study in the Globular Cluster NGC 2808?",
    "options": {
      "A": "Formation of new galaxies.",
      "B": "A newly identified population of Ultraviolet stars.",
      "C": "The chemical composition of planetary nebulae.",
      "D": "Infrared emissions from neighboring star systems."
    },
    "correct_answer": "B"
  },
  {
    "question": "In the context of the study, which characteristic is most likely associated with Ultraviolet stars?",
    "options": {
      "A": "They emit mostly infrared light.",
      "B": "They are cooler than main-sequence stars.",
      "C": "They are hotter and emit ultraviolet radiation.",
      "D": "They do not exist in globular clusters."
    },
    "correct_answer": "C"
  },
  {
    "question": "What type of galaxy is NGC 2336?",
    "options": {
      "A": "Elliptical galaxy",
      "B": "Spiral galaxy",
      "C": "Irregular galaxy",
      "D": "Barred spiral galaxy"
    },
    "correct_answer": "B"
  },
  {
    "question": "Which instrument captured detailed imagery of NGC 2336?",
    "options": {
      "A": "Hubble Space Telescope",
      "B": "Chandra X-ray Observatory",
      "C": "UVIT",
      "D": "James Webb Space Telescope"
    },
    "correct_answer": "C"
  },
  {
    "question": "What characteristic best describes NGC 2336?",
    "options": {
      "A": "A ring-shaped galaxy",
      "B": "A classic spiral galaxy",
      "C": "A dwarf galaxy",
      "D": "A globular cluster"
    },
    "correct_answer": "B"
  },
  {
    "question": "What is the primary subject related to the '3D View of Sarabhai Crater' mentioned in the slide?",
    "options": {
      "A": "Mars exploration data from NASA.",
      "B": "Imagery generated from TMC-2 DEM and Ortho-image.",
      "C": "Blueprint for building lunar structures.",
      "D": "A simulation of comet trajectories."
    },
    "correct_answer": "B"
  },
  {
    "question": "What mission does the 3D view of Sarabhai Crater pertain to?",
    "options": {
      "A": "Chandrayaan-2",
      "B": "Voyager-1",
      "C": "Mars Curiosity Rover",
      "D": "Apollo-11"
    },
    "correct_answer": "A"
  }
]