import React from "react";
import PropTypes from "prop-types";
import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { cartItemsCountSelector } from "../../features/Cart/selectors";
import {
  useNavigate,
  useLocation,
  createSearchParams,
  NavLink,
  Link,
} from "react-router-dom";
import MiniCart from "./MiniCart";

Header.propTypes = {};

function Header(props) {
  const navigate = useNavigate();
  const handleCartClick = () => {
    navigate({
      pathname: "cart",
    });
  };
  const cartItemsCount = useSelector(cartItemsCountSelector);
  const showMiniCart = useSelector((state) => state.cart.showMiniCart);
  return (
    <div className='h-16 bg-blue-500 w-full flex text-white items-center justify-between px-5 z-10 fixed top-0'>
      <div>
        <ul>
          <li className='inline-block'>
            <NavLink
              className={(navData) =>
                navData.isActive ? "border-b-2 border-cyan-400" : ""
              }
              to='/myshop'>
              Trang chủ
            </NavLink>
          </li>
          <li className='inline-block ml-5'>
            <NavLink
              className={(navData) =>
                navData.isActive ? "border-b-2 border-cyan-400" : ""
              }
              to='/products'>
              Sản phẩm
            </NavLink>
          </li>
        </ul>
      </div>
      <Link to='/'>
        <img
          src='https://www.jgbowers.com/sites/default/files/public/myshop_logo.png'
          className='h-16'
        />
      </Link>
      <div>
        <IconButton
          className='relative'
          size='large'
          aria-label='show 4 new mails'
          color='inherit'
          onClick={handleCartClick}>
          <Badge badgeContent={cartItemsCount} color='error'>
            <ShoppingCartIcon />
          </Badge>
          {showMiniCart === true ? <MiniCart /> : null}
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
