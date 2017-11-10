import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';

import { Training } from './training.model';
import { TrainingService } from './training.service';

import { FormatDatePipe } from '../../../core/pipes/format-date.pipe';

@Component({
    selector: 'ccn-training',
    templateUrl: './training.component.html',
    styleUrls: ['./training.component.css'],
    providers: [TrainingService, FormatDatePipe]
})

export class TrainingComponent implements OnInit {
    trainingMessage: Training;
    errorMessage: string;

    

    constructor(private trainingService: TrainingService, private formatDate: FormatDatePipe) {}

    getTrainingMessage(): void {

        this.trainingService.getTrainingMessage()
             .subscribe(
            value => this.trainingMessage = value,
            error => this.errorMessage = <any>error);
    }

    ngOnInit(): void {
        this.getTrainingMessage();
    }

}
