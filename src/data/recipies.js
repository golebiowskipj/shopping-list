import { recipieFactory } from '../helpers/recipieFactory';
import { jajo, skyr, dzem, maka, oliwa, banan, platkiOwsiane, kakao, wpc, mleko, jablko, orzechy, truskawki, oreo, cukinia } from './ingredients';


const omletOwocowy = recipieFactory('Omlet owocowy', [{ ...jajo, qty: 2 }, { ...skyr, qty: 2 }, { ...dzem, qty: 20 }, { ...maka, qty: 40 }, { ...oliwa, qty: 5 }, { ...banan, qty: 1 }]);
const owsiankaCzekoladowa = recipieFactory('Owsianka czekoladowa', [{ ...platkiOwsiane, qty: 70 }, { ...banan, qty: 1 }, { ...kakao, qty: 10 }, { ...wpc, qty: 50 }, { ...mleko, qty: 200 }]);
const owsiankaSzarlotka = recipieFactory('Owsianka szarlotka', [{ ...platkiOwsiane, qty: 70 }, { ...jablko, qty: 150 }, { ...orzechy, qty: 10 }, { ...wpc, qty: 50 }, { ...mleko, qty: 200 }]);
const owsiankaZJogurtem = recipieFactory('Owsianka z jogurtem', [{ ...platkiOwsiane, qty: 90 }, { ...skyr, qty: 2 }, { ...truskawki, qty: 150 }, { ...orzechy, qty: 15 }]);
const owsiankaOreo = recipieFactory('Owsianka oreo', [{ ...platkiOwsiane, qty: 70 }, { ...wpc, qty: 50 }, { ...oreo, qty: 2 }, { ...cukinia, qty: 100 }, { ...mleko, qty: 200 }]);

export const recipies = [omletOwocowy, owsiankaCzekoladowa, owsiankaSzarlotka, owsiankaZJogurtem, owsiankaOreo];