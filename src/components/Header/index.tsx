import React from 'react';
import { RESULT_TYPE } from '../../types';

const Header = ({ result, date }: { result: string, date: string }) => {
  switch (result) {
    case RESULT_TYPE.SUCCESS:
      return (
        <p>Showing results for date: {date}</p>
      );
    case RESULT_TYPE.RANDOM:
      return (
        <p>No results found for today. Showing random results for date: {date}</p>
      );
    case RESULT_TYPE.FAILURE:
    default:
      return (
        <p>No results found for today.</p>
      );
  }
}

export default Header;