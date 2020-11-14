import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-vedio',
  templateUrl: './vedio.component.html',
  styleUrls: ['./vedio.component.scss']
})
export class VedioComponent implements OnInit {

  videoUrl = 'https://www.youtube.com/embed/TcMBFSGVi1c';
  safeURL;

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }

}
