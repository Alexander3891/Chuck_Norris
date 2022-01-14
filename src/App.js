import React from 'react';
import './App.css';
import './index.css';
import './fonts/raleway.css';


import Header from './Header/Header'
import Footer from './Footer/Footer'
import Content from './Content/Content'


class App extends React.Component {
    render() { 
return(
    <div className="App">
        <Header />
        <Content />
        <Footer />
        
    </div>
  );

    }
    }

export default App;
