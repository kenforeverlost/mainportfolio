import { RiMenu5Fill } from 'react-icons/ri'

const Navigation = () => {
  return (
    <div className="navbar bg-primary">
      <div className="navbar-start flex-1">
        <a className="btn btn-ghost normal-case text-xl hidden lg:flex">KDLP</a>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <RiMenu5Fill className="text-3xl" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52"
          >
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center flex-1 justify-center lg:hidden">
        <a className="btn btn-ghost normal-case text-xl ">KDLP</a>
      </div>
      <div className="navbar-end flex-1">
        <ul className="menu menu-horizontal px-1 hidden lg:flex flex-none">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation
