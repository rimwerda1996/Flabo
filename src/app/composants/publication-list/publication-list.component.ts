import { Component, OnInit } from '@angular/core';
import { PublicationService } from './publication.service';
import {Router} from '@angular/router';
import { Publication } from '..//../models/Publication';
import { FormGroup } from '@angular/forms';
import {NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.scss']
})
export class PublicationListComponent implements OnInit {

  public tabStag: any;

  public tabStag1:Array <any>; 
  data : Publication;
    
  constructor(private  memberService: PublicationService,private router: Router,config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit() {
    this.affiche();
  }
  
    
  open(content) {
  
    this.modalService.open(content,{ size: 'lg' },);
    
    
  }
  open1(content,id) {
  
    this.modalService.open(content,{ size: 'lg' },);
    
    
  }


  affiche() {
  this.memberService.getAll().subscribe(data => {
      this.tabStag = data;
      console.log(this.tabStag);

});

}



save(data): void{
    
    const user= data.value;
   
    
        this.memberService.add(user).subscribe(
      res=>{
        this.affiche();
      }
    );
    this.router.navigate(['/publication']);
  }
  



update(id){
this.memberService.getById(id).subscribe( (data:Array<any>)  => {
  this.tabStag1 = data;
  console.log(this.tabStag1)
  this.memberService.changeMessage(this.tabStag1);
  
  this.tabStag1['id']=id;
  
  
  this.router.navigate(['/edit-publication']);
  });
  
}

deleteRes(id){
this.memberService.delete(id).subscribe((response => {console.log(response); this.memberService.getAll().subscribe(data=>{this.tabStag = data;})

}));



}




}

