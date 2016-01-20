import {Media,MediaType} from '../../../../app/common/media/media.model';

describe('Media',() => {
    var testMediaType = (url,mediaType) => {
        return done => {
            let media = new Media(url);

            expect(media.type).toBe(mediaType);
            done();
        }
    };

    var testNormalizedSource = (url, normalizedSource) => {
        return done => {
            let media = new Media(url);

            expect(media.normalizedSource).toBe(normalizedSource);
            done();
        }
    };

    describe('image source', () => {
        var imageExtensions = ['png','jpg','jpeg','gif'];

        for (var extension of imageExtensions){
            var imageName = `test.${extension}`;

            it(`should detect ${extension} images with http`, testMediaType(`http://i.imgur.com/${imageName}`,MediaType.Image));

            it(`should detect ${extension} images with https`, testMediaType(`https://i.imgur.com/${imageName}`, MediaType.Image));

            it(`should not detect ${extension} without http prefix`, testMediaType(`i.imgur.com/${imageName}`,MediaType.Unknown));

            it(`should have set normalized source for ${extension}`, testNormalizedSource(`i.imgur.com/${imageName}`,`i.imgur.com/${imageName}`))
        }
    });

    describe('youtube source', () => {
        var validYoutubeUrls = [
            {url: 'http://www.youtube.com/watch?v=iwGFalTRHDA', normalized: 'https://www.youtube.com/embed/iwGFalTRHDA'},
            {url: 'http://www.youtube.com/watch?v=iwGFalTRHDA&feature=related', normalized: 'https://www.youtube.com/embed/iwGFalTRHDA'},
            {url: 'http://www.youtube.com/watch?feature=related&v=iwGFalTRHDA', normalized: 'https://www.youtube.com/embed/iwGFalTRHDA'},
            {url: 'http://youtu.be/iwGFalTRHDA', normalized: 'https://www.youtube.com/embed/iwGFalTRHDA'},
            {url: 'http://youtu.be/n17B_uFF4cA', normalized: 'https://www.youtube.com/embed/n17B_uFF4cA'},
            //todo: unit test doesn't work now, fix this case if it possible
            //{url: 'http://www.youtube.com/embed/watch?feature=player_embedded&v=r5nB9u4jjy4',normalized:'https://www.youtube.com/embed/r5nB9u4jjy4' },
            {url: 'http://www.youtube.com/watch?v=t-ZRX8984sc', normalized: 'https://www.youtube.com/embed/t-ZRX8984sc'},
            {url: 'http://youtu.be/t-ZRX8984sc', normalized: 'https://www.youtube.com/embed/t-ZRX8984sc'}
        ];

        for(var url of validYoutubeUrls){
            it(`should detect ${url.url} format`, testMediaType(url.url,MediaType.YoutubeVideo))
            it(`should have set normalized source for ${url.url}`, testNormalizedSource(url.url,url.normalized));
        }
    });

});
