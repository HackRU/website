import React from 'react';
//import ReactDOM from 'react-dom';

class UserForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    if(props.email && props.token){
      this.state.email = props.email;
      this.state.token = props.token;
    }else{
      this.state.flash = "NOT LOGGED IN!";
    }
    
    this.componentDidMount = this.componentDidMount.bind(this);
    this.logout = this.logout.bind(this);
    this.save = this.save.bind(this);

  }

  componentDidMount(){
    fetch('https://m7cwj1fy7c.execute-api.us-west-2.amazonaws.com/test/read', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(data => {})
  }

  logout() {
    fetch('https://m7cwj1fy7c.execute-api.us-west-2.amazonaws.com/test/authorize', {
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'email here',
        password: 'password',
      })
    }).then(function(data){
      alert(data);
    })
  }

  save() {
    fetch('https://m7cwj1fy7c.execute-api.us-west-2.amazonaws.com/test/create', {
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'email here',
        password: 'password',
      })
    })

  }

  render() {
    return (
    <div id = "userform">

      <div>
      <h1> {this.state.flash} </h1>
	       <p>Please update your data.</p>

      <div>
        {
            this.state.user.keys.map(key =>
                    <div>
                        <label>{key}</label>
                        <input type="text" id="input-{key}" value={this.state[key]} onChange={this.onChange}></input>
                    </div>
            )
        }
      </div>

        <button onClick={this.logout} id="loginButton">
          Logout
	      </button>

        <button onClick={this.save} id="signupButton" >
          Save
	     </button>

      </div>

    </div>
    );

  }


}

export default UserForm;
