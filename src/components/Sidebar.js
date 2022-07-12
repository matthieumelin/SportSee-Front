import React from "react";

// router
import { Link } from "react-router-dom";

// styled
import styled from "styled-components";

// icons
import meditateIcon from "../assets/icons/meditate.svg";
import swimIcon from "../assets/icons/swim.svg";
import bikeIcon from "../assets/icons/bike.svg";
import dumbbellIcon from "../assets/icons/dumbbell.svg";

export default function Sidebar() {
  return (
    <StyledSidebar>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuItemLink to="/">
            <SidebarMenuItemLinkIcon src={meditateIcon} />
          </SidebarMenuItemLink>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuItemLink to="/">
            <SidebarMenuItemLinkIcon src={swimIcon} />
          </SidebarMenuItemLink>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuItemLink to="/">
            <SidebarMenuItemLinkIcon src={bikeIcon} />
          </SidebarMenuItemLink>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuItemLink to="/">
            <SidebarMenuItemLinkIcon src={dumbbellIcon} />
          </SidebarMenuItemLink>
        </SidebarMenuItem>
      </SidebarMenu>
      <SidebarCopyright>Copyright, SportSee 2020</SidebarCopyright>
    </StyledSidebar>
  );
}

const StyledSidebar = styled.div`
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 117px;
  height: 90.4vh;
`;
const SidebarMenu = styled.ul`
  padding: 0;
  list-style: none;
  position: absolute;
  top: 150px;
`;
const SidebarMenuItem = styled.li`
  margin: 0 0 20px 0;
`;
const SidebarMenuItemLink = styled(Link)`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: 0.2s;
  width: 64px;
  height: 64px;
  &:hover {
    transition: 0.2s;
    transform: scale(1.1);
  }
`;
const SidebarMenuItemLinkIcon = styled.img`
  display: block;
  width: 32px;
  height: 32px;
`;
const SidebarCopyright = styled.p`
  transform: rotate(-90deg);
  color: #fff;
  font-size: 0.625rem;
  font-family: "Roboto", sans-serif;
  white-space: nowrap;
  position: absolute;
  bottom: 117px;
`;
