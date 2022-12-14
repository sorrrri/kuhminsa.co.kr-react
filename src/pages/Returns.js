import React from "react";
import { AsideCS } from "../components/AsideCS";

const Returns = () => {

  return (
    <main className="sub returns wrapper">
      <AsideCS />
      <div className="content">
        <div className="breadscrumb">
          <a href="#">Home</a>
          <a href="#">고객센터</a>
          <a href="#">반품/교환안내</a>
        </div>
        <div className="title">
          <h2>반품/교환안내</h2>
          <p>도서출판 구민사의 반품 및 교환 방법을 안내해드립니다.</p>
        </div>
        <section>
          <h3>교환안내</h3>
          <ul className="guide">
            <li>전화(02-701-7421)를 통해 교환접수를 합니다.</li>
            <li>구민사 물류센터로 받으신 책을 반송하여 주세요.</li>
            <li>교환하고자 하는 책이 반송하려는 책보다 가격이 높은 경우 → 차액을 저희 은행계좌로 입금해주세요.</li>
            <li>교환하고자 하는 책이 반송하려는 책보다 가격이 낮은 경우 → 고객분의 은행계좌로 차액을 입금해드립니다.</li>
            <li><strong>계좌번호: 국민은행 054901-04-133407 (조규백)</strong></li>
            <li>반송과 차액입금이 확인되는 즉시, 교환하시려는 책을 발송해드립니다.</li>
          </ul>      
        </section>
        <section>
          <h3>반품안내</h3>
          <ul className="guide">
            <li>전화(02-701-7421)를 통해 교환접수를합니다.</li>
            <li>구민사 물류센터로 받으신 책을 반송하여 주세요.</li>
            <li>저희 회사의 실수로 인한 경우 저희가 배송비를 부담합니다. 그러나 발송 이후의 본인의 요청에 의한 반품일 경우에는 이용고객님이 배송비를 직접 부담하셔야 합니다.</li>
            <li>물류센터로 책이 반송(반송기간 2~3일)되는 즉시 환불처리하고 E-Mail이나 SMS를 통해 알려드립니다. 환불에는 은행입금/마일리지 적립의 두가지 방법이 있습니다.</li>
          </ul>      
          <small>* 발송전 주문취소는언제나 가능하며 온라인 입금이나 카드결제승인이 난 이후에도 취소처리 및 환불을 요청할 경우처리해 드립니다.</small>
          <small>* 단, 도서가 발송되고 난 이후에는 7일 이내 반품 요청을해야하며, (「전자상거래법 제17조 제1항」 에 의거하여 소비자의 단순변심으로도 7일 이내 청약철회 가능)</small>
          <small>* 부록물(CD-ROM, 부록 도서 등)의 개봉이나 파손, 책을 읽은 흔적이 있을 경우에는 반품이 불가능합니다.</small>
        </section>
      </div>
    </main>
  )
}

export default Returns