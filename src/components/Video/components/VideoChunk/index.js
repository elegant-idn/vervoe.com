import React from "react";

export default ({poster,id, children, self}) =>
        <video
            poster={poster}
            autoPlay
            loop
            muted
            preload="auto"
            id={id}
            title="bg-video"
            onEnded={() => {
                setTimeout(function () {
                    self.play()
                }, 300)
            }}
        >
            {children}
        </video>
