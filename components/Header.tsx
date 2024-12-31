import Link from 'next/link';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  width: 100%;
  padding: 20px;
  background: #C6426E;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;
`;

const MenuItem = styled.li`
  font-size: 18px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <Logo>MyPortfolio</Logo>
        <Menu>
          <MenuItem>
            <Link href="/">Home</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/about">About</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/projects">Projects</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/contact">Contact</Link>
          </MenuItem>
        </Menu>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
