import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AttendanceSheet from '@/components/attendance/AttendanceSheet';
import { generateAttendanceData } from '@/utils/attendance';
import { getDaysInMonth } from '@/utils/days';
import AttendanceControls from '@/components/attendance/AttendanceFilter';
import Breadcrumb from '@/components/attendance/Breadcrum';

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

const AttendancePage: React.FC = () => {
  const router = useRouter();
  const { month, class: className, section, session } = router.query;

  const [attendanceData, setAttendanceData] = useState<StudentAttendance[]>([]);
  const [days, setDays] = useState<Date[]>([]);

  useEffect(() => {
    if (router.isReady) {
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth() + 1;
      const monthNumber = month ? parseInt(month as string, 10) : currentMonth;
      const year = session ? parseInt(session as string, 10) : currentYear;

      const daysCalculated = getDaysInMonth(year, monthNumber);
      setDays(daysCalculated);
      setAttendanceData(generateAttendanceData(daysCalculated));
    }
  }, [router.isReady, month, session]);

  const normalizeQueryParam = (
    param: string | string[] | undefined
  ): string | null => {
    if (Array.isArray(param)) {
      return param[0];
    }
    return param || null;
  };

  return (
    <div style={{ maxHeight: '100vh', overflow: 'auto' }}>
      <Breadcrumb />
      <AttendanceControls />
      {attendanceData.length > 0 && days.length > 0 && (
        <AttendanceSheet
          data={attendanceData}
          days={days}
          className={normalizeQueryParam(className)}
          section={normalizeQueryParam(section)}
          session={normalizeQueryParam(session)}
        />
      )}
    </div>
  );
};

export default AttendancePage;
