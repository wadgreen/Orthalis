export class InfosProfil {
    constructor(codePatient, prenom, nom, telephone, photoProfil, photoFaceAv, photoFaceAp, photoIntraAv, photoIntraAp, photoRadioAv, photoRadioAp) {
        this.codePatient = codePatient;
        this.prenom = prenom;
        this.nom = nom;
        this.telephone = telephone;
        // this.dateNaissance = profil.dateNaissance;
        this.photoProfil = photoProfil;
        this.photoFaceAv = photoFaceAv;
        this.photoFaceAp = photoFaceAp;
        this.photoIntraAv = photoIntraAv;
        this.photoIntraAp = photoIntraAp;
        this.photoRadioAv = photoRadioAv;
        this.photoRadioAp = photoRadioAp;
        this.recupererInfosProfil();
    }
    recupererInfosProfil() {
        document.getElementById("key").value = this.codePatient;
        document.getElementById("prenom").value = this.prenom;
        document.getElementById("nom").value = this.nom;
        document.getElementById("phone").value = this.telephone;
        // document.getElementById("#").date = this.dateNaissance;
        document.getElementById("profil").src = this.photoProfil;
        document.getElementById("faceAv").src = this.photoFaceAv;
        document.getElementById("faceAp").src = this.photoFaceAp;
        document.getElementById("IntraAv").src = this.photoIntraAv;
        document.getElementById("IntraAp").src = this.photoIntraAp;
        // document.getElementById("d4").src = this.photoRadioAv;
        // document.getElementById("d4").src = this.photoRadioAp;
    }
}
