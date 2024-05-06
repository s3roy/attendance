import styled from 'styled-components';

// Define interface for DayCell props
interface DayCellProps {
  isSunday: boolean;
}

export const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 0px 14px rgba(0.1, 0.1, 0.1, 0.1);
  margin: 2rem;
  overflow-x: auto;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 4rem;
`;

export const AttendanceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;

  th,
  td {
    padding: 8px 16px;
    text-align: center;
    border: 1px solid #ddd;
    height: 25px;
  }

  th {
    background-color: white;
    font-weight: bold;
  }

  tr:nth-child(2n + 1) {
    background-color: #f5f5f5;
  }

  thead tr th:first-child,
  tbody tr td:first-child {
    width: 5em;
    min-width: 5em;
    max-width: 5em;
    word-break: keep-all;
  }

  .editable {
    padding: 0;
  }
`;

export const DayCell = styled.td<DayCellProps>`
  color: ${({ isSunday }) => (isSunday ? 'gray' : 'inherit')};
`;

export const StudentName = styled.td`
  color: gray;
  font-weight: bold;
  font-size: 13px;
`;

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  background-color: #fff;
`;

export const Button = styled.button`
  padding: 15px 20px;
  border: none;
  border-radius: 4px;
  width: 10rem;
  margin-left: 1.5rem;
  margin-top: 1rem;
  font-weight: bold;
  cursor: pointer;
  color: #fff;
  background-color: ${(props) => props.color || '#337ab7'};
  &:hover {
    opacity: 0.8;
  }
`;
