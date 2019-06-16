import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appDlPic]'
})
export class DlPicDirective {
  @Input() name: string = 'code.png';
  @Input() path: string = '';

  @HostListener('click')
  onClick() {
    if (!this.path) return;
    this.downloadImg(this.path, this.name);
  }

  constructor() { }

  downloadImg(path, name = 'code.png'): void {
    const image = new Image();
    image.setAttribute('crossOrigin', 'anonymous');
    image.onload = function() {
      const canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
      const context = canvas.getContext('2d');
      context.drawImage(image, 0, 0, image.width, image.height);
      const url = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      const event = document.createEvent('MouseEvents');
      event.initMouseEvent(
          'click',
          true,
          false,
          window,
          0,
          0,
          0,
          0,
          0,
          false,
          false,
          false,
          false,
          0,
          null,
      );
      a.download = name;
      a.href = url;
      // if (navigator.msSaveBlob) {
      //   navigator.msSaveBlob(canvas.msToBlob(), name);
      // } else {
        a.dispatchEvent(event);
      // }
    };
    image.src = path;
  }

}
