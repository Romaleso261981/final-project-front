import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmail } from "../../redux/auth/selectors";
import { getPeriod } from "../../redux/reports/reportsOperation";
import {userBalance} from "../../redux/balance/selectorBalance";
import icon from "../../assets/icons/icon.svg";
import s from "./Pagination.module.scss";

const month = [
  { id: 1, label: "January" },
  { id: 2, label: "February" },
  { id: 3, label: "March" },
  { id: 4, label: "April" },
  { id: 5, label: "May" },
  { id: 6, label: "June" },
  { id: 7, label: "July" },
  { id: 8, label: "August" },
  { id: 9, label: "September" },
  { id: 10, label: "October" },
  { id: 11, label: "November" },
  { id: 12, label: "December" },
];

const Pagination = () => {
  const dispatch = useDispatch();
  const authBalance = useSelector(userBalance);

  // const email = "leso81@gmail.com";
  const email = useSelector(getEmail);
  // console.log(email);

  const [nameMonth, setNameMonth] = useState(
    month.find((el) => el.id === new Date().getMonth() + 1)
  );

  const [year, setYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(
    `month=${nameMonth.id.toString().padStart(2, "")}&year=${year}`
  );

  const nextMnth = () => {
    if (nameMonth.id < month.length) {
      setNameMonth(month[nameMonth.id]);
    } else {
      setNameMonth(month[0]);
      setYear(year + 1);
    }
  };

  const prevNext = () => {
    const dateIndex = month.indexOf(nameMonth);
    if (dateIndex > 0) setNameMonth(month[dateIndex - 1]);
    else {
      setNameMonth(month[month.length - 1]);
      setYear(year - 1);
    }
  };

  useEffect(() => {
    setSelectedDate(`month=${nameMonth.id.toString().padStart(2, "")}&year=${year}`);
  }, [nameMonth, year]);
  useEffect(() => {
    if (!email) {
      return;
    }
    dispatch(getPeriod(selectedDate));
    // eslint-disable-next-line
  }, [selectedDate, authBalance]);

  return (
    <div className={s.pagContainer}>
      <p className={s.paragraph}>Current period:</p>
      <div className={s.btnContainer}>
        <button onClick={prevNext} type="button" className={s.btnLeft}>
          <svg width={10} height={10}>
            <use href={`${icon}#icon-vector_leftorange`} />
          </svg>
        </button>
        <div className={s.nomthBox}>
          <h2 className={s.month}>
            {nameMonth?.label} {year}
          </h2>
        </div>

        <button onClick={nextMnth} type="button" className={s.btnRigth}>
          <svg width={10} height={10}>
            <use href={`${icon}#icon-vector_rightorange`} />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
