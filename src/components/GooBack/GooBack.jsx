import { useEffect } from 'react';
import { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import icon from '../../assets/icons/icon.svg';
import s from './GooBack.module.scss';

const GooBack = ({ title, isReportsPage = false }) => {
  const locRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    locRef.current = location.state?.from ?? '/wallet';
    // eslint-disable-next-line
  }, []);
  const handleClick = () => {
    navigate(locRef.current);
  };
  return (
    <button type="button" className={s.btnBack} onClick={handleClick}>
      <svg className={s.svg}>
        <use href={`${icon}#icon-left_orange`} />
      </svg>
      {title && <p className={s.title}>{title}</p>}
    </button>
  );
};

export default GooBack;
