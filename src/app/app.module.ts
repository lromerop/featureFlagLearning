import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { preloadFlags } from './service/feature-flags.service';
import { CardsFeatureComponent } from './components/cards-feature/cards-feature.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsFeatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: preloadFlags
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
