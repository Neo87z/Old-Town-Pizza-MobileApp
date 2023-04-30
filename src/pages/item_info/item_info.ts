import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CartPage } from '../cart/cart';
import { PizzaDetailsProvider } from '../../providers/pizza-details/pizza-details';
@Component({
  selector: 'page-item_info',
  templateUrl: 'item_info.html'
})

export class Item_infoPage {
  @ViewChild('toppingCount') toppingCount: ElementRef;
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
  private LoadedValues: any;

  private RegularCheesePricex: any;
  private thriotyCheesePrice: any;
  private fiftyCheesePricve: any;
  private DoubleCheesePrice: any;
  private SelectedPreferedMozCheese: any;
  private SelectedPreferedMozCheesePrice: any;
  private SelectedPreferedMozCheesePriceBool: any;
  private CheeseSelectedSide: any;
  private CheeseMenueSelected: any;
  private MozzerlaCheeseSelected: any;
  private GoatCHeeseSelected: any;
  private SelectedPreferedGoatCheesePriceBool: any;
  private MeatmenueSelected: any;
  private SelectedHam: any;
  private SalamiSelected: any;
  private CrumbledBeaconSeletced: any;
  private SlicedBeaconSelected: any;
  private PeporoniSelected: any;
  private ItalianSausgeSelcted: any;
  private GroundBeefSeletec: any;
  private SeasooedChikenSelected: any;
  private MushroomSelected: any;
  private RedOnionSelected: any;
  private GreenPeppersSelected: any;
  private TomatoesSelected: any;
  private OlivesSelected: any;
  private HotPpersSelected: any;
  private JapoenoSelected: any;
  private VegemainMenue: any;
  private PineappleSelcted: any;
  private BBQSauce: any;
  private DonairSauce: any;
  private PizzaSauce: any;
  private Chorizo: any;
  private SauceMainMenueSelected: any;


  private SoloPizzaChecked: any;
  private SmallPizzaChecked: any;
  private MediumPizzaChecked: any;
  private LargePizzaChecked: any;
  private JumboPizzaChecked: any;


  private RegularCrustSelectd: any;
  private ThinCrustSelcted: any;
  private GlutenFreeCrustSelected: any;
  private GlutenFreBrocliChedar: any;
  private GlutenFreeCauluflowerCrust: any;

  private CheeseSelectedMainMenue: any;
  private MeatSelctedMaiNmenue: any;
  private VegetablesSelectedMainMenue: any;
  private SauceSelectedMainMenue: any;

  private MozzeralSelected: any;
  private GoatCheseSeletec: any;
  private FetaCheeseSelected: any;

  private HamSelected: any;
  private SalamiSelectedTopp: any;
  private CrumbkedbeaconSelected: any;
  private SlicedBeacoNSelected: any;
  private peporoniSelcted: any;
  private ItalianSasugeSelcted: any;
  private groundBeefSelcted: any;
  private SeasonSchickeSelcted: any;
  private ChorizoSauseSelctec: any;


  private Mushrooms: any;
  private RedOnion: any;
  private GreenPepper: any;
  private Tomatoes: any;
  private olives: any;
  private HotPeper: any;
  private Jalapeno: any;
  private PineApple: any;


  private BBqSauce: any;
  private DonairSauceTopp: any;
  private PiizaSaue: any;
  private BBQSaunceNone: any;









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
    this.SoloPizzaChecked = false;
    this.SmallPizzaChecked = false;
    this.MediumPizzaChecked = true;
    this.LargePizzaChecked = false;
    this.JumboPizzaChecked = false;
    this.RegularCrustSelectd = true;
    this.ThinCrustSelcted = false;
    this.GlutenFreeCrustSelected = false;
    this.GlutenFreBrocliChedar = false;
    this.GlutenFreeCauluflowerCrust = false;
    this.CheeseSelectedMainMenue = false;
    this.MeatSelctedMaiNmenue = false;
    this.VegetablesSelectedMainMenue = false;
    this.SauceSelectedMainMenue = false;
    this.MozzeralSelected = false;
    this.GoatCheseSeletec = false;
    this.FetaCheeseSelected = false;


    this.HamSelected = false;
    this.SalamiSelectedTopp = false;
    this.CrumbkedbeaconSelected = false;
    this.SlicedBeacoNSelected = false;
    this.peporoniSelcted = false;
    this.ItalianSasugeSelcted = false;
    this.groundBeefSelcted = false;
    this.SeasonSchickeSelcted = false;
    this.ChorizoSauseSelctec = false;

