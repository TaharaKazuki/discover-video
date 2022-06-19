import React from 'react'

const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-[50%] p-6 text-sm text-gray-600 whitespace-nowrap translate-x-[-50%]">
      <p>Copyright &copy; {new Date().getFullYear()} Tahara Kazuki</p>
    </footer>
  )
}

export default Footer
