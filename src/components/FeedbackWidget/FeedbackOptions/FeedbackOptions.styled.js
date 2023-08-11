import { styled } from 'styled-components';

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0 10px 0;
`;

export const Btn = styled.button`
  width: 80px;
  padding: 15px 15px;
  color: #fff;
  border-radius: 5px;
  background-color: #f04677;
  &:hover,
  :focus {
    background-color: #ce3d64;
  }
`;
