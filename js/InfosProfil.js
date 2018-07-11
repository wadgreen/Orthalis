export class InfosProfil{
    // constructor(profil, laura, message, prenom, nom, telephone, idClient, image, ...dent) {
    constructor(profil) {
        // {profil:"fff", message:"sddsd",}
        this.profil = profil;
        this.laura = profil.laura;
        this.message = profil.message;
        this.nom = profil.nom;
        this.prenom = profil.prenom;
        this.telephone = profil.telephone;
        this.idClient =  profil.idClient;
        this.image = profil.image;
        this.dents = profil.dent;
        this.recupererInfosProfil();
    }
    recupererInfosProfil() {
        document.querySelector(".center").textContent =  this.profil;
        document.querySelector("#lau").textContent =  this.laura;
        document.querySelector("#message").textContent =  this.message;
        document.querySelector(".prenom").value = this.prenom;
        document.querySelector(".nom").innerText = this.nom;
        document.querySelector(".tel").value = this.telephone;
        document.querySelector(".idclient").value = this.idClient;
        document.querySelector("#circle").src = this.image;
        
        this.dentsEl = document.querySelector("#dents div div img");
        
        for(let d in this.dentsEl){
            console.log(d);
            this.dentsEl[d].src = this.dents[d];
        }
        // document.querySelector("#d1").src = this.dent1;
        // document.querySelector("#d2").src = this.dent2;
        // document.querySelector("#d3").src = this.dent3;
        // document.querySelector("#d4").src = this.dent4;
    }
}