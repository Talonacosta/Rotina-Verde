import Link from "next/link"

const NavbarHome = () => {
  return (
    <nav class="flex items-center justify-between bg-green-500 p-4 text-white shadow-md">
      <ul class="flex gap-4">
        <li>
          <Link href="/" class="font-bold text-xl">
            Home
          </Link>
        </li>
        <li>
          <Link href="/Sobre" class="font-bold text-xl">
            Sobre
          </Link>
        </li>
        <li>
          <Link href="/login/Create" class="font-bold text-xl">
            login
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavbarHome
