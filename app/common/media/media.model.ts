export enum MediaType{
    Unknown = 0,
    YoutubeVideo = 1,
    Image = 2
}

export class Media{
    source: string;

    //todo: may it cause bad performance?
    get type(): MediaType{
        if (this._isImage(this.source)) {
            return MediaType.Image;
        }

        if (this._isYoutubeSource(this.source)) {
            return MediaType.YoutubeVideo;
        }

        return MediaType.Unknown;
    }

    constructor(source){
        this.source = source;
    }

    private _isImage(source){
        let regexp = /http(?:s?):\/\/(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:\/[^/#?]+)+\.(?:jpg|jpeg|gif|png)/;

        return regexp.test(source);
    }

    private _isYoutubeSource(source){
        let regexp = /(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/;

        return regexp.test(source);
    }
}
