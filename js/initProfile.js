import { InfosProfil } from './InfosProfil.js';

class InitProfile {
    constructor() {
        this.request = new XMLHttpRequest();
        this.request.open('GET','data/profil.json');
        this.request.responseType = 'json';
        this.request.send();
        this.request.onload = () => {
            this.jsonObject = this.request.response;
            this.InfosProfil = new InfosProfil (this.jsonObject);
            // console.log(this.jsonObject.image);
        }
    }
}
var init = new InitProfile();