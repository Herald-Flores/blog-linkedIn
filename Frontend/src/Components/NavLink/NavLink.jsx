import { Link } from 'react-router-dom'

const NavLink = ({ path, text, isActive }) => {
  let cssClass = 'block py-3 '
  cssClass +=
    isActive === 'true'
      ? 'text-primary-50 bg-primary-800 md:bg-transparent md:text-primary-700 dark:text-primary-50 md:dark:text-primary-100 md:border-b-2 md:border-primary-800'
      : 'text-primary-900  hover:bg-primary-300 md:hover:bg-transparent md:hover:text-primary-400 dark:text-primary-50 md:dark:hover:text-primary-400 dark:hover:bg-primary-950 dark:hover:text-primary-50 md:dark:hover:bg-transparent'
  return (
    <li>
      <Link to={path} className={cssClass}>
        {text}
      </Link>
    </li>
  )
}

export default NavLink
