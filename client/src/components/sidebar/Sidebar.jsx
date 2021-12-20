import React from "react";
import "./Sidebar.scss";
import { Home, PeopleOutline, VideocamOutlined, Search, MusicNote } from "@material-ui/icons";
import TagIcon from "@mui/icons-material/Tag";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="nav-wrapper">
        <div className="active">
          <Home />
          <span>Dành cho bạn</span>
        </div>
        <div>
          <PeopleOutline />
          <span>Đang Follow</span>
        </div>
        <div>
          <VideocamOutlined />
          <span>LIVE</span>
        </div>
      </div>
      <div className="list-item">
        <span>Tài khoản được đề xuất</span>
        <a href="/#">
          <div className="user">
            <div className="user-avatar">
              <img
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/d24a19f32d080a6410fb9b7279f1dc85~c5_100x100.jpeg?x-expires=1634374800&x-signature=cG0u%2BSKSghcPtsYJjTkSPkYaRbU%3D"
                alt=""
              />
            </div>
            <div className="user-info">
              <h4>tiin.vn</h4>
              <p>Tiin.vn</p>
            </div>
          </div>
        </a>
        <div className="view-all cursor">Xem tất cả</div>
      </div>
      <div className="list-item">
        <span>Các tài khoản đang follow</span>
        <a href="/#">
          <div className="user">
            <div className="user-avatar">
              <img
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/d24a19f32d080a6410fb9b7279f1dc85~c5_100x100.jpeg?x-expires=1634374800&x-signature=cG0u%2BSKSghcPtsYJjTkSPkYaRbU%3D"
                alt=""
              />
            </div>
            <div className="user-info">
              <h4>tiin.vn</h4>
              <p>Tiin.vn</p>
            </div>
          </div>
        </a>
        <div className="view-all cursor">Xem thêm</div>
      </div>
      <div className="list-item">
        <span>Khám phá</span>
        <div className="discover">
          <a href="/#">
            <div className="discover-item">
              <MusicNote />
              <p>Laxed (Siren Beat)</p>
            </div>
          </a>
          <a href="/#">
            <div className="discover-item">
              <Search />
              <p>Laxed (Siren Beat)</p>
            </div>
          </a>
          <a href="/#">
            <div className="discover-item">
              <TagIcon />
              <p>xuaycobienhinsssssssssssssssssssssssssssssssssssssssssssssssssssssssssh</p>
            </div>
          </a>
        </div>
      </div>
      <div className="copyright">© 2021 TikTok</div>
    </div>
  );
}
