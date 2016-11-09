import { Directive, Input, HostListener } from '@angular/core';

import { TemplateRef, ViewContainerRef, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[hello]'
})
export class HelloDirective {

  constructor(
    // private templateRef: TemplateRef<any>,
    // private viewContainer: ViewContainerRef,
    private el: ElementRef,
    private renderer: Renderer) {
    console.log('hello');

  }

  @Input() set hello(hello: string) {
    // 用input 获取输入值
    // 用 this.el.nativeElement  获取原始dom
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', hello);
  }
  @Input() set world(world: string) {
    //居然支持多值输入
    this.renderer.setText(this.el.nativeElement, world);
  }

  @HostListener('mouseenter') onMouseEnter() {
    /* .事件监听。。鼠标进入事件 . . */
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'green');

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', null);
  }

 

}
