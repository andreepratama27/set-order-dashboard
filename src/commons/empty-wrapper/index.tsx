import React from 'react';
import PropTypes from 'prop-types';

const EmptyWrapper = (props: any) => (
  <div className="w-full mt-10 flex flex-col items-center">
    <div className="w-56 h-56 mt-8">
      <img
        src={require('../../assets/empty.svg')}
        className="w-full h-full"
        alt="Icon"
      />
    </div>
    <div className="flex flex-col items-center mt-2">
      <p className="text-center font-extrabold mt-1 text-lg">{props.title}</p>
      <p className="font-light text-center mt-1 text-gray-600">
        {props.message}
      </p>

      <button
        className="h-10 w-48 bg-yellow-500 mt-4 font-extrabold text-sm text-white rounded-full focus:outline-none"
        onClick={props.onButtonClick}>
        {props.btnTitle}
      </button>
    </div>
  </div>
);

EmptyWrapper.defaultProps = {
  title: 'SECTION NOT FOUND',
  message: 'Lets add new section to your restaurant',
  btnTitle: 'ADD SECTION',
};

export default EmptyWrapper;
