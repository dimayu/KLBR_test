import { useEffect } from 'react';
import WOW from 'wowjs';

import './User.scss';

export const User = ({ item }) => {
  useEffect(() => {
    const wow = new WOW.WOW({live: false});
    wow.init()
  }, []);
  
  return (
    <div className="user wow fadeInUp" data-wow-iteration="1">
      <h3 className="user__name">{item.name}</h3>
      <h4 className="user__surname">{item.surename}</h4>
    </div>
  );
}