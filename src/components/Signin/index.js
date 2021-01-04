import React from 'react'
import { 
        Container, 
        Form, 
        FormButton, 
        FormContent, 
        FormH1, 
        FormInput, 
        FormLabel, 
        Text,
        Icon
    } from './SigninElements'

const SignIn = () => {
    return (
        <>
            <Container>
                <Icon to="/">DigiCur</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor="for">Email</FormLabel>
                        <FormInput type="email" required />
                        <FormLabel htmlFor="for">Password</FormLabel>
                        <FormInput type="password" required />
                        <FormButton type="submit">Continue</FormButton>
                        <Text>Forgot Password</Text>
                    </Form>
                </FormContent>
            </Container>
        </>
    )
}

export default SignIn;
