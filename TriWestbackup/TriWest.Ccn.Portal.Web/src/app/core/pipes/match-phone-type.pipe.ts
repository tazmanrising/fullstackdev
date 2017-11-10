import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'matchPhoneType'
})
export class MatchPhoneTypePipe implements PipeTransform {
    transform(items: Array<any>, type: string): Array<any> {      
        return items.filter(item => item.phoneType === type);        
    }
}