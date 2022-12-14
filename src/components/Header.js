import React from "react"
import { Link } from "react-router-dom"

export const Header = () => {

  return (
    <header>
      <nav className="global-menu">
        <Link to="/login">로그인</Link>
        <Link to="/signup">회원가입</Link>
        <Link to="/notice">고객센터</Link>
        <Link to="/admin">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path
              d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
          </svg>
        </Link>
      </nav>
      <div className="wrapper">
        <Link to="/" className="logo"></Link>
        <div className="search">
          <input name="" type="search" placeholder="도서명을 입력하세요." />
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
            <path
              d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </div>
        <div className="quick-links">
          <Link to="/shopping-bag" className="shopping-bag">
            <span>장바구니</span>
          </Link>
          <Link to="/order-list" className="shipping">
            <span>주문배송조회</span>
          </Link>
          <Link to="/mypage" className="mypage">
            <span>마이페이지</span>
          </Link>
        </div>
      </div>
      <nav className="categories">
        <div className="wrapper">
          <Link to="#">전문교재</Link>
          <Link to="#">자격수험서</Link>
          <Link to="#">컴퓨터</Link>
          <Link to="#">단행본</Link>
        </div>
        <div className="sub wrapper">
          <ul>
            <li>
              <Link to="#">피부계열</Link>
            </li>
            <li>
              <Link to="#">헤어계열</Link>
            </li>
            <li>
              <Link to="#">메이크업계열</Link>
            </li>
            <li>
              <Link to="#">네일아트계열</Link>
            </li>
            <li>
              <Link to="#">보건계열</Link>
            </li>
            <li>
              <Link to="#">공학계열</Link>
            </li>
            <li>
              <Link to="#">영상계열</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="#">기능사</Link>
            </li>
            <li>
              <Link to="#">기사/산업기사</Link>
            </li>
            <li>
              <Link to="#">기술사/기능장</Link>
            </li>
            <li>
              <Link to="#">그 외 자격증</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="#">프로그래밍</Link>
            </li>
            <li>
              <Link to="#">그래픽/영상</Link>
            </li>
            <li>
              <Link to="#">e-비즈니스</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="#">단행본</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}