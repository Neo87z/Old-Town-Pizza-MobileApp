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


  private HamNoneSelected: any;
  private SalamiNoneSelected: any;
  private CrumbledBeaconNonSelected: any;
  private SlicedBeaconOnSelected: any;
  private PeporiniNonSelected: any;
  private ItalinSausgeNonSelected: any;
  private SeasonChiecknNonSelected: any;
  private ChorizoCheonNonSelected: any;

  private HamSelctedTrue: any;
  private HamSelectedSide: any;
  private HamStyle: any;

  private HamNone: any;
  private HamLeft: any;
  private HamRight: any;
  private HamWhole: any;

  private SalamiSelctedTrue: any;
  private SalamiSelectedSide: any;
  private SalamiNone: any;
  private SalamiWhole: any;
  private SalamiRight: any;
  private SalamiLeft: any;

  private CrumbleBeaconSelctedTrue: any;
  private CrumbelBeaconSelectedSide: any;
  private CrumBeaconeNone: any;
  private CrumBeacoWhole: any;
  private CrumBeaconLeft: any;
  private CrumRight: any;


  private SlicedBeaconSelctedTrue: any;
  private SlicedBeaconSelectedSide: any;
  private SlicedBeaconNone: any;
  private SlicedBeaconLeft: any;
  private SlicedbeaconRight: any;
  private SliceBeaconeWhole: any;


  private PeporoniSelctedTrue: any;
  private PeporniSelectedSide: any;
  private PeporniNone: any;
  private PeporiniLeft: any;
  private PeporoniRight: any;
  private PeporoniWhole: any;


  private ItaalinSelctedTrue: any;
  private ItalinSelectedSide: any;
  private ItalianSuageNone: any;
  private ItalinSausgeLeft: any;
  private ItalinSausgeRight: any;
  private ItalinSausgeWhole: any;

  private GroundBeefSelctedTrue: any;
  private GroundBeefSelectedSide: any;
  private GroundBEefNone: any;
  private GroundBeefLeft: any;
  private GroundBeefRight: any;
  private GroundBeefWhole: any;


  private SeasonedCheinSelctedTrue: any;
  private SeasonChickenSelectedSide: any;
  private SeasonChickenNone: any;
  private SeasonCheinLeft: any;
  private SeasonedChienRiht: any;
  private SeasonChiekneWhole: any;


  private ChorizoSelctedTrue: any;
  private ChrozioSelectedSide: any;
  private ChorizoNone: any;
  private ChorizoLeft: any;
  private ChorizoRight: any;
  private ChorizoWhole: any;


  private MushroomsSelctedTrue: any;
  private MushroomsSelectedSide: any;
  private MushroomsoNone: any;
  private MushroomsLeft: any;
  private MushroomsRight: any;
  private MushroomsWhole: any;


  private RedOnionSelctedTrue: any;
  private RedOnionSelectedSide: any;
  private RedOnionsoNone: any;
  private RedOnionLeft: any;
  private RedOnionRight: any;
  private RedOnionWhole: any;

  private GreenPepSelctedTrue: any;
  private GreenPepSelectedSide: any;
  private GreenPepoNone: any;
  private GreenPepLeft: any;
  private GreenPepRight: any;
  private GreenPepWhole: any;

  private TomatoeSelctedTrue: any;
  private TomatoeSelectedSide: any;
  private TomatoeNone: any;
  private TomatoeLeft: any;
  private TomatoeRight: any;
  private TomatoeWhole: any;

  private TOlivesSelctedTrue: any;
  private TOlivesSelectedSide: any;
  private TOlivesNone: any;
  private TOlivesLeft: any;
  private TOlivesRight: any;
  private TOlivesWhole: any;

  private HotPeperSelctedTrue: any;
  private HotPeperSelectedSide: any;
  private HotPeperNone: any;
  private HotPeperLeft: any;
  private HotPeperRight: any;
  private HotPeperWhole: any;

  private JalapenoiSelctedTrue: any;
  private JalapenoSelectedSide: any;
  private JalapenoNone: any;
  private JalapenoLeft: any;
  private JalapenoRight: any;
  private JalapenoWhole: any;

  private PineAppleSelctedTrue: any;
  private PineAppleSelectedSide: any;
  private PineAppleNone: any;
  private PineAppleLeft: any;
  private PineAppleRight: any;
  private PineAppleWhole: any;


  private BBQSauceSelctedTrue: any;
  private BBQSauceSelectedSide: any;
  private BBQSauceNone: any;
  private BBQSauceLeft: any;
  private BBQSauceRight: any;
  private BBQSauceWhole: any;

  private DonairSelctedTrue: any;
  private DonairSelectedSide: any;
  private DonairNone: any;
  private DonairLeft: any;
  private DonairRight: any;
  private DonairWhole: any;

  private PizzaSauceSelctedTrue: any;
  private PizzaSauceSelectedSide: any;
  private PizzaSauceNone: any;
  private PizzaSauceLeft: any;
  private PizzaSauceRight: any;
  private PizzaSauceWhole: any;


  private MozerellaCheeseNone: any;
  private MozzerlaRefualr: any;
  private Mozerealla30Extra: any;
  private Mozeraella50Extra: any;
  private MozeralaDoublle: any;


  private MozzeralaSelctedMainSide: any;
  private MozzeraelSelectedTrue: any;
  private MozzSideSelectedWhole: any;
  private MozzSideSlectLeft: any;
  private MozzerllasideRight: any;


  private GoatCheeeseSelctedMainSide: any;
  private GoatCheeeseSelectedTrue: any;
  private GoatCheeeseSelectedNone: any;
  private GoatCheeeseSelectedWhole: any;
  private GoatCheeeseSlectLeft: any;
  private GoatCheeesesideRight: any;



  private FetaCheeseSelecteSideTrue : any;
  private FetaCheeseeSelecteSide : any;
  private FetaCheeseNoneSelcted : any;
  private FetaCheeseLEftSelected : any;
  private FetaCHeeseRightSelected : any;
  private FetaHCeeseWholeSelcted : any;
















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
    this.HamStyle = "#00ff00"

    this.HamNone = true;
    this.HamLeft = false;
    this.HamRight = false;
    this.HamWhole = false;

    this.SalamiNone = true;
    this.SalamiLeft = false;
    this.SalamiRight = false;
    this.SalamiWhole = false;



    this.CrumBeaconeNone = true;
    this.CrumBeacoWhole = false;
    this.CrumBeaconLeft = false;
    this.CrumRight = false;
    this.SlicedBeaconNone = true;
    this.SlicedBeaconLeft = false;
    this.SlicedbeaconRight = false;
    this.SliceBeaconeWhole = false;

    this.PeporniNone = true;
    this.PeporiniLeft = false;
    this.PeporoniRight = false;
    this.PeporoniWhole = false;



    this.ItalianSuageNone = true;
    this.ItalinSausgeLeft = false;
    this.ItalinSausgeRight = false;
    this.ItalinSausgeWhole = false;


    this.GroundBEefNone = true;;
    this.GroundBeefLeft = false;
    this.GroundBeefRight = false;
    this.GroundBeefWhole = false;



    this.SeasonChickenNone = true;
    this.SeasonCheinLeft = false;
    this.SeasonedChienRiht = false;
    this.SeasonChiekneWhole = false;



    this.ChorizoNone = true;
    this.ChorizoLeft = false;
    this.ChorizoRight = false;
    this.ChorizoWhole = false;


    this.MushroomsoNone = true;
    this.MushroomsLeft = false;
    this.MushroomsRight = false;
    this.MushroomsWhole = false;

    this.RedOnionsoNone = true;
    this.RedOnionLeft = false;
    this.RedOnionRight = false;
    this.RedOnionWhole = false;

    this.GreenPepoNone = false;
    this.GreenPepLeft = false;
    this.GreenPepRight = false;
    this.GreenPepWhole = false;

    this.TomatoeNone = true;
    this.TomatoeLeft = false;
    this.TomatoeRight = false;
    this.TomatoeWhole = false;

    this.TOlivesNone = true;
    this.TOlivesLeft = false;
    this.TOlivesRight = false;
    this.TOlivesWhole = false;

    this.HotPeperNone = true;
    this.HotPeperLeft = false;
    this.HotPeperRight = false;
    this.HotPeperWhole = false;

    this.JalapenoNone = true;
    this.JalapenoLeft = false;
    this.JalapenoRight = false;
    this.JalapenoWhole = false;

    this.PineAppleNone = true;
    this.PineAppleLeft = false;
    this.PineAppleRight = false;
    this.PineAppleWhole = false;

    this.BBQSauceNone = true;
    this.BBQSauceLeft = false;
    this.BBQSauceRight = false;
    this.BBQSauceWhole = false;

    this.DonairNone = true;
    this.DonairLeft = false;
    this.DonairRight = false;
    this.DonairWhole = false;

    this.PizzaSauceNone = true;
    this.PizzaSauceLeft = false;
    this.PizzaSauceRight = false;
    this.PizzaSauceWhole = false;

    this.MozerellaCheeseNone = true;
    this.MozzerlaRefualr = false;
    this.Mozerealla30Extra = false;
    this.Mozeraella50Extra = false;
    this.MozeralaDoublle = false;


    this.MozzSideSelectedWhole = false;
    this.MozzSideSlectLeft = false;
    this.MozzerllasideRight = false;

    this.GoatCheeeseSelectedNone = true;
    this.GoatCheeeseSelectedWhole = false;
    this.GoatCheeeseSlectLeft = false;
    this.GoatCheeesesideRight = false;

    this.FetaCheeseNoneSelcted = true;
    this.FetaCheeseLEftSelected = false;
    this.FetaCHeeseRightSelected = false;
    this.FetaHCeeseWholeSelcted = false;

































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
    this.BBQSaunceNone = true;
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
    this.showScrollFeta=false;
    this.GoatCHeeseSelected = false;
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



  ChnageSelecteSideCrumbleBeacon(side) {
    if (side == "Whole") {
      this.CrumbelBeaconSelectedSide = "Whole"
      this.CrumbleBeaconSelctedTrue = true;

      this.CrumBeaconeNone = false;
      this.CrumBeaconLeft = false;
      this.CrumRight = false;
      this.CrumBeacoWhole = true;

    } else if (side == "Left") {
      this.CrumbelBeaconSelectedSide = "Left"
      this.CrumbleBeaconSelctedTrue = true;

      this.CrumBeaconeNone = false;
      this.CrumBeaconLeft = true;
      this.CrumRight = false;
      this.CrumBeacoWhole = false;

    } else if (side == "Right") {
      this.CrumbelBeaconSelectedSide = "Right"
      this.CrumbleBeaconSelctedTrue = true;

      this.CrumBeaconeNone = false;
      this.CrumBeaconLeft = false;
      this.CrumRight = true;
      this.CrumBeacoWhole = false;

    } else if (side == "None") {
      this.CrumbelBeaconSelectedSide = "Whole"
      this.CrumbleBeaconSelctedTrue = false;

      this.CrumBeaconeNone = true;
      this.CrumBeaconLeft = false;
      this.CrumRight = false;
      this.CrumBeacoWhole = false;


    }

  }

  ChnageSelecteSideSalami(side) {
    if (side == "Whole") {
      this.SalamiSelectedSide = "Whole"
      this.SalamiSelected = true;
      this.SalamiNone = false;
      this.SalamiLeft = false;
      this.SalamiRight = false;
      this.SalamiWhole = true;

    } else if (side == "Left") {
      this.SalamiSelectedSide = "Left"
      this.SalamiSelected = true;
      this.SalamiNone = false;
      this.SalamiLeft = true;
      this.SalamiRight = false;
      this.SalamiWhole = false;

    } else if (side == "Right") {
      this.SalamiSelectedSide = "Right"
      this.SalamiSelected = true;
      this.SalamiNone = false;
      this.SalamiLeft = false;
      this.SalamiRight = true;
      this.SalamiWhole = false;

    } else if (side == "None") {
      this.SalamiSelectedSide = "None"
      this.SalamiSelected = false;
      this.SalamiNone = true;
      this.SalamiLeft = false;
      this.SalamiRight = false;
      this.SalamiWhole = false;


    }

  }


  chnageCheeseSelectedSideHam(side) {
    if (side == "Whole") {
      this.HamSelectedSide = "Whole"
      this.HamSelctedTrue = true;
      this.HamNone = false;
      this.HamLeft = false;
      this.HamRight = false;
      this.HamWhole = true;

    } else if (side == "Left") {
      this.HamSelectedSide = "Left"
      this.HamSelctedTrue = true;
      this.HamNone = false;
      this.HamLeft = true;
      this.HamRight = false;
      this.HamWhole = false;

    } else if (side == "Right") {
      this.HamSelectedSide = "Right"
      this.HamSelctedTrue = true;
      this.HamNone = false;
      this.HamLeft = false;
      this.HamRight = true;
      this.HamWhole = false;

    } else if (side == "None") {
      console.log("here")
      this.HamSelectedSide = "None"
      this.HamSelctedTrue = false;
      this.HamNone = true;
      this.HamLeft = false;
      this.HamRight = false;
      this.HamWhole = false;


    }

  }

  ChangeClidedBeaconSelectedSide(side) {
    if (side == "Whole") {
      this.SlicedBeaconSelectedSide = "Whole"
      this.SlicedBeaconSelctedTrue = true;
      this.SlicedBeaconNone = false;
      this.SlicedBeaconLeft = false;
      this.SlicedbeaconRight = false;
      this.SliceBeaconeWhole = true;

    } else if (side == "Left") {
      this.SlicedBeaconSelectedSide = "Left"
      this.SlicedBeaconSelctedTrue = true;
      this.SlicedBeaconNone = false;
      this.SlicedBeaconLeft = true;
      this.SlicedbeaconRight = false;
      this.SliceBeaconeWhole = false;

    } else if (side == "Right") {
      this.SlicedBeaconSelectedSide = "Right"
      this.SlicedBeaconSelctedTrue = true;
      this.SlicedBeaconNone = false;
      this.SlicedBeaconLeft = false;
      this.SlicedbeaconRight = true;
      this.SliceBeaconeWhole = false;

    } else if (side == "None") {
      this.SlicedBeaconSelectedSide = "None"
      this.SlicedBeaconSelctedTrue = false;
      this.SlicedBeaconNone = true;
      this.SlicedBeaconLeft = false;
      this.SlicedbeaconRight = false;
      this.SliceBeaconeWhole = false;


    }

  }


  ChangeSideSelectedPeporonio(side) {
    if (side == "Whole") {
      this.PeporniSelectedSide = "Whole"
      this.PeporoniSelctedTrue = true;
      this.PeporniNone = false;
      this.PeporiniLeft = false;
      this.PeporoniRight = false;
      this.PeporoniWhole = true;

    } else if (side == "Left") {
      this.PeporniSelectedSide = "Left"
      this.PeporoniSelctedTrue = true;
      this.PeporniNone = false;
      this.PeporiniLeft = true;
      this.PeporoniRight = false;
      this.PeporoniWhole = false;

    } else if (side == "Right") {
      this.PeporniSelectedSide = "Right"
      this.PeporoniSelctedTrue = true;
      this.PeporniNone = false;
      this.PeporiniLeft = false;
      this.PeporoniRight = true;
      this.PeporoniWhole = false;

    } else if (side == "None") {
      this.PeporniSelectedSide = "None"
      this.PeporoniSelctedTrue = false;
      this.PeporniNone = true;
      this.PeporiniLeft = false;
      this.PeporoniRight = false;
      this.PeporoniWhole = false;


    }

  }

  ChnageSideSeletecItalimSasuge(side) {
    if (side == "Whole") {
      this.ItalinSelectedSide = "Whole"
      this.ItaalinSelctedTrue = true;
      this.ItalianSuageNone = false;
      this.ItalinSausgeLeft = false;
      this.ItalinSausgeRight = false;
      this.ItalinSausgeWhole = true;

    } else if (side == "Left") {
      this.ItalinSelectedSide = "Left"
      this.ItaalinSelctedTrue = true;
      this.ItalianSuageNone = false;
      this.ItalinSausgeLeft = true;
      this.ItalinSausgeRight = false;
      this.ItalinSausgeWhole = false;

    } else if (side == "Right") {
      this.ItalinSelectedSide = "Right"
      this.ItaalinSelctedTrue = true;
      this.ItalianSuageNone = false;
      this.ItalinSausgeLeft = false;
      this.ItalinSausgeRight = true;
      this.ItalinSausgeWhole = false;

    } else if (side == "None") {
      this.ItalinSelectedSide = "None"
      this.ItaalinSelctedTrue = false;
      this.ItalianSuageNone = true;
      this.ItalinSausgeLeft = false;
      this.ItalinSausgeRight = false;
      this.ItalinSausgeWhole = false;


    }

  }

  ChnageSideSelectedGroundBeef(side) {
    if (side == "Whole") {
      this.GroundBeefSelectedSide = "Whole"
      this.GroundBeefSelctedTrue = true;
      this.GroundBEefNone = false;
      this.GroundBeefLeft = false;
      this.GroundBeefRight = false;
      this.GroundBeefWhole = true;

    } else if (side == "Left") {
      this.GroundBeefSelectedSide = "Left"
      this.GroundBeefSelctedTrue = true;
      this.GroundBEefNone = false;
      this.GroundBeefLeft = true;
      this.GroundBeefRight = false;
      this.GroundBeefWhole = false;

    } else if (side == "Right") {
      this.GroundBeefSelectedSide = "Right"
      this.GroundBeefSelctedTrue = true;
      this.GroundBEefNone = false;
      this.GroundBeefLeft = false;
      this.GroundBeefRight = true;
      this.GroundBeefWhole = false;

    } else if (side == "None") {
      this.GroundBeefSelectedSide = "None"
      this.GroundBeefSelctedTrue = false;
      this.GroundBEefNone = true;
      this.GroundBeefLeft = false;
      this.GroundBeefRight = false;
      this.GroundBeefWhole = false;


    }

  }

  ChnageSideSelctedSeasonedCHien(side) {
    if (side == "Whole") {
      this.SeasonChickenSelectedSide = "Whole"
      this.SeasonedCheinSelctedTrue = true;
      this.SeasonChickenNone = false;
      this.SeasonCheinLeft = false;
      this.SeasonedChienRiht = false;
      this.SeasonChiekneWhole = true;

    } else if (side == "Left") {
      this.SeasonChickenSelectedSide = "Left"
      this.SeasonedCheinSelctedTrue = true;
      this.SeasonChickenNone = false;
      this.SeasonCheinLeft = true;
      this.SeasonedChienRiht = false;
      this.SeasonChiekneWhole = false;

    } else if (side == "Right") {
      this.SeasonChickenSelectedSide = "Right"
      this.SeasonedCheinSelctedTrue = true;
      this.SeasonChickenNone = false;
      this.SeasonCheinLeft = false;
      this.SeasonedChienRiht = true;
      this.SeasonChiekneWhole = false;

    } else if (side == "None") {
      this.SeasonChickenSelectedSide = "None"
      this.SeasonedCheinSelctedTrue = false;
      this.SeasonChickenNone = true;
      this.SeasonCheinLeft = false;
      this.SeasonedChienRiht = false;
      this.SeasonChiekneWhole = false;


    }

  }

  ChnageMushroomSideSelcted(side) {
    if (side == "Whole") {
      this.MushroomsSelectedSide = "Whole"
      this.MushroomsSelctedTrue = true;
      this.MushroomsoNone = false;
      this.MushroomsLeft = false;
      this.MushroomsRight = false;
      this.MushroomsWhole = true;

    } else if (side == "Left") {
      this.MushroomsSelectedSide = "Left"
      this.MushroomsSelctedTrue = true;
      this.MushroomsoNone = false;
      this.MushroomsLeft = true;
      this.MushroomsRight = false;
      this.MushroomsWhole = false;

    } else if (side == "Right") {
      this.MushroomsSelectedSide = "Right"
      this.MushroomsSelctedTrue = true;
      this.MushroomsoNone = false;
      this.MushroomsLeft = false;
      this.MushroomsRight = true;
      this.MushroomsWhole = false;

    } else if (side == "None") {
      this.MushroomsSelectedSide = "None"
      this.MushroomsSelctedTrue = false;
      this.MushroomsoNone = true;
      this.MushroomsLeft = false;
      this.MushroomsRight = false;
      this.MushroomsWhole = false;


    }

  }
  ChnageRedonionSideSelcted(side) {
    if (side == "Whole") {
      this.RedOnionSelectedSide = "Whole"
      this.RedOnionSelctedTrue = true;
      this.RedOnionsoNone = false;
      this.RedOnionLeft = false;
      this.RedOnionRight = false;
      this.RedOnionWhole = true;

    } else if (side == "Left") {
      this.RedOnionSelectedSide = "Left"
      this.RedOnionSelctedTrue = true;
      this.RedOnionsoNone = false;
      this.RedOnionLeft = true;
      this.RedOnionRight = false;
      this.RedOnionWhole = false;

    } else if (side == "Right") {
      this.RedOnionSelectedSide = "Right"
      this.RedOnionSelctedTrue = true;
      this.RedOnionsoNone = false;
      this.RedOnionLeft = false;
      this.RedOnionRight = true;
      this.RedOnionWhole = false;

    } else if (side == "None") {
      this.RedOnionSelectedSide = "None"
      this.RedOnionSelctedTrue = false;
      this.RedOnionsoNone = true;
      this.RedOnionLeft = false;
      this.RedOnionRight = false;
      this.RedOnionWhole = false;

    }

  }
  ChnageGreenppeprSideSlected(side) {
    if (side == "Whole") {
      this.GreenPepSelectedSide = "Whole"
      this.GreenPepSelctedTrue = true;
      this.GreenPepoNone = false;
      this.GreenPepLeft = false;
      this.GreenPepRight = false;
      this.GreenPepWhole = true;

    } else if (side == "Left") {
      this.GreenPepSelectedSide = "Left"
      this.GreenPepSelctedTrue = true;
      this.GreenPepoNone = false;
      this.GreenPepLeft = true;
      this.GreenPepRight = false;
      this.GreenPepWhole = false;

    } else if (side == "Right") {
      this.GreenPepSelectedSide = "Right"
      this.GreenPepSelctedTrue = true;
      this.GreenPepoNone = false;
      this.GreenPepLeft = false;
      this.GreenPepRight = true;
      this.GreenPepWhole = false;

    } else if (side == "None") {
      this.GreenPepSelectedSide = "None"
      this.GreenPepSelctedTrue = false;
      this.GreenPepoNone = true;
      this.GreenPepLeft = true;
      this.GreenPepRight = false;
      this.GreenPepWhole = false;


    }

  }
  ChangeTomatoeSideSelcyed(side) {
    if (side == "Whole") {
      this.TomatoeSelectedSide = "Whole"
      this.TomatoeSelctedTrue = true;
      this.TomatoeNone = false;
      this.TomatoeLeft = false;
      this.TomatoeRight = false;
      this.TomatoeWhole = true;

    } else if (side == "Left") {
      this.TomatoeSelectedSide = "Left"
      this.TomatoeSelctedTrue = true;
      this.TomatoeNone = false;
      this.TomatoeLeft = true;
      this.TomatoeRight = false;
      this.TomatoeWhole = false;

    } else if (side == "Right") {
      this.TomatoeSelectedSide = "Right"
      this.TomatoeSelctedTrue = true;
      this.TomatoeNone = false;
      this.TomatoeLeft = false;
      this.TomatoeRight = true;
      this.TomatoeWhole = false;

    } else if (side == "None") {
      this.TomatoeSelectedSide = "None"
      this.TomatoeSelctedTrue = false;
      this.TomatoeNone = true;
      this.TomatoeLeft = false;
      this.TomatoeRight = false;
      this.TomatoeWhole = false;


    }

  }
  ChnageOliveSideSelcyted(side) {
    if (side == "Whole") {
      this.TOlivesSelectedSide = "Whole"
      this.TOlivesSelctedTrue = true;
      this.TOlivesNone = false;
      this.TOlivesLeft = false;
      this.TOlivesRight = false;
      this.TOlivesWhole = true;

    } else if (side == "Left") {
      this.TOlivesSelectedSide = "Left"
      this.TOlivesSelctedTrue = true;
      this.TOlivesNone = false;
      this.TOlivesLeft = true;
      this.TOlivesRight = false;
      this.TOlivesWhole = false;

    } else if (side == "Right") {
      this.TOlivesSelectedSide = "Right"
      this.TOlivesSelctedTrue = true;
      this.TOlivesNone = false;
      this.TOlivesLeft = false;
      this.TOlivesRight = true;
      this.TOlivesWhole = false;

    } else if (side == "None") {
      this.TOlivesSelectedSide = "None"
      this.TOlivesSelctedTrue = false;
      this.TOlivesNone = false;
      this.TOlivesLeft = false;
      this.TOlivesRight = false;
      this.TOlivesWhole = true;


    }

  }
  ChnageHotPeperSideSelcted(side) {
    if (side == "Whole") {
      this.HotPeperSelectedSide = "Whole"
      this.HotPeperSelctedTrue = true;
      this.HotPeperNone = false;
      this.HotPeperLeft = false;
      this.HotPeperRight = false;
      this.HotPeperWhole = true;

    } else if (side == "Left") {
      this.HotPeperSelectedSide = "Left"
      this.HotPeperSelctedTrue = true;
      this.HotPeperNone = false;
      this.HotPeperLeft = true;
      this.HotPeperRight = false;
      this.HotPeperWhole = false;

    } else if (side == "Right") {
      this.HotPeperSelectedSide = "Right"
      this.HotPeperSelctedTrue = true;
      this.HotPeperNone = false;
      this.HotPeperLeft = false;
      this.HotPeperRight = true;
      this.HotPeperWhole = false;

    } else if (side == "None") {
      this.HotPeperSelectedSide = "None"
      this.HotPeperSelctedTrue = false;
      this.HotPeperNone = true;
      this.HotPeperLeft = false;
      this.HotPeperRight = false;
      this.HotPeperWhole = false;


    }

  }
  CghnageJalapenoSideSelcted(side) {
    if (side == "Whole") {
      this.JalapenoSelectedSide = "Whole"
      this.JalapenoiSelctedTrue = true;
      this.JalapenoNone = false;
      this.JalapenoLeft = false;
      this.JalapenoRight = false;
      this.JalapenoWhole = true;

    } else if (side == "Left") {
      this.JalapenoSelectedSide = "Left"
      this.JalapenoiSelctedTrue = true;
      this.JalapenoNone = false;
      this.JalapenoLeft = true;
      this.JalapenoRight = false;
      this.JalapenoWhole = false;

    } else if (side == "Right") {
      this.JalapenoSelectedSide = "Right"
      this.JalapenoiSelctedTrue = true;
      this.JalapenoNone = false;
      this.JalapenoLeft = false;
      this.JalapenoRight = true;
      this.JalapenoWhole = false;

    } else if (side == "None") {
      this.JalapenoSelectedSide = "None"
      this.JalapenoiSelctedTrue = false;
      this.JalapenoNone = true;
      this.JalapenoLeft = false;
      this.JalapenoRight = false;
      this.JalapenoWhole = false;


    }

  }
  ChnagePineAppleSideSelctyed(side) {
    if (side == "Whole") {
      this.PineAppleSelectedSide = "Whole"
      this.PineAppleSelctedTrue = true;
      this.PineAppleNone = false;
      this.PineAppleLeft = false;
      this.PineAppleRight = false;
      this.PineAppleWhole = true;

    } else if (side == "Left") {
      this.PineAppleSelectedSide = "Left"
      this.PineAppleSelctedTrue = true;
      this.PineAppleNone = false;
      this.PineAppleLeft = true;
      this.PineAppleRight = false;
      this.PineAppleWhole = false;

    } else if (side == "Right") {
      this.PineAppleSelectedSide = "Right"
      this.PineAppleSelctedTrue = true;
      this.PineAppleNone = false;
      this.PineAppleLeft = false;
      this.PineAppleRight = true;
      this.PineAppleWhole = false;

    } else if (side == "None") {
      this.PineAppleSelectedSide = "None"
      this.PineAppleSelctedTrue = false;
      this.PineAppleNone = true;
      this.PineAppleLeft = false;
      this.PineAppleRight = false;
      this.PineAppleWhole = false;


    }

  }




  ChnaageSideSelctedChorzio(side) {
    if (side == "Whole") {
      this.ChrozioSelectedSide = "Whole"
      this.ChorizoSelctedTrue = true;
      this.ChorizoNone = false;
      this.ChorizoLeft = false;
      this.ChorizoRight = false;
      this.ChorizoWhole = true;

    } else if (side == "Left") {
      this.ChrozioSelectedSide = "Left"
      this.ChorizoSelctedTrue = true;
      this.ChorizoNone = false;
      this.ChorizoLeft = true;
      this.ChorizoRight = false;
      this.ChorizoWhole = false;

    } else if (side == "Right") {
      this.ChrozioSelectedSide = "Right"
      this.ChorizoSelctedTrue = true;
      this.ChorizoNone = false;
      this.ChorizoLeft = false;
      this.ChorizoRight = true;
      this.ChorizoWhole = false;

    } else if (side == "None") {
      this.ChrozioSelectedSide = "None"
      this.ChorizoSelctedTrue = false;
      this.ChorizoNone = true;
      this.ChorizoLeft = false;
      this.ChorizoRight = false;
      this.ChorizoWhole = false;


    }

  }

  ChnageBBqSideSelctyed(side) {
    if (side == "Whole") {
      this.BBQSauceSelectedSide = "Whole"
      this.BBQSauceSelctedTrue = true;
      this.BBQSauceNone = false;
      this.BBQSauceLeft = false;
      this.BBQSauceRight = false;
      this.BBQSauceWhole = true;

    } else if (side == "Left") {
      this.BBQSauceSelectedSide = "Left"
      this.BBQSauceSelctedTrue = true;
      this.BBQSauceNone = false;
      this.BBQSauceLeft = true;
      this.BBQSauceRight = false;
      this.BBQSauceWhole = false;

    } else if (side == "Right") {
      this.BBQSauceSelectedSide = "Right"
      this.BBQSauceSelctedTrue = true;
      this.BBQSauceNone = false;
      this.BBQSauceLeft = false;
      this.BBQSauceRight = true;
      this.BBQSauceWhole = false;

    } else if (side == "None") {
      this.BBQSauceSelectedSide = "None"
      this.BBQSauceSelctedTrue = true;
      this.BBQSauceNone = true;
      this.BBQSauceLeft = false;
      this.BBQSauceRight = false;
      this.BBQSauceWhole = false;


    }

  }

  ChangeDonaiorSideSelcted(side) {
    if (side == "Whole") {
      this.DonairSelectedSide = "Whole"
      this.DonairSelctedTrue = true;
      this.DonairNone = false;
      this.DonairLeft = false;
      this.DonairRight = false;
      this.DonairWhole = true;

    } else if (side == "Left") {
      this.DonairSelectedSide = "Left"
      this.DonairSelctedTrue = true;
      this.DonairNone = false;
      this.DonairLeft = true;
      this.DonairRight = false;
      this.DonairWhole = false;

    } else if (side == "Right") {
      this.DonairSelectedSide = "Right"
      this.DonairSelctedTrue = true;
      this.DonairNone = false;
      this.DonairLeft = false;
      this.DonairRight = true;
      this.DonairWhole = false;

    } else if (side == "None") {
      this.DonairSelectedSide = "None"
      this.DonairSelctedTrue = false;
      this.DonairNone = true;
      this.DonairLeft = false;
      this.DonairRight = false;
      this.DonairWhole = false;


    }

  }

  ChnagePiiszaSauceSeideSelcted(side) {
    if (side == "Whole") {
      this.PizzaSauceSelectedSide = "Whole"
      this.PizzaSauceSelctedTrue = true;
      this.PizzaSauceNone = false;
      this.PizzaSauceLeft = false;
      this.PizzaSauceRight = false;
      this.PizzaSauceWhole = true;

    } else if (side == "Left") {
      this.PizzaSauceSelectedSide = "Left"
      this.PizzaSauceSelctedTrue = true;
      this.PizzaSauceNone = false;
      this.PizzaSauceLeft = true;
      this.PizzaSauceRight = false;
      this.PizzaSauceWhole = false;

    } else if (side == "Right") {
      this.PizzaSauceSelectedSide = "Right"
      this.PizzaSauceSelctedTrue = true;
      this.PizzaSauceNone = false;
      this.PizzaSauceLeft = false;
      this.PizzaSauceRight = true;
      this.PizzaSauceWhole = false;

    } else if (side == "None") {
      this.PizzaSauceSelectedSide = "None"
      this.PizzaSauceSelctedTrue = false;
      this.PizzaSauceNone = true;
      this.PizzaSauceLeft = false;
      this.PizzaSauceRight = false;
      this.PizzaSauceWhole = false;


    }

  }



  ChnageGoatCheeseSide(side) {
    if (side == "Whole") {
      this.GoatCheeeseSelctedMainSide = "Whole"
      this.GoatCheeeseSelectedTrue = true;
      this.GoatCheeeseSelectedNone = false;
      this.GoatCheeeseSelectedWhole = true;
      this.GoatCheeeseSlectLeft = false;
      this.GoatCheeesesideRight = false;

    } else if (side == "Left") {
      this.GoatCheeeseSelctedMainSide = "Left"
      this.GoatCheeeseSelectedTrue = true;
      this.GoatCheeeseSelectedNone = false;
      this.GoatCheeeseSelectedWhole = false;
      this.GoatCheeeseSlectLeft = true;
      this.GoatCheeesesideRight = false;

    } else if (side == "Right") {
      this.GoatCheeeseSelctedMainSide = "Right"
      this.GoatCheeeseSelectedTrue = true;
      this.GoatCheeeseSelectedNone = false;
      this.GoatCheeeseSelectedWhole = false;
      this.GoatCheeeseSlectLeft = false;
      this.GoatCheeesesideRight = true;

    }else if (side == "None"){
      this.GoatCheeeseSelctedMainSide = "None"
      this.GoatCheeeseSelectedTrue = false;
      this.GoatCheeeseSelectedNone = true;
      this.GoatCheeeseSelectedWhole = false;
      this.GoatCheeeseSlectLeft = false;
      this.GoatCheeesesideRight = false;
    }

  }


  ChangeFetaSelcteSideee(side) {
    if (side == "Whole") {
      this.FetaCheeseSelecteSideTrue = true;

      this.FetaCheeseeSelecteSide = "Whole";
      this.FetaCheeseNoneSelcted = false;
      this.FetaCheeseLEftSelected = false;
      this.FetaCHeeseRightSelected = false;
      this.FetaHCeeseWholeSelcted = true;

    } else if (side == "Left") {
      this.FetaCheeseSelecteSideTrue =true;

      this.FetaCheeseeSelecteSide = "Left";
      this.FetaCheeseNoneSelcted = false;
      this.FetaCheeseLEftSelected = true;
      this.FetaCHeeseRightSelected = false;
      this.FetaHCeeseWholeSelcted = false;

    } else if (side == "Right") {
      this.FetaCheeseSelecteSideTrue =true;

      this.FetaCheeseeSelecteSide = "Right";
      this.FetaCheeseNoneSelcted = false;
      this.FetaCheeseLEftSelected = false;
      this.FetaCHeeseRightSelected = true;
      this.FetaHCeeseWholeSelcted = false;

    }else if (side == "None"){
      this.FetaCheeseSelecteSideTrue =false;

      this.FetaCheeseeSelecteSide = "None";
      this.FetaCheeseNoneSelcted = true;
      this.FetaCheeseLEftSelected = false;
      this.FetaCHeeseRightSelected = false;
      this.FetaHCeeseWholeSelcted = false;
    }

  }

  chnageCheeseSelectedSide(side) {
    if (side == "Whole") {
      this.CheeseSelectedSide = "Whole"

      this.MozzeralaSelctedMainSide = "Whole";
      this.MozzeraelSelectedTrue = true;
      this.MozzSideSelectedWhole = true;
      this.MozzSideSlectLeft = false;
      this.MozzerllasideRight = false;

    } else if (side == "Left") {
      this.MozzeralaSelctedMainSide = "Left";
      this.MozzeraelSelectedTrue = true;
      this.CheeseSelectedSide = "Left"
      this.MozzSideSelectedWhole = false;
      this.MozzSideSlectLeft = true;
      this.MozzerllasideRight = false;

    } else if (side == "Right") {
      this.MozzeralaSelctedMainSide = "Right";
      this.MozzeraelSelectedTrue = true;
      this.CheeseSelectedSide = "Right"
      this.MozzSideSelectedWhole = false;
      this.MozzSideSlectLeft = false;
      this.MozzerllasideRight = true;

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


      this.MozerellaCheeseNone = false;
      this.MozzerlaRefualr = false;
      this.Mozerealla30Extra = true;
      this.Mozeraella50Extra = false;
      this.MozeralaDoublle = false;


    }

    if (Choice === "50") {
      console.log("50")
      this.SelectedPreferedMozCheesePrice = this.fiftyCheesePricve;
      this.SelectedPreferedMozCheesePriceBool = true;

      this.MozerellaCheeseNone = false;
      this.MozzerlaRefualr = false;
      this.Mozerealla30Extra = false;
      this.Mozeraella50Extra = true;
      this.MozeralaDoublle = false;


    }
    if (Choice === "double") {
      console.log("60")
      this.SelectedPreferedMozCheesePrice = this.DoubleCheesePrice;
      this.SelectedPreferedMozCheesePriceBool = true;

      this.MozerellaCheeseNone = false;
      this.MozzerlaRefualr = false;
      this.Mozerealla30Extra = false;
      this.Mozeraella50Extra = false;
      this.MozeralaDoublle = true;
    }

    if (Choice === "None") {
      console.log("60")
      this.SelectedPreferedMozCheesePrice = this.DoubleCheesePrice;
      this.SelectedPreferedMozCheesePriceBool = false;

      this.MozerellaCheeseNone = true;
      this.MozzerlaRefualr = false;
      this.Mozerealla30Extra = false;
      this.Mozeraella50Extra = false;
      this.MozeralaDoublle = false;
    }
    if (Choice === "Regular") {
      console.log("60")
      this.SelectedPreferedMozCheesePrice = this.DoubleCheesePrice;
      this.SelectedPreferedMozCheesePriceBool = true;


      this.MozerellaCheeseNone = false;
      this.MozzerlaRefualr = true;
      this.Mozerealla30Extra = false;
      this.Mozeraella50Extra = false;
      this.MozeralaDoublle = false;
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
