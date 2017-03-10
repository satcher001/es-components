import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { TeamHomePage } from '../pages';
import { EliteApiService } from '../../providers/shared';

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html'
})
export class TeamsPage {

  teams = [];
  /*teams = [
          { id: 1, name: 'HC Elite' },
          { id: 2, name: 'Team Takeover' },
          { id: 3, name: 'DC Thunder' }
      ];*/

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private eliteApi: EliteApiService,
              private loadingController: LoadingController) {}

  itemTapped($event, team){
    this.navCtrl.push(TeamHomePage, team);
  }
  /*itemTapped(){
    this.navCtrl.push(TeamHomePage);
  }*/


  ionViewDidLoad() {
    let selectedTourney = this.navParams.data;

    let loader = this.loadingController.create({
      content: 'Getting Tournaments...'
    });

    loader.present().then(() => {
    this.eliteApi.getTournamentData(selectedTourney.id)
      .subscribe(data => {
        this.teams = data.teams;
        loader.dismiss();
      });
    });
    //console.log('ionViewDidLoad TeamsPage');
  }

}
