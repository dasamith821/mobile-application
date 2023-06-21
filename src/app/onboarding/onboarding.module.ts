import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OnboardingPageRoutingModule } from './onboarding/onboarding-routing.module';
import { OnboardingComponent } from './onboarding.component';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements

@NgModule({
  declarations: [OnboardingComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    OnboardingPageRoutingModule,
   ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OnboardingModule {}
