import React, { Component } from 'react';
import TextField from 'material-ui/TextField';


class Login extends Component {
    render() {
        return (
            <div>
                <form name="form">
                
                    <div className = "container">
                    <div className={'form-group'}>
                        <label htmlFor="username">Username</label>
                      <TextField />
                    </div>
                    <div className={'form-group'}>
                        <label htmlFor="password">Password</label>
                        < TextField />
                    </div>
                    <div className="form-group">
                      <button type="button" className="btn-btn-primary"> Login</button>
                    </div>
                </div>
              
                </form>
    
    </div >
    );

    }
}


export default Login;