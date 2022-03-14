import { useNavigate } from 'react-router-dom';
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size }) => {
  const navigate = useNavigate();

  return (
    <div className={`${size} menu-item`} onClick={()=> navigate(`/${title}`)}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
 
export default MenuItem;