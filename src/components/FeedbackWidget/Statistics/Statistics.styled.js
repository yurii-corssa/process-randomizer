import { styled } from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  padding: 10px 0 10px 0;
`;

export const StatsItem = styled.li`
  width: calc(100% / 3);
  text-align: center;
  border-left: 1px solid #ebebeb;
`;

export const TotalItem = styled.li`
  width: calc(100% / 2);
  text-align: center;
  border-left: 1px solid #ebebeb;
`;

export const ItemLabel = styled.span`
  display: block;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 11px;
  letter-spacing: 1px;
  color: #95989a;
`;

export const ItemValue = styled.span`
  display: block;
  font-weight: 700;
  font-size: 20px;
`;
