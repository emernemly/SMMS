import '../styles/globals.css';
import '../styles/index.scss';
import '../styles/StudentLogin.scss';
import '../styles/Navbarcomponent.scss';
import '../styles/SideBarSA.scss';
import '../styles/Registration.scss';
import '../styles/HeadTeacher.scss';
import '../styles/Role.scss';
import '../styles/DashboardSA.scss';
import '../styles/ProfileAdmin.scss';
import '../styles/NavDashboard.scss';
import '../styles/StudentParent.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg_total">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
