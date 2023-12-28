import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader, Table } from 'reactstrap';
import './sass/Policy1.scss';
import { policy } from '../../assets/constants';
import { NavLink } from 'react-router-dom';
import SideBarItem2 from '../SideBar/SideBar2/SideBarItem2';

const items = [
  {
    src: 'https://news.seoul.go.kr/welfare/files/2023/11/6583f817d2fd16.07750704-scaled.jpg',
    title: '2024년도부터 안심귀가스카우트가 이렇게 바뀝니다.',
    link: 'https://news.seoul.go.kr/welfare/archives/557329',
    content: `<p>
    <img
      alt='2024안심귀가_웹포스터'
      class='alignnone size-full wp-image-558560'
      decoding='async'
      fetchpriority='high'
      src='//news.seoul.go.kr/welfare/files/2023/11/6583f817d2fd16.07750704-scaled.jpg'
      srcset='https://news.seoul.go.kr/welfare/files/2023/11/6583f817d2fd16.07750704-scaled.jpg 1790w, https://news.seoul.go.kr/welfare/files/2023/11/6583f817d2fd16.07750704-210x300.jpg 210w, https://news.seoul.go.kr/welfare/files/2023/11/6583f817d2fd16.07750704-716x1024.jpg 716w, https://news.seoul.go.kr/welfare/files/2023/11/6583f817d2fd16.07750704-140x200.jpg 140w, https://news.seoul.go.kr/welfare/files/2023/11/6583f817d2fd16.07750704-768x1099.jpg 768w, https://news.seoul.go.kr/welfare/files/2023/11/6583f817d2fd16.07750704-1074x1536.jpg 1074w, https://news.seoul.go.kr/welfare/files/2023/11/6583f817d2fd16.07750704-1432x2048.jpg 1432w, https://news.seoul.go.kr/welfare/files/2023/11/6583f817d2fd16.07750704-55x78.jpg 55w, https://news.seoul.go.kr/welfare/files/2023/11/6583f817d2fd16.07750704-150x215.jpg 150w'
      width='770px'
    />
  </p>
  <p>변경내용</p>
  <ul>
    <li>신청방법 : 100% 사전예약제 (안심이앱으로 사전예약 실시)</li>
    <li>
      주말(토요일) 시범운영 실시  (참여자치구 : 중구, 용산구, 성동구,
      동대문구, 강북구, 도봉구, 노원구, 은평구, 서대문구, 마포구, 양천구,
      강서구, 구로구, 관악구, 서초구, 송파구) ※ 24.1~2월 2개월간 시범운영
      실시
    </li>
    <li>
      운영시간 : (월요일) 오후 10:00~12:00   (화요일~금요일) 오후
      10:00~익일 01:00
    </li>
    <li>※ 동절기 기간(24.1~2월) : 화요일~금요일 오후 10:00~12:00</li>
  </ul>`,
  },
  {
    src: 'https://news.seoul.go.kr/welfare/files/2023/11/65446bde1fa458.59020450-768x768.jpg',
    title: "우리동네 지킴이 '안심마을보안관'",
    link: 'https://news.seoul.go.kr/welfare/archives/557317',
    content: `<p>
    <img alt="보안관" class="alignnone wp-image-557319" decoding="async" fetchpriority="high" height="301" sizes="(max-width: 301px) 100vw, 301px" src="//news.seoul.go.kr/welfare/files/2023/11/65446bde1fa458.59020450.jpg" srcset="https://news.seoul.go.kr/welfare/files/2023/11/65446bde1fa458.59020450.jpg 851w, https://news.seoul.go.kr/welfare/files/2023/11/65446bde1fa458.59020450-300x300.jpg 300w, https://news.seoul.go.kr/welfare/files/2023/11/65446bde1fa458.59020450-200x200.jpg 200w, https://news.seoul.go.kr/welfare/files/2023/11/65446bde1fa458.59020450-768x768.jpg 768w, https://news.seoul.go.kr/welfare/files/2023/11/65446bde1fa458.59020450-78x78.jpg 78w, https://news.seoul.go.kr/welfare/files/2023/11/65446bde1fa458.59020450-215x215.jpg 215w" width="301"/>
   </p>
   <p>
    <span style="color: #0000ff;">
     우리동네 야간 안전지킴이 "안심마을보안관 운영"
    </span>
   </p>
   <p>
    사업목적 : 1인가구 밀집지역 등 주거안심구역 내 안심마을보안관을 배치, 운영하여 안전한 주거환경을 조성하고자 함
   </p>
   <p>
    활동시간 : 오후 9:00~익일 02:30
   </p>
   <p>
    &lt;23년도 안심마을보안관 활동구역&gt;
   </p>
   <table style="height: 216px;" width="943">
    <tbody>
     <tr>
      <td colspan="3">
      </td>
     </tr>
     <tr>
      <td>
       <p>
        ①광진구 화양동
       </p>
      </td>
      <td>
       <p>
        ②동대문구 제기동
       </p>
      </td>
      <td>
       <p>
        ③중랑구 면목본동
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        ④성북구 동선동
       </p>
      </td>
      <td>
       <p>
        ⑤강북구 미아동
       </p>
      </td>
      <td>
       <p>
        ⑥도봉구 방학2동
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        ⑦서대문구 신촌동
       </p>
      </td>
      <td>
       <p>
        ⑧마포구 서교동
       </p>
      </td>
      <td>
       <p>
        ⑨강서구 화곡1·8동
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        ⑩구로구 구로2동
       </p>
      </td>
      <td>
       <p>
        ⑪강남구 논현1동
       </p>
      </td>
      <td>
       <p>
        ⑫용산구 보광동
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        ⑬노원구 상계1동
       </p>
      </td>
      <td>
       <p>
        ⑭금천구 가산동
       </p>
      </td>
      <td>
       <p>
        ⑮영등포구 영등포동
       </p>
      </td>
     </tr>
     <tr>
      <td colspan="3">
       <p>
        ⑯관악구 신림동 (9.25.부터 추가운영)
       </p>
      </td>
     </tr>
    </tbody>
   </table>
   <p>
   </p>
   <p>
   </p>`,
  },
  {
    src: 'https://news.seoul.go.kr/welfare/files/2023/10/651fa8f2442847.34967837-1819x2048.jpg',
    title:
      '결혼을 망설이고 있는 청년 여러분! 결혼 공감 토크콘서트에 여러분을 초대합니다',
    link: 'https://news.seoul.go.kr/welfare/archives/556509',
    content: `결혼을 망설이고 있는 청년 여러분! 결혼 공감 토크콘서트에 여러분을 초대합니다
    <p>
     <img alt="2023 결혼 공감 토크콘서트_포스터 최종 수정_2023.10.6(최종)" src="//news.seoul.go.kr/welfare/files/2023/10/651fa8f2442847.34967837-scaled.jpg" width="780px"/>
    </p>
    <p>
     긴 추석 연휴 잘 보내셨나요?
    </p>
    <p>
     명절 기간 결혼하라는 말에 스트레스를 받진 않으셨나요?
    </p>
    <p>
    </p>
    <p>
     서울시는 결혼을 망설이는 청년 여러분들을 위해
    </p>
    <p>
     <strong>
      10.26.(목)
     </strong>
     16:30~18:00 시청
     <strong>
      본관 8층 다목적홀
     </strong>
     에서
    </p>
    <p>
     <strong>
      ‘결혼 공감 토크콘서트’
     </strong>
     를 개최합니다.
    </p>
    <p>
    </p>
    <p>
     ‘결혼 공감 토크콘서트’는 여러 가지 고민과 두려움으로
    </p>
    <p>
     <strong>
      결혼을 망설이고 있는 2030 청년 세대와의 소통의 장
     </strong>
     입니다.
    </p>
    <p>
    </p>
    <p>
     청년 여러분들의 결혼 관련 고민을 낱낱이 들어보기 위해
    </p>
    <p>
     ‘키워드 토크’, ‘고민톡톡’ 등 다양한 토크쇼 코너가 진행되며,
    </p>
    <p>
     여러분의 고민을 함께 들어줄 ‘
     <strong>
      김한별(KBS 남자 아나운서 최초 육아휴직자)
     </strong>
     ’.
    </p>
    <p>
     ‘
     <strong>
      김원효·심진화’(개그계 잉꼬부부)
     </strong>
     ,
     <strong>
      '김짠부 부부'(51.8만 구독자 보유, 재테크 전문 유튜브 크리에이터)
     </strong>
     패널들이 기다리고 있습니다.
    </p>
    <p>
    </p>
    <p>
     토크쇼는
     <strong>
      10.6.(금)부터 10.23.(월) 16시까지
     </strong>
     아래 링크를 통해
    </p>
    <p>
     사전접수 신청할 수 있으며, 무료로 진행됩니다.
    </p>
    <p>
     <strong>
      ※ 선정되어 참석하신 분들에게는 소정의 상품을 제공드립니다.
     </strong>
    </p>
    <p>
     시민분들의 많은 관심과 참여 부탁드립니다!
    </p>
    <p style="text-align: left;">
     <strong>
      ㅇ사전접수 링크 :
      <a href="//forms.gle/ef4uW1fG7v76JyuC9">
       https://forms.gle/ef4uW1fG7v76JyuC9
      </a>
     </strong>
    </p>
    <p>
    </p>`,
  },
  {
    src: 'https://news.seoul.go.kr/welfare/files/2023/04/KakaoTalk_20230414_173918858.png',
    title: '1인가구 상담 멘토링 프로그램',
    link: 'https://news.seoul.go.kr/welfare/archives/551761',
    content: `<h3>
    <span>
     <img alt="KakaoTalk_20230414_173918858" class="wp-image-551770 aligncenter" decoding="async" fetchpriority="high" height="624" sizes="(max-width: 442px) 100vw, 442px" src="//news.seoul.go.kr/welfare/files/2023/04/KakaoTalk_20230414_173918858.png" srcset="https://news.seoul.go.kr/welfare/files/2023/04/KakaoTalk_20230414_173918858.png 610w, https://news.seoul.go.kr/welfare/files/2023/04/KakaoTalk_20230414_173918858-212x300.png 212w, https://news.seoul.go.kr/welfare/files/2023/04/KakaoTalk_20230414_173918858-142x200.png 142w, https://news.seoul.go.kr/welfare/files/2023/04/KakaoTalk_20230414_173918858-55x78.png 55w, https://news.seoul.go.kr/welfare/files/2023/04/KakaoTalk_20230414_173918858-152x215.png 152w" width="442"/>
    </span>
   </h3>
   <h3>
    <span>
     1인가구 고립감 및 우울감 해소와 사회관계 증진 도모를 위해 상담 특화 멘토링 활동을 서울시가 지원합니다.
    </span>
   </h3>
   <p>
   </p>
   <p>
    모집 관련은 1인가구포털(https://1in.seoul.go.kr) &gt;지원사업 &gt; 1인가구 상담 카운슬링 멘토 프로그램 또는 개별 센터 문의
   </p>
   <h5>
    - 참여 및 지원대상은 누구일까요?
   </h5>
   <ul class="list_type2">
    <li>
     <p>
      참여 및 지원대상
     </p>
     <ul class="list_type">
      <li>
       <p>
        멘    토 : 상담 전공자 및 심리상담 경력자 등 다양한 역량을 가진 자
       </p>
      </li>
      <li>
       <p>
        멘    티 : 사회적 관계 형성을 희망하는 서울거주·생활권 1인가구
        <br/>
        ※ 서울시 생활권이란? 주민등록상 거주지가 서울이거나 직장 소재지가 서울인 경우
       </p>
      </li>
     </ul>
     <p>
      <img decoding="async" src="https://1in.seoul.go.kr/contents/commoneditor/2023021010283460b74793-7f76-46f3-b69e-5eb58ca83a7d.PNG" style="font-family: inherit; font-style: inherit; font-weight: inherit;" title="%EB%A9%98%ED%86%A0%EB%A7%81.PNG"/>
      <span style="font-size: 12px;">
      </span>
     </p>
     <p>
      <span style="font-size: 12px;">
      </span>
     </p>
     <h5>
      - 지원내용은 무엇일까요?
     </h5>
     <p>
      [멘티] 연령, 관심분야 등 특성을 고려하여 멘토와 1:1 매칭 상담 등 진행 (1인당 연 15회기 이내)
     </p>
     <div class="tablebasic">
      <table style="font-size: 12px;">
       <caption>
       </caption>
       <colgroup>
        <col/>
        <col/>
        <col/>
        <col/>
       </colgroup>
       <thead>
        <tr>
         <th scope="col">
          구 분
         </th>
         <th colspan="2" scope="col">
          운영 방법
         </th>
         <th scope="col">
          비 고
         </th>
        </tr>
       </thead>
       <tbody>
        <tr>
         <td rowspan="2">
          전문 멘토링
          <br/>
          (1:1)
         </td>
         <td>
          심리멘토
         </td>
         <td>
          <p>
           · 심리상담 자격증 소지자인 멘토와 1:1 상담을 통해 심리적 어려움, 진로 고민, 대인관계 문제 등 해결
          </p>
         </td>
         <td rowspan="3">
          1인당 15회기 이내
         </td>
        </tr>
        <tr>
         <td>
          경험멘토
         </td>
         <td>
          <p>
           · ’22년 상담 멘토링 프로그램 멘티로 활동했던 멘토와 비슷한 경험 공유를 통해 마음 고립 해소
          </p>
         </td>
        </tr>
        <tr>
         <td>
          생활 멘토링
          <br/>
          (1:多 또는 多:多)
         </td>
         <td colspan="2">
          <p>
           · 멘토의 재능 공유를 통해 외국어·스포츠·요리 등 멘티의 관심사를 고려하여 1:多(多:多) 그룹 활동 추진
          </p>
         </td>
        </tr>
        <tr>
         <td>
          특화 멘토링
          <br/>
          (1:1)
         </td>
         <td colspan="2">
          <p>
           · 다인가구에 비해 사고·질병·각종 재해 등 뜻하지 않은 위험에 취약한 1인가구를 위한 재무 설계 추가 지원
          </p>
         </td>
         <td>
          1인당 2회기 이내
         </td>
        </tr>
       </tbody>
      </table>
     </div>
    </li>
   </ul>`,
  },
  {
    src: 'https://news.seoul.go.kr/welfare/files/2023/02/63fbff794c9608.28023394.png',
    title: "1인가구 '3불(不) 해소'(불편·불안·불만)로 '안심특별시 서울' 조성",
    link: 'https://news.seoul.go.kr/welfare/archives/550157',
    content: `<table style="height: 149px;" width="640">
    <tbody>
     <tr>
      <td>
       <h5>
        <b>
         서울시, 1인가구 '3불(不) 해소'(불편·불안·불만)로 '안심특별시 서울' 조성
        </b>
       </h5>
       <p style="text-align: left;">
        - 149만 1인가구를 위한 공적지원체계 내실화, 맞춤형 지원정책 선제적 마련
       </p>
       <p style="text-align: left;">
        - 불편 : 병원동행→퇴원 후 일상회복 지원, 전월세 안심계약 도움 25개 전 자치구 확대
       </p>
       <p style="text-align: left;">
        - 불안 : ‘안심이앱’ 이용자에게 CCTV 등 안심시설물 설치경로 추천 등 안전한 귀갓길 지원
       </p>
       <p style="text-align: left;">
        - 불만 : 동년배 중장년 생활지원 ‘마주 봄 매니저’ 신규 운영, 소통공간·교육 확대
       </p>
      </td>
     </tr>
    </tbody>
   </table>
   <p>
   </p>
   <p>
    □ 서울시가 나혼자 사는 1인가구가 맞닥뜨리는 현실적인 어려움 해소를 위해 보다 탄탄한 공적지원체계 구축에 나선다.
   </p>
   <p>
   </p>
   <p>
    □ 서울시 전체가구(405만가구) 중 1인가구는 36.8%(149만가구)로 최근 3년간 증가추세(2019년 33.4%→2020년 34.9%→2021년 36.8%)가 점차 빨라지고 있는 만큼, 1인가구를 위한 맞춤형 지원정책을 선제적으로 마련한다는 계획이다.
   </p>
   <p>
   </p>
   <p>
    □ 이를 위해 1인가구의 ▴불(不)편(생활) ▴불(不)안(안전) ▴불(不)만(사회적 관계망),즉 ‘3불(不) 해소’를 목표로 세대별, 성향별, 지역별 정책 수요에 대응하는 맞춤형 정책을 추진한다.
   </p>
   <p>
   </p>
   <p>
    □ 우선, 1인가구의 생활 ‘불편’ 해소를 위해 생활지원 서비스를 강화한다. 만족도 93.9%로 큰 호응을 얻고 있는 ‘병원 안심동행서비스’는 퇴원 후 일상회복까지 지원하는 서비스로 업그레이드한다. 사회초년생, 어르신 등 부동산 계약에 어려움을 겪는 1인가구를 위한 ‘전월세 안심계약 도움서비스’는 25개 전 자치구로 확대된다. 92.2%의 높은 만족도를 보인 소셜 다이닝 ‘행복한 밥상’은 중장년층에 이어 청년 1인가구까지 확대한다.
   </p>
   <p>
   </p>
   <p>
    □ 1인가구의 ‘불안’ 해소를 위한 생활안전망은 한층 강화한다. 13만 명이 이용 중인 ‘안심이앱’은 이용자에게 CCTV 등 안심시설물이 설치된 경로를 추천·제공하는 서비스를 하반기에 도입한다. 만족도 92.3%로늦은 밤 우리동네 안전지킴이로 자리매김 중인 ‘안심마을보안관’은 지역의 자율방범대와 협업해 치안 사각지대를 보다 촘촘히 보완한다.
   </p>
   <p>
   </p>
   <p>
    □ 외로움에 취약할 수 있는 1인가구의 사회적 관계망을 촘촘하게 지원해 ‘불만’ 완화에도 나선다. 관계망 형성에 어려움을 겪는 중장년 1인가구의 심리·정서 지원을 위해 동년배로 구성된 ‘마주 봄(春) 매니저’를 4월부터 새롭게 운영한다. 1인가구를 위한 복합 소통공간 ‘씽글벙글 사랑방’은 4개소→8개소로 확대하고, 경제적 자립을 위한 ‘씽글벙글 경제교육’은 전화금융 사기 예방 등 교육 분야를 확대한다.
   </p>
   <p>
   </p>
   <p>
    □ 서울시는 이런 내용으로 1인가구 정책을 보다 내실화해서 ‘1인가구 안심특별시 서울’을 만들어가겠다고 밝혔다. 3개 분야에 올해 146억원을 투입한다.
   </p>
   <p>
   </p>
   <h5>
    <strong>
     <span style="color: #0000ff;">
      &lt;① 불편해결 : 1인가구 생활밀착형 지원 서비스 강화&gt;
     </span>
    </strong>
   </h5>
   <p>
   </p>
   <p>
    □ 첫째, 1인가구의 생활 속 불편을 해결하기 위해 병원 안심동행서비스, 행복한 밥상, 전월세 안심계약 도움서비스 같은 돌봄·생활 지원서비스를 강화한다.
   </p>
   <p>
   </p>
   <p>
    □ 병원 안심동행서비스 확대 : 아픈데 혼자 병원 가기 어려운 시민을 위한 ‘병원 안심동행서비스’는 병원 동행뿐 아니라, 퇴원 후 집안정리, 식사준비, 외출지원 같은 가정 방문 돌봄서비스까지 확대 지원한다. 서울시민 누구나 이용할 수 있으며, 1인가구 누리집(1in.seoul.go.kr) 또는 유선전화(☎1533-1179)로 신청하면 된다.
    <br/>
    ○ ‘병원 안심동행서비스’는 병원에 갈 때부터 귀가할 때까지 전 과정을 보호자처럼 동행해주는 도어 투 도어(door to door) 서비스다. 작년 10,772명(연인원)이 이용했으며, 올해는 12,000명을 목표로 운영한다.
   </p>
   <p>
   </p>
   <p>
    □ 1인가구 소셜다이닝 ‘행복한 밥상’ 확대 : 1인가구의 생활불편 중 하나인 식생활 불편 해소를 위해 1인가구가 모여서 요리하고 음식을 나누며 소통하는 소셜다이닝(social dining) 프로그램이다. 올해는 기존 중장년 1인가구를 대상으로 하는 ‘행복한 밥상’을 10개→15개 자치구로 확대하고, 청년 1인가구를 대상으로 하는 ‘건강한 밥상’을 새롭게 시작(5개 자치구)해 세대별 맞춤 건강관리에 나선다.
    <br/>
    ○ 중장년 대상 ‘행복한 밥상’은 요리교실과 참여자간 교류를 강화하기 위한 소통 프로그램으로 운영되며, 청년층 대상 ‘건강한 밥상’은 요리교실과 즐겁게 운동하며 건강을 회복하는 건강 프로그램으로 운영된다
    <br/>
    ○ 참여를 희망하는 자치구를 공모 받아 4월부터 본격 시행할 예정이며, 신청 및 신청 및 참여방법은 1인가구 누리집(1in.seoul.go.kr)에서 확인 가능하다.
   </p>
   <p>
   </p>
   <p>
    □ ‘전월세 안심계약 도움서비스’ 25개 자치구 전면 확대 : 전문성을 갖춘 주거안심매니저가 상담과 집보기 동행 등을 통해 깡통전세 같은 사기 피해를 사전에 방지하고, 1인가구의 안정적인 주거정착을 지원하는 사업이다. 서비스 이용후 지인 추천의사 92.8%로 긍정적 평가를 받아, 현재 시행 중인 14개 자치구에 더해 나머지 11개 자치구*도 사전 준비를 거쳐 5월부터 서비스를 시작한다. 1인가구 누리집(1in.seoul.go.kr) 또는 자치구 담당 부서에 문의 후 신청할 수 있다.
    <br/>
    * 신규 자치구(11개) : 종로, 용산, 광진, 동대문, 은평, 마포, 양천, 구로, 금천, 동작, 강남
   </p>
   <p>
   </p>
   <h5>
    <strong>
     <span style="color: #0000ff;">
      &lt;② 불안해소 : 1인가구가 안심하고 생활할 수 있는 환경 조성&gt;
     </span>
    </strong>
   </h5>
   <p>
   </p>
   <p>
    □ 둘째, 1인가구의 불안해소를 위해 안심마을보안관, 안심이앱, 안심귀가택시 같은 인적·물적 안전대책을 강화한다.
   </p>
   <p>
   </p>
   <p>
    □ ‘안심마을보안관’ 순찰효율 강화 : 우리동네 야간 안전지킴이 ‘안심마을보안관’은 작년에 이어 올해도 시민들의 목소리를 반영해 15개 구역을 선정하고, 자율방범대와의 협업을 통해 치안사각지대를 보완한다.
    <br/>
    ○ 안심마을보안관은 3월부터 본격 시행하며, 활동구역은 1인가구 누리집(1in.seoul.go.kr)에서 확인 가능하다.
   </p>
   <p>
   </p>
   <p>
    □ ‘안심이앱’ 기능 강화 등 안전한 귀갓길 조성 : 13만 명이 이용 중인 ‘안심이앱’은 귀가하는 이용자에게 CCTV 등 안심시설물이 설치된 경로를 추천·제공하는 서비스를 하반기에 도입한다, 또한, 서울시에 등록한 8만여 대 택시를 대상으로 ‘안심이앱’을 활용한 ‘안심귀가택시’도 올해 본격 운영한다.
    <br/>
    ○ 안심귀가택시 서비스는 운영중인 8만 대의 택시와 자치구 25개소 CCTV 관제센터와 연계, 승하차 시간, 택시정보 등을 보호자와 CCTV관제센터에 전송해 승객이 안전하게 목적지까지 갈 수 있도록 지원한다. 이밖에도 ‘안심귀가스카우트’는 ‘안심마을보안관’과 유사·중복되지 않도록 핵심기능인 귀가 동행에 역량을 집중한다.
    <br/>
    ○ 안심귀가스카우트, 안심귀가택시 서비스는 모두 ‘안심이앱’ 설치 후 앱으로 신청하면 이용할 수 있다.
   </p>
   <p>
   </p>
   <p>
    □ ‘안심장비 지원사업’ 내실화로 안전 강화 : 최근 스토킹 주거침입 등의 범죄에 대한 불안이 커지고 있는 만큼, 스마트초인종과 가정용 CCTV를 필수 지원품목으로 신규 지정해 거주 공간 내부뿐 아니라 외부 안전까지 강화한다.
    <br/>
    ○ 스마트초인종은 가정용CCTV와 연결돼서 초인종을 눌렀을 때 현관문 밖 상황을 집 안에서 볼 수 있고, 자치구 관제센터로도 연동돼 비상상황 발생시 신속한 대응을 지원한다.
    <br/>
    ○ 신청은 1인가구 누리집(1in.seoul.go.kr) 또는 자치구 담당부서 문의를 통해 4월 이후(자치구별 상이)부터 가능하다.
   </p>
   <p>
   </p>
   <h5>
    <strong>
     <span style="color: #0000ff;">
      &lt;③ 불만완화 : 1인가구의 사회관계망 복원으로 고립·고독감 해소 지원&gt;
     </span>
    </strong>
   </h5>
   <p>
   </p>
   <p>
    □ 셋째, 1인가구의 고립·고독감 해소 및 관계 회복을 위한 관계망 사업을 확대 추진한다. 1인가구 지원사업의 중추를 맡고 있는 25개 ‘자치구 1인가구지원센터’를 거점으로 ‘상담멘토링’ 멘토단을 다양하게 구성해 맞춤 지원하고, 1인가구 소통공간과 교육 프로그램도 확대·강화한다.
   </p>
   <p>
   </p>
   <p>
    □ ‘자치구 1인가구지원센터’ 기능 활성화 : 1인가구의 다양한 특성과 욕구에 대응하기 위해서 ‘1인가구 상담멘토링’을 확대·개편한다. 심리상담뿐 아니라 경험·재능 공유, 재무설계 컨설팅 등으로 확대해서 멘토-멘티 간 심리적 지지를 강화하고, 1인가구의 마음고립 해소를 지원한다.
   </p>
   <p>
   </p>
   <p>
    □ 1인가구 소통공간, 교육 프로그램 확대 : 공공시설 내 유휴공간을 활용한 복합 소통공간인 ‘씽글벙글 사랑방’은 4개소→8개소로 확대 조성해서 지역별·세대별 특성에 맞는 관계망 형성을 지원한다. 홀로 생활자금 마련과 노후준비까지 책임져야 하는 1인가구를 위한 대표 경제교육인 ‘씽글벙글 경제교육’은 재무·부채교육과 함께 전화금융사기 예방 등 교육의 분야를 확대한다. 단순히 연령별로 반을 구성하는 것이 아니라 수준별 또는 심화반을 꾸려 교육의 내실화를 갖춘다.
    <br/>
    ○ 경제교육은 19개 자치구 1인가구지원센터에서 운영하며, 연간 교육일정과 운영 현황은 1인가구 누리집(1in.seoul.go.kr)과 자치구 센터 누리집을 통해 3월부터 확인할 수 있다.
   </p>
   <p>
   </p>
   <p>
    □ 중장년 1인가구 지원 ‘마주 봄(春) 매니저’ 신규 운영 : 동년배인 중장년이 정서적·경제적 위기에 놓여있는 취약 중장년 1인가구를 발굴하고, 소소한 말벗 되어주기부터 전문기관 연계까지 도움을 줄 생활안심 코디네이터다. 4월부터 활동을 시작한다.
   </p>
   <p>
   </p>
   <p>
    □ 김선순 서울시 여성가족정책실장은 “세 집 중 한 집이 1인가구인 시대, 1인가구가 홀로살며 겪는 불편과 불안을 해소하고 삶의 질을 높일 수 있도록 정책을 내실화해 추진하여 1인가구의 든든한 친구, ‘안심특별시 서울’을 만들어가겠다.”고 말했다.
   </p>
   <p>
   </p>
   <p>
    <img alt="2023 지원계획" class="alignnone size-full wp-image-550159 aligncenter" decoding="async" fetchpriority="high" height="550" sizes="(max-width: 466px) 100vw, 466px" src="//news.seoul.go.kr/welfare/files/2023/02/63fbff794c9608.28023394.png" srcset="https://news.seoul.go.kr/welfare/files/2023/02/63fbff794c9608.28023394.png 466w, https://news.seoul.go.kr/welfare/files/2023/02/63fbff794c9608.28023394-254x300.png 254w, https://news.seoul.go.kr/welfare/files/2023/02/63fbff794c9608.28023394-169x200.png 169w, https://news.seoul.go.kr/welfare/files/2023/02/63fbff794c9608.28023394-66x78.png 66w, https://news.seoul.go.kr/welfare/files/2023/02/63fbff794c9608.28023394-182x215.png 182w" width="466"/>
   </p>`,
  },
  {
    src: 'https://news.seoul.go.kr/welfare/files/2023/02/63f843593c2d02.89330192-727x1024.png',
    title: '1인가구 씽글벙글 경제교육',
    link: 'https://news.seoul.go.kr/welfare/archives/550098',
    content: `<p>
    <img alt="경제교육 포스터" class="wp-image-550113 aligncenter" decoding="async" fetchpriority="high" height="510" sizes="(max-width: 362px) 100vw, 362px" src="//news.seoul.go.kr/welfare/files/2023/02/63f843593c2d02.89330192.png" srcset="https://news.seoul.go.kr/welfare/files/2023/02/63f843593c2d02.89330192.png 805w, https://news.seoul.go.kr/welfare/files/2023/02/63f843593c2d02.89330192-213x300.png 213w, https://news.seoul.go.kr/welfare/files/2023/02/63f843593c2d02.89330192-727x1024.png 727w, https://news.seoul.go.kr/welfare/files/2023/02/63f843593c2d02.89330192-142x200.png 142w, https://news.seoul.go.kr/welfare/files/2023/02/63f843593c2d02.89330192-768x1082.png 768w, https://news.seoul.go.kr/welfare/files/2023/02/63f843593c2d02.89330192-55x78.png 55w, https://news.seoul.go.kr/welfare/files/2023/02/63f843593c2d02.89330192-153x215.png 153w" style="font-style: inherit; font-weight: inherit;" width="362"/>
   </p>
   <p>
   </p>
   <p>
    <span>
     <strong>
      ○ ‘1인가구
      <span style="color: #0000ff;">
       씽글벙글 경제교육
      </span>
      '은 어떤 사업인가요?
     </strong>
    </span>
   </p>
   <p>
    ▸ 1인가구 다양한 경제 상황을 고려한
    <span style="color: #0000ff;">
     <strong>
      재무관리
     </strong>
     와
     <strong>
      부채관리
     </strong>
    </span>
    총 2개 분야
    <strong>
     강의 및 1:1 컨설팅
    </strong>
    을 통해
   </p>
   <p>
    <strong>
     1인가구 경제자립 및 노후 관리를 지원
    </strong>
    하는 사업입니다.
   </p>
   <p>
    ▸ 2023년 3월~11월 사이에 19개 자치구 1인가구지원센터에서 프로그램을 운영할 예정입니다.
   </p>
   <p>
   </p>
   <p>
    <strong>
     <span>
      ○ ‘씽글벙글 경제교육’ 나도
      <span style="color: #0000ff;">
       신청
      </span>
      할 수 있나요?
     </span>
    </strong>
   </p>
   <p>
    ▸ 경제교육을 희망하는
    <span>
    </span>
    <span>
     <strong>
      <span style="color: #0000ff;">
       서울시 1인가구
      </span>
      라면 누구나
     </strong>
    </span>
    <span>
    </span>
    신청할 수 있습니다.
   </p>
   <p>
   </p>
   <p>
    <strong>
     <span>
      ○
      <span style="color: #0000ff;">
       어떻게
      </span>
      신청하나요?
     </span>
    </strong>
   </p>
   <p>
    ▸ 19개소 자치구 1인가구지원센터 문의처로 신청하시기 바랍니다.(각 센터별 일정 상이)
   </p>
   <p>
    -&gt; 재무교육(18개소) : 강남, 강동, 강북, 강서, 관악, 광진, 도봉, 동대문, 마포, 서대문, 성동,
   </p>
   <p>
    성북, 양천, 영등포, 용산, 종로, 중구, 중랑
   </p>
   <p>
    -&gt; 부채교육(7개소) : 강동, 관악, 광진, 동대문, 서대문, 서초, 중랑
   </p>
   <p>
    ▸ 자치구 1인가구센터별 문의처와 자세한 프로그램 내용은 3월부터 1인가구포털(
    <strong>
     <span>
      1in.seoul.go.kr
     </span>
    </strong>
    )을 통해 확인할 수 있습니다.
   </p>`,
  },
  {
    src: 'https://news.seoul.go.kr/welfare/files/2023/02/641954d91e1e44.19475981.jpg',
    title: '마주봄 매니저(뉴딜일자리) 운영',
    link: 'https://news.seoul.go.kr/welfare/archives/550103',
    content: `<p>
    <img alt="캡처" class="alignnone wp-image-551027" decoding="async" fetchpriority="high" height="416" sizes="(max-width: 358px) 100vw, 358px" src="//news.seoul.go.kr/welfare/files/2023/02/641954d91e1e44.19475981.jpg" srcset="https://news.seoul.go.kr/welfare/files/2023/02/641954d91e1e44.19475981.jpg 565w, https://news.seoul.go.kr/welfare/files/2023/02/641954d91e1e44.19475981-258x300.jpg 258w, https://news.seoul.go.kr/welfare/files/2023/02/641954d91e1e44.19475981-172x200.jpg 172w, https://news.seoul.go.kr/welfare/files/2023/02/641954d91e1e44.19475981-67x78.jpg 67w, https://news.seoul.go.kr/welfare/files/2023/02/641954d91e1e44.19475981-185x215.jpg 185w" width="358"/>
   </p>
   <p>
    <span style="color: #0000ff;">
     ㅇ 사 업 명 : 취약 중장년 1인가구 생활안심 코디네이터 ‘마주 봄, 매니저’
    </span>
   </p>
   <p>
    ㅇ 사업유형 : 뉴딜일자리사업 약자동행형
   </p>
   <p>
    ㅇ 사업기간 : ’23.4월 ~ ’24.3월
   </p>
   <p>
    ㅇ 추진방법 : 사업 추진기관(1인가구 지원센터, 종합사회복지관 등) 공모 후, 매니저(뉴딜일자리) 파견
   </p>
   <p>
    ㅇ 참여인원 : 총30명
   </p>
   <p>
    *참여자 자격요건:
    <span style="color: #0000ff;">
     사회복지사, 상담사 등 전문자격 보유자
    </span>
   </p>
   <p>
    ㅇ 사업내용
   </p>
   <p>
    <span style="color: #0000ff;">
     - 정서지원 등 도움이 필요한 중장년 1인가구 발굴 및 찾아가는 방문상담 실시
    </span>
   </p>
   <p>
    <span style="color: #0000ff;">
     - 개별 문제 및 욕구를 중심으로 서비스 제공 및 전문 기관 연계
    </span>
   </p>
   <p>
    <span style="color: #0000ff;">
     - 서비스 종료 후, 주기적 안부확인 및 가정방문 등 사후관리 추진
    </span>
   </p>
   <p>
   </p>`,
  },
  {
    src: 'https://news.seoul.go.kr/welfare/files/2023/02/647fcaf992ebe0.12160066-1536x773.jpg',
    title: '1인가구 전월세 안심계약 도움서비스',
    link: 'https://news.seoul.go.kr/welfare/archives/549525',
    content: `<p>
    <img alt="웹배너" class="alignnone wp-image-553315" decoding="async" fetchpriority="high" height="597" sizes="(max-width: 1186px) 100vw, 1186px" src="//news.seoul.go.kr/welfare/files/2023/02/647fcaf992ebe0.12160066.jpg" srcset="https://news.seoul.go.kr/welfare/files/2023/02/647fcaf992ebe0.12160066.jpg 1882w, https://news.seoul.go.kr/welfare/files/2023/02/647fcaf992ebe0.12160066-300x151.jpg 300w, https://news.seoul.go.kr/welfare/files/2023/02/647fcaf992ebe0.12160066-1024x515.jpg 1024w, https://news.seoul.go.kr/welfare/files/2023/02/647fcaf992ebe0.12160066-200x101.jpg 200w, https://news.seoul.go.kr/welfare/files/2023/02/647fcaf992ebe0.12160066-768x386.jpg 768w, https://news.seoul.go.kr/welfare/files/2023/02/647fcaf992ebe0.12160066-1536x773.jpg 1536w, https://news.seoul.go.kr/welfare/files/2023/02/647fcaf992ebe0.12160066-104x52.jpg 104w, https://news.seoul.go.kr/welfare/files/2023/02/647fcaf992ebe0.12160066-325x164.jpg 325w" width="760"/>
   </p>
   <h5>
    <a href="//1in.seoul.go.kr/front/board/boardContentsView.do?board_id=1&amp;contents_id=04bae8eea0d24bca9becd560f0ffa8e6">
     »  사업 세부내용 확인과 온라인 신청은 여기를 클릭해 주세요(서울 1인가구 포털)
    </a>
   </h5>
   <p>
   </p>
   <p>
    <span style="color: #0000ff;">
     ㅇ 1인가구 전월세 안심계약 도움서비스는 누가 이용할 수 있나요?
    </span>
   </p>
   <p>
    - 서울시 거주 또는 거주 예정인 1인가구(독립가구 예정자 포함)가 무료로 이용할 수 있습니다.
   </p>
   <p>
    <span style="color: #0000ff;">
     ㅇ 어떤 도움을 받을 수 있나요?
    </span>
   </p>
   <p>
    - 사회초년생, 계약경험이 부족한 1인가구가 전월세 계약과정에서 부당함을 겪지 않도록 지역사회
   </p>
   <p>
    주거안심매니저(공인중개사 자격보유)가 계약상담과 집보기 현장동행 등의 서비스를 제공하고 있습니다.
   </p>
   <p>
    <img alt="전월세05월" class="alignnone wp-image-553313" decoding="async" height="371" sizes="(max-width: 798px) 100vw, 798px" src="//news.seoul.go.kr/welfare/files/2023/02/647fca66377986.11594146.png" srcset="https://news.seoul.go.kr/welfare/files/2023/02/647fca66377986.11594146.png 1724w, https://news.seoul.go.kr/welfare/files/2023/02/647fca66377986.11594146-300x140.png 300w, https://news.seoul.go.kr/welfare/files/2023/02/647fca66377986.11594146-1024x476.png 1024w, https://news.seoul.go.kr/welfare/files/2023/02/647fca66377986.11594146-200x93.png 200w, https://news.seoul.go.kr/welfare/files/2023/02/647fca66377986.11594146-768x357.png 768w, https://news.seoul.go.kr/welfare/files/2023/02/647fca66377986.11594146-1536x715.png 1536w, https://news.seoul.go.kr/welfare/files/2023/02/647fca66377986.11594146-104x48.png 104w, https://news.seoul.go.kr/welfare/files/2023/02/647fca66377986.11594146-325x151.png 325w" width="760"/>
   </p>
   <p>
    <span style="color: #0000ff;">
     ㅇ 운영시간과 신청방법을 알고 싶어요.
    </span>
   </p>
   <p>
    - 월, 목(주 2회) 13:30~17:30 정기 운영 및 사전 예약에 따른 서비스를 제공하고 있습니다.
   </p>
   <p>
    - 서울 1인가구 포털(1in.seoul.go.kr)을 통해 신청할 수 있고 자치구별 안내 전화번호도 1인가구 포털에서 확인할 수 있습니다.
   </p>
   <p>
   </p>
   <p>
   </p>`,
  },
  {
    src: 'https://news.seoul.go.kr/welfare/files/2022/11/6374228a7ab2d4.11200797-1536x777.jpg',
    title: '이제 택시도 안심이앱으로 안심귀가 서비스',
    link: 'https://news.seoul.go.kr/welfare/archives/547761',
    content: `<p>
    <img alt="안심이앱 배너_게시" class="alignnone size-full wp-image-547760" decoding="async" fetchpriority="high" sizes="(max-width: 1952px) 100vw, 1952px" src="//news.seoul.go.kr/welfare/files/2022/11/6374228a7ab2d4.11200797.jpg" srcset="https://news.seoul.go.kr/welfare/files/2022/11/6374228a7ab2d4.11200797.jpg 1952w, https://news.seoul.go.kr/welfare/files/2022/11/6374228a7ab2d4.11200797-300x152.jpg 300w, https://news.seoul.go.kr/welfare/files/2022/11/6374228a7ab2d4.11200797-1024x518.jpg 1024w, https://news.seoul.go.kr/welfare/files/2022/11/6374228a7ab2d4.11200797-200x101.jpg 200w, https://news.seoul.go.kr/welfare/files/2022/11/6374228a7ab2d4.11200797-768x388.jpg 768w, https://news.seoul.go.kr/welfare/files/2022/11/6374228a7ab2d4.11200797-1536x777.jpg 1536w, https://news.seoul.go.kr/welfare/files/2022/11/6374228a7ab2d4.11200797-104x53.jpg 104w, https://news.seoul.go.kr/welfare/files/2022/11/6374228a7ab2d4.11200797-325x164.jpg 325w" width="760"/>
   </p>
   <p>
    <span style="color: #0000ff;">
     <strong>
      ○ 안심이앱으로 택시도 안심 귀가 하세요
     </strong>
    </span>
   </p>
   <p>
    <strong>
     <span style="color: #008000;">
      - (사용법) 사용자는 도착지를 입력하고 택시에 탑승
     </span>
    </strong>
   </p>
   <p>
    <strong>
     <span style="color: #ff00ff;">
      ➢ 승하차 위치와 시간, 택시번호까지 미리 안심이앱에 입력한 보호자.지인에게 자동문자 전송
     </span>
    </strong>
   </p>
   <p>
    <strong>
     <span style="color: #ff00ff;">
      ➢ 자치구 CCTV관제센터에서 하차할때까지 안심귀가 지원
     </span>
    </strong>
   </p>
   <p>
   </p>
   <p>
    <span style="color: #0000ff;">
     <strong>
      ○ 안심귀가스카우트, 24시간 실시간 예약으로 편리하게 이용하세요
     </strong>
    </span>
   </p>
   <p>
    <span style="color: #008000;">
     <strong>
      - (사용법) 목적지를 선택한후 거점 선택하여 예약 완료
     </strong>
    </span>
   </p>
   <p>
    <strong>
     * 거점 : 스카우트 대원 만남 장소
    </strong>
   </p>
   <p>
    <span style="color: #ff00ff;">
     <strong>
      ➢ 늦은 밤 혼자 귀가하기 불안할때 안심이앱으로 언제든 안심귀가스카우트 예약 가능
     </strong>
    </span>
   </p>
   <p>
    <span style="color: #ff00ff;">
     <strong>
      ➢ 심야시간(22시~ 익일 1시) 귀가할때 집앞까지 안심 동행
     </strong>
    </span>
   </p>
   <p>
   </p>
   <p>
    <strong>
     ​
    </strong>
    <strong>
     ※ ​구글스토어, 앱스토어), 원스토어에서 '서울 안심이' 검색하고 이용하세요
    </strong>
   </p>`,
  },
  {
    src: 'https://news.seoul.go.kr/welfare/files/2023/02/641958bac82497.96510289.png',
    title: '서울시 퇴원 후 일상회복서비스 안내',
    link: 'https://news.seoul.go.kr/welfare/archives/549444',
    content: `<p>
    <img alt="퇴원후일상회복웹배너-01" class="alignnone wp-image-551038" decoding="async" fetchpriority="high" height="367" src="https://news.seoul.go.kr/welfare/files/2023/02/641958bac82497.96510289.png" width="738"/>
   </p>
   <p>
   </p>
   <h5>
    <span style="color: #800080;">
     <strong>
      ■ ‘서울시 퇴원 후 일상회복서비스’ 란?
     </strong>
    </span>
   </h5>
   <p>
    - 질병 또는 부상 등으로 치료 후 퇴원하는 1인생활 서울시민이 혼자 생활하기 어려울 때,
    <strong>
     일상회복매니저가 시민의 가정에 방문하여 단기 돌봄을 제공
    </strong>
    하는 서비스입니다.
   </p>
   <table border="0" cellspacing="0">
    <tbody>
     <tr>
      <td>
       <img alt="img_1" class="alignnone size-full wp-image-549447" decoding="async" height="94" sizes="(max-width: 100px) 100vw, 100px" src="//news.seoul.go.kr/welfare/files/2023/02/img_1.png" srcset="https://news.seoul.go.kr/welfare/files/2023/02/img_1.png 100w, https://news.seoul.go.kr/welfare/files/2023/02/img_1-83x78.png 83w" width="100"/>
      </td>
      <td style="text-align: left;" valign="center">
       <h5>
        <strong>
         <span style="color: #0000ff;">
          이용자의 신체활동을 도와드려요.
         </span>
        </strong>
       </h5>
       <p>
        ▸ 몸씻기 및 세면 도움, 옷 갈아입기 도움, 식사도움(일반식사), 실내이동, 복약 돕기
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <img alt="img_2" class="alignnone size-full wp-image-549448" decoding="async" height="91" sizes="(max-width: 95px) 100vw, 95px" src="//news.seoul.go.kr/welfare/files/2023/02/img_2.png" srcset="https://news.seoul.go.kr/welfare/files/2023/02/img_2.png 95w, https://news.seoul.go.kr/welfare/files/2023/02/img_2-81x78.png 81w" width="95"/>
      </td>
      <td style="text-align: left;">
       <h5>
        <span style="color: #008000;">
         <strong>
          이용자의 일상생활을 도와드려요.
         </strong>
        </span>
       </h5>
       <p>
        ▸ 청소 및 주변정돈, 세탁, 식사준비(음식조리, 설거지, 주방정리)
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <img alt="img_3" class="alignnone size-full wp-image-549449" decoding="async" height="92" loading="lazy" sizes="(max-width: 99px) 100vw, 99px" src="//news.seoul.go.kr/welfare/files/2023/02/img_3.png" srcset="https://news.seoul.go.kr/welfare/files/2023/02/img_3.png 99w, https://news.seoul.go.kr/welfare/files/2023/02/img_3-84x78.png 84w" width="99"/>
      </td>
      <td style="text-align: left;">
       <h5>
        <span style="color: #ff6600;">
         <strong>
          이용자의 개인활동을 지원해드려요.
         </strong>
        </span>
       </h5>
       <p>
        ▸ 외출동행(은행, 관공서 방문 등), 일상업무대행(물품구매, 약 타기 등)
       </p>
      </td>
     </tr>
    </tbody>
   </table>
   <h5>
    <span style="color: #800080;">
     <strong>
      ■
     </strong>
    </span>
    <strong>
     <span style="color: #800080;">
      누가 이용할 수 있나요?
     </span>
    </strong>
   </h5>
   <p>
    -
    <span style="color: #ff0000;">
     <strong>
      '수술, 중증질환 및 골절 치료 후'
     </strong>
    </span>
    퇴원하는 1인생활 서울시민이라면 이용할 수 있어요.
   </p>
   <p>
   </p>
   <h5>
    <span style="color: #800080;">
     <strong>
      ■
     </strong>
    </span>
    <strong>
     <span style="color: #800080;">
      언제 이용할 수 있나요?
     </span>
    </strong>
   </h5>
   <p>
    - 이용시간은
    <strong>
     평일 08시~20시
    </strong>
    입니다.(단, 주말은 예외적으로 협의 후 이용 가능)
    <br/>
    -
    <strong>
     연 1회, 연간 최대 15일·60시간 이내
    </strong>
    로 이용하실 수 있어요.
   </p>
   <p>
   </p>
   <h5>
    <span style="color: #800080;">
     <strong>
      ■
     </strong>
    </span>
    <strong>
     <span style="color: #800080;">
      이용료 및 신청방법은 어떻게 되나요?
     </span>
    </strong>
   </h5>
   <p>
    -
    <strong>
     시간당 5,000원
    </strong>
    에 이용하실 수 있습니다.
    <br/>
    -
    <strong>
     콜센터(☎1533-1179,
    </strong>
    일인친구)로 신청하세요.
   </p>
   <p>
   </p>
   <h5>
    <span style="text-decoration: underline;">
     <strong>
      <span style="color: #ff0000; text-decoration: underline;">
       ※ 퇴원 후 일상회복서비스는 2023. 12. 31.로 종료됨을 알려드립니다.
      </span>
     </strong>
    </span>
   </h5>
   <p>
   </p>
   <p>
    <strong>
     <a href="//1in.seoul.go.kr" rel="noopener" target="_blank">
      ☞☞☞ 서울시의 다양한 1인가구 관련 지원정보를 확인하시려면...... 클릭
     </a>
    </strong>
   </p>`,
  },
  {
    src: 'https://news.seoul.go.kr/welfare/files/2022/11/6530f06e5dd964.05298575.png',
    title: "'서울1인가구 포털'로 오세요(클릭~)",
    link: 'https://news.seoul.go.kr/welfare/archives/547401',
    content: `<p>
    <a href="https://1in.seoul.go.kr/front/user/main.do" title="씽글벙글 서울(서울 1인가구 포털)">
     <img alt="서울1인가구 포털" class="alignnone size-full wp-image-556873 aligncenter" decoding="async" fetchpriority="high" height="1109" sizes="(max-width: 739px) 100vw, 739px" src="//news.seoul.go.kr/welfare/files/2022/11/6530f06e5dd964.05298575.png" srcset="https://news.seoul.go.kr/welfare/files/2022/11/6530f06e5dd964.05298575.png 739w, https://news.seoul.go.kr/welfare/files/2022/11/6530f06e5dd964.05298575-200x300.png 200w, https://news.seoul.go.kr/welfare/files/2022/11/6530f06e5dd964.05298575-682x1024.png 682w, https://news.seoul.go.kr/welfare/files/2022/11/6530f06e5dd964.05298575-133x200.png 133w, https://news.seoul.go.kr/welfare/files/2022/11/6530f06e5dd964.05298575-52x78.png 52w, https://news.seoul.go.kr/welfare/files/2022/11/6530f06e5dd964.05298575-143x215.png 143w" width="739"/>
    </a>
   </p>
   <p>
   </p>
   <h5 style="text-align: center;">
    <a href="https://1in.seoul.go.kr/front/user/main.do" title="씽글벙글 서울(서울 1인가구 포털)">
     <strong>
      씽글벙글 서울(서울1인가구 포털) - https://1in.seoul.go.kr/
     </strong>
    </a>
   </h5>
   <p>
   </p>
   <p style="text-align: center;">
    서울시 1인가구를 위한 지원사업이 한눈에!
   </p>
   <p style="text-align: center;">
    서울 1인가구 포털에 방문하여 참여 가능한 지원사업과 참여프로그램 등을 확인하세요.
   </p>
   <p style="text-align: center;">
   </p>
   <p style="text-align: center;">
   </p>
   <p>
   </p>
   <p>
   </p>`,
  },
  {
    src: 'https://news.seoul.go.kr/welfare/files/2022/11/642a54b6305b16.49405213.png',
    title: "1인가구 소셜다이닝 '행복한 밥상·건강한 밥상'",
    link: 'https://news.seoul.go.kr/welfare/archives/547189',
    content: `<p>
    </p>
    <p>
     <img alt="0329_서울1인가구_행복한밥상건강한밥상01" class="alignnone size-full wp-image-551274 aligncenter" decoding="async" fetchpriority="high" height="900" sizes="(max-width: 900px) 100vw, 900px" src="//news.seoul.go.kr/welfare/files/2022/11/642a54b6305b16.49405213.png" srcset="https://news.seoul.go.kr/welfare/files/2022/11/642a54b6305b16.49405213.png 900w, https://news.seoul.go.kr/welfare/files/2022/11/642a54b6305b16.49405213-300x300.png 300w, https://news.seoul.go.kr/welfare/files/2022/11/642a54b6305b16.49405213-200x200.png 200w, https://news.seoul.go.kr/welfare/files/2022/11/642a54b6305b16.49405213-768x768.png 768w, https://news.seoul.go.kr/welfare/files/2022/11/642a54b6305b16.49405213-78x78.png 78w, https://news.seoul.go.kr/welfare/files/2022/11/642a54b6305b16.49405213-215x215.png 215w" width="760"/>
     <img alt="0329_서울1인가구_행복한밥상건강한밥상02" class="alignnone size-full wp-image-551275 aligncenter" decoding="async" height="900" sizes="(max-width: 900px) 100vw, 900px" src="//news.seoul.go.kr/welfare/files/2022/11/642a54b8263f99.80423077.png" srcset="https://news.seoul.go.kr/welfare/files/2022/11/642a54b8263f99.80423077.png 900w, https://news.seoul.go.kr/welfare/files/2022/11/642a54b8263f99.80423077-300x300.png 300w, https://news.seoul.go.kr/welfare/files/2022/11/642a54b8263f99.80423077-200x200.png 200w, https://news.seoul.go.kr/welfare/files/2022/11/642a54b8263f99.80423077-768x768.png 768w, https://news.seoul.go.kr/welfare/files/2022/11/642a54b8263f99.80423077-78x78.png 78w, https://news.seoul.go.kr/welfare/files/2022/11/642a54b8263f99.80423077-215x215.png 215w" width="760"/>
     <img alt="0329_서울1인가구_행복한밥상건강한밥상03" class="alignnone size-full wp-image-551276 aligncenter" decoding="async" height="900" sizes="(max-width: 900px) 100vw, 900px" src="//news.seoul.go.kr/welfare/files/2022/11/642a54ba593890.51939915.png" srcset="https://news.seoul.go.kr/welfare/files/2022/11/642a54ba593890.51939915.png 900w, https://news.seoul.go.kr/welfare/files/2022/11/642a54ba593890.51939915-300x300.png 300w, https://news.seoul.go.kr/welfare/files/2022/11/642a54ba593890.51939915-200x200.png 200w, https://news.seoul.go.kr/welfare/files/2022/11/642a54ba593890.51939915-768x768.png 768w, https://news.seoul.go.kr/welfare/files/2022/11/642a54ba593890.51939915-78x78.png 78w, https://news.seoul.go.kr/welfare/files/2022/11/642a54ba593890.51939915-215x215.png 215w" width="760"/>
     <img alt="0329_서울1인가구_행복한밥상건강한밥상04" class="alignnone size-full wp-image-551277 aligncenter" decoding="async" height="900" loading="lazy" sizes="(max-width: 900px) 100vw, 900px" src="//news.seoul.go.kr/welfare/files/2022/11/642a54bcb33852.89418003.png" srcset="https://news.seoul.go.kr/welfare/files/2022/11/642a54bcb33852.89418003.png 900w, https://news.seoul.go.kr/welfare/files/2022/11/642a54bcb33852.89418003-300x300.png 300w, https://news.seoul.go.kr/welfare/files/2022/11/642a54bcb33852.89418003-200x200.png 200w, https://news.seoul.go.kr/welfare/files/2022/11/642a54bcb33852.89418003-768x768.png 768w, https://news.seoul.go.kr/welfare/files/2022/11/642a54bcb33852.89418003-78x78.png 78w, https://news.seoul.go.kr/welfare/files/2022/11/642a54bcb33852.89418003-215x215.png 215w" width="760"/>
     <img alt="0329_서울1인가구_행복한밥상건강한밥상05" class="alignnone size-full wp-image-551278 aligncenter" decoding="async" height="900" loading="lazy" sizes="(max-width: 900px) 100vw, 900px" src="//news.seoul.go.kr/welfare/files/2022/11/642a54be9ea356.75163304.png" srcset="https://news.seoul.go.kr/welfare/files/2022/11/642a54be9ea356.75163304.png 900w, https://news.seoul.go.kr/welfare/files/2022/11/642a54be9ea356.75163304-300x300.png 300w, https://news.seoul.go.kr/welfare/files/2022/11/642a54be9ea356.75163304-200x200.png 200w, https://news.seoul.go.kr/welfare/files/2022/11/642a54be9ea356.75163304-768x768.png 768w, https://news.seoul.go.kr/welfare/files/2022/11/642a54be9ea356.75163304-78x78.png 78w, https://news.seoul.go.kr/welfare/files/2022/11/642a54be9ea356.75163304-215x215.png 215w" width="760"/>
    </p>
    <p>
    </p>
    <p>
     <span style="color: #3366ff;">
      <strong>
       ○ ‘행복한 밥상·건강한 밥상’은 어떤 사업인가요?
      </strong>
     </span>
    </p>
    <p>
     ▸
     <strong>
      <span style="color: #3366ff;">
       '행복한 밥상
      </span>
      <span style="color: #3366ff;">
       '은 중장년 1인가구를 대상
      </span>
     </strong>
     으로 중장년 1인가구 맞춤형 ‘요리교실’과, 참여자들끼리 교류할 수 있는 ‘소통 프로그램’을 통해
     <span style="color: #3366ff;">
      <strong>
       건강한 식생활을 도모하고 사회적 관계망을 형성
      </strong>
     </span>
     하도록 지원하는 사업입니다.
    </p>
    <p>
     ▸
     <span>
      <span style="color: #3366ff;">
       <strong>
        '건강한 밥상
       </strong>
       <span style="color: #3366ff;">
        '
       </span>
       <strong>
        은 청년 1인가구를 대상
       </strong>
      </span>
      으로 간단 1인분 요리 등
     </span>
     특색 있는 ‘요리교실’과 다양한 ‘운동 프로그램’을 통해
     <span style="color: #3366ff;">
      <strong>
       건강한 생활습관 형성을 지원
      </strong>
     </span>
     하는 사업입니다.
    </p>
    <p>
    </p>
    <p>
     <span style="color: #3366ff;">
      <strong>
       ○‘행복한 밥상·건강한 밥상’ 나도 신청할 수 있나요?
      </strong>
     </span>
    </p>
    <p>
     ▸ 1인가구 이웃과 함께 요리하고 소통하고 싶은
     <span style="color: #3366ff;">
      <strong>
       서울시 청년·중장년 1인가구라면
      </strong>
     </span>
     신청할 수 있습니다.
    </p>
    <p>
     ※ 단, 자치구별로 지원대상이 다를 수 있으므로 해당 자치구로 문의 바랍니다.
    </p>
    <p>
    </p>
    <p>
     <strong>
      <span style="color: #2261e0;">
       ○ 어떻게 신청하나요?
      </span>
     </strong>
    </p>
    <p>
     ▸ 각 자치구 연락처로 문의 및 신청하시기 바랍니다. 문의처는 다음과 같습니다.
    </p>
    <table>
     <tbody>
      <tr>
       <td>
        <p style="text-align: center;">
         <b>
          구 분
         </b>
        </p>
       </td>
       <td style="text-align: center;">
        <p>
         <b>
          자치구
         </b>
        </p>
       </td>
       <td style="text-align: center;">
        <p>
         <b>
          장 소
         </b>
        </p>
       </td>
       <td style="text-align: center;">
        <p>
         <b>
          문의처
         </b>
        </p>
       </td>
      </tr>
      <tr>
       <td rowspan="15" style="text-align: center;">
        <p>
        </p>
        <p>
        </p>
        <p>
        </p>
        <p>
         행복한
        </p>
        <p>
         밥상
        </p>
       </td>
       <td style="text-align: center;">
        강남구
       </td>
       <td style="text-align: center;">
        강남구 1인가구커뮤니티센터
       </td>
       <td style="text-align: center;">
        (02)552-1101
       </td>
      </tr>
      <tr>
       <td style="text-align: center;">
        강북구
       </td>
       <td style="text-align: center;">
        번동 3단지종합사회복지관
       </td>
       <td style="text-align: center;">
        (02)984-6777
       </td>
      </tr>
      <tr>
       <td style="text-align: center;">
        강서구
       </td>
       <td style="text-align: center;">
        강서구 1인가구지원센터
       </td>
       <td style="text-align: center;">
        (070)7467-2020
       </td>
      </tr>
      <tr>
       <td style="text-align: center;">
        관악구
       </td>
       <td style="text-align: center;">
        성민종합사회복지관
       </td>
       <td style="text-align: center;">
        (02)876-0900
       </td>
      </tr>
      <tr>
       <td style="text-align: center;">
        광진구
       </td>
       <td style="text-align: center;">
        광진문화원 4층 요리실습실
       </td>
       <td style="text-align: center;">
        (02)450-1582/1906
       </td>
      </tr>
      <tr>
       <td style="text-align: center;">
        도봉구
       </td>
       <td style="text-align: center;">
        방아골종합사회복지관 등
       </td>
       <td style="text-align: center;">
        도봉권역 :  (02)3493-4755
        <br/>
        방학권역 : (02)3491-2663
       </td>
      </tr>
      <tr>
       <td style="text-align: center;">
        동대문구
       </td>
       <td style="text-align: center;">
        서울한방진흥센터
       </td>
       <td style="text-align: center;">
        (070)7459-3301
       </td>
      </tr>
      <tr>
       <td style="text-align: center;">
        마포구
       </td>
       <td style="text-align: center;">
        염리종합사회복지관
       </td>
       <td style="text-align: center;">
        (02)3276-1800
       </td>
      </tr>
      <tr>
       <td style="text-align: center;">
        서대문구
       </td>
       <td style="text-align: center;">
        북아현 마을밥상
       </td>
       <td style="text-align: center;">
        (02)330-4327
       </td>
      </tr>
      <tr>
       <td style="text-align: center;">
        서초구
       </td>
       <td style="text-align: center;">
        여성가족플라자(방배센터)
       </td>
       <td style="text-align: center;">
        (02)2155-8281
       </td>
      </tr>
      <tr>
       <td style="text-align: center;">
        성북구
       </td>
       <td style="text-align: center;">
        성북50플러스센터
       </td>
       <td style="text-align: center;">
        (070)4070-5116
       </td>
      </tr>
      <tr>
       <td style="text-align: center;">
        송파구
       </td>
       <td style="text-align: center;">
        송파구커뮤니티센터
       </td>
       <td style="text-align: center;">
        (070)7450-4331
       </td>
      </tr>
      <tr>
       <td style="text-align: center;">
        영등포구
       </td>
       <td style="text-align: center;">
        히로토 조리학원
       </td>
       <td style="text-align: center;">
        (02)2635-5060
       </td>
      </tr>
      <tr>
       <td style="text-align: center;">
        은평구
       </td>
       <td style="text-align: center;">
        역촌동 주민센터
       </td>
       <td style="text-align: center;">
        (02)351-6192
       </td>
      </tr>
      <tr>
       <td style="text-align: center;">
        중구
       </td>
       <td style="text-align: center;">
        중구장애인복지관 2층 조리실
       </td>
       <td style="text-align: center;">
        (02)3396-5344
       </td>
      </tr>
     </tbody>
    </table>
    <p>
    </p>
    <table>
     <tbody>
      <tr>
       <td>
        <p style="text-align: center;">
         <b>
          구 분
         </b>
        </p>
       </td>
       <td style="text-align: center;">
        <p>
         <b>
          자치구
         </b>
        </p>
       </td>
       <td style="text-align: center;">
        <p>
         <b>
          장 소
         </b>
        </p>
       </td>
       <td style="text-align: center;">
        <b>
         문의처
        </b>
       </td>
      </tr>
      <tr>
       <td rowspan="5">
        <p>
        </p>
        <p style="text-align: center;">
         건강한
        </p>
        <p style="text-align: center;">
         밥상
        </p>
       </td>
       <td style="text-align: center;">
        관악구
       </td>
       <td style="text-align: center;">
        청년공간 이음
       </td>
       <td style="text-align: center;">
        (02)879-5942
       </td>
      </tr>
      <tr>
       <td style="text-align: center;">
        구로구
       </td>
       <td style="text-align: center;">
        구로구가족센터
       </td>
       <td style="text-align: center;">
        (070)4066-0772
       </td>
      </tr>
      <tr>
       <td style="text-align: center;">
        동작구
       </td>
       <td style="text-align: center;">
        동작종합사회복지관
       </td>
       <td style="text-align: center;">
        (02)6298-8136
       </td>
      </tr>
      <tr>
       <td style="text-align: center;">
        영등포구
       </td>
       <td style="text-align: center;">
        한국조리직업전문학교
       </td>
       <td style="text-align: center;">
        (02)831-2755
       </td>
      </tr>
      <tr>
       <td style="text-align: center;">
        종로구
       </td>
       <td style="text-align: center;">
        서울요리학원
       </td>
       <td style="text-align: center;">
        (02)2148-2315
       </td>
      </tr>
     </tbody>
    </table>`,
  },
  {
    src: 'https://news.seoul.go.kr/welfare/files/2021/11/63dcccbf6d1868.84434587-768x389.jpg',
    title: '서울시 병원 안심동행서비스',
    link: 'https://news.seoul.go.kr/welfare/archives/537252',
    content: `<p>
    </p>
    <p>
     <img alt="1인가구_웹배너수정_690x350_1" class="alignnone wp-image-549460" src="https://news.seoul.go.kr/welfare/files/2021/11/63dcccbf6d1868.84434587-768x389.jpg" height="384" width="757"/>
    </p>
    <p>
     <span style="color: #4178f0;">
      ■
      <strong>
       ‘병원 안심동행서비스’가 무엇인가요?
      </strong>
     </span>
    </p>
    <p>
     ○ 시민이 아파서 병원동행이 필요한 경우,
     <br/>
     <strong>
      <span style="color: #4178f0;">
       병원에 갈 때부터 귀가할 때까지 모든 과정에 동행매니저가 보호자처럼 동행
      </span>
     </strong>
     해주는 서비스입니다.
    </p>
    <p>
     - 병원으로 출발할 때부터 집에 귀가할 때까지 동행(Door to door)
    </p>
    <p>
     <strong>
      <span style="color: #0000ff;">
       <span style="color: #ff0000;">
        ※ 서비스 제공은 서울시 소재 병원에 한함
       </span>
      </span>
     </strong>
    </p>
    <p>
     -
     <span>
     </span>
     <span>
      병원 이용 중 접수·수납
     </span>
     <span>
      ·
     </span>
     <span>
      약국 동행 등 지원
     </span>
    </p>
    <p>
    </p>
    <p>
     <strong>
      <span style="color: #4178f0;">
       ■ ‘병원 안심동행서비스’ 나도 받을 수 있나요?
      </span>
     </strong>
    </p>
    <p>
     ○ 병원 이용에 어려움이 있는 분 등
     <span style="color: #4178f0;">
      <strong>
       돌봄을 받기 힘든 상황에 처한 시민이면 누구나
      </strong>
     </span>
     신청할 수 있습니다.
    </p>
    <p>
     ○ 주민등록상 주소지가 서울인 시민뿐만 아니라,
     <br/>
     <strong>
      <span style="color: #4178f0;">
       주민등록상 주소지는 서울특별시가 아니더라도 서울특별시에 실거주하는 시민이라면 누구나
      </span>
     </strong>
     이용 가능합니다.
     <br/>
     (예 : 학업 등을 이유로 서울특별시에 거주하는 시민, 서울특별시 소재 직장인 등)
    </p>
    <p>
    </p>
    <p>
     <span style="color: #4178f0;">
      <strong>
       ■ 스스로 이동이 어려운 환자도 병원동행이 가능한가요?
      </strong>
     </span>
    </p>
    <p>
     ○
     <span>
      거동이 불편하더라도
      <span style="color: #3366ff;">
       <b>
        대중교통 이용, 또는 스스로 휠체어 착석 가능한 경우
       </b>
      </span>
      에는 서비스 이용이 가능합니다.
     </span>
    </p>
    <p class="0">
     <span>
     </span>
     <span>
      ※ 집안까지 동행하지는 않으며, 집밖에서 서비스 제공함을 원칙으로 합니다.
     </span>
    </p>
    <p class="0">
     <span>
     </span>
    </p>
    <p class="0">
     <b>
      <span>
       <span style="color: #4178f0;">
        <strong>
         ■
        </strong>
       </span>
       <span style="color: #3366ff;">
        어떻게 신청하나요
       </span>
      </span>
      <span style="color: #3366ff;">
       ?
      </span>
     </b>
    </p>
    <p class="0">
     <span>
     </span>
     <span>
      ○
     </span>
     <span>
      콜센터
     </span>
     <span>
      (
     </span>
     <span>
      ☎
     </span>
     <span>
      1533-1179
     </span>
     <span>
      )
     </span>
     <span>
      로 신청하거나
     </span>
     <span>
      ,
     </span>
     <span>
      <a href="https://1in.seoul.go.kr/front/bsns/bsnsView.do?bsns_id=890429d0cfad44b8b620263ef0e1f49b" rel="noopener" target="_self">
       온라인(1in.seoul.go.kr
      </a>
     </span>
     <span>
      <b>
       <a href="https://1in.seoul.go.kr/front/bsns/bsnsView.do?bsns_id=890429d0cfad44b8b620263ef0e1f49b" rel="noopener" target="_self">
        )
       </a>
      </b>
     </span>
     <span>
      으로 신청하세요.
     </span>
    </p>
    <p class="0">
     <span>
      <b>
       <a href="https://1in.seoul.go.kr/front/bsns/bsnsView.do?bsns_id=890429d0cfad44b8b620263ef0e1f49b" rel="noopener" target="_self">
        ☞
       </a>
      </b>
     </span>
     <b>
      <span>
       <a href="https://1in.seoul.go.kr/front/bsns/bsnsView.do?bsns_id=890429d0cfad44b8b620263ef0e1f49b" rel="noopener" target="_self">
        ☞
       </a>
      </span>
      <span>
       <a href="https://1in.seoul.go.kr/front/bsns/bsnsView.do?bsns_id=890429d0cfad44b8b620263ef0e1f49b" rel="noopener" target="_self">
        ☞ 온라인 신청하기
       </a>
      </span>
     </b>
    </p>
    <p>
    </p>
    <p>
     <span style="color: #4178f0;">
      <strong>
       ■ 사전 예약만 가능한가요?
      </strong>
     </span>
    </p>
    <p>
     ○ 사전 예약과 당일 신청 모두 가능합니다.
    </p>
    <p>
     - 당일 연계 신청 건의 경우 접수 후 3시간 이내 요청한 장소에 도착
     <br/>
     (단, 상시대기인력이 모두 출동했을 경우 서비스가 어려울 수 있습니다.)
    </p>
    <p>
     -
     <strong>
      <span style="color: #ff0000;">
       사전 예약은 일주일 전부터 신청이 가능합니다.
      </span>
     </strong>
    </p>
    <p>
    </p>
    <p>
     <strong>
      <span style="color: #4178f0;">
       ■ 비용 부담이 있나요?
      </span>
     </strong>
    </p>
    <p>
     ○
     <strong>
      <span style="color: #4178f0;">
       시간당 5,000원
       <b>
        <span>
         이며, 30분 초과 시 2,500원 추가됩니다.
         <br/>
        </span>
       </b>
      </span>
     </strong>
     <span>
      (
     </span>
     <span>
      요청한 장소에 동행매니저가 도착한 시간부터 요금이 산정됨)
     </span>
    </p>
    <p class="0">
     <span>
     </span>
     <span>
      <b>
       <span style="color: #ff0000;">
        ※
       </span>
      </b>
     </span>
     <span>
      <span style="color: #ff0000;">
       <b>
        중위소득 100% 이하라면, 2024.1.1.부터 연간 48회 무료 이용 가능합니다.(49회부터 유료)
       </b>
      </span>
      <br/>
      - 수급자 증명서, 차상위 증명서, 건강보험료 납부확인서 등 관련 서류는 반드시 이용 전에 제출하셔야 합니다.
     </span>
    </p>
    <p class="0">
     <span>
      ※ 차량은 별도 제공되지 않고, 교통비는 이용자가 부담합니다.
     </span>
    </p>
    <p>
    </p>
    <p>
     <strong>
      <span style="color: #4178f0;">
       ■
       <b>
        <span>
         언제 이용할 수 있나요?
        </span>
       </b>
      </span>
     </strong>
    </p>
    <p>
     <span>
      ○
      <span style="color: #000000;">
      </span>
     </span>
     <span style="color: #000000;">
      평일은 오전 7시부터 오후 8시까지 이용할 수 있고,
      <br/>
      주말은 사전 예약하신 분에 한하여 오전 9시부터 오후 6시까지 이용할 수 있습니다.
     </span>
    </p>`,
  },
  {
    src: 'https://news.seoul.go.kr/welfare/files/2020/04/1.png',
    title: '안심귀가 지원 - 안심이 앱',
    link: 'https://news.seoul.go.kr/welfare/archives/517373',
    content: `<div>
    <img alt="1" src="//news.seoul.go.kr/welfare/files/2020/04/1.png" width="780px"/>
   </div>
   <div>
    <h5>
     <span style="color: #ff0000;">
      <b>
       ■
      </b>
      <b>
       서울 안심이
      </b>
      <b>
       ?
      </b>
     </span>
    </h5>
    <h5>
     <span style="color: #800080;">
      <strong>
       - 혼자 걸어도 안심하고 귀가할 수 있도록 자치구 CCTV관제센터에서
       <span style="color: #ff0000;">
        CCTV로 보고 출동까지 하는 안심이앱
       </span>
       . 귀가모니터링, 안심귀가택시, 긴급신고 등을 제공합니다.
      </strong>
     </span>
    </h5>
    <h5>
     <span style="color: #800080;">
      <strong>
       (영어, 중국어, 일본어 제공)
      </strong>
     </span>
    </h5>
   </div>
   <table class="aligncenter">
    <thead>
    </thead>
    <tbody>
     <tr>
      <td scope="row" style="text-align: left; vertical-align: top;">
       <img alt="2" class="wp-image-549579 alignleft" decoding="async" height="186" sizes="(max-width: 331px) 100vw, 331px" src="//news.seoul.go.kr/welfare/files/2020/04/2.png" srcset="https://news.seoul.go.kr/welfare/files/2020/04/2.png 2002w, https://news.seoul.go.kr/welfare/files/2020/04/2-300x169.png 300w, https://news.seoul.go.kr/welfare/files/2020/04/2-1024x576.png 1024w, https://news.seoul.go.kr/welfare/files/2020/04/2-200x112.png 200w, https://news.seoul.go.kr/welfare/files/2020/04/2-768x432.png 768w, https://news.seoul.go.kr/welfare/files/2020/04/2-1536x864.png 1536w, https://news.seoul.go.kr/welfare/files/2020/04/2-104x58.png 104w, https://news.seoul.go.kr/welfare/files/2020/04/2-325x183.png 325w" width="331"/>
      </td>
      <td scope="row" style="text-align: left; vertical-align: top;">
       <h5>
        <span style="color: #ff0000;">
         <b>
          긴급신고
         </b>
        </span>
       </h5>
       <h5>
        <strong>
         <span style="color: #800080;">
          ▸ 위협감을 느끼거나, 도움이 필요할 때 이용하세요
         </span>
        </strong>
       </h5>
       <h5>
        <strong>
         <span style="color: #ff00ff;">
          ※ 안심이앱의 긴급버튼 클릭, 흔들기, 볼륨버튼 누르기(안드로드 만)
         </span>
        </strong>
       </h5>
      </td>
     </tr>
     <tr>
      <td style="text-align: left; vertical-align: top;">
       <img alt="3" class="alignnone wp-image-549580" decoding="async" height="185" sizes="(max-width: 329px) 100vw, 329px" src="//news.seoul.go.kr/welfare/files/2020/04/3.png" srcset="https://news.seoul.go.kr/welfare/files/2020/04/3.png 2001w, https://news.seoul.go.kr/welfare/files/2020/04/3-300x169.png 300w, https://news.seoul.go.kr/welfare/files/2020/04/3-1024x576.png 1024w, https://news.seoul.go.kr/welfare/files/2020/04/3-200x112.png 200w, https://news.seoul.go.kr/welfare/files/2020/04/3-768x432.png 768w, https://news.seoul.go.kr/welfare/files/2020/04/3-1536x864.png 1536w, https://news.seoul.go.kr/welfare/files/2020/04/3-104x58.png 104w, https://news.seoul.go.kr/welfare/files/2020/04/3-325x183.png 325w" width="329"/>
      </td>
      <td scope="row" style="text-align: left; vertical-align: top;">
       <h5>
        <span style="color: #ff0000;">
         <b>
          귀가모니터링
         </b>
        </span>
       </h5>
       <h5>
        <strong>
         <span style="color: #800080;">
          ▸ 혼자서 귀가할 때 안심앱에 목적지를 입력하고 이동하세요.
         </span>
        </strong>
       </h5>
       <h5>
        <strong>
         <span style="color: #ff00ff;">
          ※ 도착지 선택 ➟ 시작하기, 이동후 도착지에 오면 종료확인 팝업 ➟ 확인
         </span>
        </strong>
       </h5>
      </td>
     </tr>
     <tr>
      <td style="text-align: left; vertical-align: top;">
       <h5>
        <img alt="4" class="alignnone wp-image-549581" decoding="async" height="184" loading="lazy" sizes="(max-width: 326px) 100vw, 326px" src="//news.seoul.go.kr/welfare/files/2020/04/4.png" srcset="https://news.seoul.go.kr/welfare/files/2020/04/4.png 2001w, https://news.seoul.go.kr/welfare/files/2020/04/4-300x169.png 300w, https://news.seoul.go.kr/welfare/files/2020/04/4-1024x576.png 1024w, https://news.seoul.go.kr/welfare/files/2020/04/4-200x113.png 200w, https://news.seoul.go.kr/welfare/files/2020/04/4-768x432.png 768w, https://news.seoul.go.kr/welfare/files/2020/04/4-1536x864.png 1536w, https://news.seoul.go.kr/welfare/files/2020/04/4-104x59.png 104w, https://news.seoul.go.kr/welfare/files/2020/04/4-325x183.png 325w" width="326"/>
       </h5>
      </td>
      <td scope="row" style="text-align: left; vertical-align: top;">
       <h5>
        <span style="color: #ff0000;">
         <b>
          안심귀가택시
         </b>
        </span>
       </h5>
       <h5>
        ▸
        <strong>
         <span style="color: #800080;">
          서울택시(7만대:법인+개인) 이용자의 보호자 및 CCTV관제센터에 승하차정보· 택시번호 등을 자동으로 알려줘요
         </span>
        </strong>
       </h5>
       <h5>
        ▸ 긴급신고, 귀가 모니터링도 제공합니다.
       </h5>
       <h5>
        <strong>
         <span style="color: #ff00ff;">
          ※ 도착지 선택 ➟ 시작하기, 택시 탑승 후 하차하면 자동 종료
         </span>
        </strong>
       </h5>
      </td>
     </tr>
     <tr>
      <td style="text-align: left; vertical-align: top;">
       <h5>
        <img alt="5" class="wp-image-549582 alignleft" decoding="async" height="189" loading="lazy" sizes="(max-width: 336px) 100vw, 336px" src="//news.seoul.go.kr/welfare/files/2020/04/5.png" srcset="https://news.seoul.go.kr/welfare/files/2020/04/5.png 2002w, https://news.seoul.go.kr/welfare/files/2020/04/5-300x169.png 300w, https://news.seoul.go.kr/welfare/files/2020/04/5-1024x576.png 1024w, https://news.seoul.go.kr/welfare/files/2020/04/5-200x112.png 200w, https://news.seoul.go.kr/welfare/files/2020/04/5-768x432.png 768w, https://news.seoul.go.kr/welfare/files/2020/04/5-1536x864.png 1536w, https://news.seoul.go.kr/welfare/files/2020/04/5-104x58.png 104w, https://news.seoul.go.kr/welfare/files/2020/04/5-325x183.png 325w" width="336"/>
       </h5>
      </td>
      <td style="text-align: left; vertical-align: top;">
       <h5>
        <span style="color: #ff0000;">
         <b>
          안심귀가스카우트
         </b>
         <b>
          24
         </b>
         <b>
          시간 예약
         </b>
        </span>
       </h5>
       <h5>
        <strong>
         <span style="color: #800080;">
          ▸ 늦은 시각에 귀가하는 시민이 언제든 신청하면, 스카우트 대원이 귀가동행합니다.
         </span>
        </strong>
       </h5>
       <h5>
        <strong>
         <span style="color: #ff00ff;">
          ※ 도착지 선택 ➟ 거점선택 ➟ 예약하기
         </span>
        </strong>
       </h5>
      </td>
     </tr>
    </tbody>
   </table>
   <p>
   </p>
   <h5>
    <span style="color: #0000ff;">
     <b>
      ■
     </b>
     <b>
      누가 이용할 수 있나요
     </b>
     <b>
      ?
     </b>
    </span>
   </h5>
   <h5>
    <strong>
     <span style="color: #800080;">
      - 늦은 시각 귀가하는 시민, 혼자서 귀가하는 시민, 택시타고 이동하는 시민
     </span>
    </strong>
   </h5>
   <p>
   </p>
   <h5>
    <span style="color: #0000ff;">
     <b>
      ■
     </b>
     <b>
      언제 이용할 수 있나요
     </b>
     <b>
      ?
     </b>
    </span>
   </h5>
   <h5>
    <strong>
     <span style="color: #800080;">
      - 언제든 필요할 때 이용하세요.
     </span>
    </strong>
   </h5>
   <p>
   </p>
   <h5>
    <span style="color: #0000ff;">
     <b>
      ■
     </b>
     <b>
      이용료 및 이용방법은 어떻게 되나요
     </b>
     <b>
      ?
     </b>
    </span>
   </h5>
   <h5>
    <strong>
     <span style="color: #800080;">
      - 무료입니다.
     </span>
    </strong>
    <br/>
    <strong>
     <span style="color: #800080;">
      - 안심이앱에서 신청하세요.
     </span>
    </strong>
   </h5>
   <p>
   </p>
   <h5>
    <a href="https://1in.seoul.go.kr/">
     <u>
      <b>
       ☞☞☞
      </b>
     </u>
     <u>
      <b>
       서울시의 다양한
      </b>
     </u>
     <u>
      <b>
       1
      </b>
     </u>
     <u>
      <b>
       인가구 관련 지원정보를 확인하시려면
      </b>
     </u>
     <u>
      <b>
       ......
      </b>
     </u>
     <u>
      <b>
       클릭
      </b>
     </u>
    </a>
   </h5>
   <div class="main" style="text-align: center;">
   </div>
   <div>
   </div>
   <div>
   </div>
   <div style="text-align: center;">
    <h5 class="text_download">
     <strong>
      ※ 아래 버튼을 눌러 “서울 안심이”를 다운로드 받으세요!!
     </strong>
    </h5>
    <p>
     <a href="https://play.google.com/store/apps/details?id=kr.go.seoul.ansimi.woman" rel="noopener" target="_blank">
      <img alt="구글" class="alignnone wp-image-536652" decoding="async" height="29" loading="lazy" sizes="(max-width: 96px) 100vw, 96px" src="//news.seoul.go.kr/welfare/files/2020/04/616e61c7f2cd52.13991238.png" srcset="https://news.seoul.go.kr/welfare/files/2020/04/616e61c7f2cd52.13991238.png 333w, https://news.seoul.go.kr/welfare/files/2020/04/616e61c7f2cd52.13991238-300x90.png 300w, https://news.seoul.go.kr/welfare/files/2020/04/616e61c7f2cd52.13991238-200x60.png 200w, https://news.seoul.go.kr/welfare/files/2020/04/616e61c7f2cd52.13991238-104x31.png 104w, https://news.seoul.go.kr/welfare/files/2020/04/616e61c7f2cd52.13991238-325x98.png 325w" width="96"/>
     </a>
     <span>
      <a href="https://apps.apple.com/kr/app/%EC%84%9C%EC%9A%B8%EC%8B%9C-%EC%95%88%EC%8B%AC%EC%9D%B4/id1204100862" rel="noopener" target="_blank">
       <img alt="첨부3" class="alignnone wp-image-536655" decoding="async" height="30" loading="lazy" sizes="(max-width: 100px) 100vw, 100px" src="//news.seoul.go.kr/welfare/files/2020/04/616e63417fecf0.31855141.png" srcset="https://news.seoul.go.kr/welfare/files/2020/04/616e63417fecf0.31855141.png 349w, https://news.seoul.go.kr/welfare/files/2020/04/616e63417fecf0.31855141-300x90.png 300w, https://news.seoul.go.kr/welfare/files/2020/04/616e63417fecf0.31855141-200x60.png 200w, https://news.seoul.go.kr/welfare/files/2020/04/616e63417fecf0.31855141-104x31.png 104w, https://news.seoul.go.kr/welfare/files/2020/04/616e63417fecf0.31855141-325x98.png 325w" width="100"/>
      </a>
      <a href="https://itunes.apple.com/kr/app/%EC%84%9C%EC%9A%B8%EC%8B%9C-%EC%95%88%EC%8B%AC%EC%9D%B4/id1204100862?mt=8" rel="noopener" target="_blank">
      </a>
     </span>
    </p>
   </div>
   <section class="bg_grey">
    <div class="container">
    </div>
   </section>
   <section>
    <div class="container">
     <div class="cont_text03">
      <p style="text-align: center;">
      </p>
     </div>
    </div>
   </section>`,
  },
  {
    src: 'https://news.seoul.go.kr/welfare/files/2020/04/63eb08d8351689.39642326-298x300.png',
    title: '2023년 서울시 안심택배함 운영현황 안내',
    link: 'https://news.seoul.go.kr/welfare/archives/511589',
    content: `<p>
    <strong>
     <span style="color: #800080;">
      <img alt="택배함2" class="alignnone wp-image-549702 alignleft" decoding="async" fetchpriority="high" height="267" sizes="(max-width: 265px) 100vw, 265px" src="//news.seoul.go.kr/welfare/files/2020/04/63eb08d8351689.39642326.png" srcset="https://news.seoul.go.kr/welfare/files/2020/04/63eb08d8351689.39642326.png 427w, https://news.seoul.go.kr/welfare/files/2020/04/63eb08d8351689.39642326-298x300.png 298w, https://news.seoul.go.kr/welfare/files/2020/04/63eb08d8351689.39642326-77x78.png 77w, https://news.seoul.go.kr/welfare/files/2020/04/63eb08d8351689.39642326-214x215.png 214w" width="265"/>
     </span>
    </strong>
   </p>
   <p>
    <strong>
     서울시에서 운영 중인 안심택배함 현황을 아래와 같이 알려드립니다.
    </strong>
   </p>
   <p style="text-align: left;">
   </p>
   <p style="text-align: left;">
    <span style="color: #800080;">
     <strong>
      ο 이용대상 : 서울 시민 누구나 이용 가능
     </strong>
    </span>
   </p>
   <p style="text-align: left;">
    <span style="color: #800080;">
     <strong>
      ο 설치장소 : 서울시 전역 260여개소 설치(아래참고)
     </strong>
    </span>
   </p>
   <p style="text-align: left;">
    <span style="color: #800080;">
     <strong>
      ο 운영시간 : 365일 24시간 운영(일부지점 제외)
     </strong>
    </span>
   </p>
   <p style="text-align: left;">
    <span style="color: #800080;">
     <strong>
      ο 이용요금 : 48시간 무료(48시간 초과시 1일당 1,000원 부과)
     </strong>
    </span>
   </p>
   <p style="text-align: left;">
    <span style="color: #800080;">
     <strong>
      ο 문의사항 : 안심택배함 콜센터(☎1666-0339)
     </strong>
    </span>
   </p>
   <h5 style="text-align: left;">
   </h5>
   <h5>
    ο 이용방법
   </h5>
   <p>
    1. (이용자) 안심택배함 주소로 배송지 기재 (주소기재 시 반드시
    <strong>
     주소 끝부분에 '서울시 안심택배함'
    </strong>
    으로 기재)
   </p>
   <p>
    2. (택배업체) 택배함에 이용자(수령인) 휴대폰 번호, 송장번호 입력, 물품 보관
   </p>
   <p>
    3. (이용자) 택배도착문자 수신 후 인증번호 입력하여 택배 수령
   </p>
   <p>
   </p>
   <h5>
    ※ 유의사항
   </h5>
   <p>
    1. 택배 도착 후 48시간 이내 찾아 주세요.
    <br/>
    (택배도착 문자 수신 후 48시간 초과 시 택배함 부족 해결 및 원활한 이용을 위해 1천원/일 요금이 발생합니다.)
   </p>
   <p>
    2. 택배함에 현금을 보관하시면 안 됩니다. 현금을 넣으라는 것은 보이스피싱이니 절대 넣지마세요!
   </p>
   <p>
    3. 이용문의 : 안심택배함 콜센터(☎1666-0339)
   </p>
   <p>
   </p>
   <h5>
    <span style="color: #0000ff;">
     <img alt="택배함" class="wp-image-549695 alignleft" decoding="async" height="217" src="https://news.seoul.go.kr/welfare/files/2020/04/6046debfed7928.74557659-scaled.jpg" width="153"/>
    </span>
    ※ 자치구별 안심택배함 설치장소
   </h5>
   <p>
   </p>
   <p>
    - 보다 자세한 택배함 위치는
   </p>
   <p>
    1. '안심이'앱 (삼성 플레이스토어, 구글 플레이스토어, 애플 앱스토어에서 다운로드 가능)
   </p>
   <p>
    2.
    <a href="https://map.seoul.go.kr/smgis2/short/6OaaV">
     스마트서울맵(도시생활지도-안심택배)
    </a>
    ,
    <a href="https://1in.seoul.go.kr/front/sport/sportView.do?sport_id=13b57d1bc5fa4bc3a201fbeab648a64c">
     서울1인가구 포털
    </a>
    에서도 확인하실 수 있습니다.
   </p>
   <p>
   </p>
   <p>
   </p>
   <p>
   </p>
   <p>
    <a href="//1in.seoul.go.kr/front/sport/sportView.do?sport_id=13b57d1bc5fa4bc3a201fbeab648a64c">
     <strong>
      ★★ 택배함이 설치되어 있는 건물 내 자세한 택배함 위치정보는 이곳을 클릭하세요. (예시↓)
     </strong>
     <strong>
      ★★
     </strong>
    </a>
   </p>
   <p>
    <a href="//1in.seoul.go.kr/front/sport/sportView.do?sport_id=13b57d1bc5fa4bc3a201fbeab648a64c">
     <img alt="안심택배함" class="alignnone wp-image-552404" decoding="async" height="207" sizes="(max-width: 453px) 100vw, 453px" src="//news.seoul.go.kr/welfare/files/2020/04/6458b422a48d82.20427022.jpg" srcset="https://news.seoul.go.kr/welfare/files/2020/04/6458b422a48d82.20427022.jpg 1019w, https://news.seoul.go.kr/welfare/files/2020/04/6458b422a48d82.20427022-300x137.jpg 300w, https://news.seoul.go.kr/welfare/files/2020/04/6458b422a48d82.20427022-200x91.jpg 200w, https://news.seoul.go.kr/welfare/files/2020/04/6458b422a48d82.20427022-768x351.jpg 768w, https://news.seoul.go.kr/welfare/files/2020/04/6458b422a48d82.20427022-104x48.jpg 104w, https://news.seoul.go.kr/welfare/files/2020/04/6458b422a48d82.20427022-325x149.jpg 325w" width="453"/>
    </a>
   </p>
   <table>
    <tbody>
     <tr>
      <td>
       <p>
        연번
       </p>
      </td>
      <td>
       <p>
        자치구
       </p>
      </td>
      <td>
       <p>
        행정동
       </p>
      </td>
      <td>
       <p>
        택배함명
       </p>
      </td>
      <td>
       <p>
        주소
       </p>
      </td>
      <td>
       <p>
        비고
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        1
       </p>
      </td>
      <td rowspan="5">
       <p>
        종로
       </p>
       <p>
        (5)
       </p>
      </td>
      <td>
       <p>
        청운효자동
       </p>
      </td>
      <td>
       <p>
        청운효자동 자치회관
       </p>
      </td>
      <td>
       <p>
        자하문로19길 36
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        2
       </p>
      </td>
      <td>
       <p>
        혜화동
       </p>
      </td>
      <td>
       <p>
        종로육아종합지원센터
       </p>
      </td>
      <td>
       <p>
        성균관로1길 6-3
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        3
       </p>
      </td>
      <td>
       <p>
        숭인1동
       </p>
      </td>
      <td>
       <p>
        숭인1동 주민센터
       </p>
      </td>
      <td>
       <p>
        지봉로 86
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        4
       </p>
      </td>
      <td>
       <p>
        창신1동
       </p>
      </td>
      <td>
       <p>
        종로구민회관
       </p>
      </td>
      <td>
       <p>
        지봉로5길 7-5
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        5
       </p>
      </td>
      <td>
       <p>
        숭인2동
       </p>
      </td>
      <td>
       <p>
        숭인제2동주민센터
       </p>
      </td>
      <td>
       <p>
        종로65길 10
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        6
       </p>
      </td>
      <td rowspan="8">
       <p>
        중구
       </p>
       <p>
        (8)
       </p>
      </td>
      <td>
       <p>
        약수동
       </p>
      </td>
      <td>
       <p>
        약수동 공영주차장
       </p>
      </td>
      <td>
       <p>
        동호로8다길 22
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        7
       </p>
      </td>
      <td>
       <p>
        다산동
       </p>
      </td>
      <td>
       <p>
        버티 공영주차장
       </p>
      </td>
      <td>
       <p>
        동호로17길 270
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        8
       </p>
      </td>
      <td>
       <p>
        명동
       </p>
      </td>
      <td>
       <p>
        명동주민센터
       </p>
      </td>
      <td>
       <p>
        퇴계로20길 3
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        9
       </p>
      </td>
      <td>
       <p>
        장충동
       </p>
      </td>
      <td>
       <p>
        장충체육관 후문
       </p>
      </td>
      <td>
       <p>
        동호로 241
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        10
       </p>
      </td>
      <td>
       <p>
        약수동
       </p>
      </td>
      <td>
       <p>
        약수교회 식당입구
       </p>
      </td>
      <td>
       <p>
        다산로8길 32
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        11
       </p>
      </td>
      <td>
       <p>
        장충동
       </p>
      </td>
      <td>
       <p>
        장충공영주차장
       </p>
      </td>
      <td>
       <p>
        장충동2가 192-129
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        12
       </p>
      </td>
      <td>
       <p>
        다산동
       </p>
      </td>
      <td>
       <p>
        충현 공영주차장
       </p>
      </td>
      <td>
       <p>
        동호로 11나길 47
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        13
       </p>
      </td>
      <td>
       <p>
        광희동
       </p>
      </td>
      <td>
       <p>
        충무창업큐브
       </p>
      </td>
      <td>
       <p>
        퇴계로 265
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        14
       </p>
      </td>
      <td rowspan="8">
       <p>
        용산
       </p>
       <p>
        (8)
       </p>
      </td>
      <td>
       <p>
        청파동
       </p>
      </td>
      <td>
       <p>
        숙대 명재관 인근
       </p>
      </td>
      <td>
       <p>
        효창원로86길 33
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        15
       </p>
      </td>
      <td>
       <p>
        용산2가동
       </p>
      </td>
      <td>
       <p>
        용산치안센터
       </p>
      </td>
      <td>
       <p>
        신흥로 90
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        16
       </p>
      </td>
      <td>
       <p>
        효창동
       </p>
      </td>
      <td>
       <p>
        효창동주민센터
       </p>
      </td>
      <td>
       <p>
        효창원로 161
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        17
       </p>
      </td>
      <td>
       <p>
        한남동
       </p>
      </td>
      <td>
       <p>
        한남동공영주차장
       </p>
      </td>
      <td>
       <p>
        이태원로 224-19
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        18
       </p>
      </td>
      <td>
       <p>
        이태원1동
       </p>
      </td>
      <td>
       <p>
        용산구청후문
       </p>
      </td>
      <td>
       <p>
        녹사평대로 150
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        19
       </p>
      </td>
      <td>
       <p>
        남영동
       </p>
      </td>
      <td>
       <p>
        갈월종합사회복지관
       </p>
      </td>
      <td>
       <p>
        두텁바위로 25
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        20
       </p>
      </td>
      <td>
       <p>
        원효로1동
       </p>
      </td>
      <td>
       <p>
        용산꿈나무종합타운
       </p>
      </td>
      <td>
       <p>
        백범로 329
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        21
       </p>
      </td>
      <td>
       <p>
        보광동
       </p>
      </td>
      <td>
       <p>
        보광동주민센터
       </p>
      </td>
      <td>
       <p>
        장문로 95
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        22
       </p>
      </td>
      <td rowspan="9">
       <p>
        성동
       </p>
       <p>
        (9)
       </p>
      </td>
      <td>
       <p>
        성수1가1동
       </p>
      </td>
      <td>
       <p>
        성동구민종합체육센터
       </p>
      </td>
      <td>
       <p>
        왕십리로 89
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        23
       </p>
      </td>
      <td>
       <p>
        행당1동
       </p>
      </td>
      <td>
       <p>
        성동구립도서관
       </p>
      </td>
      <td>
       <p>
        고산자로10길 9
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        24
       </p>
      </td>
      <td>
       <p>
        왕십리2동
       </p>
      </td>
      <td>
       <p>
        왕십리제2동주민센터
       </p>
      </td>
      <td>
       <p>
        성동구 무학봉 15길 6
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        25
       </p>
      </td>
      <td>
       <p>
        사근동
       </p>
      </td>
      <td>
       <p>
        사근동주민센터
       </p>
      </td>
      <td>
       <p>
        사근동길 37
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        26
       </p>
      </td>
      <td>
       <p>
        금호2,3가동
       </p>
      </td>
      <td>
       <p>
        열린금호교육문화회관
       </p>
      </td>
      <td>
       <p>
        무수막길 69
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        27
       </p>
      </td>
      <td>
       <p>
        행당2동
       </p>
      </td>
      <td>
       <p>
        하왕십리공영주차장
       </p>
      </td>
      <td>
       <p>
        무학봉48길
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        28
       </p>
      </td>
      <td>
       <p>
        성수1가1동
       </p>
      </td>
      <td>
       <p>
        강변공영주차장
       </p>
      </td>
      <td>
       <p>
        둘레길 47-5
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        29
       </p>
      </td>
      <td>
       <p>
        용답동
       </p>
      </td>
      <td>
       <p>
        용답공영주차장
       </p>
      </td>
      <td>
       <p>
        용답 29길 22
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        30
       </p>
      </td>
      <td>
       <p>
        성수2가3동
       </p>
      </td>
      <td>
       <p>
        성수2가3동공영주차장
       </p>
      </td>
      <td>
       <p>
        광나루로 4가길 23
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        31
       </p>
      </td>
      <td rowspan="13">
       <p>
        광진
       </p>
       <p>
        (13)
       </p>
      </td>
      <td>
       <p>
        구의2동
       </p>
      </td>
      <td>
       <p>
        구의2동 공동주차장
       </p>
      </td>
      <td>
       <p>
        자양로 309
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        32
       </p>
      </td>
      <td>
       <p>
        자양3동
       </p>
      </td>
      <td>
       <p>
        자양종합사회복지관
       </p>
      </td>
      <td>
       <p>
        자양번영로 35
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        33
       </p>
      </td>
      <td>
       <p>
        중곡3동
       </p>
      </td>
      <td>
       <p>
        중곡문화체육센터
       </p>
      </td>
      <td>
       <p>
        능동로 433
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        34
       </p>
      </td>
      <td>
       <p>
        중곡2동
       </p>
      </td>
      <td>
       <p>
        중곡종합건강센터
       </p>
      </td>
      <td>
       <p>
        긴고랑로 110
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        35
       </p>
      </td>
      <td>
       <p>
        화양동
       </p>
      </td>
      <td>
       <p>
        화양동주민센터
       </p>
      </td>
      <td>
       <p>
        능동로17길 39
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        36
       </p>
      </td>
      <td>
       <p>
        자양4동
       </p>
      </td>
      <td>
       <p>
        자양4동 주민센터
       </p>
      </td>
      <td>
       <p>
        뚝섬로26길 58
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        37
       </p>
      </td>
      <td>
       <p>
        자양4동
       </p>
      </td>
      <td>
       <p>
        동부여성발전센터
       </p>
      </td>
      <td>
       <p>
        아차산로30길 36
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        38
       </p>
      </td>
      <td>
       <p>
        중곡1동
       </p>
      </td>
      <td>
       <p>
        중곡1동주민센터
       </p>
      </td>
      <td>
       <p>
        긴고랑로12길 49
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        39
       </p>
      </td>
      <td>
       <p>
        구의1동
       </p>
      </td>
      <td>
       <p>
        광진경찰서
       </p>
      </td>
      <td>
       <p>
        자양로 167
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        40
       </p>
      </td>
      <td>
       <p>
        자양2동
       </p>
      </td>
      <td>
       <p>
        자양2동주민센터
       </p>
      </td>
      <td>
       <p>
        자양로3가길 26
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        41
       </p>
      </td>
      <td>
       <p>
        구의1동
       </p>
      </td>
      <td>
       <p>
        구의1동 공영주차장
       </p>
      </td>
      <td>
       <p>
        자양로18길 78
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        42
       </p>
      </td>
      <td>
       <p>
        자양2동
       </p>
      </td>
      <td>
       <p>
        자양문화체육센터
       </p>
      </td>
      <td>
       <p>
        뚝섬로52길 66
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        43
       </p>
      </td>
      <td>
       <p>
        군자동
       </p>
      </td>
      <td>
       <p>
        군자동주민센터
       </p>
      </td>
      <td>
       <p>
        면목로 13
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        44
       </p>
      </td>
      <td rowspan="11">
       <p>
        동대문
       </p>
       <p>
        (11)
       </p>
      </td>
      <td>
       <p>
        전농1동
       </p>
      </td>
      <td>
       <p>
        나사렛 교회
       </p>
      </td>
      <td>
       <p>
        전농로27길 42
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        45
       </p>
      </td>
      <td>
       <p>
        장안2동
       </p>
      </td>
      <td>
       <p>
        장안2동 공영주차장
       </p>
      </td>
      <td>
       <p>
        답십리로65길 124-5
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        46
       </p>
      </td>
      <td>
       <p>
        용신동
       </p>
      </td>
      <td>
       <p>
        동대문구청 종합민원실
       </p>
      </td>
      <td>
       <p>
        천호대로 145
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        47
       </p>
      </td>
      <td>
       <p>
        회기동
       </p>
      </td>
      <td>
       <p>
        회기동공영주차장
       </p>
      </td>
      <td>
       <p>
        회기로25길 31
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        48
       </p>
      </td>
      <td>
       <p>
        답십리1동
       </p>
      </td>
      <td>
       <p>
        답십리도서관
       </p>
      </td>
      <td>
       <p>
        서울시립대로4길 75
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        49
       </p>
      </td>
      <td>
       <p>
        청량리동
       </p>
      </td>
      <td>
       <p>
        정보화도서관
       </p>
      </td>
      <td>
       <p>
        회기로10길 60
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        50
       </p>
      </td>
      <td>
       <p>
        장안1동
       </p>
      </td>
      <td>
       <p>
        장안종합사회복지관
       </p>
      </td>
      <td>
       <p>
        한천로18길 48
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        51
       </p>
      </td>
      <td>
       <p>
        답십리2동
       </p>
      </td>
      <td>
       <p>
        답십리2청소년독서실
       </p>
      </td>
      <td>
       <p>
        답십리로56길 15
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        52
       </p>
      </td>
      <td>
       <p>
        휘경2동
       </p>
      </td>
      <td>
       <p>
        휘경동공영주차장
       </p>
      </td>
      <td>
       <p>
        망우로12길 33
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        53
       </p>
      </td>
      <td>
       <p>
        이문1동
       </p>
      </td>
      <td>
       <p>
        신한은행 외대역 지점
       </p>
      </td>
      <td>
       <p>
        휘경로 23(이문동)
       </p>
      </td>
      <td>
       <p>
        (운영시간 07:30 ~ 23:30)
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        54
       </p>
      </td>
      <td>
       <p>
        이문2동
       </p>
      </td>
      <td>
       <p>
        이문체육문화센터
       </p>
      </td>
      <td>
       <p>
        한천로58길 81-49
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        55
       </p>
      </td>
      <td rowspan="6">
       <p>
        중랑
       </p>
       <p>
        (6)
       </p>
      </td>
      <td>
       <p>
        중화1동
       </p>
      </td>
      <td>
       <p>
        중화1치안센터
       </p>
      </td>
      <td>
       <p>
        동일로 792
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        56
       </p>
      </td>
      <td>
       <p>
        면목4동
       </p>
      </td>
      <td>
       <p>
        면목4동주민센터
       </p>
      </td>
      <td>
       <p>
        면목로 246
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        57
       </p>
      </td>
      <td>
       <p>
        면목5동
       </p>
      </td>
      <td>
       <p>
        면목5동 주민센터
       </p>
      </td>
      <td>
       <p>
        동일로 619
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        58
       </p>
      </td>
      <td>
       <p>
        면목본동
       </p>
      </td>
      <td>
       <p>
        면목본동 주민센터
       </p>
      </td>
      <td>
       <p>
        면목로 397
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        59
       </p>
      </td>
      <td>
       <p>
        상봉1동
       </p>
      </td>
      <td>
       <p>
        상봉1동주민센터
       </p>
      </td>
      <td>
       <p>
        상봉중앙로1길 6
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        60
       </p>
      </td>
      <td>
       <p>
        상봉2동
       </p>
      </td>
      <td>
       <p>
        상봉2동 주민센터
       </p>
      </td>
      <td>
       <p>
        동일로 114길 10
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        61
       </p>
      </td>
      <td rowspan="8">
       <p>
        성북
       </p>
       <p>
        (8)
       </p>
      </td>
      <td>
       <p>
        종암동
       </p>
      </td>
      <td>
       <p>
        제일빌딩(고대인근)
       </p>
      </td>
      <td>
       <p>
        북악산로31길 8
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        62
       </p>
      </td>
      <td>
       <p>
        길음2동
       </p>
      </td>
      <td>
       <p>
        성북희망나눔봉사센터
       </p>
      </td>
      <td>
       <p>
        삼양로 20
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        63
       </p>
      </td>
      <td>
       <p>
        안암동
       </p>
      </td>
      <td>
       <p>
        안암교회
       </p>
      </td>
      <td>
       <p>
        보문로30가길 41-6
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        64
       </p>
      </td>
      <td>
       <p>
        돈암2동
       </p>
      </td>
      <td>
       <p>
        아리랑 시네미디어센터
       </p>
      </td>
      <td>
       <p>
        아리랑로 82
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        65
       </p>
      </td>
      <td>
       <p>
        정릉2동
       </p>
      </td>
      <td>
       <p>
        정릉감리교회
       </p>
      </td>
      <td>
       <p>
        보국문로8길 23
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        66
       </p>
      </td>
      <td>
       <p>
        장위1동
       </p>
      </td>
      <td>
       <p>
        장위1동 주민센터
       </p>
      </td>
      <td>
       <p>
        장위로 61
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        67
       </p>
      </td>
      <td>
       <p>
        석관동
       </p>
      </td>
      <td>
       <p>
        석관동주민센터
       </p>
      </td>
      <td>
       <p>
        화랑로 296
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        68
       </p>
      </td>
      <td>
       <p>
        보문동
       </p>
      </td>
      <td>
       <p>
        보문 부모아이지원센터
       </p>
      </td>
      <td>
       <p>
        지봉로24길 26
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        69
       </p>
      </td>
      <td rowspan="9">
       <p>
        강북
       </p>
       <p>
        (9)
       </p>
      </td>
      <td>
       <p>
        인수동
       </p>
      </td>
      <td>
       <p>
        강북노인종합복지관
       </p>
      </td>
      <td>
       <p>
        삼양로92길 40
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        70
       </p>
      </td>
      <td>
       <p>
        송중동
       </p>
      </td>
      <td>
       <p>
        미아사거리역1번출구
       </p>
      </td>
      <td>
       <p>
        도봉로 50
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        71
       </p>
      </td>
      <td>
       <p>
        우이동
       </p>
      </td>
      <td>
       <p>
        솔밭근린공원 개방화장실
       </p>
      </td>
      <td>
       <p>
        삼양로 561
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        72
       </p>
      </td>
      <td>
       <p>
        인수동
       </p>
      </td>
      <td>
       <p>
        강북문화예술회관
       </p>
      </td>
      <td>
       <p>
        삼각산로 85
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        73
       </p>
      </td>
      <td>
       <p>
        번제1동
       </p>
      </td>
      <td>
       <p>
        번동북부시장 북부마트
       </p>
      </td>
      <td>
       <p>
        한천로123길 26
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        74
       </p>
      </td>
      <td>
       <p>
        번제1동
       </p>
      </td>
      <td>
       <p>
        수유역1번출구
       </p>
      </td>
      <td>
       <p>
        도봉로 338
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        75
       </p>
      </td>
      <td>
       <p>
        미아동
       </p>
      </td>
      <td>
       <p>
        미아동 복합청사
       </p>
      </td>
      <td>
       <p>
        솔매로49길 14
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        76
       </p>
      </td>
      <td>
       <p>
        수유3동
       </p>
      </td>
      <td>
       <p>
        강북구청 본관 입구
       </p>
      </td>
      <td>
       <p>
        도봉로89길 13
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        77
       </p>
      </td>
      <td>
       <p>
        수유1동
       </p>
      </td>
      <td>
       <p>
        수유1동 주민센터
       </p>
      </td>
      <td>
       <p>
        삼양로 299
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        78
       </p>
      </td>
      <td rowspan="9">
       <p>
        도봉
       </p>
       <p>
        (9)
       </p>
      </td>
      <td>
       <p>
        창3동
       </p>
      </td>
      <td>
       <p>
        창3동 주민센터
       </p>
      </td>
      <td>
       <p>
        덕릉로62길 89
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        79
       </p>
      </td>
      <td>
       <p>
        창1동
       </p>
      </td>
      <td>
       <p>
        염광교회
       </p>
      </td>
      <td>
       <p>
        도봉로120길 16
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        80
       </p>
      </td>
      <td>
       <p>
        창5동
       </p>
      </td>
      <td>
       <p>
        도봉구민회관
       </p>
      </td>
      <td>
       <p>
        도봉로 552
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        81
       </p>
      </td>
      <td>
       <p>
        창3동
       </p>
      </td>
      <td>
       <p>
        창동 도봉육아종합지원센터
       </p>
      </td>
      <td>
       <p>
        우이천로4길 24-5
       </p>
      </td>
      <td>
       <p>
        사용중지
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        82
       </p>
      </td>
      <td>
       <p>
        도봉2동
       </p>
      </td>
      <td>
       <p>
        도봉서원종합사회복지관
       </p>
      </td>
      <td>
       <p>
        마들로 668
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        83
       </p>
      </td>
      <td>
       <p>
        방학2동
       </p>
      </td>
      <td>
       <p>
        방아골종합사회복지관
       </p>
      </td>
      <td>
       <p>
        시루봉로17길 42
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        84
       </p>
      </td>
      <td>
       <p>
        창4동
       </p>
      </td>
      <td>
       <p>
        창동역1번출구
       </p>
      </td>
      <td>
       <p>
        마들로11길 77
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        85
       </p>
      </td>
      <td>
       <p>
        도봉1동
       </p>
      </td>
      <td>
       <p>
        도봉1동주민센터
       </p>
      </td>
      <td>
       <p>
        도봉로169나길 22
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        86
       </p>
      </td>
      <td>
       <p>
        창2동
       </p>
      </td>
      <td>
       <p>
        신창교회
       </p>
      </td>
      <td>
       <p>
        덕릉로 247
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        87
       </p>
      </td>
      <td rowspan="9">
       <p>
        노원
       </p>
       <p>
        (9)
       </p>
      </td>
      <td>
       <p>
        상계2동
       </p>
      </td>
      <td>
       <p>
        상계2동주민센터
       </p>
      </td>
      <td>
       <p>
        상계로 118
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        88
       </p>
      </td>
      <td>
       <p>
        월계2동
       </p>
      </td>
      <td>
       <p>
        월계문화정보도서관
       </p>
      </td>
      <td>
       <p>
        월계로 319
       </p>
      </td>
      <td>
       <p>
        임시철거
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        89
       </p>
      </td>
      <td>
       <p>
        상계3,4동
       </p>
      </td>
      <td>
       <p>
        상계3,4동 주민센터
       </p>
      </td>
      <td>
       <p>
        덕릉로 859
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        90
       </p>
      </td>
      <td>
       <p>
        상계5동
       </p>
      </td>
      <td>
       <p>
        상계역 자전거대여소
       </p>
      </td>
      <td>
       <p>
        상계로 190
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        91
       </p>
      </td>
      <td>
       <p>
        공릉2동
       </p>
      </td>
      <td>
       <p>
        공릉 청소년문화정보센터
       </p>
      </td>
      <td>
       <p>
        노원로1나길 10
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        92
       </p>
      </td>
      <td>
       <p>
        공릉1동
       </p>
      </td>
      <td>
       <p>
        공릉1동 주민센터
       </p>
      </td>
      <td>
       <p>
        동일로186길 3-24
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        93
       </p>
      </td>
      <td>
       <p>
        월계1동
       </p>
      </td>
      <td>
       <p>
        월계치안센터
       </p>
      </td>
      <td>
       <p>
        석계로 93
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        94
       </p>
      </td>
      <td>
       <p>
        공릉1동
       </p>
      </td>
      <td>
       <p>
        공릉종합사회복지관
       </p>
      </td>
      <td>
       <p>
        동일로 1127
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        95
       </p>
      </td>
      <td>
       <p>
        상계1동
       </p>
      </td>
      <td>
       <p>
        상계문화정보도서관
       </p>
      </td>
      <td>
       <p>
        동일로243길 57
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        96
       </p>
      </td>
      <td rowspan="10">
       <p>
        은평
       </p>
       <p>
        (10)
       </p>
      </td>
      <td>
       <p>
        갈현2동
       </p>
      </td>
      <td>
       <p>
        연신내 지구대
       </p>
      </td>
      <td>
       <p>
        갈현로 195
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        97
       </p>
      </td>
      <td>
       <p>
        불광2동
       </p>
      </td>
      <td>
       <p>
        불광보건분소
       </p>
      </td>
      <td>
       <p>
        연서로34길 11
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        98
       </p>
      </td>
      <td>
       <p>
        구산동
       </p>
      </td>
      <td>
       <p>
        구산동주민센터
       </p>
      </td>
      <td>
       <p>
        갈현로17길 10
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        99
       </p>
      </td>
      <td>
       <p>
        신사1동
       </p>
      </td>
      <td>
       <p>
        신사종합사회복지관
       </p>
      </td>
      <td>
       <p>
        은평로 38
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        100
       </p>
      </td>
      <td>
       <p>
        불광1동
       </p>
      </td>
      <td>
       <p>
        불광1동 치안센터
       </p>
      </td>
      <td>
       <p>
        불광로 129
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        101
       </p>
      </td>
      <td>
       <p>
        녹번동
       </p>
      </td>
      <td>
       <p>
        녹번 119안전센터
       </p>
      </td>
      <td>
       <p>
        은평로 245
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        102
       </p>
      </td>
      <td>
       <p>
        증산동
       </p>
      </td>
      <td>
       <p>
        증산 정보도서관
       </p>
      </td>
      <td>
       <p>
        증산로5길 6
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        103
       </p>
      </td>
      <td>
       <p>
        역촌동
       </p>
      </td>
      <td>
       <p>
        역촌동 주민센터
       </p>
      </td>
      <td>
       <p>
        연서로 59
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        104
       </p>
      </td>
      <td>
       <p>
        갈현1동
       </p>
      </td>
      <td>
       <p>
        갈현1동 주민센터
       </p>
      </td>
      <td>
       <p>
        갈현로 301
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        105
       </p>
      </td>
      <td>
       <p>
        갈현1동
       </p>
      </td>
      <td>
       <p>
        갈현청소년센터쉼쉼
       </p>
      </td>
      <td>
       <p>
        통일로89길 6-20
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        106
       </p>
      </td>
      <td rowspan="13">
       <p>
        서대문
       </p>
       <p>
        (13)
       </p>
      </td>
      <td>
       <p>
        홍제3동
       </p>
      </td>
      <td>
       <p>
        홍제3동 주민센터
       </p>
      </td>
      <td>
       <p>
        세검정로4길 32
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        107
       </p>
      </td>
      <td>
       <p>
        홍은2동
       </p>
      </td>
      <td>
       <p>
        홍은2동 주민센터
       </p>
      </td>
      <td>
       <p>
        모래내로 334
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        108
       </p>
      </td>
      <td>
       <p>
        연희동
       </p>
      </td>
      <td>
       <p>
        연희동주민센터
       </p>
      </td>
      <td>
       <p>
        연희로 189
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        109
       </p>
      </td>
      <td>
       <p>
        홍은1동
       </p>
      </td>
      <td>
       <p>
        홍은1동주민센터
       </p>
      </td>
      <td>
       <p>
        홍은중앙로 85
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        110
       </p>
      </td>
      <td>
       <p>
        연희동
       </p>
      </td>
      <td>
       <p>
        신한은행 연희동점
       </p>
      </td>
      <td>
       <p>
        연희맛로 28
       </p>
      </td>
      <td>
       <p>
        (운영시간 07:30 ~ 23:30)
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        111
       </p>
      </td>
      <td>
       <p>
        홍은2동
       </p>
      </td>
      <td>
       <p>
        서부제일교회 어린이도서관
       </p>
      </td>
      <td>
       <p>
        가좌로 154
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        112
       </p>
      </td>
      <td>
       <p>
        신촌동
       </p>
      </td>
      <td>
       <p>
        봉원교회 북카페 옆
       </p>
      </td>
      <td>
       <p>
        봉원사2길 13
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        113
       </p>
      </td>
      <td>
       <p>
        북아현동
       </p>
      </td>
      <td>
       <p>
        북아현동 주민센터
       </p>
      </td>
      <td>
       <p>
        북아현로 24
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        114
       </p>
      </td>
      <td>
       <p>
        충현동
       </p>
      </td>
      <td>
       <p>
        충현동주민센터
       </p>
      </td>
      <td>
       <p>
        북아현로22길 38
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        115
       </p>
      </td>
      <td>
       <p>
        남가좌2동
       </p>
      </td>
      <td>
       <p>
        청년누리
       </p>
      </td>
      <td>
       <p>
        증가로4길 8-45
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        116
       </p>
      </td>
      <td>
       <p>
        남가좌2동
       </p>
      </td>
      <td>
       <p>
        신한은행 명지대 지점
       </p>
      </td>
      <td>
       <p>
        거북골로 45(남가좌동)
       </p>
      </td>
      <td>
       <p>
        (운영시간 07:30 ~ 23:30)
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        117
       </p>
      </td>
      <td>
       <p>
        남가좌1동
       </p>
      </td>
      <td>
       <p>
        신한은행 남가좌동점
       </p>
      </td>
      <td>
       <p>
        수색로2길 36
       </p>
      </td>
      <td>
       <p>
        (운영시간 07:30 ~ 23:30)
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        118
       </p>
      </td>
      <td>
       <p>
        남가좌2동
       </p>
      </td>
      <td>
       <p>
        남가좌2동제2공영주차장
       </p>
      </td>
      <td>
       <p>
        명지대5길 10-8
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        119
       </p>
      </td>
      <td rowspan="15">
       <p>
        마포
       </p>
       <p>
        (15)
       </p>
      </td>
      <td>
       <p>
        망원2동
       </p>
      </td>
      <td>
       <p>
        망원2치안센터
       </p>
      </td>
      <td>
       <p>
        월드컵로31길 18
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        120
       </p>
      </td>
      <td>
       <p>
        서교동
       </p>
      </td>
      <td>
       <p>
        서현교회
       </p>
      </td>
      <td>
       <p>
        잔다리로7길 31
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        121
       </p>
      </td>
      <td>
       <p>
        신수동
       </p>
      </td>
      <td>
       <p>
        신수동주민센터
       </p>
      </td>
      <td>
       <p>
        독막로 192
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        122
       </p>
      </td>
      <td>
       <p>
        성산2동
       </p>
      </td>
      <td>
       <p>
        성산2동주민센터
       </p>
      </td>
      <td>
       <p>
        월드컵북로30길 22
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        123
       </p>
      </td>
      <td>
       <p>
        연남동
       </p>
      </td>
      <td>
       <p>
        연남동희망원룸주택
       </p>
      </td>
      <td>
       <p>
        성미산로17길 79
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        124
       </p>
      </td>
      <td>
       <p>
        상암동
       </p>
      </td>
      <td>
       <p>
        상암동 제1공영주차장
       </p>
      </td>
      <td>
       <p>
        성암로 197
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        125
       </p>
      </td>
      <td>
       <p>
        대흥동
       </p>
      </td>
      <td>
       <p>
        마포아트센터
       </p>
      </td>
      <td>
       <p>
        대흥로20길 28
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        126
       </p>
      </td>
      <td>
       <p>
        대흥동
       </p>
      </td>
      <td>
       <p>
        대흥동주민센터
       </p>
      </td>
      <td>
       <p>
        신촌로26길 10
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        127
       </p>
      </td>
      <td>
       <p>
        연남동
       </p>
      </td>
      <td>
       <p>
        연남동 주민커뮤니티센터
       </p>
      </td>
      <td>
       <p>
        동교로41길 36
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        128
       </p>
      </td>
      <td>
       <p>
        도화동
       </p>
      </td>
      <td>
       <p>
        도화동 주민센터
       </p>
      </td>
      <td>
       <p>
        도화길 37
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        129
       </p>
      </td>
      <td>
       <p>
        서교동
       </p>
      </td>
      <td>
       <p>
        서교동교회
       </p>
      </td>
      <td>
       <p>
        잔다리로6길 11
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        130
       </p>
      </td>
      <td>
       <p>
        성산1동
       </p>
      </td>
      <td>
       <p>
        성산1동주민센터
       </p>
      </td>
      <td>
       <p>
        성산로4길 15
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        131
       </p>
      </td>
      <td>
       <p>
        상암동
       </p>
      </td>
      <td>
       <p>
        상암동 주민센터후문
       </p>
      </td>
      <td>
       <p>
        매봉산로2길 16
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        132
       </p>
      </td>
      <td>
       <p>
        서강동
       </p>
      </td>
      <td>
       <p>
        서강동주민센터
       </p>
      </td>
      <td>
       <p>
        독막로 165
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        133
       </p>
      </td>
      <td>
       <p>
        서교동
       </p>
      </td>
      <td>
       <p>
        동교치안센터
       </p>
      </td>
      <td>
       <p>
        신촌로2안길 27
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        134
       </p>
      </td>
      <td rowspan="11">
       <p>
       </p>
       <p>
       </p>
       <p>
        양천
       </p>
       <p>
        (11)
       </p>
       <p>
       </p>
      </td>
      <td>
       <p>
        신정1동
       </p>
      </td>
      <td>
       <p>
        양천나눔누리센터
       </p>
      </td>
      <td>
       <p>
        중앙로 250
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        135
       </p>
      </td>
      <td>
       <p>
        목제4동
       </p>
      </td>
      <td>
       <p>
        목동실버복지문화센터
       </p>
      </td>
      <td>
       <p>
        목동중앙로3길 21
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        136
       </p>
      </td>
      <td>
       <p>
        신월3동
       </p>
      </td>
      <td>
       <p>
        신월3동주민센터
       </p>
      </td>
      <td>
       <p>
        남부순환로54길 5
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        137
       </p>
      </td>
      <td>
       <p>
        신정4동
       </p>
      </td>
      <td>
       <p>
        신정4동주민센터
       </p>
      </td>
      <td>
       <p>
        오목로34길 5
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        138
       </p>
      </td>
      <td>
       <p>
        목제2동
       </p>
      </td>
      <td>
       <p>
        목동문화체육센터
       </p>
      </td>
      <td>
       <p>
        목동중앙본로 73
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        139
       </p>
      </td>
      <td>
       <p>
        신월7동
       </p>
      </td>
      <td>
       <p>
        신월문화체육센터
       </p>
      </td>
      <td>
       <p>
        지양로 47
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        140
       </p>
      </td>
      <td>
       <p>
        신월5동
       </p>
      </td>
      <td>
       <p>
        신월5동주민센터
       </p>
      </td>
      <td>
       <p>
        화곡로4길 10
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        141
       </p>
      </td>
      <td>
       <p>
        신월4동
       </p>
      </td>
      <td>
       <p>
        신월4동주민센터
       </p>
      </td>
      <td>
       <p>
        오목로5길 34
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        142
       </p>
      </td>
      <td>
       <p>
        목3동
       </p>
      </td>
      <td>
       <p>
        목3동 주민센터
       </p>
      </td>
      <td>
       <p>
        목동중앙남로16나길 55
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        143
       </p>
      </td>
      <td>
       <p>
        목3동
       </p>
      </td>
      <td>
       <p>
        목동보건지소
       </p>
      </td>
      <td>
       <p>
        목동중앙본로7가길 11
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        144
       </p>
      </td>
      <td>
       <p>
        신월1동
       </p>
      </td>
      <td>
       <p>
        신월1동 청소년독서실
       </p>
      </td>
      <td>
       <p>
        남부순환로59길 8
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        145
       </p>
      </td>
      <td rowspan="14">
       <p>
        강서
       </p>
       <p>
        (14)
       </p>
      </td>
      <td>
       <p>
        화곡8동
       </p>
      </td>
      <td>
       <p>
        화곡8동 주민센터
       </p>
      </td>
      <td>
       <p>
        곰달래로25길 45
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        146
       </p>
      </td>
      <td>
       <p>
        화곡1동
       </p>
      </td>
      <td>
       <p>
        가로공원공영주차장1번출구
       </p>
      </td>
      <td>
       <p>
        가로공원로 189
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        147
       </p>
      </td>
      <td>
       <p>
        화곡6동
       </p>
      </td>
      <td>
       <p>
        화곡 6-1 공영주차장
       </p>
      </td>
      <td>
       <p>
        우장산로 114
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        148
       </p>
      </td>
      <td>
       <p>
        화곡3동
       </p>
      </td>
      <td>
       <p>
        화곡 3-1 공영주차장
       </p>
      </td>
      <td>
       <p>
        화곡로15길 40
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        149
       </p>
      </td>
      <td>
       <p>
        화곡1동
       </p>
      </td>
      <td>
       <p>
        화곡 1-1 공영주차장
       </p>
      </td>
      <td>
       <p>
        곰달래로15길 28
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        150
       </p>
      </td>
      <td>
       <p>
        우장산동
       </p>
      </td>
      <td>
       <p>
        내발산동 문화센터
       </p>
      </td>
      <td>
       <p>
        강서로52길 89
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        151
       </p>
      </td>
      <td>
       <p>
        화곡8동
       </p>
      </td>
      <td>
       <p>
        곰달래복지문화센터
       </p>
      </td>
      <td>
       <p>
        강서로5길 50
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        152
       </p>
      </td>
      <td>
       <p>
        화곡4동
       </p>
      </td>
      <td>
       <p>
        화곡4동 주민센터
       </p>
      </td>
      <td>
       <p>
        곰달래로57가길 26
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        153
       </p>
      </td>
      <td>
       <p>
        화곡본동
       </p>
      </td>
      <td>
       <p>
        볏골공원공원주차장
       </p>
      </td>
      <td>
       <p>
        까치산로4길 22
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        154
       </p>
      </td>
      <td>
       <p>
        공항동
       </p>
      </td>
      <td>
       <p>
        공항동 주민센터
       </p>
      </td>
      <td>
       <p>
        송정로 45
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        155
       </p>
      </td>
      <td>
       <p>
        발산1동
       </p>
      </td>
      <td>
       <p>
        발산1동주민센터
       </p>
      </td>
      <td>
       <p>
        강서로47길 54
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        156
       </p>
      </td>
      <td>
       <p>
        화곡2동
       </p>
      </td>
      <td>
       <p>
        화곡2동주민센터
       </p>
      </td>
      <td>
       <p>
        곰달래로37길 13
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        157
       </p>
      </td>
      <td>
       <p>
        방화3동
       </p>
      </td>
      <td>
       <p>
        길꽃어린이도서관
       </p>
      </td>
      <td>
       <p>
        금낭화로24길 5
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        158
       </p>
      </td>
      <td>
       <p>
        방화1동
       </p>
      </td>
      <td>
       <p>
        신방화역환승주차장
       </p>
      </td>
      <td>
       <p>
        마곡서1로 111-12
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        159
       </p>
      </td>
      <td rowspan="9">
       <p>
        구로
       </p>
       <p>
        (9)
       </p>
      </td>
      <td>
       <p>
        구로4동
       </p>
      </td>
      <td>
       <p>
        구로구 시설관리공단
       </p>
      </td>
      <td>
       <p>
        구로동로26길 54
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        160
       </p>
      </td>
      <td>
       <p>
        구로4동
       </p>
      </td>
      <td>
       <p>
        서울교통공사대림별관
       </p>
      </td>
      <td>
       <p>
        도림천로 352
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        161
       </p>
      </td>
      <td>
       <p>
        수궁동
       </p>
      </td>
      <td>
       <p>
        온수동 공동이용시설
       </p>
      </td>
      <td>
       <p>
        부일로1길 62
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        162
       </p>
      </td>
      <td>
       <p>
        구로5동
       </p>
      </td>
      <td>
       <p>
        구로역1번출구 NC백화점
       </p>
      </td>
      <td>
       <p>
        구로중앙로 174
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        163
       </p>
      </td>
      <td>
       <p>
        구로5동
       </p>
      </td>
      <td>
       <p>
        구로구민회관
       </p>
      </td>
      <td>
       <p>
        가마산로25길 21
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        164
       </p>
      </td>
      <td>
       <p>
        고척2동
       </p>
      </td>
      <td>
       <p>
        구로구민 체육센터
       </p>
      </td>
      <td>
       <p>
        고척로45길 39
       </p>
      </td>
      <td>
       <p>
        임시철거
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        165
       </p>
      </td>
      <td>
       <p>
        구로2동
       </p>
      </td>
      <td>
       <p>
        구로2동주민센터앞
       </p>
      </td>
      <td>
       <p>
        구로동로 141
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        166
       </p>
      </td>
      <td>
       <p>
        오류1동
       </p>
      </td>
      <td>
       <p>
        오류1동텃골공영주차장
       </p>
      </td>
      <td>
       <p>
        경인로15길 22
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        167
       </p>
      </td>
      <td>
       <p>
        가리봉동
       </p>
      </td>
      <td>
       <p>
        가리봉동주민센터
       </p>
      </td>
      <td>
       <p>
        우마2길 35
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        168
       </p>
      </td>
      <td rowspan="10">
       <p>
        금천
       </p>
       <p>
        (10)
       </p>
      </td>
      <td>
       <p>
        시흥1동
       </p>
      </td>
      <td>
       <p>
        금빛휘트니스센터
       </p>
      </td>
      <td>
       <p>
        금하로 668
       </p>
      </td>
      <td>
       <p>
        임시철거
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        169
       </p>
      </td>
      <td>
       <p>
        독산3동
       </p>
      </td>
      <td>
       <p>
        청춘삘딩
       </p>
      </td>
      <td>
       <p>
        시흥대로138길 10-11
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        170
       </p>
      </td>
      <td>
       <p>
        시흥2동
       </p>
      </td>
      <td>
       <p>
        신한은행 금천점
       </p>
      </td>
      <td>
       <p>
        금하로 747-1
       </p>
      </td>
      <td>
       <p>
        (운영시간 07:30 ~ 23:30)
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        171
       </p>
      </td>
      <td>
       <p>
        시흥4동
       </p>
      </td>
      <td>
       <p>
        시흥4동 주민센터
       </p>
      </td>
      <td>
       <p>
        독산로36길 14
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        172
       </p>
      </td>
      <td>
       <p>
        독산4동
       </p>
      </td>
      <td>
       <p>
        금천호암노인복지관
       </p>
      </td>
      <td>
       <p>
        독산로72길 86-5
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        173
       </p>
      </td>
      <td>
       <p>
        시흥3동
       </p>
      </td>
      <td>
       <p>
        시흥3동 주민센터
       </p>
      </td>
      <td>
       <p>
        시흥대로18길 40
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        174
       </p>
      </td>
      <td>
       <p>
        독산1동
       </p>
      </td>
      <td>
       <p>
        독산1동주민센터
       </p>
      </td>
      <td>
       <p>
        시흥대로123길 11
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        175
       </p>
      </td>
      <td>
       <p>
        시흥1동
       </p>
      </td>
      <td>
       <p>
        금천구청
       </p>
      </td>
      <td>
       <p>
        시흥대로73길 70
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        176
       </p>
      </td>
      <td>
       <p>
        독산2동
       </p>
      </td>
      <td>
       <p>
        독산2동주민센터
       </p>
      </td>
      <td>
       <p>
        독산로 179
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        177
       </p>
      </td>
      <td>
       <p>
        시흥3동
       </p>
      </td>
      <td>
       <p>
        신한은행 디지털라운지(시흥대로)
       </p>
      </td>
      <td>
       <p>
        시흥대로 97
       </p>
      </td>
      <td>
       <p>
        (운영시간 07:30 ~ 23:30)
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        178
       </p>
      </td>
      <td rowspan="12">
       <p>
        영등포
       </p>
       <p>
        (12)
       </p>
      </td>
      <td>
       <p>
        당산2동
       </p>
      </td>
      <td>
       <p>
        영등포평생학습관
       </p>
      </td>
      <td>
       <p>
        버드나루로15길 10
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        179
       </p>
      </td>
      <td>
       <p>
        영등포본동
       </p>
      </td>
      <td>
       <p>
        영등포본동주민센터
       </p>
      </td>
      <td>
       <p>
        신길로61길 17
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        180
       </p>
      </td>
      <td>
       <p>
        신길4동
       </p>
      </td>
      <td>
       <p>
        신길4동1동1마을공영주차장
       </p>
      </td>
      <td>
       <p>
        신길로40길 5
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        181
       </p>
      </td>
      <td>
       <p>
        신길7동
       </p>
      </td>
      <td>
       <p>
        신길7동 주민센터
       </p>
      </td>
      <td>
       <p>
        여의대방로43길 10
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        182
       </p>
      </td>
      <td>
       <p>
        도림동
       </p>
      </td>
      <td>
       <p>
        도림동 주민센터
       </p>
      </td>
      <td>
       <p>
        도영로7길 10
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        183
       </p>
      </td>
      <td>
       <p>
        대림2동
       </p>
      </td>
      <td>
       <p>
        다사랑어린이공원
       </p>
      </td>
      <td>
       <p>
        대림로23가길 5
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        184
       </p>
      </td>
      <td>
       <p>
        신길1동
       </p>
      </td>
      <td>
       <p>
        신길1동 주민센터
       </p>
      </td>
      <td>
       <p>
        영등포로84길 24-5
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        185
       </p>
      </td>
      <td>
       <p>
        대림3동
       </p>
      </td>
      <td>
       <p>
        대림도서관
       </p>
      </td>
      <td>
       <p>
        도신로 27
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        186
       </p>
      </td>
      <td>
       <p>
        신길5동
       </p>
      </td>
      <td>
       <p>
        영등포 제1스포츠센터
       </p>
      </td>
      <td>
       <p>
        신풍로 1
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        187
       </p>
      </td>
      <td>
       <p>
        당산1동
       </p>
      </td>
      <td>
       <p>
        그린케어센터
       </p>
      </td>
      <td>
       <p>
        당산로29길 9
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        188
       </p>
      </td>
      <td>
       <p>
        영등포본동
       </p>
      </td>
      <td>
       <p>
        영등포청소년상담복지센터
       </p>
      </td>
      <td>
       <p>
        도영로22길 36
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        189
       </p>
      </td>
      <td>
       <p>
        신길6동
       </p>
      </td>
      <td>
       <p>
        신길6동 복지관
       </p>
      </td>
      <td>
       <p>
        대방천로 193
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        190
       </p>
      </td>
      <td rowspan="14">
       <p>
        동작
       </p>
       <p>
        (14)
       </p>
      </td>
      <td>
       <p>
        노량진1동
       </p>
      </td>
      <td>
       <p>
        순만빌딩
       </p>
      </td>
      <td>
       <p>
        노량진로 169
       </p>
      </td>
      <td>
       <p>
        (평일 07:00 ~ 22:30 /
        <br/>
        주말 07:00 ~ 18:30)
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        191
       </p>
      </td>
      <td>
       <p>
        사당5동
       </p>
      </td>
      <td>
       <p>
        사당문화회관
       </p>
      </td>
      <td>
       <p>
        사당로8길 9
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        192
       </p>
      </td>
      <td>
       <p>
        상도1동
       </p>
      </td>
      <td>
       <p>
        상도1동주민센터
       </p>
      </td>
      <td>
       <p>
        상도로53길 9
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        193
       </p>
      </td>
      <td>
       <p>
        상도3동
       </p>
      </td>
      <td>
       <p>
        예그리나주택
       </p>
      </td>
      <td>
       <p>
        국사봉8길 47
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        194
       </p>
      </td>
      <td>
       <p>
        노량진1동
       </p>
      </td>
      <td>
       <p>
        강남교회 교육관
       </p>
      </td>
      <td>
       <p>
        만양로 76
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        195
       </p>
      </td>
      <td>
       <p>
        상도2동
       </p>
      </td>
      <td>
       <p>
        동작 청소년문화의 집
       </p>
      </td>
      <td>
       <p>
        상도로15바길 5
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        196
       </p>
      </td>
      <td>
       <p>
        노량진2동
       </p>
      </td>
      <td>
       <p>
        국민은행 동작구청지점
       </p>
      </td>
      <td>
       <p>
        장승배기로 161
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        197
       </p>
      </td>
      <td>
       <p>
        사당1동
       </p>
      </td>
      <td>
       <p>
        사당노인종합복지관
       </p>
      </td>
      <td>
       <p>
        남부순환로 2081
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        198
       </p>
      </td>
      <td>
       <p>
        상도2동
       </p>
      </td>
      <td>
       <p>
        스페이스살림
       </p>
      </td>
      <td>
       <p>
        노량진로 10
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        199
       </p>
      </td>
      <td>
       <p>
        상도3동
       </p>
      </td>
      <td>
       <p>
        상도3동 주민센터
       </p>
      </td>
      <td>
       <p>
        성대로2길 11
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        200
       </p>
      </td>
      <td>
       <p>
        신대장1동
       </p>
      </td>
      <td>
       <p>
        신대방해피점
       </p>
      </td>
      <td>
       <p>
        신대방1나길 26
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        201
       </p>
      </td>
      <td>
       <p>
        사당1동
       </p>
      </td>
      <td>
       <p>
        현대오일뱅크 사당셀프점
       </p>
      </td>
      <td>
       <p>
        동작대로 73
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        202
       </p>
      </td>
      <td>
       <p>
        상도1동
       </p>
      </td>
      <td>
       <p>
        신한은행 숭실대역 지점
       </p>
      </td>
      <td>
       <p>
        상도로37길 76 (상도동)
       </p>
      </td>
      <td>
       <p>
        (운영시간 07:30 ~ 23:30)
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        203
       </p>
      </td>
      <td>
       <p>
        사당3동
       </p>
      </td>
      <td>
       <p>
        사당종합체육관
       </p>
      </td>
      <td>
       <p>
        사당로27길 232
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        204
       </p>
      </td>
      <td rowspan="16">
       <p>
        관악
       </p>
       <p>
        (16)
       </p>
      </td>
      <td>
       <p>
        서원동
       </p>
      </td>
      <td>
       <p>
        서원동 주민센터
       </p>
      </td>
      <td>
       <p>
        신림로 282
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        205
       </p>
      </td>
      <td>
       <p>
        대학동
       </p>
      </td>
      <td>
       <p>
        관악청소년회관
       </p>
      </td>
      <td>
       <p>
        신림로23길 17
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        206
       </p>
      </td>
      <td>
       <p>
        인헌동
       </p>
      </td>
      <td>
       <p>
        인헌동주민센터
       </p>
      </td>
      <td>
       <p>
        남부순환로246가길20
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        207
       </p>
      </td>
      <td>
       <p>
        대학동
       </p>
      </td>
      <td>
       <p>
        대학동치안센터
       </p>
      </td>
      <td>
       <p>
        대학길 48
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        208
       </p>
      </td>
      <td>
       <p>
        남현동
       </p>
      </td>
      <td>
       <p>
        남현동 주민센터
       </p>
      </td>
      <td>
       <p>
        남현1가길 29
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        209
       </p>
      </td>
      <td>
       <p>
        청룡동
       </p>
      </td>
      <td>
       <p>
        청룡동 주민센터
       </p>
      </td>
      <td>
       <p>
        쑥고개로 44
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        210
       </p>
      </td>
      <td>
       <p>
        조원동
       </p>
      </td>
      <td>
       <p>
        조원동주민센터
       </p>
      </td>
      <td>
       <p>
        조원로12길 25
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        211
       </p>
      </td>
      <td>
       <p>
        신사동
       </p>
      </td>
      <td>
       <p>
        신사동자치회관
       </p>
      </td>
      <td>
       <p>
        조원로 151-1
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        212
       </p>
      </td>
      <td>
       <p>
        행운동
       </p>
      </td>
      <td>
       <p>
        행운동주민센터
       </p>
      </td>
      <td>
       <p>
        행운1길 43
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        213
       </p>
      </td>
      <td>
       <p>
        청룡동
       </p>
      </td>
      <td>
       <p>
        관악구청
       </p>
      </td>
      <td>
       <p>
        관악로 145
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        214
       </p>
      </td>
      <td>
       <p>
        대학동
       </p>
      </td>
      <td>
       <p>
        신림여성교실
       </p>
      </td>
      <td>
       <p>
        대학길 64
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        215
       </p>
      </td>
      <td>
       <p>
        미성동
       </p>
      </td>
      <td>
       <p>
        현대오일뱅크 관악셀프점
       </p>
      </td>
      <td>
       <p>
        남부순환로 1520
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        216
       </p>
      </td>
      <td>
       <p>
        미성동
       </p>
      </td>
      <td>
       <p>
        미성체육관
       </p>
      </td>
      <td>
       <p>
        난우16길 37
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        217
       </p>
      </td>
      <td>
       <p>
        중앙동
       </p>
      </td>
      <td>
       <p>
        신한은행 (구)봉천서 지점
       </p>
      </td>
      <td>
       <p>
        은천로 110 (봉천동)
       </p>
      </td>
      <td>
       <p>
        (운영시간 07:30 ~ 23:30)
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        218
       </p>
      </td>
      <td>
       <p>
        대학동
       </p>
      </td>
      <td>
       <p>
        신한은행 신림대학동 지점
       </p>
      </td>
      <td>
       <p>
        호암로26길 58
       </p>
      </td>
      <td>
       <p>
        (운영시간 07:30 ~ 23:30)
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        219
       </p>
      </td>
      <td>
       <p>
        서원동
       </p>
      </td>
      <td>
       <p>
        신한은행 신림역
       </p>
      </td>
      <td>
       <p>
        남부순환로 1590
       </p>
      </td>
      <td>
       <p>
        (운영시간 07:30 ~ 23:30)
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        220
       </p>
      </td>
      <td rowspan="7">
       <p>
        서초
       </p>
       <p>
        (7)
       </p>
      </td>
      <td>
       <p>
        양재2동
       </p>
      </td>
      <td>
       <p>
        양재2동주민센터
       </p>
      </td>
      <td>
       <p>
        강남대로12길 44
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        221
       </p>
      </td>
      <td>
       <p>
        반포1동
       </p>
      </td>
      <td>
       <p>
        언구비 공영주차장
       </p>
      </td>
      <td>
       <p>
        강남대로83길 55
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        222
       </p>
      </td>
      <td>
       <p>
        방배4동
       </p>
      </td>
      <td>
       <p>
        방배열린문화센터
       </p>
      </td>
      <td>
       <p>
        방배로173
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        223
       </p>
      </td>
      <td>
       <p>
        방배2동
       </p>
      </td>
      <td>
       <p>
        방배2동 주민센터
       </p>
      </td>
      <td>
       <p>
        청두곶길 36
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        224
       </p>
      </td>
      <td>
       <p>
        양재2동
       </p>
      </td>
      <td>
       <p>
        서초꿈나무라이온스보금자리
       </p>
      </td>
      <td>
       <p>
        언남10길 48
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        225
       </p>
      </td>
      <td>
       <p>
        양재1동
       </p>
      </td>
      <td>
       <p>
        양재1동 반딧불센터
       </p>
      </td>
      <td>
       <p>
        양재천로 125-10
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        226
       </p>
      </td>
      <td>
       <p>
        양재1동
       </p>
      </td>
      <td>
       <p>
        양재1동 민원분소
       </p>
      </td>
      <td>
       <p>
        남부순환로 2610
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        227
       </p>
      </td>
      <td rowspan="9">
       <p>
        강남
       </p>
       <p>
        (9)
       </p>
      </td>
      <td>
       <p>
        대치2동
       </p>
      </td>
      <td>
       <p>
        대치2동 주민센터
       </p>
      </td>
      <td>
       <p>
        영동대로65길 24
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        228
       </p>
      </td>
      <td>
       <p>
        도곡1동
       </p>
      </td>
      <td>
       <p>
        도곡1동 주민센터
       </p>
      </td>
      <td>
       <p>
        도곡로18길 57
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        229
       </p>
      </td>
      <td>
       <p>
        논현1동
       </p>
      </td>
      <td>
       <p>
        논현1동주민센터
       </p>
      </td>
      <td>
       <p>
        학동로20길 25
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        230
       </p>
      </td>
      <td>
       <p>
        대치4동
       </p>
      </td>
      <td>
       <p>
        대치4동 주민센터
       </p>
      </td>
      <td>
       <p>
        도곡로77길 23
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        231
       </p>
      </td>
      <td>
       <p>
        도곡2동
       </p>
      </td>
      <td>
       <p>
        도곡2동주민센터
       </p>
      </td>
      <td>
       <p>
        남부순환로378(34-9)
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        232
       </p>
      </td>
      <td>
       <p>
        일원1동
       </p>
      </td>
      <td>
       <p>
        일원1동주민센터
       </p>
      </td>
      <td>
       <p>
        양재대로55길 14
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        233
       </p>
      </td>
      <td>
       <p>
        신사동
       </p>
      </td>
      <td>
       <p>
        현대오일뱅크 신사현대점
       </p>
      </td>
      <td>
       <p>
        도산대로 163
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        234
       </p>
      </td>
      <td>
       <p>
        역삼2동
       </p>
      </td>
      <td>
       <p>
        역삼청소년수련관
       </p>
      </td>
      <td>
       <p>
        논현로64길 7
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        235
       </p>
      </td>
      <td>
       <p>
        역삼1동
       </p>
      </td>
      <td>
       <p>
        역삼1동 주민센터
       </p>
      </td>
      <td>
       <p>
        역삼로7길 16
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        236
       </p>
      </td>
      <td rowspan="11">
       <p>
        송파
       </p>
       <p>
        (11)
       </p>
      </td>
      <td>
       <p>
        장지동
       </p>
      </td>
      <td>
       <p>
        장지동 주민센터
       </p>
      </td>
      <td>
       <p>
        새말로19길 6
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        237
       </p>
      </td>
      <td>
       <p>
        삼전동
       </p>
      </td>
      <td>
       <p>
        삼전지구대
       </p>
      </td>
      <td>
       <p>
        백제고분로 238
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        238
       </p>
      </td>
      <td>
       <p>
        거여2동
       </p>
      </td>
      <td>
       <p>
        거여2동주민센터
       </p>
      </td>
      <td>
       <p>
        거마로2길 19
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        239
       </p>
      </td>
      <td>
       <p>
        마천2동
       </p>
      </td>
      <td>
       <p>
        마천2동주민센터
       </p>
      </td>
      <td>
       <p>
        마천로 287
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        240
       </p>
      </td>
      <td>
       <p>
        석촌동
       </p>
      </td>
      <td>
       <p>
        석촌동주민센터
       </p>
      </td>
      <td>
       <p>
        백제고분로37길 16
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        241
       </p>
      </td>
      <td>
       <p>
        삼전동
       </p>
      </td>
      <td>
       <p>
        송파노인종합복지관
       </p>
      </td>
      <td>
       <p>
        백제고분로32길 41
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        242
       </p>
      </td>
      <td>
       <p>
        방이1동
       </p>
      </td>
      <td>
       <p>
        여의도 순복음송파교회
       </p>
      </td>
      <td>
       <p>
        마천로 17
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        243
       </p>
      </td>
      <td>
       <p>
        송파1동
       </p>
      </td>
      <td>
       <p>
        송파여성 문화회관
       </p>
      </td>
      <td>
       <p>
        백제고분로42길 5
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        244
       </p>
      </td>
      <td>
       <p>
        거여1동
       </p>
      </td>
      <td>
       <p>
        거여1동주민센터
       </p>
      </td>
      <td>
       <p>
        오금로53길 32
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        245
       </p>
      </td>
      <td>
       <p>
        문정1동
       </p>
      </td>
      <td>
       <p>
        문정1동주민센터
       </p>
      </td>
      <td>
       <p>
        동남로 116
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        246
       </p>
      </td>
      <td>
       <p>
        가락2동
       </p>
      </td>
      <td>
       <p>
        가락2동치안센터
       </p>
      </td>
      <td>
       <p>
        오금로46길 55
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        247
       </p>
      </td>
      <td rowspan="11">
       <p>
        강동
       </p>
       <p>
        (11)
       </p>
      </td>
      <td>
       <p>
        성내3동
       </p>
      </td>
      <td>
       <p>
        둔촌역전통시장공영주차장
       </p>
      </td>
      <td>
       <p>
        풍성로54길 19
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        248
       </p>
      </td>
      <td>
       <p>
        천호2동
       </p>
      </td>
      <td>
       <p>
        2001아울렛천호점
       </p>
      </td>
      <td>
       <p>
        구천면로 189
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        249
       </p>
      </td>
      <td>
       <p>
        성내1동
       </p>
      </td>
      <td>
       <p>
        성내1동 주민센터
       </p>
      </td>
      <td>
       <p>
        성내로 13
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        250
       </p>
      </td>
      <td>
       <p>
        암사2동
       </p>
      </td>
      <td>
       <p>
        암사2동 주민센터
       </p>
      </td>
      <td>
       <p>
        상암로3길 28
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        251
       </p>
      </td>
      <td>
       <p>
        천호1동
       </p>
      </td>
      <td>
       <p>
        강동구민회관
       </p>
      </td>
      <td>
       <p>
        상암로 168
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        252
       </p>
      </td>
      <td>
       <p>
        성내2동
       </p>
      </td>
      <td>
       <p>
        구립안말경로당
       </p>
      </td>
      <td>
       <p>
        풍성로45길 11
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        253
       </p>
      </td>
      <td>
       <p>
        명일1동
       </p>
      </td>
      <td>
       <p>
        강동구 평생학습관
       </p>
      </td>
      <td>
       <p>
        구천면로 395
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        254
       </p>
      </td>
      <td>
       <p>
        암사1동
       </p>
      </td>
      <td>
       <p>
        강동구립암사도서관
       </p>
      </td>
      <td>
       <p>
        고덕로20길 42
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        255
       </p>
      </td>
      <td>
       <p>
        천호2동
       </p>
      </td>
      <td>
       <p>
        강동구립해공도서관
       </p>
      </td>
      <td>
       <p>
        올림픽로 702해공공원
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        256
       </p>
      </td>
      <td>
       <p>
        길동
       </p>
      </td>
      <td>
       <p>
        길동주민센터
       </p>
      </td>
      <td>
       <p>
        길동 228-10
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
     <tr>
      <td>
       <p>
        257
       </p>
      </td>
      <td>
       <p>
        천호2동
       </p>
      </td>
      <td>
       <p>
        천호청소년문화의집
       </p>
      </td>
      <td>
       <p>
        천중로 61
       </p>
      </td>
      <td>
       <p>
       </p>
      </td>
     </tr>
    </tbody>
   </table>
   <p>
   </p>`,
  },
];

