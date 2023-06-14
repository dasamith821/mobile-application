import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  termConditionFormGrp = new FormGroup({
    termUse: new FormControl({value:false,disabled:true}),
    privacy: new FormControl({value:false,disabled:true}),
    accept: new FormControl(false),
  });

  constructor(private sharedService: SharedService) {
    this.sharedService.data.subscribe(resp => {
        this.termConditionFormGrp.setValue(resp);
        this.termConditionFormGrp.updateValueAndValidity();
        if(resp.termUse){
          this.termConditionFormGrp.controls.termUse.enable();
        }
        if(resp.privacy){
          this.termConditionFormGrp.controls.privacy.enable();
        }
    })
  }

  get allTermAccepted() {
      return Object.keys(this.termConditionFormGrp.controls).every(key => {
        return this.termConditionFormGrp.get(key)?.value ==true;
      });
  }
}
