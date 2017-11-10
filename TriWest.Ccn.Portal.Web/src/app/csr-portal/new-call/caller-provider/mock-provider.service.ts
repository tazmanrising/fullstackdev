export { Provider } from './provider.model';
export { ProviderService } from './caller-provider.service';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Http, Response, URLSearchParams } from '@angular/http';
import { MockProvider } from './mock-provider-data';

export class MockProviderService {

    public getProviders(searchParams: URLSearchParams): Observable<any> {       
        return Observable.of(MockProvider);
    }
    
}

