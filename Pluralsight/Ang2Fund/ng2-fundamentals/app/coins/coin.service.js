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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/catch");
var CoinService = (function () {
    function CoinService(http) {
        this.http = http;
        this._url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,EOS,DASH&tsyms=USD';
    }
    CoinService.prototype.getAllCoins = function () {
        return this.http.get(this._url)
            .map(function (res) { return res.json(); })
            .do(function (data) { return console.log('coins ' + JSON.stringify(data)); })
            .catch(this.handleError);
        //return this.http.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,EOS,DASH&tsyms=USD').map(res => res.json());
    };
    CoinService.prototype.ZgetAllCoins = function () {
        return this.http.get(this._url)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('all test' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    CoinService.prototype.XgetAllCoins = function () {
        var blah = [];
        this.getCoins().subscribe(function (data) {
            blah = data;
            //console.log('subscriber coins', blah)
        });
        return blah;
    };
    CoinService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    CoinService.prototype.getCoins = function () {
        return this.http.get(this._url)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); }) // do operator to peek 
            .catch(this.handleError);
    };
    return CoinService;
}());
CoinService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CoinService);
exports.CoinService = CoinService;
var allC = [{
        "BTC": {
            "USD": 3349.1
        },
        "ETH": {
            "USD": 296.3
        },
        "LTC": {
            "USD": 47.56
        },
        "EOS": {
            "USD": 1.83
        },
        "DASH": {
            "USD": 195.83
        }
    }];
//# sourceMappingURL=coin.service.js.map