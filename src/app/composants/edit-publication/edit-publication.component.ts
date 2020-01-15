import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms'
import {Router} from '@angular/router';
import { PublicationService } from '..//publication-list/publication.service';
import { Publication } from '..//../models/publication';

@Component({
  selector: 'app-edit-publication',
  templateUrl: './edit-publication.component.html',
  styleUrls: ['./edit-publication.component.scss']
})
export class EditPublicationComponent implements OnInit {

  public tabStag: Array <any>;
  stagiaireForm : FormGroup;
  click: string;
  
  lien : String;
  sourcepdf : String;
  type : String;
  data : Publication;
  i : string;
  
  date : Date;

  public tabStag2: any;
  
  constructor(private memberService: PublicationService, private router: Router ) {}

  ngOnInit() {
    this.memberService.currentMessage.subscribe(message => this.tabStag2 = message);
  console.log(this.tabStag2);
  this.type = this.tabStag2['type'];
  this.sourcepdf = this.tabStag2['sourcepdf'];
  this.date= this.tabStag2['date'];
  this.lien = this.tabStag2['lien'];
  
    this.i=(this.tabStag2["id"]);
    
  }
  update(data): void {
    const projet= data.value;
    console.log(projet)
   
        this.memberService.update(this.i,projet).subscribe(
      res=>{
       
        this.router.navigate(['/publication']);
      }
    );
    

    } 


}
