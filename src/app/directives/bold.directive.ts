import {Directive, ElementRef, Input, Renderer2} from '@angular/core';
 
@Directive({
    selector: '[bold]'
})
export class BoldDirective{
    // Used @Input decorator to get element which uses [bold]
    @Input('bold') element: ElementRef;

    constructor(private elementRef: ElementRef, private renderer2: Renderer2){
        // Set to element style with bold font
        this.renderer2.setStyle(this.elementRef.nativeElement, "font-weight", "bold");
    }
}