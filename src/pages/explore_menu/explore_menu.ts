import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';
import { Item_infoPage } from '../item_info/item_info';
import { PizzaDetailsProvider } from '../../providers/pizza-details/pizza-details'
@Component({
  selector: 'page-explore_menu',
  templateUrl: 'explore_menu.html'
})
export class Explore_menuPage implements OnInit {
  crust: string = "1";
  size: string = "1";
  all_categories: string = "pizza";

  Pizza: any[] = [];
  constructor(private PizzaService:PizzaDetailsProvider,public navCtrl: NavController,private loadingCtrl:LoadingController) {

  }
  ngOnInit(): void {
    this.LoadPizza();
  }

  async LoadPizza(){

 
    this.PizzaService.getPizzaDetails().subscribe(res=>{
      
      this.Pizza=[...this.Pizza, ...res["Data"]];
      console.log(this.Pizza)
      console.log(res["Data"])

    })

  }

  item_info(id) {
    console.log("Pizza ID",id)
    this.navCtrl.push(Item_infoPage,{
      PizzaId:id
    })
  }

}
