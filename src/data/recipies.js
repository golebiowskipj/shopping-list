import { recipieFactory } from "../helpers/recipieFactory";
import {
  jajo,
  skyr,
  dzem,
  maka,
  oliwa,
  banan,
  platkiOwsiane,
  kakao,
  wpc,
  mleko,
  jablko,
  orzechy,
  truskawki,
  oreo,
  cukinia,
  kaszaJaglana,
  pestkiSlonecznika,
  makaron,
  jogurtGrecki,
  cukier,
  twarog,
  szczypiorek,
  pomidor,
  pieczywo,
  maslo,
  szynka,
  pomidoryZPuszki,
  serZolty,
  marchewka,
  koncentratPomidorowy,
  majonez,
  kefir,
  wiorki,
  awokado,
  szpinak,
  salata,
  serekWiejski,
  chlebTostowy,
  makrela,
  tunczykZPuszki,
  rzodkiewka,
  wafleRyzowe,
  miesoMieloneZKurczaka,
  miesoZKurczaka,
  jogurtNaturalny,
  makaronRyzowy,
  sosSojowy,
  mieszankaChinska,
  ryz,
  fasolaCzerwona,
  kukurydza,
  pieczarki,
  cebula,
  ziemniaki,
  brokul,
  watrobka,
  kaszaOrkiszowa,
  kielbasa,
  makaronZFasoli,
  ciecierzyca,
  tofu,
  ogorekKonserwowy,
  musztarda,
  keczup,
  tortilla,
  ogorekZielony,
  dorsz,
  masloOrzechowe,
  platkiKukurydziane,
} from "./ingredients";

