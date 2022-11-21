import { AfterViewInit, Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appFocusTrap]'
})
export class FocusTrapDirective implements AfterViewInit{

  private firstFocusebleElement:HTMLElement = null;
  private lastFocusebleElement:HTMLElement = null;

  constructor(private _elementRef:ElementRef<any>) { }

  ngAfterViewInit(): void {
    const focusableElements = this._elementRef
      .nativeElement
      .querySelectorAll(`
        [tabindex]:not([tabindex="-1"]),
        a[href]:not([disabled]),
        button:not([disabled]),
        textarea:not([disabled]),
        input:not([disabled]),
        select:not([disabled])`
      ) as Array<HTMLElement>;

      this.firstFocusebleElement = focusableElements[0];
      this.lastFocusebleElement = focusableElements[focusableElements.length -1];
      this.firstFocusebleElement.focus();
  }
  @HostListener('keydown'['$event'])
  public manageTab(event:KeyboardEvent):void{
    if(event.key !== 'Tab'){
      return;
    }

    if(event.shiftKey && document.activeElement === this.firstFocusebleElement){
      this.lastFocusebleElement.focus();
      event.preventDefault();
    }else if(document.activeElement === this.lastFocusebleElement){
      this.firstFocusebleElement.focus();
      event.preventDefault();
    }
  }

}
