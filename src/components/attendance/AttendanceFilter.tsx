import React, { useState, useEffect } from 'react';
import DropdownComponent from '../UI/Dropdown';
import EditableAttendanceSheet from './EditableAttendanceSheet'; // Ensure correct path
import { Button, Card, FiltersContainer } from './StyledAttendance';
import { getDaysInMonth } from '@/utils/days';
import { generateAttendanceData } from '@/utils/attendance';

interface Selections {
  Class: string;
  Section: string;
  Month:
    | 'January'
    | 'February'
    | 'March'
    | 'April'
    | 'May'
    | 'June'
    | 'July'
    | 'August'
    | 'September'
    | 'October'
    | 'November'
    | 'December'
    | '';
  Session: string;
}

interface AttendanceData {
  name: string;
  days: Array<'1' | '0' | '-'>;
}

interface RawAttendanceData {
  name: string;
  attendance: string[];
}

const AttendanceControls: React.FC = () => {
  const [selections, setSelections] = useState<Selections>({
    Class: '',
    Section: '',
    Month: '',
    Session: '',
  });
  const [attendanceData, setAttendanceData] = useState<AttendanceData[]>([]);

  useEffect(() => {
    if (
      selections.Class &&
      selections.Section &&
      selections.Month &&
      selections.Session
    ) {
      console.log('Getting attendance data');
      const monthNumber = monthMapping[selections.Month];
      const year = parseInt(selections.Session.substring(0, 4));
      const daysCalculated = getDaysInMonth(year, monthNumber);

      const rawData: RawAttendanceData[] = generateAttendanceData(
        daysCalculated
      ) as RawAttendanceData[];

      console.log({ rawData });

      const transformData = (
        rawData: RawAttendanceData[]
      ): AttendanceData[] => {
        return rawData.map((item) => ({
          name: item.name,
          days: item.attendance.map((att) => att as '1' | '0' | '-'),
        }));
      };

      const data = transformData(rawData);

      console.log({ data });
      setAttendanceData(data);
    }
  }, [selections]);

  const handleDropdownChange = (name: string) => (value: string) => {
    setSelections((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log('Saved States:', selections);
    handleReset();
  };

  const handleReset = () => {
    setSelections({
      Class: '',
      Section: '',
      Month: '',
      Session: '',
    });
    setAttendanceData([]);
  };

  const dropdowns = [
    { label: 'Class', options: ['Class 1', 'Class 2', 'Class 3'] },
    { label: 'Section', options: ['Section A', 'Section B', 'Section C'] },
    { label: 'Month', options: Object.keys(monthMapping) },
    { label: 'Session', options: ['2021-2022', '2022-2023'] },
  ];

  return (
    <Card>
      <h1 style={{ marginLeft: '1rem' }}>Student Attendance</h1>
      <FiltersContainer>
        {dropdowns.map((dropdown) => (
          <DropdownComponent
            key={dropdown.label}
            label={dropdown.label}
            options={dropdown.options}
            onChange={handleDropdownChange(dropdown.label)}
            value={selections[dropdown.label as keyof Selections]}
          />
        ))}
      </FiltersContainer>
      {selections.Class &&
        selections.Section &&
        selections.Month &&
        selections.Session &&
        attendanceData.length > 0 && (
          <EditableAttendanceSheet
            data={attendanceData}
            onUpdate={(studentIndex, dayIndex, value) => {
              const newData = attendanceData.map((student, index) => {
                if (index === studentIndex) {
                  const newDays = [...student.days];
                  newDays[dayIndex] = value;
                  return { ...student, days: newDays };
                }
                return student;
              });
              setAttendanceData(newData);
            }}
          />
        )}
      <Button color="#f0ad4e" onClick={handleSave}>
        Save
      </Button>
      <Button onClick={handleReset}>Reset</Button>
    </Card>
  );
};

const monthMapping: { [key: string]: number } = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};

export default AttendanceControls;