const omletOwocowy = recipieFactory("Omlet owocowy", [
  { ...jajo, qty: 2 },
  { ...skyr, qty: 2 },
  { ...dzem, qty: 20 },
  { ...maka, qty: 40 },
  { ...oliwa, qty: 5 },
  { ...banan, qty: 1 },
]);
const owsiankaCzekoladowa = recipieFactory("Owsianka czekoladowa", [
  { ...platkiOwsiane, qty: 70 },
  { ...banan, qty: 1 },
  { ...kakao, qty: 10 },
  { ...wpc, qty: 50 },
  { ...mleko, qty: 200 },
]);
const owsiankaSzarlotka = recipieFactory("Owsianka szarlotka", [
  { ...platkiOwsiane, qty: 70 },
  { ...jablko, qty: 1 },
  { ...orzechy, qty: 10 },
  { ...wpc, qty: 50 },
  { ...mleko, qty: 200 },
]);
const owsiankaZJogurtem = recipieFactory("Owsianka z jogurtem", [
  { ...platkiOwsiane, qty: 90 },
  { ...skyr, qty: 2 },
  { ...truskawki, qty: 150 },
  { ...orzechy, qty: 15 },
]);
const owsiankaOreo = recipieFactory("Owsianka oreo", [
  { ...platkiOwsiane, qty: 70 },
  { ...wpc, qty: 50 },
  { ...oreo, qty: 2 },
  { ...cukinia, qty: 100 },
  { ...mleko, qty: 200 },
]);
const omletCzekoladowy = recipieFactory("Omlet czekoladowy", [
  { ...jajo, qty: 1 },
  { ...maka, qty: 50 },
  { ...banan, qty: 1 },
  { ...wpc, qty: 30 },
  { ...kakao, qty: 10 },
  { ...oliwa, qty: 5 },
  { ...skyr, qty: 1 },
]);
const cynamonowaJaglanka = recipieFactory("Cynamonowa jaglanka", [
  { ...kaszaJaglana, qty: 70 },
  { ...jablko, qty: 1 },
  { ...wpc, qty: 30 },
  { ...skyr, qty: 1 },
  { ...pestkiSlonecznika, qty: 20 },
]);
const makaronNaSlodko = recipieFactory("Makaron na słodko", [
  { ...makaron, qty: 70 },
  { ...truskawki, qty: 150 },
  { ...twarog, qty: 220 },
  { ...jogurtGrecki, qty: 100 },
  { ...cukier, qty: 10 },
]);
const jajecznica = recipieFactory("Jajecznica", [
  { ...jajo, qty: 4 },
  { ...szczypiorek, qty: "" },
  { ...pomidor, qty: 1 },
  { ...pieczywo, qty: 70 },
  { ...maslo, qty: 5 },
  { ...szynka, qty: 100 },
]);
const szakszuka = recipieFactory("Szakszuka", [
  { ...jajo, qty: 3 },
  { ...pomidoryZPuszki, qty: 200 },
  { ...serZolty, qty: 40 },
  { ...pieczywo, qty: 80 },
  { ...szynka, qty: 80 },
]);
const jajecznyOmlet = recipieFactory("Jajeczny omlet", [
  { ...jajo, qty: 2 },
  { ...marchewka, qty: 1 },
  { ...koncentratPomidorowy, qty: 30 },
  { ...serZolty, qty: 50 },
  { ...maka, qty: 50 },
  { ...oliwa, qty: 5 },
  { ...szynka, qty: 100 },
]);
const jajaZMajonezem = recipieFactory("Jaja z majonezem", [
  { ...jajo, qty: 4 },
  { ...skyr, qty: 1 },
  { ...majonez, qty: 5 },
  { ...pieczywo, qty: 80 },
  { ...pomidor, qty: 1 },
]);
const shakeTruskawkowy = recipieFactory("Shake truskawkowy", [
  { ...truskawki, qty: 150 },
  { ...skyr, qty: 2 },
  { ...oliwa, qty: 10 },
  { ...banan, qty: 2 },
  { ...twarog, qty: 120 },
]);
const shakeCzekoladowy = recipieFactory("Shake czekoladowy", [
  { ...banan, qty: 2 },
  { ...kefir, qty: 400 },
  { ...kakao, qty: 10 },
  { ...wpc, qty: 50 },
]);
const kokosoweSmoothie = recipieFactory("Kokosowe smoothie", [
  { ...banan, qty: 2 },
  { ...skyr, qty: 2 },
  { ...wpc, qty: 20 },
  { ...wiorki, qty: 25 },
]);
const zieloneSmoothie = recipieFactory("Zielone smoothie", [
  { ...awokado, qty: 70 },
  { ...banan, qty: 2 },
  { ...szpinak, qty: 1 },
  { ...wpc, qty: 20 },
  { ...jablko, qty: 1 },
  { ...skyr, qty: 2 },
]);
const kanapkaZJajkiem = recipieFactory("Kanapka z jajkiem", [
  { ...jajo, qty: 2 },
  { ...pieczywo, qty: 60 },
  { ...salata, qty: "" },
  { ...szynka, qty: 50 },
  { ...pomidor, qty: 1 },
  { ...serekWiejski, qty: 2 },
]);
const tosty = recipieFactory("Tosty", [
  { ...chlebTostowy, qty: 90 },
  { ...szynka, qty: 100 },
  { ...serekWiejski, qty: 2 },
  { ...serZolty, qty: 60 },
]);
const kanapkaZSzynka = recipieFactory("Kanapka z szynką", [
  { ...pieczywo, qty: 80 },
  { ...szynka, qty: 60 },
  { ...pomidor, qty: 1 },
  { ...serZolty, qty: 30 },
  { ...serekWiejski, qty: 2 },
]);
const awokadoZTwarogiem = recipieFactory("Awokado z twarogiem", [
  { ...pieczywo, qty: 100 },
  { ...awokado, qty: 70 },
  { ...twarog, qty: 180 },
  { ...skyr, qty: 1 },
  { ...pomidor, qty: 1 },
]);
const kanapkaZMakrela = recipieFactory("Kanapka z makrelą", [
  { ...pieczywo, qty: 80 },
  { ...makrela, qty: 100 },
  { ...pomidor, qty: 1 },
  { ...twarog, qty: 200 },
]);
const awokadowZTunczykiem = recipieFactory("Awokado z tuńczykiem", [
  { ...pieczywo, qty: 100 },
  { ...awokado, qty: 70 },
  { ...serekWiejski, qty: 1 },
  { ...tunczykZPuszki, qty: 130 },
  { ...pomidor, qty: 1 },
]);
const twarogZDzemem = recipieFactory("Twaróg z dzemem", [
  { ...pieczywo, qty: 80 },
  { ...twarog, qty: 250 },
  { ...jogurtGrecki, qty: 120 },
  { ...dzem, qty: 50 },
]);
const twarogZeSzczypiorkiem = recipieFactory("Twaróg ze szczypior.", [
  { ...pieczywo, qty: 80 },
  { ...twarog, qty: 250 },
  { ...jogurtGrecki, qty: 150 },
  { ...rzodkiewka, qty: 1 },
  { ...pomidor, qty: 1 },
  { ...szczypiorek, qty: 1 },
]);
const serekZOwocami = recipieFactory("Serek z owocami", [
  { ...serekWiejski, qty: 3 },
  { ...banan, qty: 1 },
  { ...orzechy, qty: 25 },
]);
const skyrZWaflami = recipieFactory("Skyr z waflami", [
  { ...skyr, qty: 2 },
  { ...jablko, qty: 1 },
  { ...orzechy, qty: 15 },
  { ...twarog, qty: 100 },
  { ...dzem, qty: 50 },
  { ...wafleRyzowe, qty: 30 },
]);
const serekZPieczywem = recipieFactory("Serek z pieczywem", [
  { ...serekWiejski, qty: 3 },
  { ...pieczywo, qty: 80 },
  { ...jablko, qty: 1 },
]);
const shakeBialkowy = recipieFactory("Shake białkowy", [
  { ...wpc, qty: 60 },
  { ...mleko, qty: 300 },
  { ...banan, qty: 2 },
  { ...orzechy, qty: 10 },
]);
const bolognese = recipieFactory("Bolognese", [
  { ...makaron, qty: 70 },
  { ...oliwa, qty: 10 },
  { ...pomidoryZPuszki, qty: 200 },
  { ...koncentratPomidorowy, qty: 30 },
  { ...miesoMieloneZKurczaka, qty: 200 },
]);
const carbonara = recipieFactory("Carbonara", [
  { ...makaron, qty: 60 },
  { ...jajo, qty: 3 },
  { ...jogurtNaturalny, qty: 100 },
  { ...oliwa, qty: 5 },
  { ...szynka, qty: 100 },
]);
const makaronZTunczykiem = recipieFactory("Makaron z tuńczykiem", [
  { ...makaron, qty: 90 },
  { ...tunczykZPuszki, qty: 130 },
  { ...pomidor, qty: 1 },
  { pestkiSlonecznika, qty: 25 },
  { ...jogurtNaturalny, qty: 100 },
]);
const makaronZeSzpinakiem = recipieFactory("Makaron ze szpinakiem", [
  { ...makaron, qty: 90 },
  { ...szpinak, qty: 1 },
  { ...miesoZKurczaka, qty: 200 },
  { ...jogurtNaturalny, qty: 100 },
  { ...oliwa, qty: 5 },
]);
const padThai = recipieFactory("Pad thai", [
  { ...makaronRyzowy, qty: 50 },
  { ...miesoZKurczaka, qty: 250 },
  { ...orzechy, qty: 15 },
  { ...sosSojowy, qty: 20 },
  { ...mieszankaChinska, qty: 200 },
]);
const chili = recipieFactory("Chili con carne", [
  { ...ryz, qty: 50 },
  { ...pomidoryZPuszki, qty: 200 },
  { ...miesoZKurczaka, qty: 250 },
  { ...oliwa, qty: 5 },
  { ...fasolaCzerwona, qty: 50 },
  { ...kukurydza, qty: 50 },
]);
const kurczakWFitSmietanie = recipieFactory("Kurczak w fit śmietanie ", [
  { ...ryz, qty: 60 },
  { ...jogurtGrecki, qty: 100 },
  { miesoZKurczaka, qty: 200 },
  { ...oliwa, qty: 5 },
  { ...pieczarki, qty: 100 },
  { ...cebula, qty: 0.5 },
]);
const warzywaWJogurcie = recipieFactory("Warzywa w jogurcie", [
  { ...ryz, qty: 60 },
  { ...miesoZKurczaka, qty: 200 },
  { ...jogurtGrecki, qty: 80 },
  { ...mieszankaChinska, qty: 200 },
  { ...oliwa, qty: 5 },
]);
const kurczakZZiemniakami = recipieFactory("Kurczak z ziemniakami", [
  { ...ziemniaki, qty: 300 },
  { ...miesoZKurczaka, qty: 200 },
  { ...brokul, qty: 250 },
  { ...oliwa, qty: 10 },
]);
const watrobkaD = recipieFactory("Watróbka", [
  { ...ziemniaki, qty: 250 },
  { watrobka, qty: 250 },
  { ...pieczarki, qty: 100 },
  { ...pomidor, qty: 1 },
  { ...oliwa, qty: 5 },
]);
const leczo = recipieFactory("Leczo", [
  { ...kaszaOrkiszowa, qty: 80 },
  { ...kielbasa, qty: 100 },
  { ...cukinia, qty: 0.5 },
  { ...pomidoryZPuszki, qty: 200 },
  { ...koncentratPomidorowy, qty: 30 },
  { ...miesoZKurczaka, qty: 100 },
]);
const kotletyZWarzywami = recipieFactory("Kotlety z warzywami", [
  { ...ziemniaki, qty: 400 },
  { ...miesoMieloneZKurczaka, qty: 250 },
  { ...marchewka, qty: 2 },
]);
const makaronZCiecierzyca = recipieFactory("Makaron z ciecierzycą", [
  { ...makaronZFasoli, qty: 100 },
  { ...ciecierzyca, qty: 200 },
  { ...pomidor, qty: 1 },
  { ...oliwa, qty: 5 },
  { ...jogurtNaturalny, qty: 150 },
]);
const tofuPoChinsku = recipieFactory("Tofu po chińsku", [
  { ...ryz, qty: 60 },
  { ...tofu, qty: 180 },
  { ...mieszankaChinska, qty: 200 },
  { ...oliwa, qty: 5 },
  { ...skyr, qty: 1 },
  { ...sosSojowy, qty: 20 },
]);
const burgerZTofu = recipieFactory("Burger z tofu", [
  { ...pieczywo, qty: 80 },
  { ...tofu, qty: 180 },
  { ...oliwa, qty: 5 },
  { ...ogorekKonserwowy, qty: 1 },
  { ...musztarda, qty: 20 },
  { ...keczup, qty: 20 },
  { ...salata, qty: 1 },
  { ...serekWiejski, qty: 150 },
]);
const makaronZFasoliD = recipieFactory("Makaron z fasoli", [
  { ...makaronZFasoli, qty: 150 },
  { ...pomidor, qty: 1 },
  { skyr, qty: 1 },
  { ...oliwa, qty: 5 },
  { ...jogurtGrecki, qty: 80 },
  { ...szpinak, qty: 1 },
]);
const burger = recipieFactory("Burger", [
  { ...pieczywo, qty: 80 },
  { ...miesoZKurczaka, qty: 200 },
  { ...musztarda, qty: 20 },
  { ...keczup, qty: 20 },
  { ...serZolty, qty: 40 },
  { ...pomidor, qty: 1 },
  { ...salata, qty: 1 },
]);
const zapiekanka = recipieFactory("Zapiekanka", [
  { ...pieczywo, qty: 80 },
  { ...pieczarki, qty: 100 },
  { ...serZolty, qty: 100 },
  { ...szynka, qty: 100 },
  { ...keczup, qty: 20 },
]);
const tortillaD = recipieFactory("Tortilla", [
  { ...tortilla, qty: 1 },
  { ...miesoZKurczaka, qty: 250 },
  { ...pomidor, qty: 1 },
  { ...ogorekZielony, qty: 1 },
  { ...salata, qty: 1 },
  { ...oliwa, qty: 10 },
  { ...jogurtNaturalny, qty: 100 },
]);
const rybaZFrytkami = recipieFactory("Ryba z frytkami", [
  { ...ziemniaki, qty: 400 },
  { ...dorsz, qty: 250 },
  { ...pomidor, qty: 1 },
  { ...ogorekZielony, qty: 1 },
  { ...salata, qty: 1 },
  { ...oliwa, qty: 1 },
]);
const salatkaZJajkiem = recipieFactory("Sałatka z jajkiem", [
  { ...jajo, qty: 3 },
  { ...salata, qty: 1 },
  { ...pomidor, qty: 1 },
  { ...ogorekZielony, qty: 1 },
  { ...majonez, qty: 10 },
  { ...pieczywo, qty: 80 },
  { ...skyr, qty: 150 },
]);
const salatkaZKurczakiem = recipieFactory("Sałatka z kurczakiem", [
  { ...miesoZKurczaka, qty: 250 },
  { ...oliwa, qty: 10 },
  { ...salata, qty: 1 },
  { ...pomidor, qty: 1 },
  { ...jogurtNaturalny, qty: 100 },
  { wafleRyzowe, qty: 50 },
]);
const twarogZZiemniakami = recipieFactory("Twaróg z ziemniakami", [
  { ...ziemniaki, qty: 300 },
  { ...twarog, qty: 250 },
  { ...jogurtGrecki, qty: 100 },
  { ...szczypiorek, qty: 1 },
  { ...ogorekZielony, qty: 1 },
]);
const zupaKremZSerkiem = recipieFactory("Zupa krem z serkiem", [
  { ...pomidoryZPuszki, qty: 400 },
  { ...makaron, qty: 80 },
  { ...serekWiejski, qty: 300 },
]);
const kanapkiZMaslem = recipieFactory("Kanapki z masłem orzechowym", [
  { ...pieczywo, qty: 80 },
  { ...serekWiejski, qty: 300 },
  { masloOrzechowe, qty: 30 },
]);
const domowyGainer = recipieFactory("Domowy gainer", [
  { ...banan, qty: 2 },
  { ...mleko, qty: 250 },
  { ...wpc, qty: 50 },
  { ...masloOrzechowe, qty: 20 },
]);
const platkiZMlekiem = recipieFactory("Płatki z mlekiem", [
  { ...mleko, qty: 250 },
  { ...serekWiejski, qty: 300 },
  { ...platkiKukurydziane, qty: 80 },
]);
const ryzZBananem = recipieFactory("Ryz z bananem", [
  { ...ryz, qty: 60 },
  { ...banan, qty: 1 },
  { ...dzem, qty: 30 },
  { ...skyr, qty: 300 },
  { ...pestkiSlonecznika, qty: 15 },
]);

