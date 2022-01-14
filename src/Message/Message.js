import React from 'react';
import './Message.css';
import img from './img/clipart.jpg'


class Message extends React.Component {
   constructor(props) {
        super(props);
         this.state = {
             'excerption': '',      
         }
        this.getRate();
    }

     static getDerivedStateFromProps(props, state) {
        return {
            rate: props.rate,
            hov_message: props.hov_message
        }; 

    } 
    
     getRate = () => {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(data => {
                return data.json();
            })
            .then(data => {  
                this.setState({excerption: data.value});
            });  
    }
    

    render() {
         const style = { display: this.state.hov_message };

        return (
            <div className='Message'>
                <div className="Message-img"><img src={img} alt=""/></div>
                <div className="Message-container">
                    <div className="Message-container_text" style={ style }>{this.state.excerption}</div>
                    <div className="Message-container_text_hover">{this.state.rate}</div>

                </div>
            </div>
        
        );
    }
}

export default Message;