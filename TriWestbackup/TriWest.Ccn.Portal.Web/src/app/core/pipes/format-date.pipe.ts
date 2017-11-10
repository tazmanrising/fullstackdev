import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatDate'
})
    
/**Format the date without TimeZone info*/

export class FormatDatePipe implements PipeTransform {

    transform(value: string): any {

        if (value == '' || value == undefined) {
            return '';
        }

        let dateValue = new Date(value);
        let datewithouttimezone = new Date(dateValue.getUTCFullYear(),
            dateValue.getUTCMonth(),
            dateValue.getUTCDate(),
            dateValue.getUTCHours(),
            dateValue.getUTCMinutes(),
            dateValue.getUTCSeconds());
        return datewithouttimezone;
    }

}

// https://stackoverflow.com/questions/43264992/angular-4-date-pipe-converting-wrongily