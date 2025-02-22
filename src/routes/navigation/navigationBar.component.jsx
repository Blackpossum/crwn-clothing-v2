import { Outlet } from "react-router-dom";
import React from "react";
import './navigation.styles.scss'
import CrownLogo from '../../assets/crown.svg'
import NavLogo from '../../components/navigation-logo/navLogo.component'
import AnchorElement from "../../components/navigation-links/links.component";
import { ERoutePath } from "../../const/DataEnum";

const NavigationBar = () => {
  const linkMenu = [
    {
      id: 1,
      label: 'SHOP',
      url: ERoutePath.SHOP,
    },
    {
      id: 2,
      label: 'SIGN IN',
      url: ERoutePath.SIGN_IN,
    },
  ]

  return (
    <React.Fragment>
      <div className="navigation-bar">
        <NavLogo
          logoUrl={CrownLogo}
          logoClassname='logo'
          linkTo='/'
        />
        <div className="Menu-Wrapper">
          {linkMenu.map((link) => {
            return (
              <div className="Navlinks-container" key={link.id}>
                <AnchorElement
                  linkTo={link.url}
                  Classname='Nav-link'
                  label={link.label}
                />
              </div>
            )
          })}
        </div>
      </div>
      <Outlet />
    </React.Fragment>
  )
};

export default NavigationBar