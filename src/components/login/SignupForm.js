//TODO - add form for signup
import React, { useState } from 'react';

function SignUp() {
const [signupForm, setSignupForm] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    password: ''

})

    return (
        <main>
            <div>
                <h1>SignUp Form</h1>
                <form method='POST'>
                  <div>
                    <label htmlFor='firstName'>First Name:</label>
                    <input
                    placeholder='First Name'
                    name='firstName'
                    type='firstName'
                    id='firstName'
                    required

                    />
                    </div>
                    <div>
                    <label htmlFor='lastName'>Last Name:</label>
                    <input
                    placeholder='Last Name'
                    name='lastName'
                    type='lastName'
                    id='lastName'
                    required

                    />
                    <div>
                    <label htmlFor='company'>Company:</label>
                    <input
                    placeholder='Company'
                    name='company'
                    type='company'
                    id='company'

                    />
                    </div>
                    </div>
                    <div>
                    <label htmlFor='email'>Email:</label>
                    <input
                    placeholder='Email'
                    name='email'
                    type='email'
                    id='email'
                    required

                    />
                    </div>
                    <div>
                    <label htmlFor='password'>Password:</label>
                    <input
                    placeholder='********'
                    name='password'
                    type='password'
                    id='password'
                    required

                    />
                    </div>
                    <div>
                      <button type='submit'>Submit</button>  
                    </div>  
                </form>
            </div>
        </main>
    )
};

export default SignUp;