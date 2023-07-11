"use client"

import { useEffect, useState } from 'react'; 
import { getProviders, signIn } from 'next-auth/react';

export default function loginPage() {
    const [data, setData] = useState([]);

    function fetchProviders() {
        useEffect(() => {

            const fetchData = async () => {
                const data = await getProviders();
                const providers = Object.values(data);
                setData(providers);
            }

            fetchData();
        }, [])
    }

    fetchProviders();
    return (

        <main className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center p-'>
        <div className='bg-brand-primary/60 px-6 py-8 rounded shadow-md text-black w-full'>
          <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center p-'>
              <form>
                  <div className="font-secondary text-brand-secondary text-2xl">
                     

                  {data.map(provider => (
                      <div key={provider.name}>
                    <button className='w-full text-center py-3 rounded bg-brand-secondary text-white hover:bg-green-dark focus:outline-none my-1 text-xl' type="submit" onClick={() => signIn(provider.id)}> Sign in with: {provider.name}</button>
                    </div>
                  ))}
                  </div>
              </form>
          </div>
          </div>
        
      </main>
    //     <main className="flex">
    //     <h1 className="font-primary text-brand-textHeader text-6xl">
    //       {data.map(provider => (
    //         <div key={provider.name}>
    //             <button onClick={() => signIn(provider.id)}>
    //                 Sign in with {provider.name}
    //             </button>
    //         </div>
    //       ))}
    //     </h1>
    //   </main>
    )
}