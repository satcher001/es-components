import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamHomePage } from '../pages';
import { EliteApiService } from '../../providers/shared';


@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {

  game: any = {};

  constructor(public navCtrl: NavController,
              private navParams: NavParams,
              private eliteApi: EliteApiService) {}

  ionViewDidLoad() {
    this.game = this.navParams.data;
  }

  teamTapped(teamId){
    let tourneyData = this.eliteApi.getCurrentTourney();
    let team = tourneyData.teams.find(t => t.id === teamId);
    this.navCtrl.push(TeamHomePage, team);
  }

}
