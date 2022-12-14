import React from "react";
import { Link } from "react-router-dom";
import { AsideBooks } from "../components/AsideBooks";

const Details = () => {

  return (
    <main className="sub wrapper">
      <AsideBooks />
      <div className="content">
        <div className="breadscrumb">
          <a href="#">Home</a>
          <a href="#">전문교재</a>
          <a href="#">피부계열</a>
        </div>
        <div className="details">
          <div>
            <img src={require("../assets/images/thumbnails/01.jpg")} alt="책제목" />
          </div>
          <ul>
            <li className="title">
              <h2>뷰티 트렌드</h2>
              <div>
                <span>홍수남, 권오혁</span>
                <span>2021-04-15</span>
              </div>
              <div className="links">
                <a href="#" target="_blank">
                  <img src={require("../assets/images/ico_youtube.jpg")} alt="youtube 바로가기" />
                </a>
                <a href="#" target="_blank">
                  <img
                    src={require("../assets/images/ico_blog.jpg")}
                    alt="네이버 블로그 바로가기"
                  />
                </a>
              </div>
            </li>
            <li>
              <span>ISBN</span>
              <span>9791158139179</span>
            </li>
            <li>
              <span>페이지수</span>
              <span>128</span>
            </li>
            <li>
              <span>판형/컬러</span>
              <span>B5 / 유</span>
            </li>
            <li>
              <span>CD 유무</span>
              <span>-</span>
            </li>
            <li>
              <span>동영상강좌 유무</span>
              <span>-</span>
            </li>
            <li className="price">
              <span>정가</span>
              <span>16,000</span>
            </li>
            <li className="price">
              <span>판매가</span>
              <span>16,000</span>
            </li>
            <li className="mileage">
              <span>적립금</span>
              <span>0</span>
            </li>
            <li className="quantity">
              <span>주문수량</span>
              <span><input type="number" /></span>
            </li>
            <li className="buttons">
              <a href="order.html">바로구매</a>
              <a href="#">장바구니</a>
            </li>
          </ul>
        </div>
        <div className="description">
          <section>
            <h3>책 소개</h3>
            <p>
              시각적인 부분 즉 ‘이미지’를 많이 차지하는 뷰티와 패션분야는 트렌드에
              매우 민감합니다. 일례로 ‘비건뷰티’, ‘클린뷰티’, ‘이너뷰티’, 겉바속촉’ 등
              다양하고 트렌디한 키워드의 출현도 뷰티분야의 빠른 사이클을 입증해 주고
              있습니다. 본 저서는 뷰티분야에 입문 또는 전공진로를 결정하고자 하는
              입문자에게 필요한 기본 저서로 트렌드의 개념과 유래, 종류를 비롯하여
              트렌드 와칭에 대한 전반적인 내용, 트렌드를 파악하기 위한 관찰법과 이를
              관찰하기 위한 일련의 과정들을 소개하였습니다. 또한 뷰티산업분야 및
              전공의 흐름을 이해하기 위한 컬러, 메이크업, 헤어, 네일 등의 트렌드를
              이해하고, 이를 적용하여 신선한 하나의 트렌드를 도출하기까지의 아이디어
              발상 및 분석과정을 모두 수록하였습니다. 뷰티분야는 아트와 실용이 함께
              접목 및 활용되는 분야이기에 뷰티분야의 트렌드를 잘 이해하고 이에 대한
              흐름을 파악한다면 새로운 아이디어 도출은 물론 새로운 트렌드를 형성하는
              데에 적잖은 도움이 될 것입니다. 따라서 뷰티에 입문하고 전공하고자 하는
              모든 분들이 이에 대한 내용들을 섭렵함으로써 뷰티 트렌드 전문가가
              되시기를 기대하는 바입니다.
            </p>
          </section>
          <section>
            <h3>목차</h3>
              <p>Chapter01</p>
              <p>트렌드의 이해</p>
              <p>1. 트렌드의 유래</p>
              <p>2. 트렌드의 개념</p>
              <p>3. 트렌드의 종류</p>
              <p>&nbsp;</p>
      
              <p>Chapter02</p>
              <p>트렌드 와칭</p>
              <p>1. 트렌드 와칭의 개념</p>
              <p>2. 트렌드 와칭의 종류</p>
              <p>3. 트렌드 와칭의 5가지 기본 자세</p>
              <p>4. 트렌드 와칭의 목적</p>
              <p>&nbsp;</p>
      
              <p>Chapter03</p>
              <p>트렌드 키워드와 패션아이콘</p>
              <p>1. 트렌드 관찰법</p>
              <p>2. 2020 트렌드 코리아 키워드</p>
              <p>3. 패션아이콘</p>
              <p>&nbsp;</p>
      
              <p>Chapter04</p>
              <p>트렌드 분석</p>
              <p>1. 패션컬렉션</p>
              <p>2. 패션 사조</p>
              <p>3. 컬러 트렌드</p>
              <p>4. 최신 패션 트렌드</p>
              <p>5. 뷰티산업 트렌드</p>
              <p>6. 메이크업 트렌드</p>
              <p>7. 헤어 트렌드</p>
              <p>8. 네일 트렌드</p>
              <p>&nbsp;</p>
      
              <p>Chapter05</p>
              <p>아이디어 발상 및 분석</p>
              <p>1. 아이디어 발상 및 분석</p>
              <p>&nbsp;</p>
      
              <p>참고문서 / 그림출처</p>
          </section>
          <section>
            <h3>저자 소개</h3>
            <p>홍수남 권오혁</p>
            <p>&nbsp;</p>
    
            <p>홍수남(건국대학교 이학박사)</p>
            <p>/ 현) 한성대학교 뷰티디자인학과 교수</p>
            <p>/ 퍼스널컬러 & 이미지메이킹 전문가</p>
            <p>/ 국가평생교육진흥원 미용분야 평가위원</p>
            <p>/ 한국산업인력공단 기능경기대회 및 국가기술자격증 심사위원</p>
            <p>/ 대한미용학회 상임이사 및 교육위원장</p>
            <p>&nbsp;</p>
    
            <p>권오혁(원광대학교 미용예술학박사)</p>
            <p>/ 현) 한성대학교 뷰티디자인매니지먼트학과 교수</p>
            <p>/ 컬러이미지컨설턴트</p>
            <p>/ 한국서비스산업진흥원 전문직업 상담소장</p>
            <p>/ 미용사중앙회 경기지부 심사위원</p>
            <p>/ 대한미용학회 상임이사 및 부회장</p>
          </section>
          <section>
            <h3>배송 정보</h3>
            <p>배송지역 : 전국</p>
            <p>배송비 : 개별배송 상품을 제외하고 50,000원 미만 구매시 배송비 2,500원이 추가됩니다.</p>
            <p>배송기간 : 주문일 포함 3일 이내(연휴/공휴일 제외이며, 현금 주문일 경우 입금일 기준입니다.)</p>
            <p>※도서 산간, 오지 일부 지역의 경우 도선/항공료(4,000원)가 추가 될 수 있습니다.</p>
            <p>지정일 배송을 원하실 경우 상담원과 상담 후 주문하시기 바랍니다.</p>
          </section>
          <section>
            <h3>교환/환불 정보</h3>
            <p>파본 및 낙장인 경우 100% 교환해 드립니다.</p>
            <p>고객님의 변심에 의한 반품이나 부주의에 의해 반송되는 경우 배송비는 고객님 부담입니다.</p>
          </section>
          <section>
            <h3>관련 서적</h3>
            <div className="items">
              <a href="details.html">
                <img src={require("../assets/images/thumbnails/01.jpg")} alt="샘플이미지" />
                <ul>
                  <li>뷰티 트렌드</li>
                  <li>홍수남 권오혁</li>
                  <li>16,000원</li>
                </ul>
              </a>
              <a href="details.html">
                <img src={require("../assets/images/thumbnails/01.jpg")} alt="샘플이미지" />
                <ul>
                  <li>뷰티 트렌드</li>
                  <li>홍수남 권오혁</li>
                  <li>16,000원</li>
                </ul>
              </a>
              <a href="details.html">
                <img src={require("../assets/images/thumbnails/01.jpg")} alt="샘플이미지" />
                <ul>
                  <li>뷰티 트렌드</li>
                  <li>홍수남 권오혁</li>
                  <li>16,000원</li>
                </ul>
              </a>
              <a href="details.html">
                <img src={require("../assets/images/thumbnails/01.jpg")} alt="샘플이미지" />
                <ul>
                  <li>뷰티 트렌드</li>
                  <li>홍수남 권오혁</li>
                  <li>16,000원</li>
                </ul>
              </a>
              <a href="details.html">
                <img src={require("../assets/images/thumbnails/01.jpg")} alt="샘플이미지" />
                <ul>
                  <li>뷰티 트렌드</li>
                  <li>홍수남 권오혁</li>
                  <li>16,000원</li>
                </ul>
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Details