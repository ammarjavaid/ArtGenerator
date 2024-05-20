import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { FaBarsStaggered } from "react-icons/fa6";
import { Drawer } from "antd";

const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const location = useLocation();
  const [path, setPath] = useState(location.pathname);

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  return (
    <>
      {path === "/" && (
        <>
          <header>
            <div className="container">
              <div className="navbar">
                <div className="navbar-lists">
                  <img src={Logo} alt="" />
                  <ul>
                    <li>
                      <Link to="">Photo Editing Tool</Link>
                    </li>
                    <li>
                      <Link to="">AI Tools</Link>
                    </li>
                    <li>
                      <Link to="">Support</Link>
                    </li>
                  </ul>
                </div>
                <div className="sign-btn">
                  <Link to=""> Sign in </Link>
                </div>
                <div className="bars">
                  <FaBarsStaggered className="icon" onClick={showDrawer} />
                </div>
              </div>
            </div>
          </header>
        </>
      )}
      {path === "/generate" && (
        <>
          <header className={path === "/generate" ? "border-bottom" : ""}>
            <div className="container">
              <div className="navbar">
                <div className="navbar-lists">
                  <img src={Logo} alt="" />
                  <ul className="generate-image-lists">
                    <li>
                      <Link to="">Text to image</Link>
                    </li>
                    <li>
                      <Link to="">Image to image</Link>
                    </li>
                    <li>
                      <Link to="">AI Avatar</Link>
                    </li>
                    <li>
                      <Link to="">Face Swap</Link>
                    </li>
                  </ul>
                </div>
                <div className="sign-btn">
                  <Link to=""> Sign in </Link>
                </div>
                <div className="bars">
                  <FaBarsStaggered className="icon" onClick={showDrawer} />
                </div>
              </div>
            </div>
          </header>
        </>
      )}

      {/* mobile navigation  */}

      {path === "/" && (
        <>
          <Drawer onClose={onClose} open={open} placement="left">
            <ul>
              <li>
                <Link to="">Photo Editing Tool</Link>
              </li>
              <li>
                <Link to="">AI Tools</Link>
              </li>
              <li>
                <Link to="">Support</Link>
              </li>
            </ul>
            <div className="sign-btn">
              <Link to=""> Sign in </Link>
            </div>
          </Drawer>
        </>
      )}

      {path === "/generate" && (
        <>
          <Drawer onClose={onClose} open={open} placement="left">
            <ul>
              <li>
                <Link to="">Text to Image</Link>
              </li>
              <li>
                <Link to="">Image to Image</Link>
              </li>
              <li>
                <Link to="">AI Avatar</Link>
              </li>
              <li>
                <Link to="">Face Swap</Link>
              </li>
            </ul>
            <div className="sign-btn">
              <Link to=""> Sign in </Link>
            </div>
          </Drawer>
        </>
      )}
    </>
  );
};

export default Header;
