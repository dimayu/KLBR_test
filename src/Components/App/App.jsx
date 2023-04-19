import { dataUsers } from '../../Data/dataUsers';
import { User } from '../index';

import './App.scss';

export const App = () => {
  return (
    <div className="App">
      {dataUsers.map((item) =>
        <User item={item} key={item.id}/>
      )}
    </div>
  );
}