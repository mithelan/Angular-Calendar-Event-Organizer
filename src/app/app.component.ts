import {Component, ViewChild} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

import {Eventclass} from './Eventclass';
import {Calendar, EventInput} from '@fullcalendar/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  title = 'Calendar Events';

  calendarPlugins = [dayGridPlugin]; // important!

  calendarSchedule = [
    { date : '2020-04-30T12:59' , title: 'Birthday'},
  ];

  input: any = {};
  input1: any = {};


  myValue;


  done() {
    //ADDING TO BOTH CALENDAR AND TABLE
    this.calendarSchedule.push(this.input);
    this.input = {};
  }
  deleteEvent(i){
    this.calendarSchedule.splice(i, 1);


  }

  editEvent(s){
    this.input1.date = this.calendarSchedule[s].date;

    this.input1.title = this.calendarSchedule[s].title;
    this.myValue = s;
  }
  update(){
    const k = this.myValue;
    for (let i = 0; i < this.calendarSchedule.length; i++){
      if (i == k){
        this.calendarSchedule[i] = this.input1;
        this.input1 = {};
      }
    }
  }

  remainingTime(){

    const remind = Date.parse(this.input.date.start);
  //  this.remaining.push(remind);
    const i = 0;
    const current = new Date().getTime();
  //  const firstdate = Math.min.apply(null, this.remaining)
   // const timehave = (firstdate - current) / 60000;

    alert(' next ' );
  }
}
