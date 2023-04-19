import './User.scss';

export const User = ({ item }) => {
  return (
    <div className="user">
      <h3 className="user__name">{item.name}</h3>
      <h4 className="user__surname">{item.surename}</h4>
    </div>
  );
}