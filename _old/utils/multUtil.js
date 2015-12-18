_ = require('lodash');
module.exports = new MultUtils();

function MultUtils(){
    var dataSources = [new YoutubeSourceUtil()];

    this.findVideoSource = function(link){
        for(var i in dataSources){
            var source = dataSources[i];

            if (source.isBelongsToSource(link)){
                return source;
            }
        }
    }

    this.getVideoMeta = function(link){
        var source = this.findVideoSource(link);
        return source.getVideoMeta(link);
    }
}


function VideoSourceUtil (){
    this.isBelongsToSource = function (link){
        var regExp = new RegExp(this.websiteRegExp);
        return regExp.test(link);
    }

    this.getVideoMeta = function (link){
        return {
            source: this.source,
            id: this.parseId(link),
            videoLink: this.getVideoLink(link)
        }
    }
}



YoutubeSourceUtil.prototype = _.create(VideoSourceUtil.prototype, {'constructor': YoutubeSourceUtil});

function YoutubeSourceUtil () {
    VideoSourceUtil.call(this);

    this.websiteRegExp = 'youtu';
    this.source = 'youtube';

    this.parseId = function(link){
        var ID = '';
        link = link.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        if(link[2] !== undefined) {
            ID = link[2].split(/[^0-9a-z_\-]/i);
            ID = ID[0];
        }
        else {
            ID = link;
        }
        return ID;
    }

    this.getVideoLink = function(link){
        var id = this.parseId(link)
        return 'http://www.youtube.com/embed/'+id
    }
}



