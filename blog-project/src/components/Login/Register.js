import React from 'react'
import { LoginButton, LoginLink, LoginContent, LoginForm, LoginLabel, LoginInput } from './LoginElements'

const Register = () => {
    return (
        <LoginContent>
            <LoginForm>

                <LoginLabel for='email'> Email:<br />
                    <LoginInput type='email' id='email' name='email' />
                </LoginLabel> <br />

                <LoginLabel for='username'> Username:<br />
                    <LoginInput type='text' id='username' name='username' />
                </LoginLabel> <br />

                <LoginLabel for='pwd'> Password:<br />
                    <LoginInput type='password' id='pwd' name='pwd' />
                </LoginLabel> <br />

                <LoginLabel for='confpwd'> Confirm Password:<br />
                    <LoginInput type='password' id='confpwd' name='confpwd' />
                </LoginLabel> <br />

                <LoginLabel for='birthday'> Date of Birth:
                    <LoginInput type='date' id='birthday' name='birthday' />
                </LoginLabel> <br />

                <LoginButton type='submit' value='Sign Up' />

                <LoginLabel>
                    Already registered? <LoginLink to='/login'>Sign In</LoginLink>
                </LoginLabel>
            </LoginForm>
        </LoginContent>
    )
}

export default Register;