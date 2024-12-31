import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const ToggleButton = styled.button`
  background: ${({ theme }) => theme.toggleBorder};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.5rem;
  padding: 0.5rem;
  position: absolute;
  top: 100px;
  right: 20px;
  width: 3rem;
  height: 1.5rem;

  &:focus {
    outline: none;
  }
`;

const Toggle = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);
  return (
    <ToggleButton onClick={toggleTheme}>
      <span role="img" aria-label="light mode">🌞</span>
      <span role="img" aria-label="dark mode">🌜</span>
    </ToggleButton>
  );
};

export default Toggle;
