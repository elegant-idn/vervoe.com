import React from "react";

export default () =>
    <object
        type="application/x-shockwave-flash"
        data="eh5v.files/html5video/flashfox.swf"
        height="100%"
        style={{ position: "relative" }}
    >
        <param name="movie" value="https://vervoe-public.s3-us-west-1.amazonaws.com/homepage/flashfox.swf" />
        <param name="allowFullScreen" value="false" />
        <param
            name="flashVars"
            value="autoplay=true&controls=false&fullScreenEnabled=false&posterOnEnd=true&loop=true&poster=https://vervoe-public.s3-us-west-1.amazonaws.com/homepage/bg-video.jpg&src=bg-video.m4v"
        />
        <embed
            src="https://vervoe-public.s3-us-west-1.amazonaws.com/homepage/flashfox.swf"
            height="100%" style={{ position: "relative" }}
            flashvars="autoplay=true&controls=false&fullScreenEnabled=false&posterOnEnd=true&loop=true&poster=https://vervoe-public.s3-us-west-1.amazonaws.com/homepage/bg-video.jpg&src=bg-video.m4v"
            allowFullScreen="false" wmode="transparent"
            type="application/x-shockwave-flash"
            pluginspage="http://www.adobe.com/go/getflashplayer_en"
        />
        <img alt="bg-video"
             src="https://vervoe-public.s3-us-west-1.amazonaws.com/homepage/bg-video.jpg"
             style={{ position: "absolute", left: 0 }}
             width="100%"
             title="Video playback is not supported by your browser"
        />
    </object>
