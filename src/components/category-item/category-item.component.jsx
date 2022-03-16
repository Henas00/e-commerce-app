import { useNavigate } from 'react-router-dom';
import './category-item.styles.scss'

const CategoryItem = ({ category }) => {
  const { title, imageUrl, size } = category;
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
 
export default CategoryItem;