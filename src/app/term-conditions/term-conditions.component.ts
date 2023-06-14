import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-term-conditions',
  templateUrl: './term-conditions.component.html',
  styleUrls: ['./term-conditions.component.scss'],
})
export class TermConditionsComponent  implements OnInit {

  accepted = false;

  constructor(private sharedService: SharedService, private router: Router) { }

  ngOnInit() {}

  onIonInfinite(ev: any) {
    this.accepted = true
  }

  accept(){
    this.sharedService.setData({
      ...this.sharedService.data$.value,
      termUse: true,

    });
  this.router.navigateByUrl('\home');
  }
}
