import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { KeyBoardManagerDirective } from "./keyboard-manager.directive";

@NgModule({
    declarations:[KeyBoardManagerDirective],
    imports:[CommonModule],
    exports:[KeyBoardManagerDirective]
})
export class KeyBoardManagerModule{}