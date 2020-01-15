import { Routes } from '@angular/router';

import { MemberListComponent } from '../../composants/member-list/member-list.component';
import { EditMemberComponent } from '../../composants/edit-member/edit-member.component';
import { EtudiantListComponent } from '../../composants/etudiant-list/etudiant-list.component';
import { EditEtudiantComponent } from '../../composants/edit-etudiant/edit-etudiant.component';
import { EnseignantListComponent } from '../../composants/enseignant-list/enseignant-list.component';
import { EditEnseignantComponent } from '../../composants/edit-enseignant/edit-enseignant.component';
import { PublicationListComponent } from '../../composants/publication-list/publication-list.component';
import { EditPublicationComponent } from '../../composants/edit-publication/edit-publication.component';



export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'member',     component: MemberListComponent },
    { path: 'edit-member',     component: EditMemberComponent },
    { path: 'etudiant',     component: EtudiantListComponent },
    { path: 'edit-etudiant',     component: EditEtudiantComponent },
    { path: 'enseignant',     component: EnseignantListComponent },
    { path: 'edit-enseignant',     component: EditEnseignantComponent },
    { path: 'publication',     component: PublicationListComponent },
    { path: 'edit-publication',     component: EditPublicationComponent },




];
