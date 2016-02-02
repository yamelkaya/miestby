import {ImageUploaderComponent} from '../../../../app/common/media/image-uploader.component';
import {ImageService} from '../../../../app/common/media/image.service';
import {Http} from 'angular2/http';

describe('ImageUploader', () => {
   let imageUploader: ImageUploaderComponent;
   beforeEach(done => {
      imageUploader = Injector.resolveAndCreate([
         ImageService,
         Http,
         ImageUploaderComponent
      ]).get('ImageUploaderComponent');

   });

   it('should save image', done => {

      imageUploader.save()
   });
});
