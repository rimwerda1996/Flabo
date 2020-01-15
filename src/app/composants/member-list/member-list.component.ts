import { Component, OnInit } from '@angular/core';
import { MemberService } from './member.service';
import {Router} from '@angular/router';
import { Member } from '..//../models/Member';
import { FormGroup } from '@angular/forms';
import {NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  public tabStag: any;

  public tabStag1:Array <any>; 
  data : Member;
    
  constructor(private  memberService: MemberService,private router: Router,config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit() {
    this.affiche();
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
    this.router.navigate(['/member']);
  }
  



update(id){
this.memberService.getById(id).subscribe( (data:Array<any>)  => {
  this.tabStag1 = data;
  this.memberService.changeMessage(this.tabStag1);
  
  this.tabStag1['id']=id;
  
  
  this.router.navigate(['/edit-member']);
  });
  
}

deleteRes(id){
this.memberService.delete(id).subscribe((response => {console.log(response); this.memberService.getAll().subscribe(data=>{this.tabStag = data;})

}));



}




}
