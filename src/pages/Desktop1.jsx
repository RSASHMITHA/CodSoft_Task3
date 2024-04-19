import {Link } from "react-router-dom";
import "./Desktop1.css";

const Desktop1 = () => {
  /*const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);

  const onFavoriteCartIconClick = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);*/

  return (
    <div className="desktop2">
      <div className="home">
        <div className="menu">Menu</div>
        <div className="menuParent">
          <div className="menu1">
            <div className="searchHere">Search here</div>
            <img className="vectorIcon" alt="" src="/vector.svg" />
          </div>
          <div className="groupChild" />
        </div>
        <div className="header">
          <div className="rectangleParent">
            <div className="groupItem" />
            <div className="all">ALL</div>
          </div>
          <div className="rectangleGroup">
            <div className="groupInner" />
            <b className="breakfast">Breakfast</b>
          </div>
          <div className="rectangleContainer">
            <div className="rectangleDiv" />
            <b className="lunch">Lunch</b>
          </div>
          <div className="groupDiv">
            <div className="rectangleDiv" />
            <b className="treats">Treats</b>
          </div>
        </div>
        <div className="rectangleParent1">
          <div className="groupChild2"/>
          <b className="dessert">Dessert</b>
        </div>
        <div className="rectangleParent2">
          <div className="groupChild3" />
          <b className="robotics">Dinner</b>
        </div>
        <div className="dishes">
        <Link to="/desktop-3">
        <div className="dishesChild" />
        </Link>
          <div className="dishesItem" />
          <div className="dishesInner"/>
          <div className="dishesChild1" />
          <div className="dishesChild3"/>
          <img
            className="rectangleIcon"
            alt=""
            src="/rectangle-58@2x.png"
          />
          <img
            className="dishesChild4"
            alt=""
            src="/rectangle-60@2x.png"
          />
          <img
            className="dishesChild5"
            alt=""
            src="/rectangle-62@2x.png"
          />
          <img
            className="dishesChild6"
            alt=""
            src="/rectangle-63@2x.png"
          />
          <img
            className="dishesChild7"
            alt=""
            src="/rectangle-61@2x.png"
          />
          <img
            className="dishesChild8"
            alt=""
            src="/rectangle-59@2x.png"
          />
          <b className="naan">Naan</b>
          <b className="butterChicken">Butter Chicken</b>
          <b className="dalTadka">Dal Tadka</b>
          <b className="ketoPancakes">Keto pancakes</b>
          <b className="alooTikki">Aloo tikki</b>
          <b className="iceCreamSundae">Ice cream sundae</b>
          <img
            className="tablerclockIcon"
            alt=""
            src="/tablerclock.svg"
          />
          <img
            className="tablerclockIcon1"
            alt=""
            src="/tablerclock.svg"
          />
          <img
            className="tablerclockIcon2"
            alt=""
            src="/tablerclock.svg"
          />
          <img
            className="tablerclockIcon3"
            alt=""
            src="/tablerclock.svg"
          />
          <img
            className="tablerclockIcon4"
            alt=""
            src="/tablerclock.svg"
          />
          <img
            className="tablerclockIcon5"
            alt=""
            src="/tablerclock.svg"
          />
          <div className="min">10min</div>
          <div className="div">4.8</div>
          <div className="div1">4.5</div>
          <div className="div2">4.7</div>
          <div className="div3">5.0</div>
          <div className="div4">4.9</div>
          <div className="div">5.0</div>
          <div className="min1">15min</div>
          <div className="min2">10min</div>
          <div className="min3">15min</div>
          <div className="min4">20min</div>
          <div className="min5">30min</div>
          <img
            className="materialSymbolsLightstarOuIcon"
            alt=""
            src="/materialsymbolslightstaroutline.svg"
          />
          <img
            className="materialSymbolsLightstarOuIcon1"
            alt=""
            src="/materialsymbolslightstaroutline.svg"
          />
          <img
            className="materialSymbolsLightstarOuIcon2"
            alt=""
            src="/materialsymbolslightstaroutline.svg"
          />
          <img
            className="materialSymbolsLightstarOuIcon3"
            alt=""
            src="/materialsymbolslightstaroutline.svg"
          />
          <img
            className="materialSymbolsLightstarOuIcon4"
            alt=""
            src="/materialsymbolslightstaroutline.svg"
          />
          <img
            className="materialSymbolsLightstarOuIcon5"
            alt=""
            src="/materialsymbolslightstaroutline.svg"
          />
          <div className="div6">$25.00</div>
          <div className="div7">$15.00</div>
          <div className="div8">$10.00</div>
          <div className="div9">$35.00</div>
          <div className="div10">$20.00</div>
          <div className="div11">$45.00</div>
        </div>
        <div className="homeChild"/>
        <div className="footer">
          <img className="vectorIcon1" alt="" src="/vector1.svg" />
          <img className="groupIcon" alt="" src="/group.svg" />
          <Link to="/desktop-3">
          <img
          className="favoriteCartIcon"
          alt=""
          src="/favorite-cart@2x.png"
          />
          </Link>
          <img className="vectorIcon2" alt="" src="/vector2.svg" />
        </div>
      </div>
    </div>
  );
};

export default Desktop1;
