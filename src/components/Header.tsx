import logo from "../assets/logo.svg"
import avatar from "../assets/image-avatar.png"
import NavBox from "./NavBox"
import { NavItemType } from "../types"
import Cart from "./Cart"
import { useState } from "react"
import styled from "styled-components"

// nav
const navData: NavItemType[] = [
  { link: '/', title: 'Collection' },
  { link: '/', title: 'Men' },
  { link: '/', title: 'Women' },
  { link: '/', title: 'About' },
  { link: '/', title: 'Contact' }
]

// NavOverlay
const NavOverlay = styled.div<{ $opened: boolean }>`
  background: rgba(0,0,0,0.75);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  display: ${props => props.$opened ? 'block' : 'none'};
`

const Header: React.FC = () => {
  const [nav, setNav] = useState<boolean>(false)

  return (
    <header className="header">
      <button className={`navbtn ${nav ? 'opened' : ''}`} onClick={() => setNav(!nav)}></button>
      <div className="headerLogo">
        <img src={logo} alt="" />
      </div>

      <NavBox list={navData} opened={nav} />
      <NavOverlay $opened={nav} onClick={() => setNav(!nav)} />

      <Cart />

      <div className="headerUser">
        <button>
          <img src={avatar} alt="" />
        </button>
      </div>
    </header>
  )
}

export default Header
