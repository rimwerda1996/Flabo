import { Component, OnInit } from '@angular/core';
import { EtudiantService } from './etudiant.service';
import {Router} from '@angular/router';
import { Member } from '..//../models/Member';
import { FormGroup } from '@angular/forms';
import {NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.scss']
})
export class EtudiantListComponent implements OnInit {
  public tabStag: any;

  public tabStag1:Array <any>; 
  data : Member;
    
  constructor(private  etudiantService: EtudiantService,private router: Router,config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit() {
    this.affiche();
  }
  open(content) {
  
    this.modalService.open(content,{ size: 'lg' },);
    
    
  }
    



  affiche() {
  this.etudiantService.getAll().subscribe(data => {
      this.tabStag = data;
      console.log(this.tabStag);

});

}



save(data): void{
    
    const user= data.value;
   
    
        this.etudiantService.add(user).subscribe(
      res=>{
        this.affiche();
      }
    );
    
    this.router.navigate(['/etudiant']);
  }
  



update(id){
this.etudiantService.getById(id).subscribe( (data:Array<any>)  => {
  this.tabStag1 = data;
  this.etudiantService.changeMessage(this.tabStag1);
  
  this.tabStag1['id']=id;
  
  
  this.router.navigate(['/edit-etudiant']);
  });
  
}

deleteRes(id){
this.etudiantService.delete(id).subscribe((response => {console.log(response); this.etudiantService.getAll().subscribe(data=>{this.tabStag = data;})

}));



}

/*geAtt(id : String){
  
  this.etudiantService.getById(id).subscribe( (data:Array<any>)  => {
  this.tabStag1 = data;
  const doc = new jsPDF();
  
  doc.text("ATTESTATION DE STAGE",80,80);
  doc.setFont("helvetica");
  doc.setFontSize(9);
  doc.text("REF : ATS-2018-16",20,100);
  doc.text("Nous soussigné la société SPARK filiale de la société SPARK IT France, immatriculée au registre du commerce sous le numéro ",20,105);
  doc.text("B08237182013 et sise l'avenue Habib Bourguiba Imm Sékia centre App 21, 3011 Sfax, Tunisie. ",20,110);
  doc.text("Nous attestons par la présente que Monsieur "+this.tabStag1['nom']+" "+this.tabStag1['prenom'],20,120);
  doc.save("firstPDF.pdf")
  
});

  

}*/


}
