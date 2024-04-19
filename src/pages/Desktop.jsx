import { Link} from "react-router-dom";
import  "./Desktop.css";

const Desktop = () => {
 /* const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);
*/
  return (
    <div className="desktop1">
      <div className="firstpage">
        <div className="rectangleParent">
          <div className="groupChild" />
          <b className="dessert">Dessert</b>
        </div>
        <div className="rectangleGroup">
          <div className="groupItem" />
          <b className="robotics">Dinner</b>
        </div>
        <div className="theFastestFood">
          The Fastest Food Ordering App
        </div>
        <div className="firstpageChild" />
        <Link to="/desktop">
        <div className="getStarted">Get Started</div>
        </Link>
      </div>
      <img className="image3Icon" alt="" src="/image-3@2x.png" />
      <i className="orderWithEase">
        Order with ease and savor the flavor!
      </i>
    </div>
  );
};

export default Desktop;
