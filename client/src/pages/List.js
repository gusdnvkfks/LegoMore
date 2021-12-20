import Header1 from "../components/Header1";
import LogoImage from "../components/Logo";
import Nav from "../components/Nav";
import mockupimage from "../mockup/1.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./List.css";

const GoodsImg = styled.img`
  width: 210px;
  height: 210px;
  margin: 0.5rem;
  border: 0.5px solid rgb(238, 238, 238);
  object-fit: cover;
`;

const List = () => {
  //Header1, Header2에서 props로 상품정보 가져와야한다. 그리고 map함수 사용해야.
  return (
    <div>
      <Header1 />
      <LogoImage />
      <Nav />
      <div>
        <div className="list-title">레고 중고거래 매물</div>

        <Link to="/goods/detail">
          <div className="item">
            <GoodsImg src={mockupimage} alt="" />
            {/* src를 props로 가져와야*/}
            <ul>
              <li>
                <span>상품</span>
                <span>레고 나홀로집에</span>
                {/* 상품이 뭔지 props로 받아서 가져와야한다 {props...}*/}
              </li>
              <li>
                <span>가격</span>
                <span>50,000</span>
                {/* 가격을 props로 받아서 가져와야한다 props... */}
              </li>
            </ul>
          </div>
        </Link>
        {/* 이걸 컴포넌트로 할 필요가 있을까? */}
      </div>
    </div>
  );
};

export default List;
