import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './page/main/main.component';
import { BorderComponent } from './component/border/border.component';
import { LogoComponent } from './component/logo/logo.component';
import { MainCardComponent } from './component/cards/main-card/main-card.component';
import { PaletteService } from './services/palette.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BorderComponent,
    LogoComponent,
    MainCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ PaletteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
