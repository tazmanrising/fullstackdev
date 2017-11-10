import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Http, Response, URLSearchParams } from '@angular/http';

import { RowData } from './verify-veteran-caller.mock';

export class MockVerifyVeteranCallerService {

    getVeterans(searchParams: URLSearchParams): Observable<any> {
        return Observable.of(RowData);

    }

}

