import React from "react";
import { ReactComponent as YouTubeIcon } from "../../../assets/images/svg/youtube.svg";
import { ReactComponent as TwitterIcon } from "../../../assets/images/svg/twitter.svg";
import { ReactComponent as FacebookIcon } from "../../../assets/images/svg/facebook.svg";
import { ReactComponent as LinkedinIcon } from "../../../assets/images/svg/linkedin.svg";

import "../../../scss/SocialLinks.scss";

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://www.youtube.com/channel/UC1Nk_XSVZsTrMyiYiuHsuMw"
        className="youtube"
        target="_blank"
        rel="noopener noreferrer"
      >
        <YouTubeIcon />
      </a>
      <a
        href="https://twitter.com/ESkyTechMx"
        className="twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterIcon />
      </a>
      <a
        href="https://www.facebook.com/E-Sky-2508043162604425"
        className="facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/programmer-roberto-correa/"
        className="linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinIcon />
      </a>
    </div>
  );
}
