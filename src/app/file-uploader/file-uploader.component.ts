import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FileService } from '../file-service.service';

@Component({
  selector: 'file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent {
  uploadForm = new FormGroup({
    profile: new FormControl(''),
  });

  constructor(private fileService: FileService) {

  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('profile')!.value);

    this.fileService.uploadFile(formData).subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );

  }

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile')!.setValue(file);
    }
  }
}
