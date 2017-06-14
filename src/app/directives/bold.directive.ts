import {Directive, ElementRef, HostListener, Input, Renderer2} from "@angular/core";
 
@Directive({
    selector: "[bold]"
})
export class BoldDirective{
    // Used @Input decorator to get element which uses [bold]
    @Input("bold") element: ElementRef;

    constructor(private elementRef: ElementRef, private renderer2: Renderer2){
        // Set to element style with pointer cursor
        this.renderer2.setStyle(this.elementRef.nativeElement, "cursor", "pointer");
    }
    
    // Used @HostListener decorator to listen event and call method
    @HostListener("mouseenter") onMouseEnter() {
        this.setFontWeight("bold");
    }
    
    // Used @HostListener decorator to listen event and call method
    @HostListener("mouseleave") onMouseLeave() {
        this.setFontWeight("normal");
    }
    
    // Method which provide setting of font-weight property in element
    private setFontWeight(value: string) {
        this.renderer2.setStyle(this.elementRef.nativeElement, "font-weight", value);
    }
}