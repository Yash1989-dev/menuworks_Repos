import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { ComponentsModule } from '@shared/components/components.module';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    ComponentsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
