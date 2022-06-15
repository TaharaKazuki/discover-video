import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react'

const User = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <Image
          onClick={() => signOut()}
          className="h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer p-1"
          src={session.user!.image!}
          alt="user-image"
          width={30}
          height={30}
        />
      </>
    )
  }

  return (
    <>
      <button
        className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md"
        onClick={() => signIn()}
      >
        Sign In
      </button>
    </>
  )
}

export default User
