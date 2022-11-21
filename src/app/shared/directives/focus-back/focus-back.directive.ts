import { Directive, OnDestroy, OnInit } from "@angular/core";


@Directive({
    selector: '[appFocusBack]'
})
export class FocusBackDirective implements OnInit, OnDestroy {
   
    private lastFocudesElement: Element;
    ngOnInit(): void {
        this.lastFocudesElement = document.activeElement;
    }

    ngOnDestroy(): void {
        if(this.lastFocudesElement){
            (this.lastFocudesElement as HTMLElement).focus();
        }
    }

}