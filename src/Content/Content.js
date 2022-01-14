import React from 'react';

import Message from '../Message/Message'
import './Content.css';

class Content extends React.Component {
     constructor(props) {
        super(props);
         this.state = {
             'categories': [],    
             "excerption_hover": '',
             "message": '',
             
         }
         this.getRate();
    }
    change_message = (e) => {
        let category = e.target.innerHTML,
            url = `https://api.chucknorris.io/jokes/random?category=${category}`

        fetch(url)
            .then(data => {
                return data.json();
            })
            .then(data => {
                this.setState({ excerption_hover: data.value });
            })
          .catch(function() {
        //         catch any errors
      });
         this.setState({ message: 'none' });
    
    }

        
        
        
     getRate = () => {
        fetch('https://api.chucknorris.io/jokes/categories')
            .then(data => {
                return data.json();
            })
            .then(data => {  
                this.setState({ categories: data});
            });  
     }
    
    
    render() {
        return (
            <div>
                <div className="Categories">
                    <div className="Categories-title">Categories</div>
                    <div className="Categories-items">
                       {Object.keys(this.state.categories).map((keyName,i) =>
                        (
                            <div className='Categories-item' key={keyName}>
                               <div className='Categories-item_title'   onClick={this.change_message}>{this.state.categories[i]}</div>
                           </div>
                       )
                    )}
                    </div>
                </div>
                <Message rate={this.state.excerption_hover} hov_message={ this.state.message}/>

            </div>
        );
    }
}

export default Content;