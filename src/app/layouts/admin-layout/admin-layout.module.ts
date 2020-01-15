import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { EditMemberComponent } from '../../composants/edit-member/edit-member.component';
import { MemberListComponent } from '../../composants/member-list/member-list.component';
import { EtudiantListComponent } from '../../composants/etudiant-list/etudiant-list.component';
import { EnseignantListComponent } from '../../composants/enseignant-list/enseignant-list.component';
import { EditEtudiantComponent } from '../../composants/edit-etudiant/edit-etudiant.component';
import { EditEnseignantComponent } from '../../composants/edit-enseignant/edit-enseignant.component';
import { PublicationListComponent } from '../../composants/publication-list/publication-list.component';
import { EditPublicationComponent } from '../../composants/edit-publication/edit-publication.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,

  MatSelectModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    NgbModalModule,
  ],
  declarations: [
   
    EditMemberComponent,
    MemberListComponent,
    EtudiantListComponent,
    EnseignantListComponent,
    EditEtudiantComponent,
    EditEnseignantComponent,
    PublicationListComponent,
    EditPublicationComponent,
  ],
  entryComponents: [MemberListComponent,EtudiantListComponent,
    EnseignantListComponent,PublicationListComponent]
})

export class AdminLayoutModule {}
