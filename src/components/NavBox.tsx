import { NavItemType } from "../types"

interface INavBox {
  list: NavItemType[]
  opened: boolean
}

const NavBox: React.FC<INavBox> = ({ list, opened }) => {
  return (
    <ul className={`navBox ${opened ? 'opened' : ''}`}>
      {list.map((li, index) => <li key={index}><a href={li.link}>{li.title}</a></li>)}
    </ul>
  )
}

export default NavBox
