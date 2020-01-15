import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms'
import {Router} from '@angular/router';
import { EtudiantService } from '..//etudiant-list/etudiant.service';
import { Member } from '..//../models/member';
@Component({
  selector: 'app-edit-etudiant',
  templateUrl: './edit-etudiant.component.html',
  styleUrls: ['./edit-etudiant.component.scss']
})
export class EditEtudiantComponent implements OnInit {

  public tabStag: Array <any>;
  stagiaireForm : FormGroup;
  click: string;
  email : String;
  password : String;
  nom: String;
  prenom : String;
  cin : String;
  tel : String;
  data : Member;
  i : string;
  diplome : string;
  date : Date;

  public tabStag2: any;
  
  constructor(private memberService: EtudiantService, private router: Router ) {}

  ngOnInit() {
    this.memberService.currentMessage.subscribe(message => this.tabStag2 = message);
  console.log(this.tabStag2);
    this.email = this.tabStag2['email'];
    this.cin = this.tabStag2['cin'];
    this.nom = this.tabStag2['nom'];
    this.prenom = this.tabStag2['prenom'];
    this.diplome = this.tabStag2['diplome'];
    this.date = this.tabStag2['dateInscirption'];

    this.i=(this.tabStag2["id"]);
    
  }
  update(data): void {
    const projet= data.value;
    console.log(projet)
   
        this.memberService.update(this.i,projet).subscribe(
      res=>{
       
        this.router.navigate(['/etudiant']);
      }
    );
    

    } 


}
