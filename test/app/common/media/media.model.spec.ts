import {Media,MediaType} from '../../../../app/common/media/media.model';

describe('Media',() => {
    var test = (url,mediaType) => {
        return done => {
            let media = new Media(url);

            expect(media.type).toBe(mediaType);
            done();
        }
    };

    describe('image source', () => {
        var imageExtensions = ['png','jpg','jpeg','gif'];

        for (var extension of imageExtensions){
            var imageName = `test.${extension}`;

            it(`should detect ${extension} images with http`, test(`http://i.imgur.com/${imageName}`,MediaType.Image));

            it(`should detect ${extension} images with https`, test(`https://i.imgur.com/${imageName}`, MediaType.Image));

            it(`should not detect ${extension} without http prefix`, test(`i.imgur.com/${imageName}`,MediaType.Unknown));
        }
    });

    describe('youtube source', () => {
        var validYoutubeUrls = [
            'http://www.youtube.com/watch?v=iwGFalTRHDA',
            'http://www.youtube.com/watch?v=iwGFalTRHDA&feature=related',
            'http://youtu.be/iwGFalTRHDA',
            'http://youtu.be/n17B_uFF4cA',
            'http://www.youtube.com/embed/watch?feature=player_embedded&v=r5nB9u4jjy4',
            'http://www.youtube.com/watch?v=t-ZRX8984sc',
            'http://youtu.be/t-ZRX8984sc'
        ];

        for(var url of validYoutubeUrls){
            it(`should detect ${url} format`, test(url,MediaType.YoutubeVideo))
        }
    });

});
