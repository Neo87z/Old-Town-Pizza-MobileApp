import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CartPage } from '../cart/cart';
import { PizzaDetailsProvider } from '../../providers/pizza-details/pizza-details';
@Component({
  selector: 'page-item_info',
  templateUrl: 'item_info.html'
})
export class Item_infoPage {
  private favorite_icon = false;
  private ID: number;
  private PizzaCount: number;
  private PizzaID: number;
  private PizzaPriceBySize: any;
  private PizzaPriceByCrust: any;
  private PizzaPriceByToppings: any;
  private TotalPizzaPrice: any;
  private SelectedSize: any;
  private SelectedCrust: any;
  private SelectedCrustShow: any;
  private showScroll: any;
  private showScrollFeta: any;
  Pizza: any;
  tab: string = "select_size";

  constructor(public navCtrl: NavController, public navParams: NavParams, private PizzaService: PizzaDetailsProvider) {
    this.PizzaID = navParams.get('PizzaId');
    console.log("Fkk Yea Pizza ID", this.PizzaID)

  }
  ngOnInit(): void {
    this.LoadPizzaById();
    this.PizzaCount = 1;
    this.PizzaPriceByCrust = 0;
    this.PizzaPriceByToppings = 0;
    console.log(this.PizzaCount)


  }



  async LoadPizzaById() {

    this.PizzaService.getPizzaDetailsById(this.PizzaID).subscribe(res => {

      this.Pizza = res[0]
      console.log(this.Pizza)
      this.PizzaPriceBySize = this.Pizza.MediumPrice;
      this.SelectedSize = "Medium"
      this.SelectedCrust = "Regular"
      this.SelectedCrustShow = "Regular Crust"
      this.CalculatePizzaPrice();
      this.showScroll = true;


    });


  }

  CalculatePizzaPrice() {
    console.log(this.PizzaPriceBySize, "Size");
    console.log(this.PizzaPriceByCrust, "Crust");
    console.log(this.PizzaPriceByToppings, "Toppings");
    console.log(this.PizzaCount, "Count");
    console.log(this.TotalPizzaPrice, "TpRice");
    this.TotalPizzaPrice = (parseFloat(this.PizzaPriceBySize)) * this.PizzaCount;
    console.log(this.TotalPizzaPrice);
    this.TotalPizzaPrice = this.TotalPizzaPrice + parseFloat(this.PizzaPriceByCrust) + parseFloat(this.PizzaPriceByToppings)
    this.TotalPizzaPrice = parseFloat(this.TotalPizzaPrice).toFixed(2)

  }

  changePizzaCrust(crust) {
    if (crust == "Regualar") {
      this.PizzaPriceByCrust = 0;
      this.SelectedCrust = "Regualar"
      this.SelectedCrustShow = "Regular Crust"
      this.CalculatePizzaPrice();

    } else if (crust == "ThinCrust") {
      this.PizzaPriceByCrust = 0;
      this.SelectedCrust = "ThinCrust"
      this.SelectedCrustShow = "Thin Crust"
      this.CalculatePizzaPrice();

    } else if (crust == "GlutenFreeCrust") {
      this.PizzaPriceByCrust = 4;
      this.SelectedCrust = "GlutenFreeCrust"
      this.SelectedCrustShow = "Gluten Free Crust"
      this.CalculatePizzaPrice();

    } else if (crust == "GlutenFreeBrocluChedar") {
      this.PizzaPriceByCrust = 4;
      this.SelectedCrust = "GlutenFreeBrocluChedar"
      this.SelectedCrustShow = "Gluten Free Brocli & Chedar Crust"
      this.CalculatePizzaPrice();

    } else if (crust == "GlutenFreeCaluflower") {
      this.PizzaPriceByCrust = 4;
      this.SelectedCrust = "GlutenFreeCaluflower"
      this.SelectedCrustShow = "Gluten Free Cauliflower Crust"
      this.CalculatePizzaPrice();

    }

  }

  chnageFetaToppngs (){
    this.showScroll = false;
    this.showScrollFeta = true;
    
  }
  chnageToppingMoz() {

    this.showScroll = true;
    this.showScrollFeta = false;

  }

  changePizzaPrie(size) {
    if (size == "Solo") {
      this.PizzaPriceBySize = this.Pizza.SoloPrice;
      this.SelectedSize = "Solo"
      this.CalculatePizzaPrice();

    } else if (size == "Small") {
      this.PizzaPriceBySize = this.Pizza.SmallPrice;
      this.SelectedSize = "Small"
      this.CalculatePizzaPrice();

    } else if (size == "Medium") {
      this.PizzaPriceBySize = this.Pizza.MediumPrice;
      this.SelectedSize = "Medium"
      this.CalculatePizzaPrice();

    } else if (size == "Large") {
      this.PizzaPriceBySize = this.Pizza.LargePrice;
      this.SelectedSize = "Large"
      this.CalculatePizzaPrice();

    } else if (size == "Jumbo") {
      this.PizzaPriceBySize = this.Pizza.JumboPrice;
      this.SelectedSize = "Jumbo"
      this.CalculatePizzaPrice();

    }

    console.log(size)
    console.log(this.PizzaPriceBySize)

  }
  toggleFavorite_icon() {
    this.favorite_icon = !this.favorite_icon;
  }

  RemovePizza() {
    if (this.PizzaCount != 1) {
      this.PizzaCount = this.PizzaCount - 1;
      this.CalculatePizzaPrice();
    }

  }
  AddMorePizza() {
    this.PizzaCount = this.PizzaCount + 1;
    this.CalculatePizzaPrice();
  }


  cart() {
    this.navCtrl.push(CartPage)
  }


}
