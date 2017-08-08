import { Injectable } from '@angular/core'

// tell typscript to ignore toastr , not to complain about it
declare let toastr:any   // still global scope

@Injectable()
export class ToastrService {

    // create 4 methods to wrap around each of toastrs messages

    success(message: string, title?: string){
        toastr.success(message, title)
    }

    info(message: string, title?: string){
        toastr.info(message, title)
    }

    warning(message: string, title?: string){
        toastr.warning(message, title)
    }

    Error(message: string, title?: string){
        toastr.error(message, title)
    }
    
}