    this.Mushrooms = false;
    this.RedOnion = false;
    this.GreenPepper = false;
    this.Tomatoes = false;
    this.olives = false;
    this.HotPeper = false;
    this.Jalapeno = false;
    this.PineApple = false;

    this.BBqSauce = false;
    this.DonairSauceTopp = false;
    this.PiizaSaue = false;
    this.BBQSaunceNone = true;



  }

  SelectedCrumbledBeaconFromMenue() {
    this.UnSelectAllSelections();
    this.CrumbledBeaconSeletced = true;
    this.HamSelected = false;
    this.SalamiSelectedTopp = false;
    this.CrumbkedbeaconSelected = true;
    this.SlicedBeacoNSelected = false;
    this.peporoniSelcted = false;
    this.ItalianSasugeSelcted = false;
    this.groundBeefSelcted = false;
    this.SeasonSchickeSelcted = false;
    this.ChorizoSauseSelctec = false;

  }
  SelectedSlicedBeaconFromMenue() {
    this.UnSelectAllSelections();
    this.SlicedBeaconSelected = true;
    this.HamSelected = false;
    this.SalamiSelectedTopp = false;
    this.CrumbkedbeaconSelected = false;
    this.SlicedBeacoNSelected = true;
    this.peporoniSelcted = false;
    this.ItalianSasugeSelcted = false;
    this.groundBeefSelcted = false;
    this.SeasonSchickeSelcted = false;
    this.ChorizoSauseSelctec = false;
  }
  SelectePeporoniSelectedFromMenuye() {
    this.UnSelectAllSelections();
    this.PeporoniSelected = true;
    this.HamSelected = false;
    this.SalamiSelectedTopp = false;
    this.CrumbkedbeaconSelected = false;
    this.SlicedBeacoNSelected = false;
    this.peporoniSelcted = true;
    this.ItalianSasugeSelcted = false;
    this.groundBeefSelcted = false;
    this.SeasonSchickeSelcted = false;
    this.ChorizoSauseSelctec = false;
  }
  SelecctedItalianSausgeSelctedFromMenue() {
    this.UnSelectAllSelections();
    this.ItalianSausgeSelcted = true;
    this.HamSelected = false;
    this.SalamiSelectedTopp = false;
    this.CrumbkedbeaconSelected = false;
    this.SlicedBeacoNSelected = false;
    this.peporoniSelcted = false;
    this.ItalianSasugeSelcted = true;
    this.groundBeefSelcted = false;
    this.SeasonSchickeSelcted = false;
    this.ChorizoSauseSelctec = false;
  }
  SelectedGroudnBeefFromMenue() {
    this.UnSelectAllSelections();
    this.GroundBeefSeletec = true;
    this.HamSelected = false;
    this.SalamiSelectedTopp = false;
    this.CrumbkedbeaconSelected = false;
    this.SlicedBeacoNSelected = false;
    this.peporoniSelcted = false;
    this.ItalianSasugeSelcted = false;
    this.groundBeefSelcted = true;
    this.SeasonSchickeSelcted = false;
    this.ChorizoSauseSelctec = false;
  }
  SelecedSeaonedChickneFromMenue() {
    this.UnSelectAllSelections();
    this.SeasooedChikenSelected = true;
    this.HamSelected = false;
    this.SalamiSelectedTopp = false;
    this.CrumbkedbeaconSelected = false;
    this.SlicedBeacoNSelected = false;
    this.peporoniSelcted = false;
    this.ItalianSasugeSelcted = false;
    this.groundBeefSelcted = false;
    this.SeasonSchickeSelcted = true;
    this.ChorizoSauseSelctec = false;
  }
  SelectedChorizoFrommainMenue() {
    this.UnSelectAllSelections();
    this.Chorizo = true;
    this.HamSelected = false;
    this.SalamiSelectedTopp = false;
    this.CrumbkedbeaconSelected = false;
    this.SlicedBeacoNSelected = false;
    this.peporoniSelcted = false;
    this.ItalianSasugeSelcted = false;
    this.groundBeefSelcted = false;
    this.SeasonSchickeSelcted = false;
    this.ChorizoSauseSelctec = true;
  }

  SelectedMushroomsFromMenue() {
    this.UnSelectAllSelections();
    this.MushroomSelected = true;

    this.Mushrooms = true;
    this.RedOnion = false;
    this.GreenPepper = false;
    this.Tomatoes = false;
    this.olives = false;
    this.HotPeper = false;
    this.Jalapeno = false;
    this.PineApple = false;

  }

  SelectedRedOnionFromMenue() {
    this.UnSelectAllSelections();
    this.RedOnionSelected = true;

    this.Mushrooms = false;
    this.RedOnion = true;
    this.GreenPepper = false;
    this.Tomatoes = false;
    this.olives = false;
    this.HotPeper = false;
    this.Jalapeno = false;
    this.PineApple = false;
  }

  SelectedGreenPepperFromMenue() {
    this.UnSelectAllSelections();
    this.GreenPeppersSelected = true;
    this.Mushrooms = false;
    this.RedOnion = false;
    this.GreenPepper = true;
    this.Tomatoes = false;
    this.olives = false;
    this.HotPeper = false;
    this.Jalapeno = false;
    this.PineApple = false;
  }

  SelectedTomatoesFrommenue() {
    this.UnSelectAllSelections();
    this.TomatoesSelected = true;


    this.Mushrooms = false;
    this.RedOnion = false;
    this.GreenPepper = false;
    this.Tomatoes = true;
    this.olives = false;
    this.HotPeper = false;
    this.Jalapeno = false;
    this.PineApple = false;
  }

  SelectedOlivesFromMenue() {
    this.UnSelectAllSelections();
    this.OlivesSelected = true;

    this.Mushrooms = false;
    this.RedOnion = false;
    this.GreenPepper = false;
    this.Tomatoes = false;
    this.olives = true;
    this.HotPeper = false;
    this.Jalapeno = false;
    this.PineApple = false;
  }

  SelectedHotpeperFromMenue() {
    this.UnSelectAllSelections();
    this.HotPpersSelected = true;

    this.Mushrooms = false;
    this.RedOnion = false;
    this.GreenPepper = false;
    this.Tomatoes = false;
    this.olives = false;
    this.HotPeper = true;
    this.Jalapeno = false;
    this.PineApple = false;
  }

  SelectedJalapenoFromMenue() {
    this.UnSelectAllSelections();
    this.JapoenoSelected = true;

    this.Mushrooms = false;
    this.RedOnion = false;
    this.GreenPepper = false;
    this.Tomatoes = false;
    this.olives = false;
    this.HotPeper = false;
    this.Jalapeno = true;
    this.PineApple = false;
  }

  SelectedPineAppleFromMenue() {
    this.UnSelectAllSelections();
    this.PineappleSelcted = true;

    this.Mushrooms = false;
    this.RedOnion = false;
    this.GreenPepper = false;
    this.Tomatoes = false;
    this.olives = false;
    this.HotPeper = false;
    this.Jalapeno = false;
    this.PineApple = true;
  }

  SelectedBBqSauceNone() {
    this.UnSelectAllSelections();
    
    this.BBQSauce = false;
    this.BBQSaunceNone=true;
    this.BBqSauce = false;
    this.DonairSauceTopp = false;
    this.PiizaSaue = false;
  }

  SelectedBBqSauce() {
    this.UnSelectAllSelections();
    this.BBQSauce = true;

    this.BBqSauce = true;
    this.DonairSauceTopp = false;
    this.PiizaSaue = false;
  }

  SelectedDonairSauce() {
    this.UnSelectAllSelections();
    this.DonairSauce = true;
    this.BBqSauce = false;
    this.DonairSauceTopp = true;
    this.PiizaSaue = false;
  }

  SelectedPizzaSauce() {
    this.UnSelectAllSelections();
    this.PizzaSauce = true;

    this.BBqSauce = false;
    this.DonairSauceTopp = false;
    this.PiizaSaue = true;
  }
  SeledtedChorizo() {
    this.UnSelectAllSelections();
    this.Chorizo = true;
  }






  UnSelectAllSelections() {
    this.SelectedHam = false;
    this.SalamiSelected = false;
    this.CrumbledBeaconSeletced = false;
    this.SlicedBeaconSelected = false;
    this.PeporoniSelected = false;
    this.ItalianSausgeSelcted = false;
    this.GroundBeefSeletec = false;
    this.SeasooedChikenSelected = false;

    this.MushroomSelected = false;
    this.RedOnionSelected = false;;
    this.GreenPeppersSelected = false;
    this.TomatoesSelected = false;
    this.OlivesSelected = false;
    this.HotPpersSelected = false;
    this.JapoenoSelected = false;
    this.PineappleSelcted = false;
    this.BBQSauce = false;
    this.DonairSauce = false;
    this.PizzaSauce = false;
    this.Chorizo = false;

  }

  SelectedSalammiFromMenye() {
    this.UnSelectAllSelections();
    this.SalamiSelected = true;
    this.HamSelected = false;
    this.SalamiSelectedTopp = true;
    this.CrumbkedbeaconSelected = false;
    this.SlicedBeacoNSelected = false;
    this.peporoniSelcted = false;
    this.ItalianSasugeSelcted = false;
    this.groundBeefSelcted = false;
    this.SeasonSchickeSelcted = false;
    this.ChorizoSauseSelctec = false;
  }



  async LoadPizzaById() {


    this.PizzaService.getPizzaDetailsById(this.PizzaID).subscribe(res => {

      this.Pizza = res[0]
      console.log(this.Pizza, "Firsdt")
      this.PizzaPriceBySize = this.Pizza.MediumPrice;
      this.SelectedSize = "Medium"
      this.SelectedCrust = "Regular"
      this.SelectedCrustShow = "Regular Crust"
      this.CalculatePizzaPrice();
      this.ChangeCheesePrice("Medium");
      this.showScroll = true;
      this.SelectedPreferedMozCheesePriceBool = false;
      this.CheeseMenueSelected = false;
      this.MozzerlaCheeseSelected = false;


    });


  }

  SelectHamFromMenue() {
    this.UnSelectAllSelections();
    this.SelectedHam = true;
    this.HamSelected = true;
    this.SalamiSelectedTopp = false;
    this.CrumbkedbeaconSelected = false;
    this.SlicedBeacoNSelected = false;
    this.peporoniSelcted = false;
    this.ItalianSasugeSelcted = false;
    this.groundBeefSelcted = false;
    this.SeasonSchickeSelcted = false;
    this.ChorizoSauseSelctec = false;

  }


  chnageCheeseSelectedSide(side) {
    if (side == "Whole") {
      this.CheeseSelectedSide = "Whole"

    } else if (side == "Left") {
      this.CheeseSelectedSide = "Left"

    } else if (side == "Right") {
      this.CheeseSelectedSide = "Right"

    }

  }
  ChnagePreferdGoatCheese(Choice) {
    if (Choice === "30") {
      console.log("30")
      this.SelectedPreferedMozCheesePrice = this.thriotyCheesePrice;
      this.SelectedPreferedGoatCheesePriceBool = true;

    }

    if (Choice === "50") {
      console.log("50")
      this.SelectedPreferedMozCheesePrice = this.fiftyCheesePricve;
      this.SelectedPreferedGoatCheesePriceBool = true;

    }
    if (Choice === "double") {
      console.log("60")
      this.SelectedPreferedMozCheesePrice = this.DoubleCheesePrice;
      this.SelectedPreferedGoatCheesePriceBool = true;
    }



  }

  chnagePrefedCheese(Choice) {
    if (Choice === "30") {
      console.log("30")
      this.SelectedPreferedMozCheesePrice = this.thriotyCheesePrice;
      this.SelectedPreferedMozCheesePriceBool = true;

    }

    if (Choice === "50") {
      console.log("50")
      this.SelectedPreferedMozCheesePrice = this.fiftyCheesePricve;
      this.SelectedPreferedMozCheesePriceBool = true;

    }
    if (Choice === "double") {
      console.log("60")
      this.SelectedPreferedMozCheesePrice = this.DoubleCheesePrice;
      this.SelectedPreferedMozCheesePriceBool = true;
    }



  }

  ChangeCheesePrice(SizePizza) {

    if (SizePizza === "Solo") {
      this.thriotyCheesePrice = 0.90;
      this.fiftyCheesePricve = 1.10;
      this.DoubleCheesePrice = 2.20;
    }

    if (SizePizza === "Small") {
      this.thriotyCheesePrice = 1.40;
      this.fiftyCheesePricve = 1.95;
      this.DoubleCheesePrice = 3.60;
    }
    if (SizePizza === "Medium") {
      this.thriotyCheesePrice = 2.25;
      this.fiftyCheesePricve = 2.75;
      this.DoubleCheesePrice = 6.60;
    }
    if (SizePizza === "Large") {
      this.thriotyCheesePrice = 2.25;
      this.fiftyCheesePricve = 3.30;
      this.DoubleCheesePrice = 6.60;
    }
    if (SizePizza === "Jumbo") {
      this.thriotyCheesePrice = 3.0;
      this.fiftyCheesePricve = 5.00;
      this.DoubleCheesePrice = 9.90;
    }



  }

  CalculatePizzaPrice() {

    this.TotalPizzaPrice = (parseFloat(this.PizzaPriceBySize)) * this.PizzaCount;
    this.TotalPizzaPrice = this.TotalPizzaPrice + parseFloat(this.PizzaPriceByCrust) + parseFloat(this.PizzaPriceByToppings)
    this.TotalPizzaPrice = parseFloat(this.TotalPizzaPrice).toFixed(2)


  }

  changePizzaCrust(crust) {
    if (crust == "Regualar") {
      this.PizzaPriceByCrust = 0;
      this.SelectedCrust = "Regualar"
      this.SelectedCrustShow = "Regular Crust"
      this.CalculatePizzaPrice();
      this.RegularCrustSelectd = true;
      this.ThinCrustSelcted = false;
      this.GlutenFreeCrustSelected = false;
      this.GlutenFreBrocliChedar = false;
      this.GlutenFreeCauluflowerCrust = false;


    } else if (crust == "ThinCrust") {
      this.PizzaPriceByCrust = 0;
      this.SelectedCrust = "ThinCrust"
      this.SelectedCrustShow = "Thin Crust"
      this.CalculatePizzaPrice();
      this.RegularCrustSelectd = false;
      this.ThinCrustSelcted = true;
      this.GlutenFreeCrustSelected = false;
      this.GlutenFreBrocliChedar = false;
      this.GlutenFreeCauluflowerCrust = false;


    } else if (crust == "GlutenFreeCrust") {
      this.PizzaPriceByCrust = 4;
      this.SelectedCrust = "GlutenFreeCrust"
      this.SelectedCrustShow = "Gluten Free Crust"
      this.CalculatePizzaPrice();
      this.RegularCrustSelectd = false;
      this.ThinCrustSelcted = false;
      this.GlutenFreeCrustSelected = true;
      this.GlutenFreBrocliChedar = false;
      this.GlutenFreeCauluflowerCrust = false;


    } else if (crust == "GlutenFreeBrocluChedar") {
      this.PizzaPriceByCrust = 4;
      this.SelectedCrust = "GlutenFreeBrocluChedar"
      this.SelectedCrustShow = "Gluten Free Brocli & Chedar Crust"
      this.CalculatePizzaPrice();
      this.RegularCrustSelectd = false;
      this.ThinCrustSelcted = false;
      this.GlutenFreeCrustSelected = false;
      this.GlutenFreBrocliChedar = true;
      this.GlutenFreeCauluflowerCrust = false;


    } else if (crust == "GlutenFreeCaluflower") {
      this.PizzaPriceByCrust = 4;
      this.SelectedCrust = "GlutenFreeCaluflower"
      this.SelectedCrustShow = "Gluten Free Cauliflower Crust"
      this.CalculatePizzaPrice();
      this.RegularCrustSelectd = false;
      this.ThinCrustSelcted = false;
      this.GlutenFreeCrustSelected = false;
      this.GlutenFreBrocliChedar = false;
      this.GlutenFreeCauluflowerCrust = true;


    }


  }
  ChangeSelectFetaToppings() {
    this.SelectedPreferedGoatCheesePriceBool = false;
    this.GoatCHeeseSelected = false;
    this.SelectedPreferedGoatCheesePriceBool;
    this.MozzerlaCheeseSelected = false;
    this.SelectedPreferedMozCheesePriceBool = false;
    this.showScrollFeta = true;
    this.MozzeralSelected = false;
    this.GoatCheseSeletec = false;
    this.FetaCheeseSelected = true;
  }

  chnageFetaToppngs() {
    this.showScroll = false;
    this.showScrollFeta = true;

  }
  chnageToppingMoz() {
    this.SelectedPreferedGoatCheesePriceBool = false;
    this.MozzerlaCheeseSelected = true;
    this.showScroll = true;
    this.showScrollFeta = false;
    this.GoatCHeeseSelected = false;
    this.SelectedPreferedGoatCheesePriceBool = false;


    this.MozzeralSelected = true;
    this.GoatCheseSeletec = false;
    this.FetaCheeseSelected = false;

  }

  CnageGotCheeseFromMenue() {
    this.showScrollFeta = false;
    this.SelectedPreferedGoatCheesePriceBool = false;
    this.MozzerlaCheeseSelected = false;
    this.SelectedPreferedMozCheesePriceBool = false;
    this.GoatCHeeseSelected = true;

    this.MozzeralSelected = false;
    this.GoatCheseSeletec = true;
    this.FetaCheeseSelected = false;


  }
  ChnageCheeseMenueSelected() {
    this.UnSelectAllSelections();
    this.CheeseMenueSelected = true;
    this.MeatmenueSelected = false;
    this.SauceMainMenueSelected = false;
    this.VegemainMenue = false;

    this.CheeseSelectedMainMenue = true;
    this.MeatSelctedMaiNmenue = false;
    this.VegetablesSelectedMainMenue = false;
    this.SauceSelectedMainMenue = false;

  }
  ChnageSauceMainMenue() {
    this.UnSelectAllSelections();
    this.SauceMainMenueSelected = true;
    this.VegemainMenue = false;
    this.MeatmenueSelected = false;
    this.CheeseMenueSelected = false;
    this.MozzerlaCheeseSelected = false;
    this.SelectedPreferedMozCheesePriceBool = false;


    this.CheeseSelectedMainMenue = false;
    this.MeatSelctedMaiNmenue = false;
    this.VegetablesSelectedMainMenue = false;
    this.SauceSelectedMainMenue = true;

  }

  ChnageVegetblesSelectedMainMenue() {
    this.UnSelectAllSelections();
    this.SauceMainMenueSelected = false;
    this.VegemainMenue = true;
    this.MeatmenueSelected = false;
    this.CheeseMenueSelected = false;
    this.MozzerlaCheeseSelected = false;
    this.SelectedPreferedMozCheesePriceBool = false;
    this.CheeseSelectedMainMenue = false;
    this.MeatSelctedMaiNmenue = false;
    this.VegetablesSelectedMainMenue = true;
    this.SauceSelectedMainMenue = false;

  }

  ChnageMeatFromMenue() {

    this.UnSelectAllSelections();
    this.SauceMainMenueSelected = false;
    this.MeatmenueSelected = true;
    this.VegemainMenue = false;
    this.CheeseMenueSelected = false;
    this.MozzerlaCheeseSelected = false;
    this.SelectedPreferedMozCheesePriceBool = false;
    this.CheeseSelectedMainMenue = false;
    this.MeatSelctedMaiNmenue = true;
    this.VegetablesSelectedMainMenue = false;
    this.SauceSelectedMainMenue = false;

  }
  changePizzaPrie(size) {
    if (size === "Solo") {
      this.PizzaPriceBySize = this.Pizza.SoloPrice;
      this.SelectedSize = "Solo"
      this.CalculatePizzaPrice();
      this.ChangeCheesePrice("Solo");
      this.SoloPizzaChecked = true;
      this.SmallPizzaChecked = false;
      this.MediumPizzaChecked = false;
      this.LargePizzaChecked = false;
      this.JumboPizzaChecked = false;

    } else if (size === "Small") {
      this.PizzaPriceBySize = this.Pizza.SmallPrice;
      this.SelectedSize = "Small"
      this.CalculatePizzaPrice();
      this.ChangeCheesePrice("Small");
      this.SoloPizzaChecked = false;
      this.SmallPizzaChecked = true;
      this.MediumPizzaChecked = false;
      this.LargePizzaChecked = false;
      this.JumboPizzaChecked = false;

    } else if (size === "Medium") {
      this.PizzaPriceBySize = this.Pizza.MediumPrice;
      this.SelectedSize = "Medium"
      this.CalculatePizzaPrice();
      this.ChangeCheesePrice("Medium");
      this.SoloPizzaChecked = false;
      this.SmallPizzaChecked = false;
      this.MediumPizzaChecked = true;
      this.LargePizzaChecked = false;
      this.JumboPizzaChecked = false;

    } else if (size === "Large") {
      this.PizzaPriceBySize = this.Pizza.LargePrice;
      this.SelectedSize = "Large"
      this.CalculatePizzaPrice();
      this.ChangeCheesePrice("Large");
      this.SoloPizzaChecked = false;
      this.SmallPizzaChecked = false;
      this.MediumPizzaChecked = false;
      this.LargePizzaChecked = true;
      this.JumboPizzaChecked = false;



    } else if (size === "Jumbo") {
      this.PizzaPriceBySize = this.Pizza.JumboPrice;
      this.SelectedSize = "Jumbo"
      this.CalculatePizzaPrice();
      this.ChangeCheesePrice("Jumbo");
      this.SoloPizzaChecked = false;
      this.SmallPizzaChecked = false;
      this.MediumPizzaChecked = false;
      this.LargePizzaChecked = false;
      this.JumboPizzaChecked = true;



    }



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
