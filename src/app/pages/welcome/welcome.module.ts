import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import {NzInputModule} from "ng-zorro-antd/input";
import {FormsModule} from "@angular/forms";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzUploadModule} from "ng-zorro-antd/upload";
import {NzSpinModule} from "ng-zorro-antd/spin";
import {NgIf} from "@angular/common";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzTypographyModule} from "ng-zorro-antd/typography";


@NgModule({
  imports: [WelcomeRoutingModule, NzInputModule, FormsModule, NzButtonModule, NzUploadModule, NzSpinModule, NgIf, NzIconModule, NzCardModule, NzTypographyModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
