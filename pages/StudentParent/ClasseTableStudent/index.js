import React from 'react';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import SideBarStudent from '../../../Components/SideBarStudent';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';

const ClasseTableStudent = () => {
  const events = [
    {
      title: 'Event 1',
      start: new Date(2023, 3, 1),
      end: new Date(2023, 3, 1),
    },
    {
      title: 'Event 2',
      start: new Date(2023, 2, 12),
      end: new Date(2023, 2, 14),
    },
    {
      title: 'Event 3',
      start: new Date(2023, 2, 17),
      end: new Date(2023, 2, 18),
    },
  ];

  const localizer = momentLocalizer(moment);
  return (
    <Row>
      {' '}
      <Col lg={2} md={2} className="pd-l parentcontainer">
        <SideBarStudent />
      </Col>
      <Col lg={10} className="dashboardContent">
        <NavbarR />
        <section className="tableDashboard">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
          />
        </section>
      </Col>
    </Row>
  );
};

export default ClasseTableStudent;
