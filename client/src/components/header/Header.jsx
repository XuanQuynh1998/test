import React from "react";
import "./Header.scss";
import { SearchOutlined, MoreVert } from "@material-ui/icons";

export default function Header() {
  return (
    <header>
      <div className="header">
        <div className="logo">
          <img
            src="https://sf16-scmcdn-sg.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-whole-c555aa707602e714ec956ac96e9db366.svg"
            alt="TikTok"
          />
        </div>
        <div className="search">
          <label>
            <input type="text" placeholder="Tìm kiếm tài khoản và video" />
          </label>
          <span></span>
          <div className="search-btn">
            <button className="cursor" title="Tìm kiếm">
              <SearchOutlined />
            </button>
          </div>
        </div>
        <div className="menu">
          <div className="upload cursor">
            <span>Tải lên</span>
          </div>
          <button className="login cursor">Đăng nhập</button>
          <div className="more cursor">
            <MoreVert />
            <ul className="popup">
              <li>Tiếng Việt</li>
              <li>Phản hồi và trợ giúp</li>
              <li>Phím tắt trên bàn phím</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
