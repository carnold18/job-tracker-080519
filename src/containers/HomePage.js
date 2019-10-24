import React from 'react';
import NavBar from '../components/NavBar';
import DashBoard from './DashBoard';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {

    render() {
        return (
            <div>
              
                <h1>This is the HOMEPAGE!</h1>
          
                <Link to="/dashboard">
                    <DashBoard  user={this.props.user}/>
                </Link>
            </div>
        )
    }
    
}

export default HomePage;