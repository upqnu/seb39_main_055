import styled from "styled-components";

import { InteractiveProps } from "./InteractiveImage";

type LabelProps = Pick<InteractiveProps, "hoverColor">;

export const SbLabel = styled.label`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const SP = styled.p<LabelProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  color: rgba(0, 0, 0, 0);
  font-size: 13px;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0);
  transition: 600ms all;

  &:hover {
    color: white;
    background-color: ${({ hoverColor }) => hoverColor};
  }
`;

export const SbButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: white;
  border: 0;
  padding: 0;
`;

export const SImg = styled.img`
  object-fit: cover;
  max-height: 100%;
  clip-path: inset(1px round 5px);
`;
