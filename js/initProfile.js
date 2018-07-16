import { InfosProfil } from './InfosProfil.js';

class InitProfile {
    constructor() {
        this.request = new XMLHttpRequest();
        this.request.open('GET','data/profil.json');
        this.request.responseType = 'json';
        this.request.send();
        this.request.onload = () => {
            this.jsonObject = this.request.response;
            this.Profil = new InfosProfil (this.jsonObject.codePatient,this.jsonObject.prenom,this.jsonObject.nom,this.jsonObject.telephone,this.jsonObject.photoProfil,this.jsonObject.photoFaceAv,this.jsonObject.photoFaceAp,this.jsonObject.photoIntraAv, this.jsonObject.photoIntraAp, this.jsonObject.photoRadioAv, this.jsonObject.photoRadioAp);
            //  console.log(this.jsonObject.photoRadioAv);
        }
    }
}
var init = new InitProfile();
