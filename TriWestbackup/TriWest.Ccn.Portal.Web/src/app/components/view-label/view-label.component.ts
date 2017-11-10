import { Component, Input } from '@angular/core';

@Component({
    selector: 'view-label',
    templateUrl: 'view-label.component.html'
})
export class ViewLabelComponent {
    @Input() type: string = '';
    @Input() value: string = '';
}
