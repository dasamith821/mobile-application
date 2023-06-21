import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],

})
export class OnboardingComponent  implements OnInit, AfterViewInit {

  private swipperContainerEl!: any;

  constructor() { }
  ngAfterViewInit(): void {
    this.swipperContainerEl = document.querySelector('swiper-container');
    this.swipperContainerEl.addEventListener('progress', (event: any) => {
      console.log(event.detail);
      const [swiper, progress] = event.detail;
    });
  }



  ngOnInit() {}

  goToNextSlide(){
    this.swipperContainerEl.swiper.slideNext();
  }

}
