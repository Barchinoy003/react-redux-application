import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className="flex flex-col items-center pb-1 pt-1 mb-4 border-b-2 container md:flex-row">
        <Link to={'/'}>
        <img src="../constants/photo_2024-02-12_15-51-02.jpg" alt="logo"  />
        </Link>

        <nav className="inline-flex mt-2 md:mt-0 md:ms-auto">
            <Link className="mb-3 py-2 px-2 text-black-900 no-underline" to={'/login'}>
            Login
            </Link>
            <Link className="mb-3 py-2 px-2 text-black-900 no-underline" to={'/register'}>
            Register
            </Link>
        </nav>
    </div>
  )
}

export default Navbar