import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HealthcareForm from './components/HealthcareForm';

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100 overflow-auto">
      <Navbar />
      <HealthcareForm />
      {/* <Footer /> */}
    </div>
    // <>
    //   <Navbar />
    //   <HealthcareForm />
    //   <Footer />
    // </>
  );
};

export default App;


