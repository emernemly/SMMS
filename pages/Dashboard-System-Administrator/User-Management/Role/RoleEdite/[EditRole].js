import React, { use, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import {
  getOwnRole,
  getPermissions,
  updateRole,
} from '../../../../../Redux/Action/RolesAction';
import Hoc from '../../../../../Components/HOC/Hoc';
import SideBarSA from '../../../../../Components/SideBarSA';
import NavbarR from '../../../../../Components/RegistrationComponente/NavbarR';
import { useForm } from 'react-hook-form';

const EditRole = () => {
  const animatedComponents = makeAnimated();
  const [Rolevalue, setRolevalue] = useState();

  const changeHandler = (Rolevalue) => {
    setRolevalue(Rolevalue);
  };

  const router = useRouter();
  const dispatch = useDispatch();
  const { EditRole } = router.query;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmits = (data) => {
    console.log(data);
    dispatch(updateRole(OwnRole.id, { ...data, Permissions: Rolevalue }));
  };
  useEffect(() => {
    // Access the RolesProfile query parameter correctly from router.query
    EditRole && dispatch(getOwnRole(EditRole));
    // Access the RolesProfile query parameter correctly from router.query
    EditRole && dispatch(getPermissions()); // Assuming RolesProfile is the correct query parameter name
  }, [EditRole]); // Add the correct dependency here

  // ... the rest of your code ...

  const OwnRole = useSelector((state) => state.RolesReducer.OwnRole);
  console.log(OwnRole);
  const AllPermissions = useSelector((state) => state.RolesReducer.Permission);
  useEffect(() => {
    OwnRole && setRolevalue(OwnRole.Permissions);
  }, [OwnRole]);
  return (
    <Hoc inRole={['User Management']}>
      <Row>
        {' '}
        <Col lg={2} md={2} className="pd-l parentcontainer">
          <SideBarSA />
        </Col>
        <Col lg={10} className="dashboardContent">
          <NavbarR />
          <form onSubmit={handleSubmit(onSubmits)}>
            <section className="tableDashboard role-card">
              <div className="title">
                {' '}
                <h3>Edit Role</h3>
              </div>
              <div className="role-card-body">
                <div className="role-input">
                  <label>
                    <b>
                      {' '}
                      Title<sup>*</sup>
                    </b>
                  </label>
                  <input
                    type="text"
                    name="Role"
                    Value={OwnRole && OwnRole.Role}
                    {...register('Role')}
                  />
                </div>
                <div className="role-input">
                  <label>
                    <b>
                      {' '}
                      Permissions<sup>*</sup>
                    </b>
                  </label>
                  {/*  <select name="Title" />
              <span className="selection">
                <span
                  className="select2-selection"
                  role="combobox"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <ul className="select2-selection__rendered">
                    {Permissions.filter((el) => el.role === 'admin').map(
                      (OwnPermissions) => (
                        <li>
                          <span className="OwnPermissions">
                            {OwnPermissions.title}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </span>
              </span> */}{' '}
                </div>
                {OwnRole && (
                  <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    defaultValue={OwnRole.Permissions.map((OwnPermissions) => {
                      return {
                        value: OwnPermissions.value,
                        label: OwnPermissions.value,
                      };
                    })}
                    isMulti
                    options={AllPermissions.map((el) => {
                      return { value: el.title, label: el.title };
                    })}
                    onChange={changeHandler}
                  />
                )}
                <button type="sumbit">Save</button>
              </div>
            </section>
          </form>
        </Col>
      </Row>
    </Hoc>
  );
};

export default EditRole;
