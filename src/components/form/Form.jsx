import React from 'react';
import Test from '../test/test';

class Form extends React.Component {
    render() {
        let register = () => {
        let logText = loginRef.current.value;
        let passText = passwordRef.current.value;
        if (logText === this.props.state.FormPage.usersData.userName || passText === this.props.state.FormPage.usersData.password) {
            console.log('Hello, vlastelin_vselennoy.');
        } else {
            console.log('No, you are not a vlastelin_vselennoy!');
        }
    }
    let loginRef = new React.createRef();
    let passwordRef = new React.createRef();
    
    return(
        <div className="form">
            <h2>Form</h2>

            <form>
                <label>
                    Login:
                    <input type="text" name="aim" ref={loginRef} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" ref={passwordRef} />
                </label>
                    <button onClick={ register } >Add aim</button>
            </form>
        </div>
    )

    }
}

export default Form;