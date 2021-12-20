import React from "react";
import "./Video.scss";
import { MusicNote } from "@material-ui/icons";

export default function Video() {
  return (
    <div className="video">
      <div className="lazyload">
        <div className="lazyload-wrapper">
          <a href="/#">
            <div className="avatar">
              <img
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/d24a19f32d080a6410fb9b7279f1dc85~c5_100x100.jpeg?x-expires=1634374800&x-signature=cG0u%2BSKSghcPtsYJjTkSPkYaRbU%3D"
                alt=""
              />
            </div>
          </a>
          <div className="contain">
            <div className="user-info">
              <h4>senkichi.anime</h4>
              <span>Senkichi</span>
            </div>
            <p>
              Quá chậm 😳🤫 | <a href="/#">#anime </a>
              <a href="/#">#viral</a>
              <a href="/#">#fypシ</a>
            </p>
            <a href="/#" className="background-music">
              <MusicNote />
              <span>Nhạc nền - Hahaha</span>
            </a>
            <div className="video-content">
              <video src="https://v3.tiktokcdn.com/9788fcd88a8a2f94be62747270502373/616a9cfb/video/tos/useast2a/tos-useast2a-pve-0037-aiso/2d96abd6ac194b3595000b73397f1f36/?a=1180&br=2142&bt=1071&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=6&er=&ft=98ZmQeAl4kag3&l=202110160335430102450400690E5563B3&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3c7eGg6ZnI1ODMzZjgzM0ApZWRmaTlmOjw4N2k2aTVpZGdiNXFhcjRnNmZgLS1kL2NzczAvNmJgMWNjNTAtMzUuNDM6Yw%3D%3D&vl=&vr="></video>
            </div>
          </div>
        </div>
        <div className="lazyload-wrapper">
          <a href="/#">
            <div className="avatar">
              <img
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/d24a19f32d080a6410fb9b7279f1dc85~c5_100x100.jpeg?x-expires=1634374800&x-signature=cG0u%2BSKSghcPtsYJjTkSPkYaRbU%3D"
                alt=""
              />
            </div>
          </a>
          <div className="contain">
            <div className="user-info">
              <h4>senkichi.anime</h4>
              <span>Senkichi</span>
            </div>
            <p>
              Quá chậm 😳🤫 | <a href="/#">#anime </a>
              <a href="/#">#viral</a>
              <a href="/#">#fypシ</a>
            </p>
            <a href="/#" className="background-music">
              <MusicNote />
              <span>Nhạc nền - Hahaha</span>
            </a>
            <div className="video-content">
              <video src="https://v16.tiktokcdn.com/0630a8a61e01f82e0ed7c663a6e8aa51/616aae48/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/9b86cdce89804d2ab5cb84e27312703b/?a=1180&br=2296&bt=1148&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=6&er=&ft=98ZmQeAl4kag3&l=202110160449340102451362120DB5CCEA&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajg6azQ6Znc2NzMzZjgzM0ApM2kzOjo5ZjxoN2RpNDs8aWc0bDEwcjRnL2NgLS1kL2NzczZhY18uXjNgMjAwY2JhLzA6Yw%3D%3D&vl=&vr="></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
