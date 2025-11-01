import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirective {
  @Input('appTestDirective') highlightColor: string = 'yellow';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}