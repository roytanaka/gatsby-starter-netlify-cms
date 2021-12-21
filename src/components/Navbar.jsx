import React, { useState } from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo.svg';
import tw, { styled } from 'twin.macro';

const Nav = styled.nav`
  ${tw`max-w-5xl mx-auto flex items-center flex-col md:(flex-row)`};
`;

const NavItems = styled.div(({ showMobile }) => [
  tw`hidden w-full md:(flex justify-end)`,
  showMobile && tw`flex flex-col`,
]);

const NavItem = styled(Link)`
  ${tw`block text-center py-4 px-6 text-gray-600 hover:(bg-indigo-50 text-indigo-600)`}
`;

const Hamburger = tw.button`
   w-14 h-14 flex items-center justify-center ml-auto hover:bg-indigo-50 md:hidden
`;

const active = tw`bg-indigo-50`;

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Nav role="navigation" aria-label="main-navigation">
      <div tw="w-full flex justify-between items-center md:w-auto">
        <Link tw="px-3 inline-block" to="/" title="Logo">
          <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
        </Link>

        <Hamburger
          onKeyPress={() => setIsActive((prevState) => !prevState)}
          onClick={() => setIsActive((prevState) => !prevState)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            tw="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Hamburger>
      </div>

      <NavItems showMobile={isActive}>
        <NavItem to="/about" activeStyle={active}>
          About
        </NavItem>
        <NavItem to="/products" activeStyle={active}>
          Products
        </NavItem>
        <NavItem to="/blog" activeStyle={active}>
          Blog
        </NavItem>
        <NavItem to="/contact" activeStyle={active}>
          Contact
        </NavItem>
        <NavItem to="/contact/examples" activeStyle={active}>
          Form Examples
        </NavItem>
      </NavItems>
    </Nav>
  );
};

export default Navbar;
