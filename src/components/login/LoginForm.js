//TODO - add form for login

export default function loginForm() {



    return (
        <main>
            <div>
                <form>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input 
                        placeholder="Email"
                        name="Email"
                        type="email"
                        id="email"
                        required 
                        />
                    </div>
                </form>
            </div>
        </main>
    )
}