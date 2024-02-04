import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import ModelBody from "./ModelBody";
import "./Schedule.css"
const modalData = [
  { id: 1, heading: 'CNC Machining Processes', content: '' },
  { id: 2, heading: 'Hydraulic Machine Operation', content: ''  },
  { id: 3, heading: 'Refrigeration Systems', content: ''  },
  { id: 4, heading: 'Automobile Engineering', content: ''  },
  { id: 5, heading: 'Automation Systems', content: ''  },
  { id: 6, heading: 'CATIA for 3D Modeling', content: ''  },
  { id: 7, heading: '3D Printing Techniques', content: ''  },
  { id: 8, heading: 'Specialized Machines', content: ''  },
  { id: 9, heading: 'Testing of Advanced Materials', content: ''  },
]

const Schedule = () => {
  const ModalComponent = ({ id, heading, onHide, children }) => {
  
    return (
      <Modal
        show={id === showModalId}
        onHide={onHide}
        size="lg"
        aria-labelledby={`contained-modal-title-vcenter`}
        centered
        className="modal-small"
      >
        <Modal.Header closeButton>
          <Modal.Title id={`contained-modal-title-vcenter-${id}`}>
            {heading}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    );
  };
  const tableData = [
    { id: 1, col1: 'Event 1', col2: '<h4 className="table-data" >CNC Machining Processes</h4>', col3: 'Value 1' },
    { id: 2, col1: 'Event 2', col2: '<h4 className="table-data" >Hydraulic Machine Operation</h4>', col3: 'Value 2' },
    { id: 3, col1: 'Event 3', col2: '<h4 className="table-data" >Refrigeration Systems</h4>', col3: 'Value 3' },
    { id: 4, col1: 'Event 4', col2: '<h4 className="table-data" >Automobile Engineering</h4>', col3: 'Value 4' },
    { id: 5, col1: 'Event 5', col2: '<h4 className="table-data" >Automation Systems</h4>', col3: 'Value 4' },
    { id: 6, col1: 'Event 6', col2: '<h4 className="table-data" >CATIA for 3D Modeling</h4>', col3: 'Value 5' },
    { id: 7, col1: 'Event 7', col2: '<h4 className="table-data" >3D Printing Techniques</h4>', col3: 'Value 6' },
    { id: 8, col1: 'Event 8', col2: '<h4 className="table-data" >Specialized Machines</h4>', col3: 'Value 7' },
    { id: 9, col1: 'Event 9', col2: '<h4 className="table-data" >Testing of Advanced Materials</h4>', col3: 'Value 8' },
  ];

  const [showModalId, setShowModalId] = useState(null);

  const handleModalShow = (id) => {
    setShowModalId(id);
  };

  const handleModalHide = () => {
    setShowModalId(null);
  };

  return (
    <div className="schdule-click-to-view" style={{position: "relative"}}>
      <p className="click-to-view" style={{position: "absolute", top: "-20px", right: "5px",color:"red"}}>Click to view details</p>
      <div className="schedule-container" style={{ marginTop: '10vh', textAlign: 'center', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px', background: '#fafafa' }}>
      <table className="table table-hover table-borderless table-lg">
        <thead >
          <tr className="table-dark">
            <td colSpan={2}>
              <h2 className="syllabus">Syllabus</h2>
            </td>
          </tr>
        </thead>
        <tbody className="tbody">
          {tableData.map((row) => (
            <tr key={row.id} className="table-row" style={{ cursor: "pointer" }} onClick={() => handleModalShow(row.id)}>
              <td ><h5 className="table-data days"><u>{row.col1}</u></h5></td>
              <td dangerouslySetInnerHTML={{ __html: row.col2 } } className="table-data"/>
            </tr>
          ))}
        </tbody>
      </table>
      
      {modalData.map((modal) => (
        <ModalComponent key={modal.id} id={modal.id} heading={modal.heading} onHide={handleModalHide}>
          <ModelBody id={modal.id}/>
        </ModalComponent>
      ))}
    </div>
    </div>
  );
};

export default Schedule;
