import { Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { QsiPaneComponent } from '../qsi-pane/qsi-pane.component';



@Component({
    selector: 'qsi-form',
    templateUrl: './qsi-form.component.html',
    styleUrls: ['./qsi-form.component.css'],
  
})
export class QsiFormComponent implements OnInit, OnChanges {

    isQsiUpOrDown: boolean=true;

    ngOnChanges(changes: SimpleChanges): void {
           
        }

 
    verticalShifts() {

        this.qsiPane.verticalShifts();
        setTimeout(() => {
            this.isQsiUpOrDown = this.isQsiUp();
        }, 300
        );
       
       
    }


    isQsiUp(): boolean {
        return (this.qsiPane.isQsiUp());
    }


    constructor(private qsiPane: QsiPaneComponent) { }

  ngOnInit() { }

  


  

}
