import { useEffect, useState } from 'react';

import { dataUsers } from '../../Data/dataUsers';
import { User } from '../index';

import './App.scss';

export const App = () => {
  const [count, setCount] = useState(20);
  let data = dataUsers.slice(0, count);
  const flag = Boolean(count >= dataUsers.length);
  
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  
  useEffect(() => {
    data = data.slice(0, count);
  }, [count]);
  
  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && !flag) {
      setCount(prevCount => prevCount + 20);
    }
  };
  
  return (
    <div className="App">
      {data.map((item) =>
        <User item={item} key={item.id} />
      )}
    </div>
  );
};