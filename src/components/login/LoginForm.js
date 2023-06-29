//TODO - add form for login
import React, { useState } from 'react';


function Login() {
    // const [form, setFormState] = useState({ email: '', password: '' });

    
    return (
        <main>
            <div>
                <form>
                    <div>
                    <label htmlFor='email'>Email address:</label>
                    <input
                    placeholder='johndoe@email.com'
                    name='email'
                    type='email'
                    id='email'
                    />
                    </div>
                    <div>
                        <label htmlFor='password'>Password:</label>
                        <input
                        placeholder='********'
                        name='password'
                        type='password'
                        id='password'
                        />
                    </div>
                </form>
            </div>
        </main>
    )
};export default Login;