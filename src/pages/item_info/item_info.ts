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
  private CurstPriceeeee: any;


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



  private FetaCheeseSelecteSideTrue: any;
  private FetaCheeseeSelecteSide: any;
  private FetaCheeseNoneSelcted: any;
  private FetaCheeseLEftSelected: any;
  private FetaCHeeseRightSelected: any;
  private FetaHCeeseWholeSelcted: any;

  private ExtraToppingPrice: any;
  private GoatCheesePrice: any;


  private PizzaSize: any;
  private PizzaCountLast: any;
  private SelecteFiunalPizzaCrust: any;
  private MozeraellaStaus: any;
  private MozerellaSide: any;
  private GoatCheeseSide: any;
  private FetaCheeseSide: any;
  private HamSide: any;
  private SalamiSide: any;
  private CurmbelBeconSide: any;
  private SlicedBeaconSide: any;
  private peporoniSide: any;
  private ItalinSausgeSide: any;
  private GroundBeefSide: any;
  private SeasonChickensIde: any;
  private ChorizoSide: any;
  private MushrromSude: any;
  private RedonionSide: any;
  private greeenPeperSide: any;
  private TomatoeSide: any;
  private OlivesIDe: any;
  private HotpperpSide: any;
  private JalapenoSide: any;
  private PineAppelSude: any;
  private BBQSide: any;
  private DonairSide: any;
  private PizzaSaiceSode: any
  private FinalToppingPrice: any;

  private HamSideCount: any;
  private SalamiSideCount: any;
  private CurmbelBeconSideCount: any;
  private SlicedBeaconSideCount: any;
  private peporoniSideCount: any;
  private ItalinSausgeSideCount: any;
  private GroundBeefSideCount: any;
  private SeasonChickensIdeCount: any;
  private ChorizoSideCount: any;
  private MushrromSudeCount: any;
  private RedonionSideCount: any;
  private greeenPeperSideCount: any;
  private TomatoeSideCount: any;
  private OlivesIDeCount: any;
  private HotpperpSideCount: any;
  private JalapenoSideCount: any;
  private PineAppelSudeCount: any;
  private BBQSideCount: any;
  private DonairSideCount: any;
  private PizzaSaiceSodeCount: any

  private FinalFetaPrice: any;
  private GoatChesePrice: any;
  private MozzerellaPrice: any;

  private MozerllaCount: any;
  private GoatCheseCount: any;
  private FetaCeseCount: any;
  private FinalMozPrice: any;
  private FinalPizzaaaPrice: any;
  private FinalPizzaMianPrice: any;
  private FinalDoughPrice: any;
  private SelectedToppings: any;
  private SelectedTopingsArraay: Array<any> = [];

  private SelectedCheeseToppings: any;
  private SelectedTopingsArraayCheese: Array<any> = [];

  private SelectedVegToppings: any;
  private SelectedTopingsArraayVege: Array<any> = [];

  private SelectedSauceToppings: any;
  private SelectedTopingsArraaySauce: Array<any> = [];

  private SelectedPizzaSize : any;


  private FinalPizzaData: {
    results: any;
    PizzaID: string;
    PizzaName: string;
    ImageURL: string;
    Description: string;
    SoloPrice: string;
    SmallPrice: string;
    MediumPrice: string;
    LargePrice: string;
    JumboPrice: string;
    CrustType: boolean;
    MozerallCheese: boolean;
    MozerallCheese30: boolean;
    MozerallCheese50: boolean;
    MozerallCheese100: boolean;
    GoatCheese: boolean;
    FetaCheese: boolean;
    Ham: boolean;
    Salami: boolean;
    CrumbleBeacon: boolean;
    SlicedBeacon: boolean;
    Peporoni: boolean;
    ItalianSausge: boolean;
    GoundBeef: boolean;
    SeasonedChicken: boolean;
    FreshMushRooms: boolean;
    RedOnions: boolean;
    GreenPepper: boolean;
    Tomatoe: boolean;
    Olives: boolean;
    HotPepper: boolean;
    Jalapeno: boolean;
    PineApple: boolean;
    BBqsauce: boolean;
    DonairSauce: boolean;
    PizzaSauce: boolean;
    Chorizo: boolean;
    MozerallCheeseSide: String;
    GoatCheeseSide: String;
    FetaCheeseSide: String;
    HamSide: String;
    SalamiSide: String;
    CrumbleBeaconSide: String;
    SlicedBeaconSide: String;
    PeporoniSide: String;
    ItalianSausgeSide: String;
    GoundBeefSide: String;
    SeasonedChickenSide: String;
    FreshMushRoomsSide: String;
    RedOnionsSide: String;
    GreenPepperSide: String;
    TomatoeSide: String;
    OlivesSide: String;
    HotPepperSide: String;
    JalapenoSide: String;
    PineAppleSide: String;
    BBqsauceSide: String;
    DonairSauceSide: String;
    PizzaSauceSide: String;
    ChorizoSide: String;
    FianlOrderPrice: String;
  }

























  Pizza: any;
  tab: string = "select_size";

  constructor(public navCtrl: NavController, public navParams: NavParams, private PizzaService: PizzaDetailsProvider) {
    this.PizzaID = navParams.get('PizzaId');
    console.log("Fkk Yea Pizza ID", this.PizzaID)

  }
  ngOnInit(): void {



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
    this.FinalPizzaaaPrice = 0.0;



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

    this.GreenPepoNone = true;
    this.GreenPepLeft = false;
    this.GreenPepRight = false;
    this.GreenPepWhole = false;

    this.TomatoeNone = true;
    this.TomatoeLeft = false;
    this.TomatoeRight = false;
    this.TomatoeWhole = false;

    this.MozerllaCount = 0;

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


    this.ExtraToppingPrice = 1.95;
    this.GoatCheesePrice = 2.20;
    this.CurstPriceeeee = 0.0
    this.LoadPizzaById();





































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
    this.CheckValus()

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
    this.CheckValus()
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
    this.CheckValus()
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
    this.CheckValus()
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
    this.CheckValus()
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
    this.CheckValus()
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
    this.CheckValus()
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
    this.CheckValus()

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
    this.CheckValus()
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
    this.CheckValus()
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
    this.CheckValus()
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
    this.CheckValus()
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
    this.CheckValus()
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
    this.CheckValus()
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
    this.CheckValus()
  }

  SelectedBBqSauceNone() {
    this.UnSelectAllSelections();

    this.BBQSauce = false;
    this.BBQSaunceNone = true;
    this.BBqSauce = false;
    this.DonairSauceTopp = false;
    this.PiizaSaue = false;
    this.CheckValus()
  }

  SelectedBBqSauce() {
    this.UnSelectAllSelections();
    this.BBQSauce = true;

    this.BBqSauce = true;
    this.DonairSauceTopp = false;
    this.PiizaSaue = false;
    this.CheckValus()
  }

  SelectedDonairSauce() {
    this.UnSelectAllSelections();
    this.DonairSauce = true;
    this.BBqSauce = false;
    this.DonairSauceTopp = true;
    this.PiizaSaue = false;
    this.CheckValus()
  }

  SelectedPizzaSauce() {
    this.UnSelectAllSelections();
    this.PizzaSauce = true;

    this.BBqSauce = false;
    this.DonairSauceTopp = false;
    this.PiizaSaue = true;
    this.CheckValus()
  }
  SeledtedChorizo() {
    this.UnSelectAllSelections();
    this.Chorizo = true;
    this.CheckValus()
  }






  UnSelectAllSelections() {
    this.showScrollFeta = false;
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
    this.CheckValus()

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
    this.CheckValus()
  }



  async LoadPizzaById() {


    await this.PizzaService.getPizzaDetailsById(this.PizzaID).subscribe(res => {

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
      this.OverideValues()
      this.CheckValus()



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
    this.CheckValus()

  }



  ChnageSelecteSideCrumbleBeacon(side) {
    if (side == "Whole") {
      this.CrumbelBeaconSelectedSide = "Whole"
      this.CrumbleBeaconSelctedTrue = true;

      this.CrumBeaconeNone = false;
      this.CrumBeaconLeft = false;
      this.CrumRight = false;
      this.CrumBeacoWhole = true;
      this.CheckValus()

    } else if (side == "Left") {
      this.CrumbelBeaconSelectedSide = "Left"
      this.CrumbleBeaconSelctedTrue = true;

      this.CrumBeaconeNone = false;
      this.CrumBeaconLeft = true;
      this.CrumRight = false;
      this.CrumBeacoWhole = false;
      this.CheckValus()

    } else if (side == "Right") {
      this.CrumbelBeaconSelectedSide = "Right"
      this.CrumbleBeaconSelctedTrue = true;

      this.CrumBeaconeNone = false;
      this.CrumBeaconLeft = false;
      this.CrumRight = true;
      this.CrumBeacoWhole = false;
      this.CheckValus()

    } else if (side == "None") {
      this.CrumbelBeaconSelectedSide = "Whole"
      this.CrumbleBeaconSelctedTrue = false;

      this.CrumBeaconeNone = true;
      this.CrumBeaconLeft = false;
      this.CrumRight = false;
      this.CrumBeacoWhole = false;
      this.CheckValus()


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
      this.CheckValus()

    } else if (side == "Left") {
      this.SalamiSelectedSide = "Left"
      this.SalamiSelected = true;
      this.SalamiNone = false;
      this.SalamiLeft = true;
      this.SalamiRight = false;
      this.SalamiWhole = false;
      this.CheckValus()

    } else if (side == "Right") {
      this.SalamiSelectedSide = "Right"
      this.SalamiSelected = true;
      this.SalamiNone = false;
      this.SalamiLeft = false;
      this.SalamiRight = true;
      this.SalamiWhole = false;
      this.CheckValus()

    } else if (side == "None") {
      this.SalamiSelectedSide = "None"
      this.SalamiSelected = true;
      this.SalamiNone = true;
      this.SalamiLeft = false;
      this.SalamiRight = false;
      this.SalamiWhole = false;
      this.CheckValus()


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
      this.CheckValus()

    } else if (side == "Left") {
      this.HamSelectedSide = "Left"
      this.HamSelctedTrue = true;
      this.HamNone = false;
      this.HamLeft = true;
      this.HamRight = false;
      this.HamWhole = false;
      this.CheckValus()

    } else if (side == "Right") {
      this.HamSelectedSide = "Right"
      this.HamSelctedTrue = true;
      this.HamNone = false;
      this.HamLeft = false;
      this.HamRight = true;
      this.HamWhole = false;
      this.CheckValus()

    } else if (side == "None") {
      console.log("here")
      this.HamSelectedSide = "None"
      this.HamSelctedTrue = false;
      this.HamNone = true;
      this.HamLeft = false;
      this.HamRight = false;
      this.HamWhole = false;
      this.CheckValus()


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
      this.CheckValus()

    } else if (side == "Left") {
      this.SlicedBeaconSelectedSide = "Left"
      this.SlicedBeaconSelctedTrue = true;
      this.SlicedBeaconNone = false;
      this.SlicedBeaconLeft = true;
      this.SlicedbeaconRight = false;
      this.SliceBeaconeWhole = false;
      this.CheckValus()

    } else if (side == "Right") {
      this.SlicedBeaconSelectedSide = "Right"
      this.SlicedBeaconSelctedTrue = true;
      this.SlicedBeaconNone = false;
      this.SlicedBeaconLeft = false;
      this.SlicedbeaconRight = true;
      this.SliceBeaconeWhole = false;
      this.CheckValus()

    } else if (side == "None") {
      this.SlicedBeaconSelectedSide = "None"
      this.SlicedBeaconSelctedTrue = false;
      this.SlicedBeaconNone = true;
      this.SlicedBeaconLeft = false;
      this.SlicedbeaconRight = false;
      this.SliceBeaconeWhole = false;
      this.CheckValus()


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
      this.CheckValus()

    } else if (side == "Left") {
      this.PeporniSelectedSide = "Left"
      this.PeporoniSelctedTrue = true;
      this.PeporniNone = false;
      this.PeporiniLeft = true;
      this.PeporoniRight = false;
      this.PeporoniWhole = false;
      this.CheckValus()

    } else if (side == "Right") {
      this.PeporniSelectedSide = "Right"
      this.PeporoniSelctedTrue = true;
      this.PeporniNone = false;
      this.PeporiniLeft = false;
      this.PeporoniRight = true;
      this.PeporoniWhole = false;
      this.CheckValus()

    } else if (side == "None") {
      this.PeporniSelectedSide = "None"
      this.PeporoniSelctedTrue = false;
      this.PeporniNone = true;
      this.PeporiniLeft = false;
      this.PeporoniRight = false;
      this.PeporoniWhole = false;
      this.CheckValus()


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
      this.CheckValus()

    } else if (side == "Left") {
      this.ItalinSelectedSide = "Left"
      this.ItaalinSelctedTrue = true;
      this.ItalianSuageNone = false;
      this.ItalinSausgeLeft = true;
      this.ItalinSausgeRight = false;
      this.ItalinSausgeWhole = false;
      this.CheckValus()

    } else if (side == "Right") {
      this.ItalinSelectedSide = "Right"
      this.ItaalinSelctedTrue = true;
      this.ItalianSuageNone = false;
      this.ItalinSausgeLeft = false;
      this.ItalinSausgeRight = true;
      this.ItalinSausgeWhole = false;
      this.CheckValus()

    } else if (side == "None") {
      this.ItalinSelectedSide = "None"
      this.ItaalinSelctedTrue = false;
      this.ItalianSuageNone = true;
      this.ItalinSausgeLeft = false;
      this.ItalinSausgeRight = false;
      this.ItalinSausgeWhole = false;
      this.CheckValus()


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
      this.CheckValus()

    } else if (side == "Left") {
      this.GroundBeefSelectedSide = "Left"
      this.GroundBeefSelctedTrue = true;
      this.GroundBEefNone = false;
      this.GroundBeefLeft = true;
      this.GroundBeefRight = false;
      this.GroundBeefWhole = false;
      this.CheckValus()

    } else if (side == "Right") {
      this.GroundBeefSelectedSide = "Right"
      this.GroundBeefSelctedTrue = true;
      this.GroundBEefNone = false;
      this.GroundBeefLeft = false;
      this.GroundBeefRight = true;
      this.GroundBeefWhole = false;
      this.CheckValus()

    } else if (side == "None") {
      this.GroundBeefSelectedSide = "None"
      this.GroundBeefSelctedTrue = false;
      this.GroundBEefNone = true;
      this.GroundBeefLeft = false;
      this.GroundBeefRight = false;
      this.GroundBeefWhole = false;
      this.CheckValus()


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
      this.CheckValus()

    } else if (side == "Left") {
      this.SeasonChickenSelectedSide = "Left"
      this.SeasonedCheinSelctedTrue = true;
      this.SeasonChickenNone = false;
      this.SeasonCheinLeft = true;
      this.SeasonedChienRiht = false;
      this.SeasonChiekneWhole = false;
      this.CheckValus()

    } else if (side == "Right") {
      this.SeasonChickenSelectedSide = "Right"
      this.SeasonedCheinSelctedTrue = true;
      this.SeasonChickenNone = false;
      this.SeasonCheinLeft = false;
      this.SeasonedChienRiht = true;
      this.SeasonChiekneWhole = false;
      this.CheckValus()

    } else if (side == "None") {
      this.SeasonChickenSelectedSide = "None"
      this.SeasonedCheinSelctedTrue = false;
      this.SeasonChickenNone = true;
      this.SeasonCheinLeft = false;
      this.SeasonedChienRiht = false;
      this.SeasonChiekneWhole = false;

      this.CheckValus()

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
      this.CheckValus()

    } else if (side == "Left") {
      this.MushroomsSelectedSide = "Left"
      this.MushroomsSelctedTrue = true;
      this.MushroomsoNone = false;
      this.MushroomsLeft = true;
      this.MushroomsRight = false;
      this.MushroomsWhole = false;
      this.CheckValus()

    } else if (side == "Right") {
      this.MushroomsSelectedSide = "Right"
      this.MushroomsSelctedTrue = true;
      this.MushroomsoNone = false;
      this.MushroomsLeft = false;
      this.MushroomsRight = true;
      this.MushroomsWhole = false;
      this.CheckValus()

    } else if (side == "None") {
      this.MushroomsSelectedSide = "None"
      this.MushroomsSelctedTrue = false;
      this.MushroomsoNone = true;
      this.MushroomsLeft = false;
      this.MushroomsRight = false;
      this.MushroomsWhole = false;
      this.CheckValus()


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
      this.CheckValus()

    } else if (side == "Left") {
      this.RedOnionSelectedSide = "Left"
      this.RedOnionSelctedTrue = true;
      this.RedOnionsoNone = false;
      this.RedOnionLeft = true;
      this.RedOnionRight = false;
      this.RedOnionWhole = false;
      this.CheckValus()

    } else if (side == "Right") {
      this.RedOnionSelectedSide = "Right"
      this.RedOnionSelctedTrue = true;
      this.RedOnionsoNone = false;
      this.RedOnionLeft = false;
      this.RedOnionRight = true;
      this.RedOnionWhole = false;
      this.CheckValus()

    } else if (side == "None") {
      this.RedOnionSelectedSide = "None"
      this.RedOnionSelctedTrue = false;
      this.RedOnionsoNone = true;
      this.RedOnionLeft = false;
      this.RedOnionRight = false;
      this.RedOnionWhole = false;
      this.CheckValus()

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
      this.CheckValus()

    } else if (side == "Left") {
      this.GreenPepSelectedSide = "Left"
      this.GreenPepSelctedTrue = true;
      this.GreenPepoNone = false;
      this.GreenPepLeft = true;
      this.GreenPepRight = false;
      this.GreenPepWhole = false;
      this.CheckValus()

    } else if (side == "Right") {
      this.GreenPepSelectedSide = "Right"
      this.GreenPepSelctedTrue = true;
      this.GreenPepoNone = false;
      this.GreenPepLeft = false;
      this.GreenPepRight = true;
      this.GreenPepWhole = false;
      this.CheckValus()

    } else if (side == "None") {
      this.GreenPepSelectedSide = "None"
      this.GreenPepSelctedTrue = false;
      this.GreenPepoNone = true;
      this.GreenPepLeft = false;
      this.GreenPepRight = false;
      this.GreenPepWhole = false;
      this.CheckValus()


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
      this.CheckValus()

    } else if (side == "Left") {
      this.TomatoeSelectedSide = "Left"
      this.TomatoeSelctedTrue = true;
      this.TomatoeNone = false;
      this.TomatoeLeft = true;
      this.TomatoeRight = false;
      this.TomatoeWhole = false;
      this.CheckValus()

    } else if (side == "Right") {
      this.TomatoeSelectedSide = "Right"
      this.TomatoeSelctedTrue = true;
      this.TomatoeNone = false;
      this.TomatoeLeft = false;
      this.TomatoeRight = true;
      this.TomatoeWhole = false;
      this.CheckValus()

    } else if (side == "None") {
      this.TomatoeSelectedSide = "None"
      this.TomatoeSelctedTrue = false;
      this.TomatoeNone = true;
      this.TomatoeLeft = false;
      this.TomatoeRight = false;
      this.TomatoeWhole = false;
      this.CheckValus()


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
      this.CheckValus()

    } else if (side == "Left") {
      this.TOlivesSelectedSide = "Left"
      this.TOlivesSelctedTrue = true;
      this.TOlivesNone = false;
      this.TOlivesLeft = true;
      this.TOlivesRight = false;
      this.TOlivesWhole = false;
      this.CheckValus()

    } else if (side == "Right") {
      this.TOlivesSelectedSide = "Right"
      this.TOlivesSelctedTrue = true;
      this.TOlivesNone = false;
      this.TOlivesLeft = false;
      this.TOlivesRight = true;
      this.TOlivesWhole = false;
      this.CheckValus()

    } else if (side == "None") {
      this.TOlivesSelectedSide = "None"
      this.TOlivesSelctedTrue = false;
      this.TOlivesNone = true;
      this.TOlivesLeft = false;
      this.TOlivesRight = false;
      this.TOlivesWhole = false;
      this.CheckValus()


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
      this.CheckValus()

    } else if (side == "Left") {
      this.HotPeperSelectedSide = "Left"
      this.HotPeperSelctedTrue = true;
      this.HotPeperNone = false;
      this.HotPeperLeft = true;
      this.HotPeperRight = false;
      this.HotPeperWhole = false;
      this.CheckValus()

    } else if (side == "Right") {
      this.HotPeperSelectedSide = "Right"
      this.HotPeperSelctedTrue = true;
      this.HotPeperNone = false;
      this.HotPeperLeft = false;
      this.HotPeperRight = true;
      this.HotPeperWhole = false;
      this.CheckValus()

    } else if (side == "None") {
      this.HotPeperSelectedSide = "None"
      this.HotPeperSelctedTrue = false;
      this.HotPeperNone = true;
      this.HotPeperLeft = false;
      this.HotPeperRight = false;
      this.HotPeperWhole = false;
      this.CheckValus()


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
      this.CheckValus()

    } else if (side == "Left") {
      this.JalapenoSelectedSide = "Left"
      this.JalapenoiSelctedTrue = true;
      this.JalapenoNone = false;
      this.JalapenoLeft = true;
      this.JalapenoRight = false;
      this.JalapenoWhole = false;
      this.CheckValus()

    } else if (side == "Right") {
      this.JalapenoSelectedSide = "Right"
      this.JalapenoiSelctedTrue = true;
      this.JalapenoNone = false;
      this.JalapenoLeft = false;
      this.JalapenoRight = true;
      this.JalapenoWhole = false;
      this.CheckValus()

    } else if (side == "None") {
      this.JalapenoSelectedSide = "None"
      this.JalapenoiSelctedTrue = false;
      this.JalapenoNone = true;
      this.JalapenoLeft = false;
      this.JalapenoRight = false;
      this.JalapenoWhole = false;
      this.CheckValus()


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
      this.CheckValus()

    } else if (side == "Left") {
      this.PineAppleSelectedSide = "Left"
      this.PineAppleSelctedTrue = true;
      this.PineAppleNone = false;
      this.PineAppleLeft = true;
      this.PineAppleRight = false;
      this.PineAppleWhole = false;
      this.CheckValus()

    } else if (side == "Right") {
      this.PineAppleSelectedSide = "Right"
      this.PineAppleSelctedTrue = true;
      this.PineAppleNone = false;
      this.PineAppleLeft = false;
      this.PineAppleRight = true;
      this.PineAppleWhole = false;
      this.CheckValus()

    } else if (side == "None") {
      this.PineAppleSelectedSide = "None"
      this.PineAppleSelctedTrue = false;
      this.PineAppleNone = true;
      this.PineAppleLeft = false;
      this.PineAppleRight = false;
      this.PineAppleWhole = false;
      this.CheckValus()


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
      this.CheckValus()

    } else if (side == "Left") {
      this.ChrozioSelectedSide = "Left"
      this.ChorizoSelctedTrue = true;
      this.ChorizoNone = false;
      this.ChorizoLeft = true;
      this.ChorizoRight = false;
      this.ChorizoWhole = false;
      this.CheckValus()

    } else if (side == "Right") {
      this.ChrozioSelectedSide = "Right"
      this.ChorizoSelctedTrue = true;
      this.ChorizoNone = false;
      this.ChorizoLeft = false;
      this.ChorizoRight = true;
      this.ChorizoWhole = false;
      this.CheckValus()

    } else if (side == "None") {
      this.ChrozioSelectedSide = "None"
      this.ChorizoSelctedTrue = false;
      this.ChorizoNone = true;
      this.ChorizoLeft = false;
      this.ChorizoRight = false;
      this.ChorizoWhole = false;
      this.CheckValus()


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
      this.CheckValus()

    } else if (side == "Left") {
      this.BBQSauceSelectedSide = "Left"
      this.BBQSauceSelctedTrue = true;
      this.BBQSauceNone = false;
      this.BBQSauceLeft = true;
      this.BBQSauceRight = false;
      this.BBQSauceWhole = false;
      this.CheckValus()

    } else if (side == "Right") {
      this.BBQSauceSelectedSide = "Right"
      this.BBQSauceSelctedTrue = true;
      this.BBQSauceNone = false;
      this.BBQSauceLeft = false;
      this.BBQSauceRight = true;
      this.BBQSauceWhole = false;
      this.CheckValus()

    } else if (side == "None") {
      this.BBQSauceSelectedSide = "None"
      this.BBQSauceSelctedTrue = true;
      this.BBQSauceNone = true;
      this.BBQSauceLeft = false;
      this.BBQSauceRight = false;
      this.BBQSauceWhole = false;
      this.CheckValus()


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
      this.CheckValus()

    } else if (side == "Left") {
      this.DonairSelectedSide = "Left"
      this.DonairSelctedTrue = true;
      this.DonairNone = false;
      this.DonairLeft = true;
      this.DonairRight = false;
      this.DonairWhole = false;
      this.CheckValus()

    } else if (side == "Right") {
      this.DonairSelectedSide = "Right"
      this.DonairSelctedTrue = true;
      this.DonairNone = false;
      this.DonairLeft = false;
      this.DonairRight = true;
      this.DonairWhole = false;
      this.CheckValus()

    } else if (side == "None") {
      this.DonairSelectedSide = "None"
      this.DonairSelctedTrue = false;
      this.DonairNone = true;
      this.DonairLeft = false;
      this.DonairRight = false;
      this.DonairWhole = false;
      this.CheckValus()


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
      this.CheckValus()

    } else if (side == "Left") {
      this.PizzaSauceSelectedSide = "Left"
      this.PizzaSauceSelctedTrue = true;
      this.PizzaSauceNone = false;
      this.PizzaSauceLeft = true;
      this.PizzaSauceRight = false;
      this.PizzaSauceWhole = false;

      this.CheckValus()
    } else if (side == "Right") {
      this.PizzaSauceSelectedSide = "Right"
      this.PizzaSauceSelctedTrue = true;
      this.PizzaSauceNone = false;
      this.PizzaSauceLeft = false;
      this.PizzaSauceRight = true;
      this.PizzaSauceWhole = false;
      this.CheckValus()

    } else if (side == "None") {
      this.PizzaSauceSelectedSide = "None"
      this.PizzaSauceSelctedTrue = false;
      this.PizzaSauceNone = true;
      this.PizzaSauceLeft = false;
      this.PizzaSauceRight = false;
      this.PizzaSauceWhole = false;
      this.CheckValus()


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
      this.CheckValus()

    } else if (side == "Left") {
      this.GoatCheeeseSelctedMainSide = "Left"
      this.GoatCheeeseSelectedTrue = true;
      this.GoatCheeeseSelectedNone = false;
      this.GoatCheeeseSelectedWhole = false;
      this.GoatCheeeseSlectLeft = true;
      this.GoatCheeesesideRight = false;
      this.CheckValus()

    } else if (side == "Right") {
      this.GoatCheeeseSelctedMainSide = "Right"
      this.GoatCheeeseSelectedTrue = true;
      this.GoatCheeeseSelectedNone = false;
      this.GoatCheeeseSelectedWhole = false;
      this.GoatCheeeseSlectLeft = false;
      this.GoatCheeesesideRight = true;
      this.CheckValus()

    } else if (side == "None") {
      this.GoatCheeeseSelctedMainSide = "None"
      this.GoatCheeeseSelectedTrue = false;
      this.GoatCheeeseSelectedNone = true;
      this.GoatCheeeseSelectedWhole = false;
      this.GoatCheeeseSlectLeft = false;
      this.GoatCheeesesideRight = false;
      this.CheckValus()
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
      this.CheckValus()

    } else if (side == "Left") {
      this.FetaCheeseSelecteSideTrue = true;

      this.FetaCheeseeSelecteSide = "Left";
      this.FetaCheeseNoneSelcted = false;
      this.FetaCheeseLEftSelected = true;
      this.FetaCHeeseRightSelected = false;
      this.FetaHCeeseWholeSelcted = false;
      this.CheckValus()

    } else if (side == "Right") {
      this.FetaCheeseSelecteSideTrue = true;

      this.FetaCheeseeSelecteSide = "Right";
      this.FetaCheeseNoneSelcted = false;
      this.FetaCheeseLEftSelected = false;
      this.FetaCHeeseRightSelected = true;
      this.FetaHCeeseWholeSelcted = false;
      this.CheckValus()

    } else if (side == "None") {
      this.FetaCheeseSelecteSideTrue = false;

      this.FetaCheeseeSelecteSide = "None";
      this.FetaCheeseNoneSelcted = true;
      this.FetaCheeseLEftSelected = false;
      this.FetaCHeeseRightSelected = false;
      this.FetaHCeeseWholeSelcted = false;
      this.CheckValus()
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
      this.CheckValus()

    } else if (side == "Left") {
      this.MozzeralaSelctedMainSide = "Left";
      this.MozzeraelSelectedTrue = true;
      this.CheeseSelectedSide = "Left"
      this.MozzSideSelectedWhole = false;
      this.MozzSideSlectLeft = true;
      this.MozzerllasideRight = false;
      this.CheckValus()

    } else if (side == "Right") {
      this.MozzeralaSelctedMainSide = "Right";
      this.MozzeraelSelectedTrue = true;
      this.CheeseSelectedSide = "Right"
      this.MozzSideSelectedWhole = false;
      this.MozzSideSlectLeft = false;
      this.MozzerllasideRight = true;
      this.CheckValus()

    }

  }
  ChnagePreferdGoatCheese(Choice) {
    if (Choice === "30") {
      console.log("30")
      this.SelectedPreferedMozCheesePrice = this.thriotyCheesePrice;
      this.SelectedPreferedGoatCheesePriceBool = true;
      this.CheckValus()

    }

    if (Choice === "50") {
      console.log("50")
      this.SelectedPreferedMozCheesePrice = this.fiftyCheesePricve;
      this.SelectedPreferedGoatCheesePriceBool = true;
      this.CheckValus()

    }
    if (Choice === "double") {
      console.log("60")
      this.SelectedPreferedMozCheesePrice = this.DoubleCheesePrice;
      this.SelectedPreferedGoatCheesePriceBool = true;
      this.CheckValus()
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

      this.CheckValus()
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

      this.CheckValus()
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
      this.CheckValus()
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
      this.CheckValus()
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
      this.CheckValus()
    }





  }

  ChangeCheesePrice(SizePizza) {

    if (SizePizza === "Solo") {
      this.thriotyCheesePrice = 0.90;
      this.fiftyCheesePricve = 1.10;
      this.DoubleCheesePrice = 2.20;
      this.CheckValus()
    }

    if (SizePizza === "Small") {
      this.thriotyCheesePrice = 1.40;
      this.fiftyCheesePricve = 1.95;
      this.DoubleCheesePrice = 3.60;
      this.CheckValus()
    }
    if (SizePizza === "Medium") {
      this.thriotyCheesePrice = 1.95;
      this.fiftyCheesePricve = 2.20;
      this.DoubleCheesePrice = 4.40;
      this.CheckValus()
    }
    if (SizePizza === "Large") {
      this.thriotyCheesePrice = 2.25;
      this.fiftyCheesePricve = 3.30;
      this.DoubleCheesePrice = 6.60;
      this.CheckValus()
    }
    if (SizePizza === "Jumbo") {
      this.thriotyCheesePrice = 3.0;
      this.fiftyCheesePricve = 5.00;
      this.DoubleCheesePrice = 9.90;
      this.CheckValus()
    }



  }

  CalculatePizzaPrice() {

    this.TotalPizzaPrice = (parseFloat(this.PizzaPriceBySize)) * this.PizzaCount;
    this.TotalPizzaPrice = this.TotalPizzaPrice + parseFloat(this.PizzaPriceByCrust) + parseFloat(this.PizzaPriceByToppings)
    this.TotalPizzaPrice = parseFloat(this.TotalPizzaPrice).toFixed(2)
    this.CheckValus()


  }

  changePizzaCrust(crust) {
    if (crust == "Regualar") {
      this.PizzaPriceByCrust = 0;
      this.SelectedCrust = "Regualar"
      this.SelectedCrustShow = "Regular Crust"
      this.CalculatePizzaPrice();
      this.CurstPriceeeee = 0;
      this.RegularCrustSelectd = true;
      this.ThinCrustSelcted = false;
      this.GlutenFreeCrustSelected = false;
      this.GlutenFreBrocliChedar = false;
      this.GlutenFreeCauluflowerCrust = false;
      this.CheckValus()


    } else if (crust == "ThinCrust") {
      this.PizzaPriceByCrust = 0;
      this.SelectedCrust = "ThinCrust"
      this.SelectedCrustShow = "Thin Crust"
      this.CalculatePizzaPrice();
      this.CurstPriceeeee = 0;
      this.RegularCrustSelectd = false;
      this.ThinCrustSelcted = true;
      this.GlutenFreeCrustSelected = false;
      this.GlutenFreBrocliChedar = false;
      this.GlutenFreeCauluflowerCrust = false;
      this.CheckValus()


    } else if (crust == "GlutenFreeCrust") {
      this.PizzaPriceByCrust = 4;
      this.SelectedCrust = "GlutenFreeCrust"
      this.SelectedCrustShow = "Gluten Free Crust"
      this.CalculatePizzaPrice();
      this.CurstPriceeeee = 4.00
      this.RegularCrustSelectd = false;
      this.ThinCrustSelcted = false;
      this.GlutenFreeCrustSelected = true;
      this.GlutenFreBrocliChedar = false;
      this.GlutenFreeCauluflowerCrust = false;
      this.CheckValus()


    } else if (crust == "GlutenFreeBrocluChedar") {
      this.PizzaPriceByCrust = 4;
      this.SelectedCrust = "GlutenFreeBrocluChedar"
      this.SelectedCrustShow = "Gluten Free Brocli & Chedar Crust"
      this.CalculatePizzaPrice();
      this.CurstPriceeeee = 4.00
      this.RegularCrustSelectd = false;
      this.ThinCrustSelcted = false;
      this.GlutenFreeCrustSelected = false;
      this.GlutenFreBrocliChedar = true;
      this.GlutenFreeCauluflowerCrust = false;
      this.CheckValus()


    } else if (crust == "GlutenFreeCaluflower") {
      this.PizzaPriceByCrust = 4;
      this.SelectedCrust = "GlutenFreeCaluflower"
      this.SelectedCrustShow = "Gluten Free Cauliflower Crust"
      this.CalculatePizzaPrice();
      this.CurstPriceeeee = 4.00
      this.RegularCrustSelectd = false;
      this.ThinCrustSelcted = false;
      this.GlutenFreeCrustSelected = false;
      this.GlutenFreBrocliChedar = false;
      this.GlutenFreeCauluflowerCrust = true;
      this.CheckValus()


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
    this.CheckValus()
  }

  chnageFetaToppngs() {
    this.showScroll = false;
    this.showScrollFeta = true;
    this.CheckValus()

  }
  chnageToppingMoz() {
    this.SelectedPreferedGoatCheesePriceBool = false;
    this.MozzerlaCheeseSelected = true;
    this.showScroll = true;
    this.showScrollFeta = false;
    this.GoatCHeeseSelected = false;
    this.SelectedPreferedGoatCheesePriceBool = false;
    this.CheckValus()


    this.MozzeralSelected = true;
    this.GoatCheseSeletec = false;
    this.FetaCheeseSelected = false;
    this.CheckValus()

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
    this.CheckValus()


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
    this.CheckValus()

  }
  ChnageSauceMainMenue() {
    this.UnSelectAllSelections();
    this.SauceMainMenueSelected = true;
    this.VegemainMenue = false;
    this.MeatmenueSelected = false;
    this.CheeseMenueSelected = false;
    this.MozzerlaCheeseSelected = false;
    this.SelectedPreferedMozCheesePriceBool = false;
    this.CheckValus()


    this.CheeseSelectedMainMenue = false;
    this.MeatSelctedMaiNmenue = false;
    this.VegetablesSelectedMainMenue = false;
    this.SauceSelectedMainMenue = true;
    this.CheckValus()

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
    this.CheckValus()

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
    this.CheckValus()

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
      this.ExtraToppingPrice = 0.90;
      this.GoatCheesePrice = 1.65;
      this.CheckValus()

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
      this.ExtraToppingPrice = 1.40;
      this.GoatCheesePrice = 1.95;
      this.CheckValus()

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
      this.ExtraToppingPrice = 1.95;
      this.GoatCheesePrice = 2.20;
      this.CheckValus()

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
      this.ExtraToppingPrice = 2.25;
      this.GoatCheesePrice = 2.75;
      this.CheckValus()



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
      this.ExtraToppingPrice = 3.00;
      this.GoatCheesePrice = 3.05;
      this.CheckValus()



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

  ConvertToString() {
    this.SelectedToppings = this.SelectedTopingsArraay.join(", ")
    this.SelectedSauceToppings = this.SelectedTopingsArraaySauce.join(", ")
    this.SelectedVegToppings = this.SelectedTopingsArraayVege.join(", ")
    this.SelectedCheeseToppings = this.SelectedTopingsArraayCheese.join(", ")
  }

  OverideValues() {
    console.log(this.Pizza.MozerallCheese, "Firsdt222")

    if (this.Pizza.CrustType == "Regular") {
      this.RegularCrustSelectd = true;
      this.ThinCrustSelcted = false;
      this.GlutenFreeCrustSelected = false;
      this.GlutenFreBrocliChedar = false;
      this.GlutenFreeCauluflowerCrust = false;
      this.changePizzaCrust('Regualar');
    } else if (this.Pizza.CrustType == "Thin") {
      this.RegularCrustSelectd = false;
      this.ThinCrustSelcted = true;
      this.GlutenFreeCrustSelected = false;
      this.GlutenFreBrocliChedar = false;
      this.GlutenFreeCauluflowerCrust = false;
      this.changePizzaCrust('ThinCrust');

    } else if (this.Pizza.CrustType == "Gluten") {
      this.RegularCrustSelectd = false;
      this.ThinCrustSelcted = false;
      this.GlutenFreeCrustSelected = true;
      this.GlutenFreBrocliChedar = false;
      this.GlutenFreeCauluflowerCrust = false;
      this.changePizzaCrust('GlutenFreeCrust');

    } else if (this.Pizza.CrustType == "GlutenBroc") {
      this.RegularCrustSelectd = false;
      this.ThinCrustSelcted = false;
      this.GlutenFreeCrustSelected = false;
      this.GlutenFreBrocliChedar = true;
      this.GlutenFreeCauluflowerCrust = false;
      this.changePizzaCrust('GlutenFreeBrocluChedar');

    } else if (this.Pizza.CrustType == "GlutenCali") {
      this.RegularCrustSelectd = false;
      this.ThinCrustSelcted = false;
      this.GlutenFreeCrustSelected = false;
      this.GlutenFreBrocliChedar = false;
      this.GlutenFreeCauluflowerCrust = true;
      this.changePizzaCrust('GlutenFreeCaluflower');

    }

    if (this.Pizza.MozerallCheese == true) {
      this.MozzerlaRefualr = true;
      this.MozerellaCheeseNone = false;
      this.MozzSideSelectedWhole = true;
      this.SelectedToppings = "Cheese"
      this.SelectedTopingsArraayCheese.push("Cheese")
      this.ConvertToString()

    }

    if (this.Pizza.GoatCheese == true) {
      this.GoatCheeeseSelectedNone = false;
      this.GoatCheeeseSelectedWhole = true;
      this.SelectedTopingsArraayCheese.push("Goat Cheese")
      this.ConvertToString()

    }

    if (this.Pizza.FetaCheese == true) {
      this.FetaCheeseNoneSelcted = false;
      this.FetaHCeeseWholeSelcted = true;
      this.SelectedTopingsArraayCheese.push("Feta Cheese")
      this.ConvertToString()

    }

    if (this.Pizza.Ham == true) {
      this.HamNone = false;
      this.HamWhole = true;
      this.SelectedTopingsArraay.push("Ham")
      this.ConvertToString()

    }

    if (this.Pizza.Salami == true) {
      this.SalamiNone = false;
      this.SalamiWhole = true;
      this.SelectedTopingsArraay.push("Salami")
      this.ConvertToString()

    }

    if (this.Pizza.CrumbleBeacon == true) {
      this.CrumBeaconeNone = false;
      this.CrumBeacoWhole = true;
      this.SelectedTopingsArraay.push("Crumbled Bacon")
      this.ConvertToString()

    }

    if (this.Pizza.SlicedBeacon == true) {
      this.SlicedBeaconNone = false;
      this.SliceBeaconeWhole = true;
      this.SelectedTopingsArraay.push("Sliced Bacon")
      this.ConvertToString()

    }


    if (this.Pizza.Peporoni == true) {
      this.PeporniNone = false;
      this.PeporoniWhole = true;
      this.SelectedTopingsArraay.push("Pepperoni")
      this.ConvertToString()

    }

    if (this.Pizza.ItalianSausge == true) {
      this.ItalianSuageNone = false;
      this.ItalinSausgeWhole = true;
      this.SelectedTopingsArraay.push("Italian Sausage")
      this.ConvertToString()

    }


    if (this.Pizza.GoundBeef == true) {
      this.GroundBEefNone = false;
      this.GroundBeefWhole = true;
      this.SelectedTopingsArraay.push("Ground Beef")
      this.ConvertToString()

    }


    if (this.Pizza.SeasonedChicken == true) {
      this.SeasonChickenNone = false;
      this.SeasonChiekneWhole = true;
      this.SelectedTopingsArraay.push("Chicken")
      this.ConvertToString()

    }


    if (this.Pizza.Chorizo == true) {
      this.ChorizoNone = false;
      this.ChorizoWhole = true;
      this.SelectedTopingsArraay.push("Chorizo")
      this.ConvertToString()

    }




    if (this.Pizza.FreshMushRooms == true) {
      this.MushroomsoNone = false;
      this.MushroomsWhole = true;
      this.SelectedTopingsArraayVege.push("Mushrooms")
      this.ConvertToString()

    }

    if (this.Pizza.RedOnions == true) {
      this.RedOnionsoNone = false;
      this.RedOnionWhole = true;
      this.SelectedTopingsArraayVege.push("Red Onion")
      this.ConvertToString()

    }

    if (this.Pizza.GreenPepper == true) {
      this.GreenPepoNone = false;
      this.GreenPepWhole = true;
      this.SelectedTopingsArraayVege.push("Green Pepper")
      this.ConvertToString()

    }

    if (this.Pizza.Tomatoe == true) {
      this.TomatoeNone = false;
      this.TomatoeWhole = true;
      this.SelectedTopingsArraayVege.push("Tomatoe")
      this.ConvertToString()

    }

    if (this.Pizza.Olives == true) {
      this.TOlivesNone = false;
      this.TOlivesWhole = true;
      this.SelectedTopingsArraayVege.push("Olives")
      this.ConvertToString()

    }

    if (this.Pizza.HotPepper == true) {
      this.HotPeperNone = false;
      this.HotPeperWhole = true;
      this.SelectedTopingsArraayVege.push("Hot Pepper")
      this.ConvertToString()

    }

    if (this.Pizza.Jalapeno == true) {
      this.JalapenoNone = false;
      this.JalapenoWhole = true;
      this.SelectedTopingsArraayVege.push("Jalapeno")
      this.ConvertToString()

    }

    if (this.Pizza.PineApple == true) {
      this.PineAppleNone = false;
      this.PineAppleWhole = true;
      this.SelectedTopingsArraayVege.push("Pineapple")
      this.ConvertToString()

    }


    if (this.Pizza.BBqsauce == true) {
      this.BBQSauceNone = false;
      this.BBQSauceWhole = true;
      this.SelectedTopingsArraaySauce.push("BBQ Sauce")
      this.ConvertToString()

    }


    if (this.Pizza.DonairSauce == true) {
      this.DonairNone = false;
      this.DonairWhole = true;
      this.SelectedTopingsArraaySauce.push("Donair Sauce")
      this.ConvertToString()

    }


    if (this.Pizza.PizzaSauce == true) {
      this.PizzaSauceNone = false;
      this.PizzaSauceWhole = true;
      this.SelectedTopingsArraaySauce.push("Pizza Sauce")
      this.ConvertToString()

    }






  }

  CheckValus() {


    this.PizzaSize = this.SelectedSize
    this.PizzaCountLast = this.PizzaCount;
    this.SelecteFiunalPizzaCrust = this.SelectedCrustShow;


    if (this.MozerellaCheeseNone == true) {
      this.MozeraellaStaus = "None";
      this.FinalMozPrice = 0;
    } else if (this.MozzerlaRefualr == true) {
      this.MozeraellaStaus = "Regular";
      this.FinalMozPrice = 0;

    } else if (this.Mozerealla30Extra == true) {
      this.MozeraellaStaus = "30PercentExra";
      this.FinalMozPrice = this.thriotyCheesePrice;

    } else if (this.Mozeraella50Extra == true) {
      this.MozeraellaStaus = "50Extra";
      this.FinalMozPrice = this.fiftyCheesePricve;

    } else if (this.MozeralaDoublle == true) {
      this.MozeraellaStaus = "Double";
      this.FinalMozPrice = this.DoubleCheesePrice;

    }

    if (this.MozzSideSelectedWhole == true) {
      this.MozerellaSide = "Whole"
      this.MozerllaCount = 1;

    } else if (this.MozzSideSlectLeft == true) {
      this.MozerellaSide = "Left"
      this.MozerllaCount = 1;

    } else if (this.MozzerllasideRight == true) {
      this.MozerellaSide = "Right"
      this.MozerllaCount = 1;

    }

    if (this.GoatCheeeseSelectedNone == true) {
      this.GoatCheeseSide = "None"
      this.GoatCheseCount = 0;

    } else if (this.GoatCheeeseSelectedWhole == true) {
      this.GoatCheeseSide = "Whole"
      this.GoatCheseCount = 1;

    } else if (this.GoatCheeeseSlectLeft == true) {
      this.GoatCheeseSide = "Left"
      this.GoatCheseCount = 1;

    } else if (this.GoatCheeesesideRight == true) {
      this.GoatCheeseSide = "Right"
      this.GoatCheseCount = 1;

    }

    if (this.FetaCheeseNoneSelcted == true) {
      this.FetaCheeseSide = "None"
      this.FetaCeseCount = 0;


    } else if (this.FetaHCeeseWholeSelcted == true) {
      this.FetaCheeseSide = "Whole"
      this.FetaCeseCount = 1;

    } else if (this.FetaCheeseLEftSelected == true) {
      this.FetaCheeseSide = "Left"
      this.FetaCeseCount = 1;

    } else if (this.FetaCHeeseRightSelected == true) {
      this.FetaCheeseSide = "Right"
      this.FetaCeseCount = 1;

    }

    if (this.HamNone == true) {
      this.HamSide = "None"
      this.HamSideCount = 0;

    } else if (this.HamWhole == true) {
      this.HamSide = "Whole"
      this.HamSideCount = 1;

    } else if (this.HamLeft == true) {
      this.HamSide = "Left"
      this.HamSideCount = 1;

    } else if (this.HamRight == true) {
      this.HamSide = "Right"
      this.HamSideCount = 1;

    }


    if (this.SalamiNone == true) {
      this.SalamiSide = "None"
      this.SalamiSideCount = 0;

    } else if (this.SalamiWhole == true) {
      this.SalamiSide = "Whole"
      this.SalamiSideCount = 1;

    } else if (this.SalamiLeft == true) {
      this.SalamiSide = "Left"
      this.SalamiSideCount = 1;

    } else if (this.SalamiRight == true) {
      this.SalamiSide = "Right"
      this.SalamiSideCount = 1;

    }


    if (this.CrumBeaconeNone == true) {
      this.CurmbelBeconSide = "None"
      this.CurmbelBeconSideCount = 0;

    } else if (this.CrumBeacoWhole == true) {
      this.CurmbelBeconSide = "Whole"
      this.CurmbelBeconSideCount = 1;

    } else if (this.CrumBeaconLeft == true) {
      this.CurmbelBeconSide = "Left"
      this.CurmbelBeconSideCount = 1;

    } else if (this.CrumRight == true) {
      this.CurmbelBeconSide = "Right"
      this.CurmbelBeconSideCount = 1;

    }



    if (this.SlicedBeaconNone == true) {
      this.SlicedBeaconSide = "None"
      this.SlicedBeaconSideCount = 0;

    } else if (this.SliceBeaconeWhole == true) {
      this.SlicedBeaconSide = "Whole"
      this.SlicedBeaconSideCount = 1;

    } else if (this.SlicedBeaconLeft == true) {
      this.SlicedBeaconSide = "Left"
      this.SlicedBeaconSideCount = 1;

    } else if (this.SlicedbeaconRight == true) {
      this.SlicedBeaconSide = "Right"
      this.SlicedBeaconSideCount = 1;

    }


    if (this.PeporniNone == true) {
      this.peporoniSide = "None"
      this.peporoniSideCount = 0;

    } else if (this.PeporoniWhole == true) {
      this.peporoniSide = "Whole"
      this.peporoniSideCount = 1;

    } else if (this.PeporiniLeft == true) {
      this.peporoniSide = "Left"
      this.peporoniSideCount = 1;

    } else if (this.PeporoniRight == true) {
      this.peporoniSide = "Right"
      this.peporoniSideCount = 1;

    }

    if (this.ItalianSuageNone == true) {
      this.ItalinSausgeSide = "None"
      this.ItalinSausgeSideCount = 0;

    } else if (this.ItalinSausgeWhole == true) {
      this.ItalinSausgeSide = "Whole"
      this.ItalinSausgeSideCount = 1;

    } else if (this.ItalinSausgeLeft == true) {
      this.ItalinSausgeSide = "Left"
      this.ItalinSausgeSideCount = 1;

    } else if (this.ItalinSausgeRight == true) {
      this.ItalinSausgeSide = "Right"
      this.ItalinSausgeSideCount = 1;

    }

    if (this.GroundBEefNone == true) {
      this.GroundBeefSide = "None"
      this.GroundBeefSideCount = 0;

    } else if (this.GroundBeefWhole == true) {
      this.GroundBeefSide = "Whole"
      this.GroundBeefSideCount = 1;

    } else if (this.GroundBeefLeft == true) {
      this.GroundBeefSide = "Left"
      this.GroundBeefSideCount = 1;

    } else if (this.GroundBeefRight == true) {
      this.GroundBeefSide = "Right"
      this.GroundBeefSideCount = 1;

    }


    if (this.SeasonChickenNone == true) {
      this.SeasonChickensIde = "None"
      this.SeasonChickensIdeCount = 0;

    } else if (this.SeasonChiekneWhole == true) {
      this.SeasonChickensIde = "Whole"
      this.SeasonChickensIdeCount = 1;

    } else if (this.SeasonCheinLeft == true) {
      this.SeasonChickensIde = "Left"
      this.SeasonChickensIdeCount = 1;

    } else if (this.SeasonedChienRiht == true) {
      this.SeasonChickensIde = "Right"
      this.SeasonChickensIdeCount = 1;

    }

    if (this.ChorizoNone == true) {
      this.ChorizoSide = "None"
      this.ChorizoSideCount = 0;

    } else if (this.ChorizoWhole == true) {
      this.ChorizoSide = "Whole"
      this.ChorizoSideCount = 1;

    } else if (this.ChorizoLeft == true) {
      this.ChorizoSide = "Left"
      this.ChorizoSideCount = 1;

    } else if (this.ChorizoRight == true) {
      this.ChorizoSide = "Right"
      this.ChorizoSideCount = 1;

    }


    if (this.MushroomsoNone == true) {
      this.MushrromSude = "None"
      this.MushrromSudeCount = 0;

    } else if (this.MushroomsWhole == true) {
      this.MushrromSude = "Whole"
      this.MushrromSudeCount = 1;

    } else if (this.MushroomsLeft == true) {
      this.MushrromSude = "Left"
      this.MushrromSudeCount = 1;

    } else if (this.MushroomsRight == true) {
      this.MushrromSude = "Right"
      this.MushrromSudeCount = 1;

    }



    if (this.RedOnionsoNone == true) {
      this.RedonionSide = "None"
      this.RedonionSideCount = 0;

    } else if (this.RedOnionWhole == true) {
      this.RedonionSide = "Whole"
      this.RedonionSideCount = 1;

    } else if (this.RedOnionLeft == true) {
      this.RedonionSide = "Left"
      this.RedonionSideCount = 1;

    } else if (this.RedOnionRight == true) {
      this.RedonionSide = "Right"
      this.RedonionSideCount = 1;

    }

    if (this.GreenPepoNone == true) {
      this.greeenPeperSide = "None"
      this.greeenPeperSideCount = 0;

    } else if (this.GreenPepWhole == true) {
      this.greeenPeperSide = "Whole"
      this.greeenPeperSideCount = 1;

    } else if (this.GreenPepLeft == true) {
      this.greeenPeperSide = "Left"
      this.greeenPeperSideCount = 1;

    } else if (this.GreenPepRight == true) {
      this.greeenPeperSide = "Right"
      this.greeenPeperSideCount = 1;

    }


    if (this.TomatoeNone == true) {
      this.TomatoeSide = "None"
      this.TomatoeSideCount = 0;

    } else if (this.TomatoeWhole == true) {
      this.TomatoeSide = "Whole"
      this.TomatoeSideCount = 1;

    } else if (this.TomatoeLeft == true) {
      this.TomatoeSide = "Left"
      this.TomatoeSideCount = 1;

    } else if (this.TomatoeRight == true) {
      this.TomatoeSide = "Right"
      this.TomatoeSideCount = 1;

    }


    if (this.TOlivesNone == true) {
      this.OlivesIDe = "None"
      this.OlivesIDeCount = 0;

    } else if (this.TOlivesWhole == true) {
      this.OlivesIDe = "Whole"
      this.OlivesIDeCount = 1;

    } else if (this.TOlivesLeft == true) {
      this.OlivesIDe = "Left"
      this.OlivesIDeCount = 1;

    } else if (this.TOlivesRight == true) {
      this.OlivesIDe = "Right"
      this.OlivesIDeCount = 1;

    }



    if (this.HotPeperNone == true) {
      this.HotpperpSide = "None"
      this.HotpperpSideCount = 0;

    } else if (this.HotPeperWhole == true) {
      this.HotpperpSide = "Whole"
      this.HotpperpSideCount = 1;

    } else if (this.HotPeperLeft == true) {
      this.HotpperpSide = "Left"
      this.HotpperpSideCount = 1;

    } else if (this.HotPeperRight == true) {
      this.HotpperpSide = "Right"
      this.HotpperpSideCount = 1;

    }


    if (this.JalapenoNone == true) {
      this.JalapenoSide = "None"
      this.JalapenoSideCount = 0;

    } else if (this.JalapenoWhole == true) {
      this.JalapenoSide = "Whole"
      this.JalapenoSideCount = 1;

    } else if (this.JalapenoLeft == true) {
      this.JalapenoSide = "Left"
      this.JalapenoSideCount = 1;

    } else if (this.JalapenoRight == true) {
      this.JalapenoSide = "Right"
      this.JalapenoSideCount = 1;

    }


    if (this.PineAppleNone == true) {
      this.PineAppelSude = "None"
      this.PineAppelSudeCount = 0;

    } else if (this.PineAppleWhole == true) {
      this.PineAppelSude = "Whole"
      this.PineAppelSudeCount = 1;

    } else if (this.PineAppleLeft == true) {
      this.PineAppelSude = "Left"
      this.PineAppelSudeCount = 1;

    } else if (this.PineAppleRight == true) {
      this.PineAppelSude = "Right"
      this.PineAppelSudeCount = 1;

    }

    if (this.BBQSauceNone == true) {
      this.BBQSide = "None"
      this.BBQSideCount = 0;

    } else if (this.BBQSauceWhole == true) {
      this.BBQSideCount = 1;
      this.BBQSide = "Whole"

    } else if (this.BBQSauceLeft == true) {
      this.BBQSideCount = 1;
      this.BBQSide = "Left"

    } else if (this.BBQSauceRight == true) {
      this.BBQSideCount = 1;
      this.BBQSide = "Right"

    }



    if (this.DonairNone == true) {
      this.DonairSide = "None"
      this.DonairSideCount = 0;


    } else if (this.DonairWhole == true) {
      this.DonairSide = "Whole"
      this.DonairSideCount = 1;

    } else if (this.DonairLeft == true) {
      this.DonairSide = "Left"
      this.DonairSideCount = 1;

    } else if (this.DonairRight == true) {
      this.DonairSide = "Right"
      this.DonairSideCount = 1;

    }


    if (this.PizzaSauceNone == true) {
      this.PizzaSaiceSode = "None"
      this.PizzaSaiceSodeCount = 0;

    } else if (this.PizzaSauceWhole == true) {
      this.PizzaSaiceSode = "Whole"
      this.PizzaSaiceSodeCount = 1;

    } else if (this.PizzaSauceLeft == true) {
      this.PizzaSaiceSode = "Left"
      this.PizzaSaiceSodeCount = 1;

    } else if (this.PizzaSauceRight == true) {
      this.PizzaSaiceSode = "Right"
      this.PizzaSaiceSodeCount = 1;

    }

    console.log("Hereeeeeeeeeeeeeeeeeeeeeeeeeeee", this.Pizza.SoloPrice)
    console.log("Hereeeeeeeeeeeeeeeeeeeeeeeeeeee", this.Pizza.SmallPrice)
    console.log("Hereeeeeeeeeeeeeeeeeeeeeeeeeeee", this.Pizza.MediumPrice)
    console.log("Hereeeeeeeeeeeeeeeeeeeeeeeeeeee", this.Pizza.LargePrice)
    console.log("Hereeeeeeeeeeeeeeeeeeeeeeeeeeee", this.Pizza.JumboPrice)

    if (this.SoloPizzaChecked == true) {
      this.FinalDoughPrice = this.Pizza.SoloPrice;
      this.SelectedPizzaSize="Solo"
    } else if (this.SmallPizzaChecked == true) {
      this.FinalDoughPrice = this.Pizza.SmallPrice;
      this.SelectedPizzaSize="Small"

    } else if (this.MediumPizzaChecked == true) {
      this.FinalDoughPrice = this.Pizza.MediumPrice;
      this.SelectedPizzaSize="Medium"

    } else if (this.LargePizzaChecked == true) {
      this.FinalDoughPrice = this.Pizza.LargePrice;
      this.SelectedPizzaSize="Large"

    } else if (this.JumboPizzaChecked == true) {
      this.FinalDoughPrice = this.Pizza.JumboPrice;
      this.SelectedPizzaSize="Jumbo"

    }

    if (this.Pizza.FetaCheese == true) {
      this.FetaCeseCount = 0;

    }

    if (this.Pizza.Ham == true) {
      this.HamSideCount = 0;

    }

    if (this.Pizza.Salami == true) {
      this.SalamiSideCount = 0;


    }

    if (this.Pizza.CrumbleBeacon == true) {
      this.CurmbelBeconSideCount = 0;

    }

    if (this.Pizza.SlicedBeacon == true) {
      this.SlicedBeaconSideCount = 0;

    }


    if (this.Pizza.Peporoni == true) {
      this.peporoniSideCount = 0;


    }

    if (this.Pizza.ItalianSausge == true) {
      this.ItalinSausgeSideCount = 0;


    }


    if (this.Pizza.GoundBeef == true) {
      this.GroundBeefSideCount = 0;


    }


    if (this.Pizza.SeasonedChicken == true) {
      this.SeasonChickensIdeCount = 0;


    }


    if (this.Pizza.Chorizo == true) {
      this.ChorizoSideCount = 0;


    }




    if (this.Pizza.FreshMushRooms == true) {
      this.MushrromSudeCount = 0;


    }

    if (this.Pizza.RedOnions == true) {
      this.RedonionSideCount = 0;


    }

    if (this.Pizza.GreenPepper == true) {
      this.greeenPeperSideCount = 0;

    }

    if (this.Pizza.Tomatoe == true) {
      this.TomatoeSideCount = 0;


    }

    if (this.Pizza.Olives == true) {
      this.OlivesIDeCount = 0;


    }

    if (this.Pizza.HotPepper == true) {
      this.HotpperpSideCount = 0;


    }

    if (this.Pizza.Jalapeno == true) {
      this.JalapenoSideCount = 0;


    }

    if (this.Pizza.PineApple == true) {
      this.PineAppelSudeCount = 0;


    }


    if (this.Pizza.BBqsauce == true) {
      this.BBQSideCount = 0


    }


    if (this.Pizza.DonairSauce == true) {
      this.DonairSideCount = 0;


    }


    if (this.Pizza.PizzaSauce == true) {
      this.PizzaSaiceSodeCount = 0;


    }

    if (this.Pizza.GoatCheese == true) {
      this.GoatCheseCount = 0;


    }



    this.FinalToppingPrice = this.PizzaSaiceSodeCount + this.FetaCeseCount + this.HamSideCount + this.SalamiSideCount + this.CurmbelBeconSideCount + this.SlicedBeaconSideCount + this.peporoniSideCount + this.ItalinSausgeSideCount + this.GroundBeefSideCount + this.SeasonChickensIdeCount + this.ChorizoSideCount + this.MushrromSudeCount + this.RedonionSideCount + this.greeenPeperSideCount + this.TomatoeSideCount + this.OlivesIDeCount + this.HotpperpSideCount + this.JalapenoSideCount + this.PineAppelSudeCount + this.BBQSideCount + this.DonairSideCount;
    this.FinalToppingPrice = this.FinalToppingPrice * this.ExtraToppingPrice;
    this.GoatChesePrice = this.GoatCheesePrice * this.GoatCheseCount;
    this.MozzerellaPrice = this.FinalMozPrice * this.MozerllaCount;










    console.log("Pizza Size", this.PizzaSize);
    console.log("Pizza Count", this.PizzaCountLast);
    console.log("Selected Crust ", this.SelecteFiunalPizzaCrust);
    console.log("Mozeeral Stays", this.MozeraellaStaus);

    console.log("Mozeralla Side", this.MozerellaSide);
    console.log("Goat Cheewse Side", this.GoatCheeseSide);
    console.log("Feta CHeese Side", this.FetaCheeseSide);
    console.log("Ham Side ", this.HamSide);
    console.log("Salami Side", this.SalamiSide);

    console.log("C Beacon Side", this.CurmbelBeconSide);
    console.log("Sliced Beacon Side", this.SlicedBeaconSide);
    console.log("Peporni Side", this.peporoniSide);

    console.log("ItalinSausgeSide Side", this.ItalinSausgeSide);
    console.log("Ground BEef Side", this.GroundBeefSide);

    console.log("SeasonChickensIde Side", this.SeasonChickensIde);
    console.log("ChorizoSide Side", this.ChorizoSide);
    console.log("MushrromSude side", this.MushrromSude);

    console.log("RedonionSide Side", this.RedonionSide);
    console.log("greeenPeperSide Suide", this.greeenPeperSide);
    console.log("toamote Siode", this.TomatoeSide);

    console.log("Olive SIdfe", this.OlivesIDe);
    console.log("Hot Peper SIde", this.HotpperpSide);
    console.log("Japeneo Side", this.JalapenoSide);
    console.log("Pine Appe Side", this.PineAppelSude);

    console.log("BBq Sie", this.BBQSide);
    console.log("Donair Side", this.DonairSide);
    console.log("PizaCCause Siode", this.PizzaSaiceSode);
    console.log("Crust price", this.CurstPriceeeee);
    console.log("Sekected Toppings", this.FinalToppingPrice)
    console.log("Final Mozeral Price", this.MozzerellaPrice)
    console.log("Final Goat Price", this.GoatChesePrice)
    console.log("Pizza Pirce", this.FinalDoughPrice)



    this.FinalPizzaaaPrice = parseFloat(this.FinalToppingPrice) + parseFloat(this.MozzerellaPrice) + parseFloat(this.GoatChesePrice) + parseFloat(this.FinalDoughPrice) + parseFloat(this.CurstPriceeeee);
    console.log("Pizzaa FInallll Price LOl", this.FinalPizzaaaPrice, this.PizzaCountLast)
    this.FinalPizzaaaPrice = parseFloat(this.FinalPizzaaaPrice) * parseFloat(this.PizzaCountLast);
    this.FinalPizzaaaPrice = this.FinalPizzaaaPrice.toFixed(2);
    console.log("Pizzaa FInallll Price", this.FinalPizzaaaPrice)




  }
  async AddtoCartData() {
    console.log(this.CurmbelBeconSideCount, "Counttttt")
    let myObj = {


      CartDetails: [{
        PizzaID: this.Pizza.PizzaID,
        PizzaName: this.Pizza.PizzaName,
        SelectedPizzaSize : this.SelectedPizzaSize,
        PizzaCount: this.PizzaCount,
        ImageURL: this.Pizza.ImageURL,
        Description: this.Pizza.Description,
        SoloPrice: this.Pizza.SoloPrice,
        SmallPrice: this.Pizza.SmallPrice,
        MediumPrice: this.Pizza.MediumPrice,
        LargePrice: this.Pizza.LargePrice,
        JumboPrice: this.Pizza.JumboPrice,
        CrustType: this.SelecteFiunalPizzaCrust,
        MozerallCheese: this.MozerellaSide != "None" ? true : false,
        MozerallCheese30: false,
        MozerallCheese50: false,
        MozerallCheese100: false,
        GoatCheese: this.GoatCheeseSide != "None" ? true : false,
        FetaCheese: this.FetaCheeseSide != "None" ? true : false,
        Ham: this.HamSide != "None" ? true : false,
        Salami: this.SalamiSide != "None" ? true : false,
        CrumbleBeacon: this.CurmbelBeconSide != "None" ? true : false,
        SlicedBeacon: this.SlicedBeaconSide != "None" ? true : false,
        Peporoni: this.peporoniSide != "None" ? true : false,
        ItalianSausge: this.ItalinSausgeSide != "None" ? true : false,
        GoundBeef: this.GroundBeefSide != "None" ? true : false,
        SeasonedChicken: this.SeasonChickensIde != "None" ? true : false,
        FreshMushRooms: this.MushrromSude != "None" ? true : false,
        RedOnions: this.RedonionSide != "None" ? true : false,
        GreenPepper: this.greeenPeperSide != "None" ? true : false,
        Tomatoe: this.TomatoeSide != "None" ? true : false,
        Olives: this.OlivesIDe != "None" ? true : false,
        HotPepper: this.HotpperpSide != "None" ? true : false,
        Jalapeno: this.JalapenoSide != "None" ? true : false,
        PineApple: this.PineAppelSude != "None" ? true : false,
        BBqsauce: this.BBQSide != "None" ? true : false,
        DonairSauce: this.DonairSide != "None" ? true : false,
        PizzaSauce: this.PizzaSaiceSode != "None" ? true : false,
        Chorizo: this.ChorizoSide != "None" ? true : false,
        MozerallCheeseSide: this.MozerellaSide,
        GoatCheeseSide: this.GoatCheeseSide,
        FetaCheeseSide: this.FetaCheeseSide,
        HamSide: this.HamSide,
        SalamiSide: this.SalamiSide,
        CrumbleBeaconSide: this.CurmbelBeconSide,
        SlicedBeaconSide: this.SlicedBeaconSide,
        PeporoniSide: this.peporoniSide,
        ItalianSausgeSide: this.ItalinSausgeSide,
        GoundBeefSide: this.GroundBeefSide,
        SeasonedChickenSide: this.SeasonChickensIde,
        FreshMushRoomsSide: this.MushrromSude,
        RedOnionsSide: this.RedonionSide,
        GreenPepperSide: this.greeenPeperSide,
        TomatoeSide: this.TomatoeSide,
        OlivesSide: this.OlivesIDe,
        HotPepperSide: this.HotpperpSide,
        JalapenoSide: this.JalapenoSide,
        PineAppleSide: this.PineAppelSude,
        BBqsauceSide: this.BBQSide,
        DonairSauceSide: this.DonairSide,
        PizzaSauceSide: this.PizzaSaiceSode,
        ChorizoSide: this.ChorizoSide,
        FianlOrderPrice: this.FinalPizzaaaPrice,
        OncePizzaPrice: this.PizzaCount == 1 ? this.FinalPizzaaaPrice : parseFloat(this.FinalPizzaaaPrice)/this.PizzaCount

      }]

    };

    let myJSON = JSON.stringify(myObj);
    console.log("To Push", myJSON)
    await this.PizzaService.AddToCart(myObj);
    this.navCtrl.push(CartPage)


  }


  cart() {
    this.navCtrl.push(CartPage)
  }


}
