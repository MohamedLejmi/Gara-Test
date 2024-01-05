import { Component } from '@angular/core';
import {BsModalRef, BsModalService, ModalOptions} from "ngx-bootstrap/modal";
import {PassListComponent} from "../pass-list/pass-list.component";

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [],
  providers: [BsModalService],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {
  bsModalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModalWithComponent() {
    const initialState= {
      initialState: {
        list: [
          {
            title: 'Pass petit joueur',
            gifts: '2 ebooks + 2 jeux',
            points: '100 F ou 150 points / par jour',
            imgUrl: 'assets/icons/pass-joueur.svg'
          },
          {
            title: 'Pass champion',
            gifts: '20 ebooks + 15 jeux + 5 films',
            points: '500 F ou 550 points / par semaine',
            imgUrl: 'assets/icons/pass-champion.svg'
          },
          {
            title: 'Pass big boss',
            gifts: 'Accès illimité (jeux + ebooks + films)',
            points: '2000 F ou 2000 points / par mois',
            imgUrl: 'assets/icons/pass-bigBoss.svg'
          }
        ],
        currentPass: 'Modal with component'
      },
      backdrop: true,
      ignoreBackdropClick: false
    };
    this.bsModalRef = this.modalService.show(PassListComponent, initialState as ModalOptions);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
