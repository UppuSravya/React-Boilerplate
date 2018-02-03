import React, { Component } from 'react';
import { TextField } from 'material-ui/TextField';

class Register extends Component {
  
   
    render() {
        // console.log(this.state)
        return (
            <div>
            <form name="form" >
                <div className={'form-group'} >
                    <label htmlFor="firstname">Firstname</label>
                   <TextField />
                </div>
                <div className='form-group' >
                    <label htmlFor="lastname">Lastname</label>
                    <TextField />
                </div>
                <div className='form-group' >
                    <label htmlFor="email">Username</label>
                   <TextField />
                </div>
                <div className='form-group' >
                    <label htmlFor="password">Password</label>
                   
                </div>
                <div className='form-group' >
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" onChange={(event) => this.setState({confirmPassWord: event.target.value })} className="form-control" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">SignUp</button>
                </div>
            </form>
              {
                this.state.showStat.length ?
                    <h4>{this.state.showStat}</h4> : null
            }
            </div>
        )
    }
}

export default Register;