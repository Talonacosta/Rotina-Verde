import React from "react"
import Image from "next/image"
import Link from "next/link"

const NavbarHome = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <Link href="/" passHref className=" flex items-center md:mb-0">
        <Image src="/svgs/logobranca.svg" alt="logo" width={50} height={30} />
      </Link>

      <ul className="flex gap-4">
        <li>
          <Link
            href="/src/pages/Sobre.jsx"
            className=" text-xl transition duration-300 ease-in-out hover:text-green-600"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/login/Create"
            className="text-xl transition duration-300 ease-in-out hover:text-green-600"
          >
            Login
          </Link>
        </li>
        <li></li>
      </ul>
    </nav>
  )
}

export default NavbarHome
