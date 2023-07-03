//TODO - add form for login

export default function loginForm() {



    return (
        <main className="flex flex-col gap-5">
            <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center p-'>
                <form>
                    <div className="font-secondary text-brand-secondary text-4xl">
                        <label htmlFor="email">Email:</label>
                        <input 
                        placeholder="Email"
                        name="email"
                        type="email"
                        id="email"
                        required 
                        />
                    </div>
  
                    <div className="font-secondary text-brand-secondary text-4xl">
                        <label htmlFor="password">Password:</label>
                        <input
                        placeholder="********"
                        name="password"
                        type="password"
                        id="password"
                        required
                        />
                    </div>
                </form>
            </div>
        </main>
    )
  }