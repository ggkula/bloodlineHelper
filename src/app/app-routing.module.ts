import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {IndexComponent} from "./page/index/index.component";
import {ListComponent} from "./page/list/list.component";
import {SingleResolveComponent} from "./page/single-resolve/single-resolve.component";
import {NewPlayerComponent} from "./page/new-player/new-player.component";
import {ListDetailComponent} from "./page/list-detail/list-detail.component";
import {AboutUsComponent} from "./page/about-us/about-us.component";
import {SupportUsComponent} from "./page/support-us/support-us.component";
import {UpdateInfoListComponent} from "./page/update-info-list/update-info-list.component";
import {UpdateInfoDetailComponent} from "./page/update-info-detail/update-info-detail.component";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'listDetail/:id',
    component: ListDetailComponent
  },
  {
    path: 'singleResolve',
    component: SingleResolveComponent
  },
  {
    path: 'newPlayer',
    component : NewPlayerComponent
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent
  },
  {
    path: 'supportUs',
    component: SupportUsComponent
  },
  {
    path: 'updateInfoList',
    component: UpdateInfoListComponent
  },
  {
    path: 'updateInfoDetail',
    component: UpdateInfoDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
