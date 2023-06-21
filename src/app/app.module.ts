import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TermConditionsComponent } from './term-conditions/term-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { register } from 'swiper/element/bundle';
register();

@NgModule({
  declarations: [AppComponent,TermConditionsComponent,PrivacyPolicyComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
