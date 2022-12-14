import React from "react";
import {AsideProfessor} from "../components/AsideProfessor"

const SampleBooks = () => {

  return (
    <main className="sub board-02 wrapper">
      <AsideProfessor />
      <div className="content">
        <div className="breadscrumb">
          <a href="#">Home</a>
          <a href="#">교수님 전용</a>
          <a href="#">견본도서요청</a>
        </div>
        <div className="title">
          <h2>견본도서요청</h2>
          <p>도서출판 구민사는 교수님들을 위한 견본도서를 지원하고 있습니다. 견본도서를 요청하여 주십시오.</p>
        </div>
        <section>
          <ul className="inputs">
            <li className="choose-books">
              <span className="required">신청도서</span>
              <button>도서등록</button>
              <span className="result">NCS기반 교육과정에 따른 바디경락마사지</span>
            </li>
            <li>
              <span className="required">저자</span>
              <input type="text" defaultValue="" readOnly />
            </li>
            <li>
              <span className="required">판권날짜</span>
              <input type="text" defaultValue="" readOnly />
            </li>
            <li>
              <span className="required">수량</span>
              <input type="number" defaultValue="" />
            </li>
            <li>
              <span className="required">이름</span>
              <input type="text" defaultValue="홍길동" readOnly />
            </li>
            <li>
              <span className="required">대학명</span>
              <input type="text" defaultValue="" readOnly />
            </li>
            <li>
              <span className="required">학과</span>
              <input type="text" defaultValue="" readOnly />
            </li>
            <li>
              <span className="required">이메일</span>
              <input type="email" defaultValue="hong@naver.com" />
            </li>
            <li className="phone">
              <span className="required">전화번호</span>
              <div>
                <input type="number" />
                <span>-</span>
                <input type="number" />
                <span>-</span>
                <input type="number" />
              </div>
            </li>
            <li className="phone">
              <span className="required">휴대폰</span>
              <div>
                <input type="number" />
                <span>-</span>
                <input type="number" />
                <span>-</span>
                <input type="number" />
              </div>
            </li>
            <li className="address">
              <span className="required">주소</span>
              <input type="text" />
            </li>
            <li>
              <span className="required">내용</span>
              <textarea rows="10"></textarea>
            </li>
          </ul>
          <div className="buttons">
            <button className="btn-main">신청하기</button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default SampleBooks