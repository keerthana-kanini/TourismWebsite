import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './Home';
import UserLogin from './UserLogin';
import Accom from './Accom';
import AgencyPage from './Agencypage';
import Main from './Agencypage';
import CustomCard from './AdminPage';
import Sample from './sample/Sample';
import AdminSignin from './AdminSignin';
import AgencyReg from './AgencyReg';
import Approve from './Approve';
import FeedBack from './Feedback';
import Header from './Navbar';
import AgentPage from './AgentPage';
import AgentPost from './AgentPost';
import Navbar from './Header';
import TourPac from './TourPac';
import AccomPost from './AccomPost';
import GalleryPost from './GalleryPost';


function App() {
  return (
    <Router>
      <div>
        <ToastContainer />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/accom/:agencyId" element={<Accom agencyId={2}/>} />
          <Route path="/adminsignin" element={<AdminSignin />} />
          <Route path="/agency-page" element={<AgencyPage />} />
          <Route path="/main" element={<Main />} />
          <Route path="/admin-page" element={<CustomCard />} />
          <Route path="/sample" element={<Sample />} />
          <Route path="/agencyreg" element={<AgencyReg />} />
          <Route path="/approve" element={<Approve/>} />
          <Route path="/feedback" element={<FeedBack/>} />
          <Route path="/navbar" element={<Header/>} />
          <Route path="/agentpage" element={<AgentPage/>} />
          <Route path="/agentpost" element={<AgentPost/>} />
          <Route path="/nav" element={<Navbar/>} />
          <Route path="/tourpac" element={<TourPac/>} />
          <Route path="/accompost" element={<AccomPost/>} />
          <Route path="/gallerypost" element={<GalleryPost/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
