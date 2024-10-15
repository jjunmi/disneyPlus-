import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [headerBg, setHeaderBg] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { pathname } = useLocation();
  const navigate = useNavigate();


//1. 헤더 스크롤시 배경색 변환 구현
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  const handleScroll = () => {
    if(window.scrollY > 50){
      setHeaderBg(true);
    }else{
      setHeaderBg(false);
    }
  }

//2. 검색 구현
  const handleChange = (e) => {
      setSearchValue(e.target.value);
      navigate(`/search?q=${e.target.value}`);
  }
  
  return (
    <HeaderWrapper $headerBg={headerBg}>
      <nav role="navigation" aria-label="네비게이션">
        <h1>
          <Logo>
            <img
              src="./images/logo.svg"
              alt="Disney Plus Logo"
              onClick={() => (window.location.href = "/")}
            />
          </Logo>
        </h1>
        {
          pathname === "/" || pathname === "/search" ? (
            <>            <Input 
              value={searchValue}
              onChange={handleChange}
              className="search__input"
              type="text"
              placeholder="검색어를 입력해주세요."
            />
            <Login onClick={() => (window.location.href = "/login")}>Login</Login>
            </>
          ) : (
              <Login>Login</Login>
          )
        }
      </nav>
    </HeaderWrapper>
  )
}

export default Header;

const HeaderWrapper = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 85px;
  padding: 0 30px;
  background-color: ${props => props.$headerBg ? "#090b13" : "transparent"};
  letter-spacing: 16px;
  z-index: 10;
  @media screen and (max-width: 1280px) {
    height: 70px;
  }
  @media screen and (max-width: 430px) {
    padding: 0 15px;
  }
`;

const Logo = styled.a`
  padding: 0;
  width: 110px;
  max-height: 70px;
  font-size: 0;
  cursor: pointer;
  @media screen and (max-width: 1280px) {
    width: 80px;
  }
  img {
    width: 100%;
  }
  @media screen and (max-width: 430px) {
    width: 70px;
  }
`;

const Login = styled.a`
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translate(0, -50%);
  padding: 4px 16px;
  margin-top: 2px;
  font-size: 13px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  border: 1px solid rgba(249,249,249,0.5);
  color: rgba(249,249,249,0.8);
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.2s ease 0s;
  cursor: pointer;
  font-family: "Pretendard",Malgungothic, "맑은고딕", Dotum, "돋움", sans-serif;

  &:hover{
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
  @media screen and (max-width: 430px) {
    right: 15px;
    padding: 2px 10px;
    font-size: 12px;
  }
`;
const Input= styled.input`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 5px;
  margin-top: 2px;
  border: none;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.582);
  color: #fff;
  @media screen and (max-width: 430px) {
    padding-left: 20px;
  }
`;