import { TruncatePipe } from './truncate.pipe';

describe('Pipe: truncate',
  () => {
    let pipe: TruncatePipe;

    beforeEach(() => {
      pipe = new TruncatePipe();
    });

    it('Truncate some text', () => {
        expect(pipe.transform('test blahs asdfadsfasdf', '10')).toBe('test blahs10');
    });

  });
