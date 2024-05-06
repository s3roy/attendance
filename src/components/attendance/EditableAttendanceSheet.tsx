import React from 'react';
import { AttendanceTable, Card, StudentName } from './StyledAttendance';
import DayCellEditable from './DayCell';

interface AttendanceData {
  name: string;
  days: Array<'1' | '0' | '-'>;
}

interface EditableAttendanceSheetProps {
  data: AttendanceData[];
  onUpdate: (
    studentIndex: number,
    dayIndex: number,
    value: '1' | '0' | '-'
  ) => void;
}

const EditableAttendanceSheet: React.FC<EditableAttendanceSheetProps> = ({
  data,
  onUpdate,
}) => {
  console.log('In editable');
  return (
    <Card>
      <AttendanceTable>
        <thead>
          <tr>
            <th>Students</th>
            {Array.from(
              { length: data.length > 0 ? data[0].days.length : 0 },
              (_, i) => (
                <th key={i}>{i + 1}</th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((student, studentIndex) => (
            <tr key={student.name}>
              <StudentName>{student.name}</StudentName>
              {student.days.map((status, dayIndex) => (
                <td key={dayIndex} className="editable">
                  <DayCellEditable
                    initialValue={status}
                    onUpdate={(newValue) =>
                      onUpdate(studentIndex, dayIndex, newValue)
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </AttendanceTable>
    </Card>
  );
};

export default EditableAttendanceSheet;
