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
`;

export const DayCell = styled.td<DayCellProps>`
  color: ${({ isSunday }) => (isSunday ? 'gray' : 'inherit')};
`;

export const StudentName = styled.td`
  color: gray;
  font-weight: bold;
  font-size: 13px;
`;
