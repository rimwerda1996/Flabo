import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms'
import {Router} from '@angular/router';
import { EnseignantService } from '..//enseignant-list/enseignant.service';
import { Member } from '..//../models/member';
@Component({
  selector: 'app-edit-enseignant',
  templateUrl: './edit-enseignant.component.html',
  styleUrls: ['./edit-enseignant.component.scss']
})
export class EditEnseignantComponent implements OnInit {
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
  grade : string;
  etablissement : string;

  public tabStag2: any;
  
  constructor(private memberService: EnseignantService, private router: Router ) {}

  ngOnInit() {
    this.memberService.currentMessage.subscribe(message => this.tabStag2 = message);
  console.log(this.tabStag2);
    this.email = this.tabStag2['email'];
    this.cin = this.tabStag2['cin'];
    this.nom = this.tabStag2['nom'];
    this.prenom = this.tabStag2['prenom'];
    this.grade = this.tabStag2['grade'];
    this.etablissement = this.tabStag2['etablissement'];

    this.i=(this.tabStag2["id"]);
    
  }
  update(data): void {
    const projet= data.value;
    console.log(projet)
   
        this.memberService.update(this.i,projet).subscribe(
      res=>{
       
        this.router.navigate(['/enseignant']);
      }
    );
    

    } 


}
