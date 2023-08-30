import React from 'react';

//local components
import VideoSrcFragment from './components/VideoSrcFragment'
import VideoChunk from './components/VideoChunk'
import FlashObject from './components/FlashObject'
import { videoDesktopJpg, videoMobileJpg} from "../../assets/video";


const Video = ({ source:{ desktop, mobile } }) =>
    <div className="bg-video">
        <div className="hero-video-desktop w-hidden-medium w-hidden-small w-hidden-tiny w-embed w-script">
            <div
                className="bg-video"
                style={{ pointerEvents: 'none' }}
            >
                <VideoChunk
                    self={this}
                    poster={videoDesktopJpg}
                    id="vervoe-bg__hd"
                >
                    <VideoSrcFragment sources={desktop}/>
                    <FlashObject />
                </VideoChunk>
            </div>
        </div>
        <div className="hero-video-universal w-hidden-main w-embed w-script">
            <div className="bg-video">
                <VideoChunk
                    poster={videoMobileJpg}
                    id="vervoe-bg__ld"
                >
                    <VideoSrcFragment sources={mobile}/>
                    <FlashObject />
                </VideoChunk>
            </div>
        </div>
        <div className="mask">
        </div>
        <script src="https://vervoe-public.s3-us-west-1.amazonaws.com/homepage/html5ext.js" type="text/javascript" />
        <span className="wistia_embed wistia_async_jr0ernbr08 popover=true popoverAnimateThumbnail=true videoFoam=true" />
    </div>

export default Video;
