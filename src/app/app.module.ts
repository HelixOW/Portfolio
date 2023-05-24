import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './page/main/main.component';
import { BorderComponent } from './component/border/border.component';
import { LogoComponent } from './component/logo/logo.component';
import { MainCardComponent } from './component/cards/main-card/main-card.component';
import { PaletteService } from './services/palette.service';
import { ProjectCardComponent } from './component/cards/project-card/project-card.component';
import { SkillCardComponent } from './component/cards/skill-card/skill-card.component';
import { ImageCarouselComponent } from './component/image-carousel/image-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BorderComponent,
    LogoComponent,
    MainCardComponent,
    ProjectCardComponent,
    SkillCardComponent,
    ImageCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ PaletteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
