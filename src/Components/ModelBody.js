import React from 'react'


function ModelBody({ id }) {
    let data;
    switch (id) {
        case 1:
            data = <>
                {/* <h2>CNC Machining Processes</h2> */}
                <ul style={{ fontWeight: "medium", fontSize: "x-large" }}>
                    <li>Introduction to CNC Machining and its Applications</li>
                    <li>Understanding CNC Programming and G-Code</li>
                    <li>Tool Selection and Optimization in CNC Machining</li>
                    <li>Precision Machining Techniques</li>
                    <li>Program and operate a CNC machine for simple part manufacturing</li>
                </ul>
            </>
            break;
        case 2:
            data = <>
                {/* <h2>Hydraulic Machine Operation</h2> */}
                <ul style={{ fontWeight: "medium", fontSize: "x-large" }}>
                    <li>Basics of Hydraulic Systems</li>
                    <li>Hydraulic Components and their Functions</li>
                    <li>Overview of different types of hydraulic turbines (Pelton, Francis, Kaplan)</li>
                    <li>Study the components of a hydraulic turbine system</li>
                    <li>Hands-on experience in hydraulic turbine operations</li>
                </ul>
            </>
            break;
        case 3:
            data = <>
                {/* <h2>Refrigeration Systems</h2> */}
                <ul style={{ fontWeight: "medium", fontSize: "x-large" }}>
                    <li>Fundamentals of Refrigeration</li>
                    <li>Types of Refrigerants and their Properties</li>
                    <li>Components of Refrigeration Systems</li>
                    <li>Energy Efficiency in Refrigeration</li>
                    <li>Assemble and disassemble refrigeration components</li>
                    <li>Perform routine maintenance on refrigeration systems</li>
                    <li>Identify and fix refrigeration system faults</li>
                </ul>
            </>
            break;
        case 4:
            data = <>
                {/* <h2>Automobile Engineering</h2> */}
                <ul style={{ fontWeight: "medium", fontSize: "x-large" }}>
                    <li>Automotive Engine Technology</li>
                    <li>Vehicle Dynamics and Control Systems</li>
                    <li>Hybrid and Electric Vehicles</li>
                    <li>Automotive Safety Systems</li>
                    <li>Future Trends in Automobile Engineering</li>
                    <li>Disassemble and reassemble automotive engine components</li>
                    <li>Hands-on experience with computerised IC Engine</li>
                </ul>
            </>
            break;
        case 5:
            data = <>
                {/* <h2>Automation Systems</h2> */}
                <ul style={{ fontWeight: "medium", fontSize: "x-large" }}>
                    <li>Introduction to Industrial Automation</li>
                    <li>PLC (Programmable Logic Controller) Programming</li>
                    <li>SCADA (Supervisory Control and Data Acquisition) Systems</li>
                    <li>Robotic Automation in Manufacturing</li>
                    <li>Integration of Automation Systems</li>
                    <li>Program a PLC for a simulated industrial process</li>
                    <li>Design and operate a simple robotic automation system</li>
                </ul>
            </>
            break;
        case 6:
            data = <>
                {/* <h2>CATIA for 3D Modeling</h2> */}
                <ul style={{ fontWeight: "medium", fontSize: "x-large" }}>
                    <li>Introduction to CATIA Software</li>
                    <li>Basic 3D Modeling Techniques</li>
                    <li>Advanced Surface Modeling in CATIA</li>
                    <li>Assembly and Kinematics in CATIA</li>
                    <li>CATIA for Product Design and Simulation</li>
                    <li>Practice 3D modeling exercises using CATIA</li>
                    <li>Design and assemble virtual products in CATIA</li>
                    <li>Simulate and analyze the motion of assembled parts</li>
                </ul>
            </>
            break;
        case 7:
            data = <>
                {/* <h2>3D Printing Techniques</h2> */}
                <ul style={{ fontWeight: "medium", fontSize: "x-large" }}>
                    <li>Basics of 3D Printing Technology</li>
                    <li>Types of 3D Printers and their Applications</li>
                    <li>3D Printing Materials and Selection Criteria</li>
                    <li>Post-Processing Techniques for 3D Printed Objects</li>
                    <li>Designing for 3D Printing</li>
                    <li>Operate different types of 3D printers</li>
                    <li>Experiment with various 3D printing materials</li>
                </ul>
            </>
            break;
        case 8:
            data = <>
                {/* <h2>Specialized Machines</h2> */}
                <ul style={{ fontWeight: "medium", fontSize: "x-large" }}>
                    <li>Overview of Specialized Machines in Manufacturing</li>
                    <li>Case Studies of Specialized Machine Applications</li>
                    <li>Design and Operation of Specialized Machines</li>
                    <li>Emerging Trends in Specialized Machine Technology</li>
                </ul>
            </>
            break;
        case 9:
            data = <>
                {/* <h2>Testing of Advanced Materials</h2> */}
                <ul style={{ fontWeight: "medium", fontSize: "x-large" }}>
                    <li>Introduction to Advanced Materials</li>
                    <li>Non-Destructive Testing (NDT) Techniques</li>
                    <li>Mechanical Testing of Advanced Materials</li>
                    <li>Conduct mechanical tests (tensile, hardness) on advanced materials</li>
                </ul>
            </>
            break;
        default:
            break;
    }


    return (
        data
    );
}

export default ModelBody