import React, { useEffect, useState } from 'react';
import SideBarSA from '../../../../../Components/SideBarSA';
import { Col, Row } from 'react-bootstrap';
import NavbarR from '../../../../../Components/RegistrationComponente/NavbarR';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Hoc from '../../../../../Components/HOC/Hoc';
import { useDispatch, useSelector } from 'react-redux';
import {
  addRoles,
  getPermissions,
} from '../../../../../Redux/Action/RolesAction';
const AddRole = () => {
  const animatedComponents = makeAnimated();
  const [Permissions, setPermissions] = useState('');
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    dispatch(getPermissions());
  }, []);

  const Permissionss = useSelector((state) => state.RolesReducer.Permission);
  const changeHandler = (Permissions) => {
    setPermissions(Permissions);
  };
  console.log(Permissionss);
  const onSubmits = async (data) => {
    dispatch(addRoles({ ...data, Permissions: Permissions }));
  };
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
                <h3>Add New Role</h3>
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
                    name="Title"
                    {...register('Role', { required: true })}
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
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={Permissionss.map((el) => {
                    return { value: el.title, label: el.title };
                  })}
                  onChange={changeHandler}
                />
                <button type="sumbit">Save</button>
              </div>
            </section>
          </form>
        </Col>
      </Row>
    </Hoc>
  );
};

export default AddRole;
