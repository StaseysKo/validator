import { useState, useEffect } from 'react';

// Список праздничных дней (формат даты: 'MM-DD')
const holidays = [
  '01-01', // Новый год
  '01-02', '01-03', '01-04', '01-05', '01-06', '01-07', '01-08', // Новогодние каникулы
  '02-23', // День защитника Отечества
  '03-08', // Международный женский день
  '04-29', '04-30',
  '05-01', // Праздник Весны и Труда
  '05-09', '05-10', // День Победы
  '06-12', // День России
  '11-04', // День народного единства
  '12-30', '12-31', // Предновогодние выходные
];

export default function useWorkingHours() {
  const [workingDays, setWorkingDays] = useState([]);

  useEffect(() => {
    const days = [];
    const now = new Date();

    for (let i = 0; i < 15; i++) {
      if (i > 0) {
        now.setDate(now.getDate() + 1);
      }

      const day = now.getDay();
      const month = (now.getMonth() + 1).toString().padStart(2, '0');
      const date = now.getDate().toString().padStart(2, '0');
      const currentDate = `${month}-${date}`;

      const isWeekday = day >= 1 && day <= 5;
      const isHoliday = holidays.includes(currentDate);
      const isSpecialWorkingDay = ['04-27', '11-02', '12-28'].includes(currentDate);
      const isTodayAndWorkingTime = i === 0 && now.getHours() >= 8 && now.getHours() < 18;

      if ((isWeekday || isSpecialWorkingDay) && !isHoliday && (isTodayAndWorkingTime || i !== 0)) {
        days.push(true);
      } else {
        days.push(false);
      }
    }

    setWorkingDays(days);
  }, []);

  return workingDays;
}