import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  width: 100%;
  padding: 20px;
  background: #C6426E;
  text-align: center;
`;

const SocialIcons = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 24px;
  transition: color 0.3s;

  &:hover {
    color: #e9e9e9;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>&copy; {new Date().getFullYear()} MyPortfolio. All Rights Reserved.</p>
      <SocialIcons>
        <SocialLink href="https://www.facebook.com" target="_blank" aria-label="Facebook">
          <FaFacebook />
        </SocialLink>
        <SocialLink href="https://www.twitter.com" target="_blank" aria-label="Twitter">
          <FaTwitter />
        </SocialLink>
        <SocialLink href="https://www.instagram.com" target="_blank" aria-label="Instagram">
          <FaInstagram />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn">
          <FaLinkedin />
        </SocialLink>
      </SocialIcons>
    </FooterWrapper>
  );
};

export default Footer;

