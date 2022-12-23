import {PhoneRegex} from "./PhoneRegex";

let phoneRegex=new PhoneRegex();
let validPhone:string[]=['840986022086','840912999999'];
let invalidPhone:string[]=['841234999999'];

for(let phone of validPhone){
    let isvalid:boolean=phoneRegex.validate(phone);
    console.log('Phone is '+phone+' is valid '+isvalid)
}
for(let phone of invalidPhone){
    let isvalid:boolean=phoneRegex.validate(phone);
    console.log('Phone is '+phone+' is valid '+isvalid)
}