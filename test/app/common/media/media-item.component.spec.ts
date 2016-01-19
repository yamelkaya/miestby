import {MediaItemBaseComponent} from "../../../../app/common/media/media-item.component";
import {MediaType} from '../../../../app/common/media/media.model';
import {MediaContainerComponent} from "../../../../app/common/media/media-container.component";

describe('MediaItemBaseComponent', () => {
    it('should initialize media based on source on ngOnChanges', done => {
        let item = new MediaItemBaseComponent(null);
        item.source = 'http://i.imgur.com/test.png';

        item.ngOnChanges();

        expect(item.media.type).toBe(MediaType.Image);
        done();
    });

    it('should emit event when media is zoomed in', done => {
        let item = new MediaItemBaseComponent(null);
        item.select.subscribe(res => {
            expect(res).toBe(item);
            done();
        });

        item.zoomIn();
    });
});
