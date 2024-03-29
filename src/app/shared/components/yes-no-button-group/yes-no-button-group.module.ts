import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesNoButtonGroupComponent } from './yes-no-button-group.component';
import { KeyBoardManagerModule } from '../../directives/keyboard-manager/keyboard-manager.module';



@NgModule({
  declarations: [YesNoButtonGroupComponent],
  imports: [
    CommonModule,
    KeyBoardManagerModule
  ],
  exports:[YesNoButtonGroupComponent]
})
export class YesNoButtonGroupModule { }
