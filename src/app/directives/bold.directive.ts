import {Directive, ElementRef, HostListener, Input, Renderer2} from "@angular/core";
 
@Directive({
    selector: "[bold]",
    // Used host property instead of @HostListener decorator to bind methods to events
    host: {
        // "(event name)": "method which will be call on event"
        "(mouseenter)":"onMouseEnter()",
        "(mouseleave)":"onMouseLeave()"
    }
})
export class BoldDirective{
    // Used @Input decorator to get element which uses [bold]
    @Input("bold") element: ElementRef;

    constructor(private elementRef: ElementRef, private renderer2: Renderer2){
        // Set to element style with pointer cursor
        this.renderer2.setStyle(this.elementRef.nativeElement, "cursor", "pointer");
    }
    
    // Method to set bold font to element
    onMouseEnter() {
        this.setFontWeight("bold");
    }
    
    // Method to set normal to element
    onMouseLeave() {
        this.setFontWeight("normal");
    }
    
    // Method which provide setting of font-weight property in element
    private setFontWeight(value: string) {
        this.renderer2.setStyle(this.elementRef.nativeElement, "font-weight", value);
    }
}