import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrap>
        <Logo>
            <img
              src="./images/logo.svg"
              alt="Disney Plus Logo"
              onClick={() => (window.location.href = "/")}
            />
        </Logo>
        <Copyright>© 2024 Disney and its related entities. All Rights Reserved.</Copyright>
    </FooterWrap>
  )
}

export default Footer;

const FooterWrap = styled.footer`
    position: relative;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    background-color: #090b13;

`;
const Logo = styled.a`
    width: 80px;
    max-height: 70px;
    font-size: 0;
    cursor: pointer;
    @media screen and (max-width: 1280px) {
        width: 80px;
    }
    img {
        width: 100%;
    }
`;
const Copyright = styled.p`
    margin-top: 10px;
    font-size: 14px;
    text-align: center;
    color: rgba(249,249,249,0.5);
`;