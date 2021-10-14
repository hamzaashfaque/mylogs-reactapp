import React from 'react'
import { Nav, Bars, NavBox, NavDiv, NavLink, NavP } from './NavbarElements'
import { useState } from 'react'

const Navbar = () => {

    const [dropdown, setDropdown] = useState(false)

    return (
        <Nav>
            <Bars onClick={() => setDropdown(!dropdown)} />

            <NavDiv dropdown={dropdown}>
                <NavLink to='/'>
                    <NavBox>
                        <NavP>Home</NavP>
                    </NavBox>
                </NavLink>

                <NavLink to='/blogs'>
                    <NavBox>
                        <NavP>Logs</NavP>
                    </NavBox>
                </NavLink>

                <NavLink to='/about'>
                    <NavBox>
                        <NavP>About Me</NavP>
                    </NavBox>
                </NavLink>

                <NavLink to='/login'>
                    <NavBox>
                        <NavP>Sign In</NavP>
                    </NavBox>
                </NavLink>
            </NavDiv>
        </Nav>
    )
}

export default Navbar