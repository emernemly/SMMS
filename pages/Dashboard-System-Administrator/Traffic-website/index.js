import React, { useState } from 'react';
import SideBarSA from '../../../Components/SideBarSA';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../Components/RegistrationComponente/NavbarR';
import BarChart from '../../../Components/BarChart';
import TrafficLineChart from '../../../Components/TrafficWeb/TrafficLineChart';
import TrafficDonatChart from '../../../Components/TrafficWeb/TrafficDonatChart';
import TrafficBarChart from '../../../Components/TrafficWeb/TrafficBarChart';

const TrafficWebsite = () => {
  return (
    <Row>
      {' '}
      <Col lg={2} md={2} className="pd-l parentcontainer">
        <SideBarSA />
      </Col>
      <Col lg={10} className="dashboardContent">
        <NavbarR />
        <div className="Dashboard">
          <Row>
            <Col md={7}>
              <div className="lineBar">
                {' '}
                <TrafficLineChart />
              </div>
            </Col>
            <Col md={5}>
              <div className="lineBar">
                {' '}
                <TrafficDonatChart />
              </div>
            </Col>{' '}
            <Col md={12}>
              <div className="lineBar espace">
                <TrafficBarChart />
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default TrafficWebsite;
