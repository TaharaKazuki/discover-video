import React from 'react'
import Image from 'next/image'
import type { InferGetServerSidePropsType } from 'next'
import Header from '../../components/Header'
import { getProviders, signIn } from 'next-auth/react'

const signin = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Header />
      <div className="mt-40">
        {Object.values(providers!).map((provider) => (
          <div key={provider.name} className="flex flex-col items-center">
            <Image
              className="object-cover w-52"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
              alt="google-logo"
              width={262}
              height={89}
            />
            <p className="my-10 text-sm italic text-center">
              This website is created for learning purposes
            </p>
            <button
              className="p-3 text-white bg-red-400 hover:bg-red-500 rounded-lg"
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: { providers },
  }
}

export default signin
