import {ListPagerComponent} from '../../../app/common/list-pager.component';
import {HttpMock} from '../http-mock';
import {Response, ResponseOptions, RequestOptions,RequestMethod} from 'angular2/http';
import {url} from '../../../db';


//httpMock.http.request('data/news').subscribe((res) => {
//    let result = res.json();
//    expect(result.items.length).toBe(1);
//    expect(result.total).toBe(20);
//    done();
//});

describe('ListPager', () => {
    let httpMock = new HttpMock();

    it('has default values', done => {
        let listPager = new ListPagerComponent(httpMock);
        expect(listPager.currentPage).toEqual(1);
        expect(listPager.itemsPerPage).toEqual(0);
        expect(listPager.itemsTotal).toEqual(0);
        expect(listPager.items.length).toEqual(0);

        done();
    });

    fit('should get some data 2', (done) => {
        let listPager = new ListPagerComponent(httpMock);
        listPager.source = new RequestOptions({
            method: RequestMethod.Get,
            url: 'data/news'
        });
        listPager.onItemsLoad = (items,page,total) => {
            expect(items.length).toBe(1);
            expect(page).toBe(1);
            expect(total).toBe(20);
        };

        listPager.ngOnInit();

        httpMock.connection.mockRespond(new Response(new ResponseOptions({body: {
            items: [{
                _id: 1,
                title: 'Рождественское, часть 1',
                titleMediaType: 0,
                titleMedia: 'https://www.youtube.com/embed/eGWwHABmdOo',
                titleDetails: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мультфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                images: ['http://i.imgur.com/pbramIa.jpg'],
                videos: ['https://www.youtube.com/watch?feature=player_embedded&v=eGWwHABmdOo'],
                content: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мултфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                contentHtml: '',
                created: new Date('2015-12-20'),
                updated: new Date('2015-12-24')
            }],
            total: 20
        }
        })));
    });
});
