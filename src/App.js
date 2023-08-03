

import Accom from './Accom';
import AdminLogin from './AdminLogin';
import CustomCard from './AdminPage';
import Main from './Agencypage';
import AgencyPage from './Agencypage';
import './App.css';
import Home from './Home';
import Sample from './sample/Sample';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
    <div>
      <ToastContainer />
      {/* <Home/> */}
      {/* <AdminPost/> */}
      {/* <CustomCard/> */}
      {/* <CustomCard/> */}
      {/* <Sample/> */}
      {/* <AgencyPage/> */}
      {/* <Main/> */}
      {/* <Accom agencyId={1} /> */}
      <AdminLogin/>
      
    </div>
  );
}

export default App;
