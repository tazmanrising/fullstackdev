import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[IeNumeric]'
})
export class IeNumeric {

    constructor(private el: ElementRef) { }

    @Input() IeNumeric: boolean;
    @Input() NoDot: string = 'false'; // dots not allowed on entry

    hasDot = [46, 8, 9, 27, 13, 190, 110];

    noDot = [46, 8, 9, 27, 13];

    @HostListener('keydown', ['$event']) onKeyDown(event) {
        let e = <KeyboardEvent>event;
        //console.log('IeNumeric', IeNumeric)
        if (this.IeNumeric) {
            let testNumberic = (this.NoDot === 'true') ? this.noDot : this.hasDot;
            if (testNumberic.indexOf(e.keyCode) !== -1 ||
                // Allow: Ctrl+A
                (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
                // Allow: Ctrl+C
                (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
                // Allow: Ctrl+V
                (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
                // Allow: Ctrl+X
                (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        }
    }
}
