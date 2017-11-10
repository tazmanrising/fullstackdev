import { FormatDatePipe } from './format-date.pipe';

describe('Pipe: formatDate', () => {
    let pipe: FormatDatePipe;

    beforeEach(() => {
        pipe = new FormatDatePipe();
    });

    it('providing no value returns no value', () => {
        expect(pipe.transform('')).toBe('');
    });

    //it('providing a string date returns same month day year', () => {
    //    expect(pipe.transform('2017-9-15')).toBe('9/15/2017');
    // });

    
});