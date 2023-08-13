import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {
  addClassesBackup,
  addStudentsBackup,
  addUserBackup,
} from '../../Redux/Action/BackUpAction';

const BackUpModel = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const handleClose = () => setLgShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={() => setLgShow(true)} className="dashboard-btn">
        Create Backup
      </Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {' '}
            Create Backup
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col lg={12}>
              <button
                className="backupButton"
                onClick={() => dispatch(addUserBackup())}
              >
                Users BackUp
              </button>
            </Col>
            <Col lg={12}>
              <button
                className="backupButton"
                onClick={() => dispatch(addStudentsBackup())}
              >
                Students BackUp
              </button>
            </Col>
            <Col lg={12}>
              <button
                className="backupButton"
                onClick={() => dispatch(addClassesBackup())}
              >
                {' '}
                Classes BackUp
              </button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BackUpModel;
