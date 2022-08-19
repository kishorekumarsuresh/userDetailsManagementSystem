import { FormControl, Snackbar, TextField } from '@mui/material'
import React, { Component } from 'react'
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import axios from 'axios'

class Create extends Component {

  constructor(props) {
    super(props)
    this.state = {

      name: "",
      email: "",
      gender: "",
      status: "active",
      open: false,
      validity :{
        name: "",
      email: "",
         

      }
    }
  }
   changeValue = (e) => {

    const {name , value} = e.target
     let validity = {...this.state.validity}

     switch(name){
      case "name":
        validity.name =  (/^[a-zA-Z+$]/.test(value))? "":" Name should be characters only "
      break

      case "email":
        validity.email = (/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value))? "":"provide a valid  email"
      break

      default : break


     }



    this.setState({ 
      validity,
      [name] : value 
     });
  }

  handleButton = (e) => {
    e.preventDefault()
    console.log(this.state)

    axios({
      method: 'POST',
      url: 'https://gorest.co.in/public/v2/users',
      data: this.state,
      headers: {
        "Authorization": "Bearer 0ee057fd533ccad974e9383af8209a2e3db05bf7db963840f9c9b68f2c09f4f2"
      },

    }).then((result) => {
      console.log(result.data)
    }).catch(res => {
      console.log('failed')
    })
    this.handleReset()

  }

  handleReset = () => {
    console.log('resr')
    this.setState({
      name: "",
      email: "",
      gender: "",
      open: true,
      status: "active",
      

    })
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }



  render() {
    return (
      <div>
        <Typography sx={{ mr: 85 }} variant='h5'>Are you new User?</Typography>
        <br />
        <FormControl>
          <Typography sx={{ mr: 55, mb: 1 }} variant='body1'>Username</Typography>
          <TextField label='Enter your name'
            color='success'
            name="name"
            value={this.state.name}
            onChange={this.changeValue}
            variant='outlined' />
            <p style={{color:'red'}}>{this.state.validity.name}</p>

          <Typography sx={{ mr: 55, mb: 1, mt: 1 }} variant='body1'>Email-id</Typography>
          <TextField label='Enter your email-id'
            color='success'
            name="email"
            value={this.state.email}
            onChange={this.changeValue}
            variant='outlined' />
            <p  style={{color:'red'}}>{this.state.validity.email}</p>
          <Typography sx={{ mr: 45, mt: 1 }} variant='body1'>Select your Gender</Typography>
          <RadioGroup
            row
            onChange={this.changeValue}
            value={this.state.gender}
            name="gender"
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />

          </RadioGroup>
          <Button variant="contained" color='success' onClick={(e) => { this.handleButton(e) }}>Submit</Button>

          <Snackbar
            open={this.state.open}
            autoHideDuration={2000}
            message="Data Created"
            onClose={this.handleClose}
          />

        </FormControl>


      </div>
    )
  }
}

export default Create