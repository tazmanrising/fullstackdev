import { Component, OnInit } from '@angular/core'
import { CoinService } from './coin.service'


@Component({
    template: `
    <div *ngFor="let coin of coinsList">
     abc
     </div>
    `
})

export class CoinsListComponent implements OnInit {

    coinsList:any[]

    constructor(
        private coinService: CoinService
    ){

    }

    ngOnInit() {
        console.log('oninit coins')
        this.coinsList = this.coinService.getAllCoins()
    }

}