import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import ListStaff from './Components/ListStaff';
import AddStaff from './Components/AddStaff';
import ListRooms from './Components/ListRooms';
import AddRooms from './Components/AddRooms';
import ListGuest from './Components/ListGuest';
import AddGuest from './Components/AddGuest';

function App() {
  return (
    <div >
       <Router>
        <HeaderComponent/>
        <div className= "container">
          <Routes>
          <Route exact path = "/" element = {<ListStaff/>}></Route>
              <Route path = "/staffs" element = {<ListStaff/>}></Route>
              <Route path = "/add-staff" element = {<AddStaff/>}></Route>
              <Route path = "/edit-staff/:code" element = {<AddStaff/>}></Route>
              
              <Route path = "/rooms" element = {<ListRooms/>}></Route>
              <Route path = "/add-room" element = {<AddRooms/>}></Route>
              <Route path = "/edit-room/:roomId" element = {<AddRooms/>}></Route>

              <Route path = "/guests" element = {<ListGuest/>}></Route>
              <Route path = "/add-guest" element = {<AddGuest/>}></Route>
              <Route path = "/edit-guest/:memberCode" element = {<AddGuest/>}></Route>
            </Routes>
        </div>
        <FooterComponent />
        </Router>
    </div>
  );
}

export default App;
