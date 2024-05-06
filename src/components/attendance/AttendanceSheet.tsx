import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import {
  AttendanceTable,
  Card,
  DayCell,
  StudentName,
} from './StyledAttendance';

interface StudentAttendance {
  name: string;
  attendance: string[];
}

interface AttendanceSheetProps {
  data: StudentAttendance[];
  days: Date[];
  className: string | null;
  section: string | null;
  session: string | null;
}

const AttendanceSheet: React.FC<AttendanceSheetProps> = ({
  data,
  days,
  className,
  section,
  session,
}) => {
  const isSunday = (date: Date): boolean => date.getDay() === 0;

  const month = days[0].toLocaleString('default', { month: 'long' });
  const year = days[0].getFullYear();

  return (
    <Card>
      <h1>
        Attendance Sheet of Class {className}: Section {section}, {month}{' '}
        {session}
      </h1>
      <AttendanceTable>
        <thead>
          <tr>
            <th>Students</th>
            {days.map((day) => (
              <th key={day.toString()}>{day.getDate()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((student) => (
            <tr key={student.name}>
              <StudentName>{student.name}</StudentName>
              {student.attendance.map((mark, index) => (
                <DayCell key={index} isSunday={isSunday(days[index])}>
                  {mark === '1' ? (
                    <FaCheck style={{ color: 'darkgreen' }} />
                  ) : mark === '0' ? (
                    <IoCloseSharp style={{ color: 'darkred' }} />
                  ) : isSunday(days[index]) ? (
                    '-'
                  ) : null}
                </DayCell>
              ))}
            </tr>
          ))}
        </tbody>
      </AttendanceTable>
    </Card>
  );
};

export default AttendanceSheet;
