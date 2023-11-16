import React from 'react';
import s from './FaqItem.module.scss';
type faqListItem = {
  q: string;
  a: string;
};
const FaqItem = ({ q, a }: faqListItem) => {
  const [changeAccordion, setChangeAccordion] = React.useState(false);
  const onClickAccordion = () => {
    setChangeAccordion(!changeAccordion);
  };
  const changeClass = changeAccordion ? s.active : '';

  return (
    <li>
      <div className={s.top + ' ' + 'button'} onClick={onClickAccordion}>
        <button className="button">{q}</button>
        <svg
          className={changeAccordion ? s.active : ''}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_11191_710)">
            <path
              d="M8.00077 11.4475C7.56274 11.4483 7.12885 11.3627 6.7239 11.1957C6.31896 11.0287 5.9509 10.7835 5.64077 10.4742L0.194108 5.02749C0.0685721 4.90196 -0.00195312 4.73169 -0.00195312 4.55416C-0.00195313 4.37663 0.0685721 4.20636 0.194108 4.08083C0.319644 3.95529 0.489907 3.88477 0.667441 3.88477C0.844976 3.88477 1.01524 3.95529 1.14077 4.08083L6.58744 9.52749C6.96244 9.90203 7.47077 10.1124 8.00077 10.1124C8.53078 10.1124 9.03911 9.90203 9.41411 9.52749L14.8608 4.08083C14.9863 3.95529 15.1566 3.88477 15.3341 3.88477C15.5116 3.88477 15.6819 3.95529 15.8074 4.08083C15.933 4.20636 16.0035 4.37663 16.0035 4.55416C16.0035 4.73169 15.933 4.90196 15.8074 5.02749L10.3608 10.4742C10.0506 10.7835 9.68259 11.0287 9.27765 11.1957C8.8727 11.3627 8.43881 11.4483 8.00077 11.4475Z"
              fill="#717583"
            />
          </g>
          <defs>
            <clipPath id="clip0_11191_710">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className={s.bottom + ' ' + changeClass}>{a}</div>
    </li>
  );
};
export default FaqItem;
