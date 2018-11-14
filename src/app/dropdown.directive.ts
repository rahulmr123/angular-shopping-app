import {Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding} from '@angular/core';
@Directive( {
selector: '[appDropDown]'
})

export class DropdownDirective implements OnInit {
constructor ( private eleRef: ElementRef, private renderer: Renderer2) {
}
@HostBinding('class.open') isOpen = false;
@HostListener('click') h() {

  this.isOpen = !this.isOpen;
  console.log("open", this.isOpen);
}
ngOnInit() {
// this.eleRef.nativeElement.style.backgroundColor = 'green';
// this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'blue');
}
}
