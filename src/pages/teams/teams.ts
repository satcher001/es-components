import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import _ from 'lodash';
import { TeamHomePage } from '../pages';
import { EliteApiService } from '../../providers/shared';
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html'
})
export class TeamsPage {
  private allTeams: any;
  private allTeamDivisions: any;
  teams = [];
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
  ionViewDidLoad(){
    //console.log('**lodash debug', lodash, _);
    let selectedTourney = this.navParams.data;
    let loader = this.loadingController.create({
      content: 'Getting data...'
    });
    loader.present().then(() => {
      this.eliteApi.getTournamentData(selectedTourney.id).subscribe(data => {
        this.allTeams = data.teams;
        this.allTeamDivisions =
            _.chain(data.teams)
            .groupBy('division')
            .toPairs()
            .map(item => _.zipObject(['divisionName', 'divisionTeams'], item))
            .value();
        this.teams = this.allTeamDivisions;
        console.log('division teams', this.teams);
        loader.dismiss();
      });
    });
  }
}
