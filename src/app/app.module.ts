import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { GamePage, MyTeamsPage, TeamDetailPage, TeamsPage, TournamentsPage, TeamHomePage, StandingsPage } from '../pages/pages';
import { HttpModule } from '@angular/http';
import { EliteApiService } from '../providers/shared';


@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    GamePage,
    TeamsPage,
    TeamDetailPage,
    TournamentsPage,
    TeamHomePage,
    StandingsPage
  ],
  imports: [
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    GamePage,
    TeamsPage,
    TeamDetailPage,
    TournamentsPage,
    TeamHomePage,
    StandingsPage
  ],
  providers: [
    EliteApiService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
