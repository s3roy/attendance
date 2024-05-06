import styled from 'styled-components';

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

export const Label = styled.label`
  font-weight: bold;
  color: #333;
  margin-right: 10px;
`;

export const Select = styled.select`
  padding: 12px 24px;
  border-radius: 4px;
  border: 1px solid #ccc;
  cursor: pointer;
  font-size: 16px;
  color: gray;
  background-color: #f7f7f7;
  width: 16rem;
  margin-top: 1rem;

  &:focus {
    border-color: #0066ff;
    outline: none;
  }
`;

export const Option = styled.option``;
