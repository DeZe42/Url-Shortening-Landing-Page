import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from './shared/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  inputCtrl: FormControl = new FormControl('', Validators.required);
  lastLink: any;
  shortLinks: any[] = [];
  copiedValue: any;
  menuOpen: boolean = false;

  constructor(
    private apiService: ApiService
  ) {

  }

  ngOnInit() {
    if (localStorage.getItem('shortLinks')) {
      let localStorageItem = localStorage.getItem('shortLinks');
      if (localStorageItem) this.shortLinks = JSON.parse(localStorageItem);
      if (this.shortLinks.length > 3) {
        this.shortLinks.shift();
      }
    } else {
      this.shortLinks = [];
    }
    this.apiService.link$.subscribe((res: any) => {
      if (res) {
        if (this.shortLinks.length >= 3) {
          this.shortLinks.shift();
        }
        this.shortLinks.push({name: this.lastLink, shortLink: res.result.short_link2});
        localStorage.setItem('shortLinks', JSON.stringify(this.shortLinks));
      }
    });
  }

  getShortenLink() {
    if (this.inputCtrl.value != '') {
      this.lastLink = this.inputCtrl.value;
      this.apiService.getShortLink(this.inputCtrl.value);
      this.inputCtrl.setValue('');
    }
  }

  scrollToView(element: HTMLElement) {
    element.scrollIntoView();
  }

  copyToClipBoard(value: any) {
    this.copiedValue = value;
    navigator.clipboard.writeText(value);
  }

  openMenu(trueOrFalse: any) {
    this.menuOpen = trueOrFalse;
    let url = document.getElementsByTagName('body');
    if (trueOrFalse) {
      if (url) url[0].style.overflow = 'hidden';
    } else {
      if (url) url[0].style.overflow = 'auto';
    }
    console.log(this.menuOpen)
  }
}