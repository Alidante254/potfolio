import { styled } from "styled-components";

export const TransparentBg = styled.div`
  height: auto;
  width: 100%;
  padding: 5vh 0vw;
  color: white;
  background-color: rgba(7, 134, 172, 0.884);
  & span {
    color: white;
    border-color: white;
    margin: 20px;
  }
  & p {
      padding: 0 20px;    
  }
  & hr {
    background-color: white;
    height: 5px;
    width: 2vw;
    margin: 0;
  }
  &:hover hr {
    width: 7vw;
  }
`;
