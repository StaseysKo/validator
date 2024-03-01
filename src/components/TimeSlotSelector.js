import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import useWorkingHours from 'src/hooks/useWorkingHours';
import { format, addDays, isToday, isTomorrow } from 'date-fns';
import { ru } from 'date-fns/locale';

const TimeSlotSelector = ({ name, label, value, onChange }) => {
  const timeSlots = generateTimeSlots();

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        name={name}
        value={value}
        onChange={onChange}
        label={label}
        MenuProps={{
          style: { zIndex: 99999 },
          PaperProps: {
            style: {
              maxHeight: 300,
            }
          }
        }}
      >
        {timeSlots.map((slot, index) => (
          <MenuItem
            key={index}
            value={slot}
            style={{
              padding: '12px',
              borderBottom: index !== timeSlots.length - 1 ? '1px solid rgba(255, 255, 255, 0.04)' : 'none',
              borderRadius: 0, // Убирает закругление углов
            }}
          >
            {slot}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const generateTimeSlots = () => {
  const workingDays = useWorkingHours(); // Массив рабочих и выходных дней

  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();
  const timeSlots = [];
  let workingDaysAdded = 0;

  if (workingDays[0] && currentHour >= 8 && currentHour < 18) {
    timeSlots.push("Перезвоните сейчас");
  }

  workingDays.forEach((isWorking, index) => {
    if (isWorking && workingDaysAdded < 2) {
      const day = addDays(currentTime, index);
      let dayLabel = getDayLabel(day);

      const startHour = index === 0 ? (currentHour >= 8 && currentHour < 17 ? (currentMinutes >= 50 ? currentHour + 1 : currentHour) : 8) : 8;
      for (let hour = startHour; hour < 18; hour++) {
        const timeSlot = `${dayLabel}, с ${hour}:00 до ${hour + 1}:00`;
        timeSlots.push(timeSlot);
      }
      workingDaysAdded++;
    }
  });

  return timeSlots;
};

function getDayLabel(day) {
  if (isToday(day)) {
    return 'Сегодня';
  } else if (isTomorrow(day)) {
    return 'Завтра';
  } else {
    const formattedDay = format(day, 'EEEE', { locale: ru });
    const formattedDate = format(day, 'dd.MM');
    return `${formattedDay.charAt(0).toUpperCase() + formattedDay.slice(1)}, (${formattedDate})`;
  }
}

export default TimeSlotSelector;

