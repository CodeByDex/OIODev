"use client"

import { useEffect, useState } from 'react'; 
import { getProviders, signIn } from 'next-auth/react';

export default function LoginPage() {
    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const data = await getProviders();
            const providers = Object.values(data);
            setData(providers);
        }

        fetchData();
    }, [])

    return (

        <main className='container max-w-sm mx-auto my-auto flex-1 flex flex-col items-center justify-center'>
        <div className='bg-brand-primary/60 px-6 py-8 rounded shadow-md text-black w-full'>
          <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-end'>
                  <div className="font-secondary text-brand-secondary text-2xl">
                     
                  <h1 className='mb-8 mt-4 text-4xl text-center font-bold text-brand-secondary'>Sign In</h1>
                  {data.map(provider => (
                      <div key={provider.name}>
                    <button className='w-full text-center py-3 px-24 rounded bg-brand-secondary text-white my-5 text-2xl' type="submit" onClick={() => signIn(provider.id, {callbackUrl: '/'})}> {provider.name} </button>
                    </div>
                  ))}
                  </div>
          </div>
          </div>
        
      </main>
    )
}