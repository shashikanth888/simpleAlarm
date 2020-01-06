import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  alarms_static = [{
    id: 1,
    time: "8:30 am",
    partOfDay: "morning",
    days: "Mon, Tue, Wed & Fri",
    label: "Gym",
    isActive: true
  },
  {
    id: 2,
    time: "10:00 am",
    partOfDay: "morning",
    days: "Mon, Tue, Wed & Fri",
    label: "Work",
    isActive: true
  },
  {
    id: 3,
    time: "1:00 pm",
    partOfDay: "noon",
    days: "Mon, Tue, Wed & Fri",
    label: "Lunch with Bert",
    isActive: false
  },{
    id: 4,
    time: "5:30 pm",
    partOfDay: "sunset",
    days: "Mon, Tue, Wed & Fri",
    label: "Coffee with Intern",
    isActive: true
  },{
    id: 5,
    time: "8:00 pm",
    partOfDay: "night",
    days: "Mon, Tue, Wed & Fri",
    label: "Call Bethany",
    isActive: true
  },
  {
    id: 6,
    time: "10:00 pm",
    partOfDay: "night",
    days: "Mon, Tue, Wed & Fri",
    label: "Party",
    isActive: false
  }
  ];
  alarms: [];

  constructor(private storage: Storage) {
    this.storage.set('alarms',this.alarms_static);
    this.storage.get('alarms').then((val)=>{
      this.alarms = val;
    })
  }


}
