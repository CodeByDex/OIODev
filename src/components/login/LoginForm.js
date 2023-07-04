//TODO - add form for login

export default function loginForm() {



    return (
        <main className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center p-'>
          <div className='bg-blue-950 px-6 py-8 rounded shadow-md text-black w-full'>
            <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center p-'>
                <form>
                    <div className="font-secondary text-brand-secondary text-4xl">
                        <label htmlFor="email">Email:</label>
                        <input className='block border border-grey-light w-full p-3 rounded mb-4'
                        placeholder="Email"
                        name="email"
                        type="email"
                        id="email"
                        required 
                        />
                    </div>
  
                    <div className="font-secondary text-brand-secondary text-4xl">
                        <label htmlFor="password">Password:</label>
                        <input className='block border border-grey-light w-full p-3 rounded mb-4'
                        placeholder="********"
                        name="password"
                        type="password"
                        id="password"
                        required
                        />
                    </div>
                    <div>
                      <button className='w-full text-center py-3 rounded bg-brand-secondary text-white hover:bg-green-dark focus:outline-none my-1 text-2xl' type="submit">Log In:</button>
                    </div>
                </form>
            </div>
            </div>
            {/* create link to sign up form */}
            <p className="text-grey-dark mt-3">Don't have an account?</p>
            <p className="no-underline border-b hover:to-brand-secondary">Sign up</p>
        </main>
    )
  }