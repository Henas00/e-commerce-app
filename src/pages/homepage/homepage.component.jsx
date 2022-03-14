import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Menu from '../../components/menu/menu.component';
import './homepage.styles.scss'

const HomePage = () => {
  const path = useLocation()


  console.log(path)

    return (
      <div className="homepage">
           <Menu />
      </div>
    );
}
 
export default HomePage;