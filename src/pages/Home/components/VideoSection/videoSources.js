import {
    videoDesktopHomeMp4,
    videoDesktopHomeOgv,
    videoDesktopHomeWebm,
    videoMobileHomeMp4,
    videoMobileHomeOgv,
    videoMobileHomeWebm
} from '../../../../assets/video'


export default {
    mobile: [
        {
            src: videoMobileHomeMp4,
            type: 'video/mp4'
        },
        {
            src: videoMobileHomeOgv,
            type: 'video/ogg',
        },
        {
            src: videoMobileHomeWebm,
            type: 'video/webm'
        }
    ],
    desktop: [
        {
            src: videoDesktopHomeMp4,
            type: 'video/mp4'
        },
        {
            src: videoDesktopHomeOgv,
            type: 'video/ogg',
        },
        {
            src: videoDesktopHomeWebm,
            type: 'video/webm'
        }
    ]
}
