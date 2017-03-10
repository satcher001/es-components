import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';

import { MyTeamsPage, TeamsPage } from '../pages';
import { EliteApiService } from '../../providers/shared';

@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html'
})
export class TournamentsPage {

  tournaments: any;

  constructor(
      private navCtrl: NavController,
      private navParams: NavParams,
      private eliteApi: EliteApiService,
      private loadingController: LoadingController
    ) {}

  itemTapped($event, tourney){
    this.navCtrl.push(TeamsPage, tourney);
  }

  ionViewDidLoad(){
    let loader = this.loadingController.create({
      content: 'Getting Tournaments...'
    });

    loader.present().then(() => {
      this.eliteApi.getTournaments().then(data => {
        this.tournaments = data;
        loader.dismiss();
      });
    });
  }
}
