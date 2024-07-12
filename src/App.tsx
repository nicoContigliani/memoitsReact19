import { useState } from 'react';
import '../src/App.scss';

import { FieldNumberOutlined, InfoCircleOutlined, LinuxOutlined, MenuOutlined, WifiOutlined } from '@ant-design/icons';
import { Button, Drawer, FloatButton } from 'antd';

import Navbar from './components/Navbars/Navbar';

import { Routes, Route, Link } from "react-router-dom";
import Home from './page/Home/Home';
import Ask from './page/Ask/Ask';
import Information from './page/Information/Information';
import Contact from './page/Contact/Contact';
import NotFound from './page/NotFound/NotFound';



function App() {

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };


  return (
    <div className='app'>

      <div className='header'>
        <h2>Que comience el juego</h2>
      </div>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/ask"
            element={<Ask />}
          />
          <Route
            path="/informmation"
            element={<Information />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>

      {/* <Navbar /> */}
      <div>
        <FloatButton
          className="float-button-menu" /* Apply the CSS class */
          type="primary"
          icon={<MenuOutlined />}
          onClick={showDrawer}
        />
      </div>

      <Drawer
        // title="Basic Drawer"
        onClose={onClose}
        open={open}
        placement={'left'}
        width={160}
        style={{ backgroundColor: 'transparent', backdropFilter: 'blur(20px)', color: 'black' }} // Inline styles
        className='drawers' // More specific class name
      >
        <div >

          <Navbar />
        </div>
      </Drawer>

    </div >
  );
}

export default App;
