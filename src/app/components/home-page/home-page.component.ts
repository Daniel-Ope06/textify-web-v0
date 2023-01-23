import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  textInput: string = "";
  characterInput: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    console.log("SUBMIT");
    // Perform the submit action, such as sending data to a server
  }

}
