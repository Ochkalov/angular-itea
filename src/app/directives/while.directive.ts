import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";
 
@Directive({ 
    selector: "[while]" 
})

export class WhileDirective {
     
    constructor(
        // Used TemplateRef to get access to directive's template
        private templateRef: TemplateRef<any>,
        // Used ViewContainerRef to pass rederer's object into directive's template
        private viewContainer: ViewContainerRef
    ) { }
    
    // Used @Input decorator for getting rederer's object with applied directive and set while cycle
    @Input() set while(condition: boolean) {
        if (condition) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
    }
}