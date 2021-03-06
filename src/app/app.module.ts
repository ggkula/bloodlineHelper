import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { IndexComponent } from './page/index/index.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ListComponent } from './page/list/list.component';
import { SingleResolveComponent } from './page/single-resolve/single-resolve.component';
import { NewPlayerComponent } from './page/new-player/new-player.component';
import { ResolveComponent } from './component/resolve/resolve.component';
import { ListDetailComponent } from './page/list-detail/list-detail.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { SupportUsComponent } from './page/support-us/support-us.component';
import { RankingComponent } from './component/ranking/ranking.component';
import { DlPicDirective } from './directive/dl-pic.directive';
import { BorderDirective } from './directive/border.directive';
import { SkillBoardComponent } from './component/skill-board/skill-board.component';
import { UpdateInfoListComponent } from './page/update-info-list/update-info-list.component';
import { UpdateInfoDetailComponent } from './page/update-info-detail/update-info-detail.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    SingleResolveComponent,
    NewPlayerComponent,
    ResolveComponent,
    ListDetailComponent,
    AboutUsComponent,
    SupportUsComponent,
    RankingComponent,
    DlPicDirective,
    BorderDirective,
    SkillBoardComponent,
    UpdateInfoListComponent,
    UpdateInfoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
