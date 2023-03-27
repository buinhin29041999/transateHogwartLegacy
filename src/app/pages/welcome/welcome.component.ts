import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  lstFileVN: string[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  onChooseFile() {
    console.log(this.decodeUtf8('Trang bá» Accio cho Bá» phÃ©p thuáº­t cá»§a báº¡n'))
  }

  changeFile(event: Event) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const text = e?.target?.result;
      // @ts-ignore
      const lines = text.split('\n');

      for (let line = 0; line < lines.length; line++) {
        console.log(lines[line])
      }
    };
    // @ts-ignore
    reader.readAsBinaryString(event?.target?.files[0]);
  }

  encodeUtf8(s: any) {
    return unescape(encodeURIComponent(s));
  }

  decodeUtf8(s: any) {
    return decodeURIComponent(escape(s));
  }
}
