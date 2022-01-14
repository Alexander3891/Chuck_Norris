import React from 'react';
import './Header.css';
// import img from './img/logo.png'

class Header extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
             'avatar': '',      
         }
        this.getRate();
    }
    
     getRate = () => {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(data => {
                return data.json();
            })
            .then(data => {  
                this.setState({ avatar: data.icon_url});
            });  
     }
    


    render() {
        return (
            <div className='Header' >
                <div className="Header-logo">
                    <div className='Header-logo_img'><img src={this.state.avatar} alt="logo" /></div>
                    <div className='Header-logo_text'>Chuck Norris</div>
                </div>
            </div>
        );
    }
}

export default Header;
