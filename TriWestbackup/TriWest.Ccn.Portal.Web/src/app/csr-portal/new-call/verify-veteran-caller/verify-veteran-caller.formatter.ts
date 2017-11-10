import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';

export class VerifyVertanCallerFormatter extends NgbDateParserFormatter {

    format(date: NgbDateStruct): string {
        return date ? `${date.month}/${date.day}/${date.year}` : '';
    }

    parse(value: string): NgbDateStruct {
        if (value) {
            const date = value.trim().split('/');
            if (date.length === 3) return { year: parseInt(date[2], 10), month: parseInt(date[0], 10), day: parseInt(date[1], 10) };
        }        
        return null;
    }
}
