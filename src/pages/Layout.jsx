// Layout.jsx
import React from 'react';
 import { Footer } from '../components/footer/Footer';
import { Headerversion } from '../components/header/Headerversion';

const Layout = ({ children }) => {
  return (
    <div>
       <Headerversion/>
      <div className="ptt"/>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;