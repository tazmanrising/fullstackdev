import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  group1A: number = 0;
  group1B: number = 0;


  constructor() {

  }


  ngOnInit() {
    //group1A

    //(<HTMLInputElement>document.getElementById("group1C")).value = "5";  // response.name;
    
    
    //let inputValue = (document.getElementById(elementId) as HTMLInputElement).value;
    //var inputValue = (<HTMLInputElement>document.getElementById(elementId)).value;

    // let pets = new Set(["Cat", "Dog", "Hamster"]);
    // pets["species"] = "mammals";
    
    // for (let pet in pets) {
    //    console.log(pet); // "species"
    // }
    
    // for (let pet of pets[1]) {
    //     console.log(pet); // "Cat", "Dog", "Hamster"
    // }
 

  }


}
