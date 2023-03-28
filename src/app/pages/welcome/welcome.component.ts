import {Component, OnInit} from '@angular/core';
import {finalize, Observable, Subject} from "rxjs";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  lstDataVN: any;
  isLoadingVN: boolean = false;
  lstDataEN: any;
  isLoadingEN: boolean = false;

  valid2File: boolean = false;
  currentLine: number = 0;
  textAfterTrans: string = '';
  numberLine: number = 0;

  constructor(private toast: ToastrService) {
  }

  ngOnInit() {
  }

  changeFile(event: Event, source: string | 'EN' | 'VN', loading: boolean) {
    this.valid2File = false;
    if (source === "EN") {
      this.lstDataEN = [];
    }
    if (source === "VN") {
      this.lstDataVN = [];
    }
    loading = true;
    // @ts-ignore
    const file = event?.target?.files[0];
    this.readFile(file)
      .pipe(finalize(() => loading = false))
      .subscribe((output) => {
        if (source === 'EN') {
          this.lstDataEN = output.split('\r\n');
        } else {
          this.lstDataVN = output.split('\r\n');
        }
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

  onSubmit() {
    this.valid2File = false;
    if (this.lstDataEN?.length && this.lstDataVN?.length && this.lstDataEN?.length === this.lstDataVN?.length) {
      this.valid2File = true;
      this.toast.success('OK~');
      this.upText();
    } else {
      this.toast.error('Độ dài file khác nhau!');
    }
  }

  onSave() {
    this.toast.info(this.textAfterTrans)
  }

  goTo() {
    this.currentLine = this.numberLine;
    this.upText();
  }

  prev() {
    if (this.currentLine > 0) {
      this.currentLine -= 1;
      this.upText();
    }
  }

  next() {
    if (this.currentLine < this.lstDataEN?.length) {
      this.currentLine += 1;
      this.upText();
    }
  }

  upText() {
    this.textAfterTrans = this.lstDataVN[this.currentLine];
  }
}
