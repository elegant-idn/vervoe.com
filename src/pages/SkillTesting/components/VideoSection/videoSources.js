import {
    videoDesktopMp4,
    videoDesktopOgv,
    videoDesktopWebm,
    videoMobileMp4,
    videoMobileOgv,
    videoMobileWebm

} from "../../../../assets/video";

export default {
        mobile: [
            {
                src: videoMobileMp4,
                type: 'video/mp4'
            },
            {
                src: videoMobileOgv,
                type: 'video/ogg',
            },
            {
                src: videoMobileWebm,
                type: 'video/webm'
            }
        ],
        desktop: [
            {
                src: videoDesktopMp4,
                type: 'video/mp4'
            },
            {
                src: videoDesktopOgv,
                type: 'video/ogg',
            },
            {
                src: videoDesktopWebm,
                type: 'video/webm'
            }
        ]
    }
