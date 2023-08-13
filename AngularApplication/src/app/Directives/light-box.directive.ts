import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective implements OnChanges
{


  @Input()
  colorOfBorder:string="grey";

  @Input()
  defaultColorOfBorder:string="transparent";

  constructor(private elementRef:ElementRef) 
  {
    //Use Constructor Only to Initialize Class Variables
  }

  ngOnChanges(changes: SimpleChanges): void
  {
    //Called when Input changes

    this.elementRef.nativeElement.style.border="1px solid " + this.defaultColorOfBorder;
  }


  @HostListener("mouseover")
  onMouseHover()
  {
    this.elementRef.nativeElement.style.border="1px solid " + this.colorOfBorder;
  }

  @HostListener("mouseout")
  onMouseOut()
  {
    this.elementRef.nativeElement.style.border="1px solid " + this.defaultColorOfBorder;
  }

}
