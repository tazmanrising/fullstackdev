import { Component, OnInit } from '@angular/core'
import { CoinService } from './coin.service'


@Component({
    template: `
    <div>test</div>
       <div *ngFor="let coin of coinsList">
     <span>{{coin.coinName}} {{coin.price | currency:'USD':true:'1.2-2'}}</span> 
    </div>
    `
})

export class CoinsListComponent implements OnInit {
    errorMessage: string;
    //coinsList:[] //any;  //[];

    coinsList = [];

    constructor(
        private coinService: CoinService
    ) { }

    ngOnInit() {
        console.log('oninit coins')

        this.coinService.getAllCoins()
            .subscribe(
            (data) => {
                for (let key in data) {
                    //this.coinsList.push(data[key]);
                    this.coinsList.push({coinName:key,price:data[key].USD}); //change is here

                    //console.log('key', key)
                }
            },
            (error) => console.log("error : " + error)

            );
        // this.coinService.getAllCoins()
        //     .subscribe(coinsList => this.coinsList = coinsList,
        //     error => this.errorMessage = <any>error);

    }

}