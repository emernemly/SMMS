import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SideBarSA from '../../../../Components/SideBarSA';
import NavbarR from '../../../../Components/RegistrationComponente/NavbarR';

const MyCalendar = () => {
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
      <Col lg={2} md={2} className="sidebarcontainer pd-l parentcontainer">
        <SideBarSA />
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

export default MyCalendar;
