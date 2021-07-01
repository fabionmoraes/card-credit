import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  height: 200px;
  flex-direction: column;
  border-radius: 4px;
  position: relative;
`;

export const Number = styled.Text`
  position: absolute;
  width: 100%;
  top: 70px;
  font-size: 24px;
  left: 0;
  text-align: center;
  color: #eee;
`;

export const Name = styled.Text`
  position: absolute;
  bottom: 24px;
  left: 18px;
  color: #eee;
  font-size: 13px;
  text-transform: uppercase;
`;

export const MonthYear = styled.Text`
  position: absolute;
  bottom: 42px;
  right: 18px;
  color: #eee;
  font-size: 10px;
  text-transform: uppercase;
`;

export const Expiry = styled.Text`
  position: absolute;
  bottom: 20px;
  right: 18px;
  color: #eee;
  font-size: 18px;
  text-transform: uppercase;
`;

export const Validate = styled.Text`
  position: absolute;
  bottom: 26px;
  right: 80px;
  color: #eee;
  font-size: 8px;
`;

export const Code = styled.Text`
  position: absolute;
  top: 83px;
  right: 22px;
  color: #000;
  font-size: 15px;
`;
