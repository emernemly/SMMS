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
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from '../Redux/store';
function MyApp({ Component, pageProps }) {
  return (
    <div className="bg_total">
      {' '}
      <Provider store={store}>
        <Component {...pageProps} />{' '}
      </Provider>
    </div>
  );
}
export default MyApp;
