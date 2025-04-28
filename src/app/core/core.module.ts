import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule  } from '@angular/common/http';
import { IconService } from './services/icon.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    
  ]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule: CoreModule, private iconService:IconService) {
    if(parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
