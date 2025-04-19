import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuillLoaderService {
  private loaded = false;

  constructor() {}

  loadQuillCSS() {
    if (this.loaded) return;

    const quillSnowCss = document.createElement('link');
    quillSnowCss.rel = 'stylesheet';
    quillSnowCss.href =
      'https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.snow.css';
    document.head.appendChild(quillSnowCss);

    this.loaded = true;
  }
}
