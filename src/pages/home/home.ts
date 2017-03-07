import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { TimeLinePage } from '../timeline/timeline';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  GoPlaces(keyword){
  	this.navCtrl.push(TimeLinePage, {
  		page: keyword
  	});
  }

}
