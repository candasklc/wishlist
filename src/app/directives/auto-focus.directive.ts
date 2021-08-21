import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective {
  private focus = true;
  constructor(private el: ElementRef) { }

  // tslint:disable-next-line: use-lifecycle-interface
  public ngOnInit(): void {
    this.el.nativeElement.focus();
  }
}
