import React, { Component } from 'react'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import Button from '../button/button-component'
import FormInput from '../form-input/form-input.component'
import './sign-in.styles.scss'
class SignIn extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async (e)=>{
        e.preventDefault()

        const {email, password} = this.state
        try {
            auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: ''})
        } catch (error) {
            console.log(error);
        }
    }
    handleChange = (e)=>{
        const {value, name} = e.target
        this.setState({[name]: value})
    }
    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name='email' value={this.state.email} 
                        required 
                        handleChange={this.handleChange}
                        label='email'                        
                    />
                    <FormInput type="password" name='password' value={this.state.password} 
                        required
                        handleChange={this.handleChange}
                        label='password'
                    />
                    <div className="buttons">
                        <Button type="submit">Sign In</Button>
                        <Button onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn