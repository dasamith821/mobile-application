import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
})
export class PrivacyPolicyComponent  implements OnInit {

  accepted = false;

  constructor(private sharedService: SharedService, private router: Router) { }

  ngOnInit() {}

  onIonInfinite(ev: any) {
    this.accepted = true
  }

  accept(){
    this.sharedService.setData({
      ...this.sharedService.data$.value,
      privacy: true,

    });
  this.router.navigateByUrl('\home');
  }

}
