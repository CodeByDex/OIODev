"use client";

import { useEffect, useState } from "react";
import { getProviders, signIn } from "next-auth/react";

export default function LoginPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProviders();
      const providers = Object.values(data);
      setData(providers);
    };

    fetchData();
  }, []);

  return (
    <main className="flex my-16">
      <section className="devCards--container flex bg-brand-primary/60 border-gray-800 border rounded-lg mb-6 mx-auto w-fit">
        <div className="flex-col px-5 py-8 items-center mx-auto w-fit bg-gray-200/5 rounded-lg md:px-24 md:py-16">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-end">
            <div className="font-secondary text-2xl">
              <div
                className="mb-8 mt-4 text-center"
              >
                <h1 className="text-4xl mb-2 font-bold text-brand-fontHeader">
                  Login
                </h1>
                <p className="font-normal text-base">
                  Welcome back! We are happy to see you. If you are new here and
                  don&apos;t have an account, don&apos;t worry, the login and
                  sign up process are the same!
                </p>
              </div>
              {data.map((provider) => (
                <div key={provider.name} className="flex justify-center font-primary text-xl mb-2">
                  <button
                    className="bg-brand-secondary/5 hover:bg-brand-secondary/10 delay-75 duration-300 text-brand-secondary py-2 px-4 rounded-lg w-4/5"
                    type="submit"
                    onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                  >
                    {" "}
                    {provider.name}{" "}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
