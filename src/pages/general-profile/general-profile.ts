import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile} from '../../models/profile';
import { Api , User } from '../../providers'

/**
 * Generated class for the GeneralProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-general-profile',
  templateUrl: 'general-profile.html',
})
export class GeneralProfilePage {
  profile : any;
  iduser : number;
  profileinfo: any;
  rank : number;

  //barChart
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2012', '2013', '2014', '2015', '2016', '2017', '2018'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Virtual Jobs'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Physical Jobs'}
  ];
  

  // Doughnut
  public doughnutChartLabels:string[] = ['Programming', 'Photography', 'Music'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

  // Radar
  public radarChartLabels:string[] = ['Ranking', 'Puntuality', 'Communication', 'Responsability', 'Effectiveness', 'Teaching'];

  public radarChartData:any = [
    {data: [65, 59, 90, 81, 56, 55, 40], label: 'My Jobs '},
    {data: [28, 48, 40, 19, 96, 27, 100], label: 'My Business'}
  ];
  public radarChartType:string = 'radar';

  constructor(public navCtrl: NavController, public navParams: NavParams,public api: Api, public user: User) {
    var iduser = navParams.get('iduser');
    this.profileinfo = "general";
    this.rank = Math.round(Math.random()*5);
    this.user.selectProfile(iduser).subscribe(res => this.profile= (res as any) as Profile);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneralProfilePage');
  }

   // events
public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}

public randomize():void {
  // Only Change 3 values
  let data = [
    Math.round(Math.random() * 100),
    59,
    80,
    (Math.random() * 100),
    56,
    (Math.random() * 100),
    40];
  let clone = JSON.parse(JSON.stringify(this.barChartData));
  clone[0].data = data;
  this.barChartData = clone;
}

}
