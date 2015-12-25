import {ListPagerComponent} from '../../../app/common/list-pager.component';
import {MockBackend} from 'angular2/http/testing';
import {url} from '../../../db';

describe('ListPager', () => {
   it('has default values', done => {

       let listPager = new ListPagerComponent(MockBackend);
       expect(listPager.currentPage).toEqual(1);
       expect(listPager.itemsPerPage).toEqual(0);
       expect(listPager.itemsTotal).toEqual(0);
       expect(listPager.items.length).toEqual(0); 

       done();
   });
});
