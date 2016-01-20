export enum MediaType{
    Unknown = 0,
    YoutubeVideo = 1,
    Image = 2
}

export class Media{
    get source(){
        return this._source;
    };

    set source(value){
        this._source = value;
        this._type = this._getMediaType(value);
        this._normalizedSource = this._getNormalizedSource(value,this._type);
    }

    //todo: may it cause bad performance?
    get type(): MediaType{
        return this._type;
    }

    get normalizedSource(){
        return this._normalizedSource;
    }

    private _source;
    private _type;
    private _normalizedSource;

    constructor(source){
        this.source = source;
    }

    private _getMediaType(source){
        if (this._isImage(source)) {
            return MediaType.Image;
        }

        if (this._isYoutubeSource(source)) {
            return MediaType.YoutubeVideo;
        }

        return MediaType.Unknown;
    }

    private _isImage(source){
        let regexp = /http(?:s?):\/\/(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:\/[^/#?]+)+\.(?:jpg|jpeg|gif|png)/;

        return regexp.test(source);
    }

    private _isYoutubeSource(source){
        let regexp = /(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/;

        return regexp.test(source);
    }

    private _getNormalizedSource(source: string,type: MediaType) {
        switch (type){
            case MediaType.YoutubeVideo:
                return `https://www.youtube.com/embed/${this._getYoutubeVideoId(source)}`;
            case MediaType.Image:
            default:
                return source;
        }
    }

    private  _getYoutubeVideoId(url){
        var id = '';
        url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        if(url[2] !== undefined) {
            id = url[2].split(/[^0-9a-z_\-]/i);
            id = id[0];
        }
        else {
            id = url;
        }
        return id;
    }
}
