"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var coin_service_1 = require("./coin.service");
var CoinsListComponent = (function () {
    function CoinsListComponent(coinService) {
        this.coinService = coinService;
        //coinsList:[] //any;  //[];
        this.coinsList = [];
    }
    CoinsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('oninit coins');
        this.coinService.getAllCoins()
            .subscribe(function (data) {
            for (var key in data) {
                //this.coinsList.push(data[key]);
                _this.coinsList.push({ coinName: key, price: data[key].USD }); //change is here
            }
        }, function (error) { return console.log("error : " + error); });
        // this.coinService.getAllCoins()
        //     .subscribe(coinsList => this.coinsList = coinsList,
        //     error => this.errorMessage = <any>error);
    };
    return CoinsListComponent;
}());
CoinsListComponent = __decorate([
    core_1.Component({
        template: "\n    <div>test</div>\n       <div *ngFor=\"let coin of coinsList\">\n     <span>{{coin.coinName}} {{coin.price | currency:'USD':true:'1.2-2'}}</span> \n    </div>\n    "
    }),
    __metadata("design:paramtypes", [coin_service_1.CoinService])
], CoinsListComponent);
exports.CoinsListComponent = CoinsListComponent;
//# sourceMappingURL=coins-list.component.js.map