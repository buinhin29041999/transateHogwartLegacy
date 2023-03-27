import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";

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

  changeFileEN(event: Event) {
    // @ts-ignore
    const file = event?.target?.files[0];
    this.readFile(file).subscribe((output) => {
      console.log(output);
    })
  }

  readFile(file: File): Observable<string> {
    const sub = new Subject<string>();
    const reader = new FileReader();
    reader.onload = () => {
      const content: string = reader.result as string;
      sub.next(content);
      sub.complete();
    };
    reader.readAsText(file);
    return sub.asObservable();
  }

  changeFileVN(event: Event) {

  }

  onSave() {
  }
}
