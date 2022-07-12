import React from 'react'

// router
import { NavLink } from "react-router-dom";

// styled
import styled from 'styled-components'

// images
import logo from "../assets/images/logo.png";

export default function Header() {
  return (
    <StyledHeader>
        <Navbar>
            <NavbarLogo src={logo} alt="Logo" />
            <NavbarMenu>
                <NavbarMenuItem>
                    <NavbarMenuItemLink to="/">Accueil</NavbarMenuItemLink>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <NavbarMenuItemLink to="/">Profil</NavbarMenuItemLink>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <NavbarMenuItemLink to="/">Réglage</NavbarMenuItemLink>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <NavbarMenuItemLink to="/">Communauté</NavbarMenuItemLink>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    </StyledHeader>
    )
}

const StyledHeader = styled.header`

`;
const Navbar = styled.nav`
background: #000;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
display: flex;
align-items: center;
padding: 15px 20px;
`;
const NavbarLogo = styled.img`
display: block;
object-fit: contain;
max-width: 100%;
width: 180px;
height: 60px;
`;
const NavbarMenu = styled.ul`
padding: 0;
margin: 0;
display: flex;
align-items: center;
list-style: none;
justify-content: space-around;
width: 100%;
`;
const NavbarMenuItem = styled.li`
`;
const NavbarMenuItemLink = styled(NavLink)`
color: #fff;
font-family: "Roboto", sans-serif;
font-size: 1.5rem;
font-weight: 500;
text-decoration: none;
`;