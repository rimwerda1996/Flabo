import { Component, OnInit } from '@angular/core';
import { EnseignantService } from './enseignant.service';
import {Router} from '@angular/router';
import { Member } from '..//../models/Member';
import { FormGroup } from '@angular/forms';
import {NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-enseignant-list',
  templateUrl: './enseignant-list.component.html',
  styleUrls: ['./enseignant-list.component.scss']
})
export class EnseignantListComponent implements OnInit {

  public tabStag: any;
  public tabPub: any;


  public tabStag1:Array <any>; 
  data : Member;
    
  constructor(private  enseignantService: EnseignantService,private router: Router,config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit() {
    this.affiche();
  }
  open(content) {
  
    this.modalService.open(content,{ size: 'lg' },);
    
    
  }
    
  open1(content,id) {
    this.enseignantService.getPub(id).subscribe(data => {
      this.tabPub = data;
    this.modalService.open(content,{ size: 'lg' },);
    //get liste des auteurs
   
     

});
    
    
  }



  affiche() {
  this.enseignantService.getAll().subscribe(data => {
      this.tabStag = data;
      console.log(this.tabStag);

});

}



save(data): void{
    
    const user= data.value;
   
    
        this.enseignantService.add(user).subscribe(
      res=>{
        this.affiche();
      }
    );
    this.router.navigate(['/enseignant']);
  }
  



update(id){
this.enseignantService.getById(id).subscribe( (data:Array<any>)  => {
  this.tabStag1 = data;
  this.enseignantService.changeMessage(this.tabStag1);
  
  this.tabStag1['id']=id;
  
  
  this.router.navigate(['/edit-enseignant']);
  });
  
}

deleteRes(id){
this.enseignantService.delete(id).subscribe((response => {console.log(response); this.enseignantService.getAll().subscribe(data=>{this.tabStag = data;})

}));



}




}
