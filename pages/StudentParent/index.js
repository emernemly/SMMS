import Link from 'next/link';
import React from 'react';

const StudentParent = () => {
  return (
    <div className="StudentParent">
      <form className="StudentParentInput">
        <b>Cloud Education</b>
        <div className="ParentInput">
          <input type="text" placeholder="student Name" />
          <input type="text" placeholder="Class Name" />
        </div>{' '}
        <Link href="/StudentParent/MoralEducationResult">
          <button className="dashboard-btn">Next</button>
        </Link>
      </form>
    </div>
  );
};

export default StudentParent;
