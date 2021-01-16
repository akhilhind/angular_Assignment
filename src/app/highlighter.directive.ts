import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[Highlighter]'
})
export class HighlighterDirective {
  @Input('Highlighter') 'Highlighter': string;
  @Input() 'default': string;
  constructor(private elRef: ElementRef) { }

  @HostListener('mouseover') onMouseOver() {  
    this.changeColor('yellow' || this.default);  
  }  
  @HostListener('mouseleave') onMouseLeave() {  
    this.changeColor('');  
  }  
  private changeColor(color: string) {  
    this.elRef.nativeElement.style.backgroundColor = color;  
  }    
}
