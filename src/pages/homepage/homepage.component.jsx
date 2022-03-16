import { useLocation } from 'react-router-dom';
import Categories from '../../components/categories/categories.component';
import './homepage.styles.scss'

const HomePage = () => {
  const path = useLocation()


  console.log(path)

    return (
      <div className="homepage">
           <Categories />
      </div>
    );
}
 
export default HomePage;