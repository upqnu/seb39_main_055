import { SetStateAction, useState } from "react";
import { CgChevronRight } from "react-icons/cg";
import styled, { css } from "styled-components";

import { mobile, tablet } from "../../../assets";
import pickExample from "../../../assets/images/PickPage/pickExample.png";
import { data } from "./PickData";
import SideText from "./SideText";

const SContainer = styled.div`
  font-family: "ONE-Mobile-Regular";
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;

  overflow-y: hidden;
  cursor: pointer;

  ${mobile(css`
    flex-direction: column;
    align-items: center;
    height: 610px;
    overflow-x: hidden;
  `)}

  @media screen and (max-width: 1110px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    flex-wrap: wrap;
  }
`;

const STextContainer = styled.div`
  width: 40%;
  display: flex;

  @media screen and (max-width: 1110px) {
    flex-direction: row;
    justify-content: center;
    padding-right: 10%;
    align-items: center;
    height: auto;
    width: 100%;
    flex-wrap: wrap;
  }
  ${mobile(css`
    flex-wrap: wrap;
    width: auto;
    height: 10%;
    padding: 0px;
  `)}
`;

const SContents = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: auto;
  width: 50%;
  gap: 15px;

  ${mobile(css`
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `)}

  @media screen and (max-width: 1110px) {
    flex-direction: column;
  }
`;

const SSideContents = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  height: auto;
  width: 20%;

  @media screen and (max-width: 1110px) {
    height: auto;
    flex-direction: row;
    margin-left: 30px;
  }

  ${mobile(css`
    flex-direction: row;
    height: 100px;
    margin: 0px;
  `)}
  & > img {
    :hover {
      opacity: 0.7;
      transition: 0.3s ease-out;
    }

    :not(:hover) {
      transition: 0.3s ease-out;
    }
    ${mobile(css`
      widht: 100%;
      height: 100px;
    `)}
  }
`;

const SUserPickContents = styled.span`
  width: 565px;
  height: 565px;
  position: relative;
  align-items: center;

  & > img {
    widht: 565px;
    height: 565px;
    object-fit: contain;

    :hover {
      opacity: 0.7;
      transition: 0.3s ease-out;
    }
  
    :not(:hover) {
      transition: 0.3s ease-out;
    }
    
    ${mobile(css`
      width: 100%;
      height: 350px;
      // margin: 0% 8.7%;
    `)}
    `;

const SContentsInfo = styled.div`
  font-size: 30px;
  line-height: 42px;
  position: absolute;
  top: 78%;
  left: 8%;

  // :hover {
  //   opacity: 0.8;
  // }
  & > a {
    color: #ffff;
  }

  ${mobile(css`
    top: 46%;
    left: 24%;
    font-size: 20px;
    line-height: 30px;
  `)}
`;

const SecondTextLine = styled.a`
  color: #ffff;
  display: flex;
  align-items: center;
`;

const Pick = () => {
  const [crrImg, setCrrImg] = useState(data[1]); // 바뀔 사진의데이터

  const handleOnChange = (e: any) => {
    setCrrImg(e.target.value);
  };

  console.log(data);
  const [imgIdx, setImgIdx] = useState(0);
  return (
    <SContainer>
      <STextContainer>
        <SideText />
      </STextContainer>
      <SContents>
        <SSideContents>
          <img
            onClick={() => setImgIdx(0)}
            alt="hand"
            src="https://user-images.githubusercontent.com/104320234/189981170-e4ceda7e-b5ff-4de1-8791-be0679027363.png"
          />
          <img
            onClick={() => setImgIdx(1)}
            alt="ktx"
            src="https://user-images.githubusercontent.com/104320234/190197236-2c14cd20-1867-4562-a249-abe026dcc096.png"
          />
          <img
            onClick={() => setImgIdx(2)}
            alt="airplane"
            src="https://user-images.githubusercontent.com/104320234/190197670-8d50fc24-c298-449c-9bae-cd69a3c73e46.png"
          />
        </SSideContents>
        <SUserPickContents>
          {/* {crrImg} */}
          <img alt="" src={data[imgIdx].image} onChange={handleOnChange} />
          <SContentsInfo>
            <a onChange={handleOnChange} href={data[imgIdx].link}>
              {data[imgIdx].textLine1}
            </a>
            <SecondTextLine onChange={handleOnChange} href={data[imgIdx].link}>
              {data[imgIdx].textLine2}
              <CgChevronRight size={40} />
            </SecondTextLine>
          </SContentsInfo>
        </SUserPickContents>
      </SContents>
    </SContainer>
  );
};

export default Pick;
