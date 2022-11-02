import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YesNoButtonGroupModule } from './shared/components/yes-no-button-group/yes-no-button-group.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DisabledControlModule } from './shared/directives/disabled-control/disabled-control.module';
import { ModalComponent } from './shared/components/modal/modal.component';
import { ModalService } from './shared/components/modal/services/modal.service';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    YesNoButtonGroupModule,
    ReactiveFormsModule,
    DisabledControlModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
