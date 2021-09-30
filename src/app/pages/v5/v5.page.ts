import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-v5',
  templateUrl: './v5.page.html',
  styleUrls: ['./v5.page.scss'],
})
export class V5Page implements OnInit {

  dataNames =[];
  dataJson: any;
  
  constructor(private router: Router) { }
  

  ngOnInit(){
    this.initializaIntems();
  }

  evento(){
    this.router.navigate(['/']);
  }

  initializaIntems(){
    this.dataNames = [
      {
        name: 'Angel de Jesus',
        edad: 22, 
      },
      {
        name: 'Jose Jose',
        edad: 30,
      },
      {
        name: 'Andres',
        edad: 40,
      }
    ];
    this.dataJson = JSON.parse(JSON.stringify(this.dataNames));
    console.log(this.dataJson);
  }

}
