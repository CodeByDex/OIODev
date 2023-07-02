//TODO - add form for signup
"use client";
import React, { useState } from 'react';

function SignUp() {
const [signupForm, setSignupForm] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    password: ''
});

const handleFormSubmit = async (event) => {
    event.preventDefault();
};

const handleChange = (event) => {
  const { name, value } = event.target;
  setSignupForm({
    ...signupForm,
    [name]: value,
  });
}

    return (
        <main>
            <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center p-'>
              <div className='bg-blue-950 px-6 py-8 rounded shadow-md text-black w-full'>
                <h1 className='mb-8 text-4xl text-center font-bold text-white'>Sign Up</h1>
                <form method='POST'>
                  <div>
                    <label className='text-white' htmlFor='firstName'>*First Name:</label>
                    <input className='block border border-grey-light w-full p-3 rounded mb-4'
                    placeholder='First Name'
                    name='firstName'
                    type='firstName'
                    id='firstName'
                    required

                    />
                    </div>
                    <div>
                    <label className='text-white' htmlFor='lastName'>*Last Name:</label>
                    <input className='block border border-grey-light w-full p-3 rounded mb-4'
                    placeholder='Last Name'
                    name='lastName'
                    type='lastName'
                    id='lastName'
                    required

                    />
                    <div>
                    <label className='text-white' htmlFor='company'>Company:</label>
                    <input className='block border border-grey-light w-full p-3 rounded mb-4'
                    placeholder='Company'
                    name='company'
                    type='company'
                    id='company'

                    />
                    </div>
                    </div>
                    <div>
                    <label className='text-white' htmlFor='email'>*Email:</label>
                    <input className='block border border-grey-light w-full p-3 rounded mb-4'
                    placeholder='Email'
                    name='email'
                    type='email'
                    id='email'
                    required

                    />
                    </div>
                    <div>
                    <label className='text-white' htmlFor='password'>*Password:</label>
                    <input className='block border border-grey-light w-full p-3 rounded mb-4'
                    placeholder='********'
                    name='password'
                    type='password'
                    id='password'
                    required

                    />
                    </div>
                    <div>
                    <label className='text-white' htmlFor='password'>*Confirm Password:</label>
                    <input className='block border border-grey-light w-full p-3 rounded mb-4'
                    placeholder='********'
                    name='password'
                    type='password'
                    id='password'
                    required

                    />
                    </div>
                    <div>
                      <button className='w-full text-center py-3 rounded bg-brand-secondary text-white hover:bg-green-dark focus:outline-none my-1' type='submit'>Submit</button>  
                    </div>  
                </form>
                </div>
            </div>
        </main>
    )
};

export default SignUp;
