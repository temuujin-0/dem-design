import React from "react";
import ChevronLeftIcon from "../../assets/icons/ChevronLeftIcon";
import ChevronRightIcon from "../../assets/icons/ChevronLeftIcon";

export default function CustomHeader({
  monthDate,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}) {
  const date = monthDate.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  const data = date.split(" ");

  return (
    <div
      style={{
        margin: 10,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
        <ChevronLeftIcon />
      </div>

      <span>
        {getTranslatedDate(data[0])} {data[1]}
      </span>

      <div onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
        <ChevronRightIcon />
      </div>
    </div>
  );
}

const getTranslatedDate = (month) => {
  switch (month) {
    case "January":
      return "Нэгдүгээр сар";
    case "February":
      return "Хоёрдугаар сар";
    case "March":
      return "Гуравдугаар сар";
    case "April":
      return "Дөрөвдүгээр сар";
    case "May":
      return "Тавдугаар сар";
    case "June":
      return "Зургаадугаар сар";
    case "July":
      return "Долоодугаар сар";
    case "August":
      return "Наймдугаар сар";
    case "September":
      return "Есдүгээр сар";
    case "October":
      return "Аравдугаар сар";
    case "November":
      return "Арваннэгдүгээр сар";
    case "December":
      return "Арванхоёрдугаар сар";

    default:
      return "";
  }
};