const Policy2 = () => {
  const [modal, setModal] = useState(false);
  const [item, setItem] = useState({
    src: '',
    title: '',
    link: '',
    content: '',
  });

  const toggle = () => setModal(!modal);

  const ContentModal = () => {
    console.log(item);
    return (
      <Modal
        isOpen={modal}
        toggle={toggle}
        size='lg'
      >
        <ModalHeader toggle={toggle}>{item.title}</ModalHeader>
        <ModalBody>
          <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
        </ModalBody>
      </Modal>
    );
  };

  const onClickTitleButton = (e) => {
    setItem(items[e.target.dataset.i]);
    console.log(item);
    toggle();
  };

  return (
    <div className='content-wrap'>
      <div className='rec_center2'>
        Policy
        <div className='side2'>
          <div className='sidebar2'>
            {policy.map((menu, index) => {
              return (
                <NavLink
                  style={{ textDecoration: 'none' }}
                  to={menu.path}
                  key={index}
                >
                  <SideBarItem2 menu={menu} />
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
      <div className='policy2_content'>
        <Table
          striped
          className='policy2_table'
        >
          <thead>
            <tr>
              <th>#</th>
              <th>제목</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => {
              return (
                <tr>
                  <th scope='row'>{i + 1}</th>
                  <td>
                    <button
                      onClick={onClickTitleButton}
                      className='policy2-title-button'
                      data-i={i}
                    >
                      {item.title}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <ContentModal />
    </div>
  );
};

export default Policy2;
