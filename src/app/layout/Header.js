import Link from 'next/link'

const Header = () => {
  return (
    <>
      <header style={{ backgroundColor: '#2F3C7E' }} className="text-white body-font shadow-md">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/" className="text-2xl font-bold tracking-wide text-white hover:text-pink-200">MySite</Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-4 mt-4 md:mt-0">
            <Link
              href="/"
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/tutorials"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
            >
              Tutorials
            </Link>
            <Link
              href="/blog"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-full transition duration-300"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="bg-indigo-400 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

    </>
  )
}

export default Header