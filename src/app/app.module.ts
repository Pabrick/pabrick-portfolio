import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { HeaderModule } from './views/header/header.module';
import { FooterModule } from './views/footer/footer.module';
import { AboutModule } from './views/about/about.module';
import { ToolsModule } from './views/tools/tools.module';
import { MenuModule } from './views/menu/menu.module';

import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    AboutModule,
    ToolsModule,
    MenuModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy } // TODO PathLocationStrategy
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
