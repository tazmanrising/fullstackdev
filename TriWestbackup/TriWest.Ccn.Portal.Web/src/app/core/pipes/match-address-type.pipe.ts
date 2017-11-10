import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'matchAddressType'
})
export class MatchAddressTypePipe implements PipeTransform {
    transform(items: Array<any>, type: string): Array<any> {      
        return items.filter(item => item.addressType === type);        
    }
}