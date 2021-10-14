import React from 'react'
import { LoginButton, LoginLink, LoginContent, LoginForm, LoginLabel, LoginInput } from './LoginElements'

const Login = () => {
    return (
        <LoginContent>
            <LoginForm>

                <LoginLabel for='email'> Email:<br />
                    <LoginInput type='email' id='email' name='email' />
                </LoginLabel> <br />

                <LoginLabel for='pwd'> Password:<br />
                    <LoginInput type='password' id='pwd' name='pwd' />
                </LoginLabel> <br />

                <LoginButton type='submit' value='Sign In' />

                <LoginLabel>
                    Not registered? <LoginLink to='/register'>Sign Up</LoginLink>
                </LoginLabel>
            </LoginForm>
        </LoginContent>
    )
}

export default Login
