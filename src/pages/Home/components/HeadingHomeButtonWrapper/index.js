import PlayIcon from "../../../../assets/images/play.svg";
import React from "react";

export default () => {
    const playVideo = () => {
        if (!window.Wistia) return;
        const video = window.Wistia.api('jr0ernbr08');
        if (video) {
            video.play();
        }
    }

    return (
        <div className="heading-home__button-wrapper">
            <a
                href="https://app.vervoe.com/registration"
                className="header-home__try-free"
            >
                Try free
            </a>
            <div
                className="header-home__watch-the-video"
                onClick={playVideo}
            >
                <img src={PlayIcon} alt="pl" />
                Watch the Video
            </div>
        </div>
    )
}
