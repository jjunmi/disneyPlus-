import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>
        <LogoOne src="/images/cta-logo-one.svg" alt="logo"/>
        <SignUpLink>지금 가입</SignUpLink>
        <Description>최신 영화와 시리즈를 비롯한 다양한 콘텐츠를 놓치지 마세요.</Description>
        <LogoTwo src="/images/cta-logo-two.png" alt="logo"/>
      </Content>
    </Container>
  )
}

export default Login;
 
const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 30px;
  text-align: center;
  height: 100vh;
  background-image: url("/images/login-background.jpg");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
`;
const Content = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LogoOne = styled.img`
  max-width: 600px;
  min-height: 1px;
  width: 100%;
  margin-bottom: 30px;
`;
const SignUpLink = styled.a`
  width: 100%;
  padding: 14px 0;
  margin-bottom: 30px;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 1.5px;
  color: #f9f9f9;
  background-color: #0063e5;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0483ee;
  }
  @media screen and (max-width: 786px) {
    font-size: 16px;
  }
`;
const Description = styled.p`
  margin-bottom: 30px;
  font-size: 15px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;
const LogoTwo = styled.img`
  width: 100%;
  max-width: 600px;

`;