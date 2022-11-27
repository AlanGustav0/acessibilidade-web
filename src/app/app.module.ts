import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YesNoButtonGroupModule } from './shared/components/yes-no-button-group/yes-no-button-group.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DisabledControlModule } from './shared/directives/disabled-control/disabled-control.module';
import { ModalComponent } from './shared/components/modal/modal.component';
import { ModalService } from './shared/components/modal/services/modal.service';
import { ModalModule } from './shared/components/modal/modal.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    YesNoButtonGroupModule,
    ReactiveFormsModule,
    DisabledControlModule,
    ModalModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
