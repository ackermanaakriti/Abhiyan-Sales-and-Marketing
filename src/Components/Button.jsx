import React from 'react';
import classNames from 'classnames';

const Button = ({ type, text, textsize, bgclr, txtclr }) => {
  return (
    <button
      className={classNames(
        'px-[20px] py-[6px] font-poppins rounded-[20px] font-[400]',
        `text-[${textsize}]`,
        `text-${txtclr}`,
        `bg-${bgclr}`,
        `hover:bg-${txtclr}`,
        `hover:text-${bgclr}`
      )}
    >
      {text}
    </button>
  );
};

export default Button;
