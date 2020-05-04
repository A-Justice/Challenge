import { Component, OnInit } from '@angular/core';
import { PricingDTO } from 'src/model/Dtos/pricing.dto';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  pricings : PricingDTO[] = [];
  constructor() { }

  ngOnInit() {
    this.getPricings()
    .then(response=>{
      this.pricings = response;
    })
  }

  /**
   * Get the pricings from the server
   */
  getPricings(): Promise<PricingDTO[]>{
    return new Promise((resolve,reject)=>{
      resolve([
        new PricingDTO({name:"Bronze",price:20,features:["feature 1","feature 2"]}),
        new PricingDTO({name:"Silver",price:50,features:["feature 1","feature 2","feature 3"]}),
        new PricingDTO({name:"Gold",price:100,features:["feature 1","feature 2","feature 3","feature 4"]})
      ])
    })
  }

}
