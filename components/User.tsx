import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react'

const User = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <Image
          onClick={() => signOut()}
          className="p-1 w-10 h-10 hover:bg-gray-200 rounded-full cursor-pointer"
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
        className="py-2 px-6 font-medium text-white bg-blue-500 rounded-md hover:shadow-md hover:brightness-105"
        onClick={() => signIn()}
      >
        Sign In
      </button>
    </>
  )
}

export default User
