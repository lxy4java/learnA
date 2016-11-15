import { Directive, TemplateRef, ViewContainerRef, ElementRef, Renderer, Input, EmbeddedViewRef } from '@angular/core';

@Directive({
  selector: '[xyForeach]'
})
export class XyForeachDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private el: ElementRef,
    private renderer: Renderer) {
    console.log(this.templateRef.elementRef.nativeElement)
    
    this.viewContainer.createEmbeddedView(this.templateRef);


  }




  @Input() set xyForeach(xyForeach: string) {
    console.log("~~~~~~~~~~~~~~~~~~~~~")
    console.log(xyForeach)
    console.log("~~~~~~~~~~~~~~~~~")
    console.log(this.viewContainer.length)
    for (let i = 0, ilen = this.viewContainer.length; i < ilen; i++) {
      console.log(i)
      const viewRef = <EmbeddedViewRef<any>>this.viewContainer.get(i);
      viewRef.context.index = i;
      viewRef.context.count = ilen;
    }
  }


}
