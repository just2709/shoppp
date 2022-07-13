import AccountCircle from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, ClickAwayListener, Dialog, DialogActions, Grow, IconButton, MenuList, Paper, Popper, MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { closeForm, logout, openForm } from "../../features/Auth/Component/userSlice";

import { useSelector } from "react-redux";
import { cartItemsCountSelector } from "../../features/Cart/selectors";

import Login from "../../features/Auth/Component/Login";
import Register from "../../features/Auth/Component/Register";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { emptyCart } from "../../features/Cart/cartSlice";
import MiniCart from "./MiniCart";

Header.propTypes = {};

const settings = ["Profile", "Account", "Logout"];
const MODE = {
  LOGIN: "Login",
  REGISTER: "Register",
};
function Header(props) {
  const navigate = useNavigate();
  const [mode, setMode] = useState(MODE.LOGIN);
  const loggedIn = useSelector((state) => state.user.current);
  var userName = null;

  const isLogin = !!loggedIn.id;
  if (!!loggedIn.id) userName = loggedIn.fullName;
  const open = useSelector((state) => state.user.open);
  // const [open, setOpenUser] = useState(false);

  const handleClickOpen = () => {
    dispatch(openForm());
  };

  const handleClose = () => {
    dispatch(closeForm());
  };
  const dispatch = useDispatch();
  const logOut = (values) => {
    try {
      const action = logout();
      dispatch(action);
      dispatch(emptyCart());
      setOpenUser(false);
      navigate({
        pathname: "shoppp",
      });
    } catch (err) {
      console.error(err);
    }
  };
  const handleCartClick = () => {
    navigate({
      pathname: "cart",
    });
  };
  const [openUser, setOpenUser] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpenUser((prevOpen) => !prevOpen);
  };

  const handleCloseUser = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpenUser(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenUser(false);
    } else if (event.key === "Escape") {
      setOpenUser(false);
    }
  }

  const cartItemsCount = useSelector(cartItemsCountSelector);
  const showMiniCart = useSelector((state) => state.cart.showMiniCart);
  return (
    <div className='h-16 bg-blue-500 w-full flex text-white items-center justify-between px-5 z-10 fixed top-0 uppercase'>
      <div>
        <ul>
          <li className='inline-block'>
            <NavLink className={(navData) => (navData.isActive ? "text-[#3B82F6] bg-white p-5 rounded-xl font-bold" : "p-5")} to='/shoppp'>
              Trang chủ
            </NavLink>
          </li>
          <li className='inline-block ml-5'>
            <NavLink className={(navData) => (navData.isActive ? "text-[#3B82F6] bg-white p-5 rounded-xl font-bold" : "p-5")} to='/products'>
              Sản phẩm
            </NavLink>
          </li>
        </ul>
      </div>
      <Link to='/'>
        <img src='https://www.jgbowers.com/sites/default/files/public/myshop_logo.png' className='h-16' />
      </Link>

      {!isLogin && (
        <Box sx={{ flexGrow: 0 }}>
          <Typography style={{ cursor: "pointer" }} onClick={handleClickOpen}>
            {mode}
          </Typography>
          <Dialog open={open} onClose={handleClose} disableEscapeKeyDown onBackdropClick>
            <DialogActions>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </DialogActions>
            {mode === MODE.REGISTER && (
              <>
                <Register />
                <Box className='mx-5 mb-5'>
                  Bạn đã có tài khoản?
                  <Button onClick={() => setMode(MODE.LOGIN)}>Đăng nhập</Button>
                </Box>
              </>
            )}
            {mode === MODE.LOGIN && (
              <>
                <Login />
                <Box className='mx-5 mb-5'>
                  Bạn chưa có tài khoản?
                  <Button onClick={() => setMode(MODE.REGISTER)}>Đăng ký</Button>
                </Box>
              </>
            )}
          </Dialog>
        </Box>
      )}

      {isLogin && (
        <Box sx={{ flexGrow: 0 }}>
          <Button
            ref={anchorRef}
            id='composition-button'
            aria-controls={openUser ? "composition-menu" : undefined}
            aria-expanded={openUser ? "true" : undefined}
            aria-haspopup='true'
            onClick={handleToggle}
            sx={{ px: 4 }}>
            <AccountCircle style={{ color: "#fff", marginRight: "5px" }} />
            <Typography style={{ color: "white" }}>{userName}</Typography>
          </Button>
          <Popper open={openUser} anchorEl={anchorRef.current} role={undefined} placement='bottom-start' transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin: placement === "bottom-start" ? "left top" : "left bottom",
                }}>
                <Paper>
                  <ClickAwayListener onClickAway={handleCloseUser}>
                    <MenuList autoFocusItem={openUser} id='composition-menu' aria-labelledby='composition-button' onKeyDown={handleListKeyDown}>
                      <MenuItem style={{ fontSize: "14px" }} onClick={handleCloseUser}>
                        Thông tin
                      </MenuItem>
                      <MenuItem style={{ fontSize: "14px" }} onClick={handleCloseUser}>
                        Tài khoản
                      </MenuItem>
                      <MenuItem style={{ fontSize: "14px" }} onClick={logOut}>
                        Đăng xuất
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
          <IconButton className='relative' size='large' aria-label='show 4 new mails' color='inherit' onClick={handleCartClick}>
            <Badge badgeContent={cartItemsCount} color='error'>
              <ShoppingCartIcon />
            </Badge>
            {showMiniCart === true ? <MiniCart /> : null}
          </IconButton>
        </Box>
      )}
    </div>
  );
}

export default Header;
