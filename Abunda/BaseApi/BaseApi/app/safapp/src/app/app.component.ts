import { Component, OnInit } from '@angular/core';
// import { OnlyNumbers } from './core/directives/onlynumbrer.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  group1A: number = 0;
  group1B: number = 0;

  group1Total: number;


  constructor() {

  }


  findTotal() {
    this.group1Total = +this.group1A + +this.group1B;
  }


  ngOnInit() {
    // group1A

    // (<HTMLInputElement>document.getElementById("group1C")).value = "5";  // response.name;
    // let inputValue = (document.getElementById(elementId) as HTMLInputElement).value;
    // var inputValue = (<HTMLInputElement>document.getElementById(elementId)).value;

    // let pets = new Set(["Cat", "Dog", "Hamster"]);
    // pets["species"] = "mammals";

    // for (let pet in pets) {
    //    console.log(pet); // "species"
    // }

    // for (let pet of pets[1]) {
    //     console.log(pet); // "Cat", "Dog", "Hamster"
    // }


  }

  // findTotal() {
  //   let arr = document.getElementsByName('qty');
  //   let tot = 0;
  //   for (var i = 0; i < arr.length; i++) {
  //     if (parseInt(arr[i].value))
  //       tot += parseInt(arr[i].value);
  //   }
  //   //document.getElementById('total').value = tot;
  //   let inputValue = (<HTMLInputElement>document.getElementById(elementId)).value;
  //   //inputValue = (document.getElementById(elementId)).value;
  // }





}