export const recipies = [
  owsiankaCzekoladowa,
  owsiankaSzarlotka,
  owsiankaZJogurtem,
  owsiankaOreo,
  omletOwocowy,
  omletCzekoladowy,
  cynamonowaJaglanka,
  makaronNaSlodko,
  jajecznica,
  szakszuka,
  jajecznyOmlet,
  jajaZMajonezem,
  shakeTruskawkowy,
  shakeCzekoladowy,
  kokosoweSmoothie,
  zieloneSmoothie,
  kanapkaZJajkiem,
  tosty,
  kanapkaZSzynka,
  awokadoZTwarogiem,
  kanapkaZMakrela,
  awokadowZTunczykiem,
  twarogZDzemem,
  twarogZeSzczypiorkiem,
  serekZOwocami,
  skyrZWaflami,
  serekZPieczywem,
  shakeBialkowy,
  bolognese,
  carbonara,
  makaronZTunczykiem,
  makaronZeSzpinakiem,
  padThai,
  chili,
  kurczakWFitSmietanie,
  warzywaWJogurcie,
  kurczakZZiemniakami,
  watrobkaD,
  leczo,
  kotletyZWarzywami,
  makaronZCiecierzyca,
  tofuPoChinsku,
  burgerZTofu,
  makaronZFasoliD,
  burger,
  zapiekanka,
  tortillaD,
  rybaZFrytkami,
  salatkaZJajkiem,
  salatkaZKurczakiem,
  twarogZZiemniakami,
  zupaKremZSerkiem,
  kanapkiZMaslem,
  domowyGainer,
  platkiZMlekiem,
  ryzZBananem,
];
