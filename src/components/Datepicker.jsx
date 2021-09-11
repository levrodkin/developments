import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import ru from 'date-fns/locale/ru';
import "react-datepicker/dist/react-datepicker.css";
registerLocale('ru', ru)

export default function Datepicker(props) {

  const [startDate, setStartDate] = useState(new Date());

  const selectedDate = (date) => {
    setStartDate(date)
    const D = new Date()
    const dateFormat = `${D.getMonth() + 1}/${D.getDate()}/${D.getFullYear()}`
    props.startDate(dateFormat)
  }

  return (
    <DatePicker locale="ru" selected={startDate} onChange={(date) => selectedDate(date)} />
  );
}