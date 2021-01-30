import React from 'react'
import '../../cssComponents/form-user.css';
import axios from 'axios';

class ConfirmUserEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    axios.get(`/user/confirmEmail/${this.props.match.params.id}`)
    .then(res => {
      console.log(res.data)
      props.history.push({ 
        pathname: '/login/register',
        state: res.data.status
       });
    })
  }

  setEmailActivated = () =>{
    axios.get(`/user/confirmEmail/${this.props.match.params.id}`)
    .then(res => {
      console.log(res.data)
    })
  }

  render(){
    return ('')
  }


  
}
export default ConfirmUserEmail;