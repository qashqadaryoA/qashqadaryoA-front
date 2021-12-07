import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ImageDownloadService } from './image-download.service';

@Component({
  selector: 'app-image-download',
  templateUrl: './image-download.component.html',
  styleUrls: ['./image-download.component.scss']
})
export class ImageDownloadComponent implements OnInit,AfterViewInit {
  @Input("faylId") falyId!: number;
  @Input("fayl") fayl!: any;
  @Input("file") file!: Blob;
  @Input("width") width = 100;
  @Input("height") height = 100;
  @Input("shakl") shakl!: string;

  @ViewChild('img') image!: ElementRef;

  isShowable = false;
  constructor(private imageDownloadService: ImageDownloadService) { }
  ngAfterViewInit(): void {
    
    if (this.falyId) {
      if (!this.fayl) {
        this.imageDownloadService.getById(this.falyId).subscribe(fayl => {
          this.fayl = fayl;
          this.downloadFile();
        });
      }
      this.downloadFile();
    }
  }

  downloadFile(){
    if (this.fayl)
      this.imageDownloadService.download(this.fayl.nom).subscribe(
        (data) => {
          const f = new File([data], this.fayl.nom) ;
          let reader = new FileReader();           
          reader.onload = (e: any) => {
              let imgBase64Path = e.target.result;
              if (this.image) {
                this.image.nativeElement.src = imgBase64Path;
              }
          };
          reader.readAsDataURL(f); 
          this.file = data;
        }
      )
  }
  ngOnInit(): void {
  }
}
