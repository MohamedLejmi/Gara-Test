import { Component } from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";
import {ProgressbarModule} from "ngx-bootstrap/progressbar";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-pass-list',
  standalone: true,
  imports: [
    ProgressbarModule,
    NgForOf
  ],
  templateUrl: './pass-list.component.html',
  styleUrl: './pass-list.component.scss'
})
export class PassListComponent {
  title?: string;
  closeBtnName?: string;
  list: any[] = [];
  constructor(public bsModalRef: BsModalRef) {
  }
}
