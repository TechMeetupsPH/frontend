import { Component, OnInit } from '@angular/core';
import { Meetup } from '../_models/meetup';

import {MeetupService} from '../_services/meetup.service';

@Component({
  selector: 'app-meetups',
  templateUrl: './meetups.component.html',
  styleUrls: ['./meetups.component.scss']
})
export class MeetupsComponent implements OnInit {
  meetups: Array<Meetup>;

  constructor(private meetupService: MeetupService) {}

  ngOnInit() {
    this.getMeetups();
  }

  getMeetups() {
    // tslint:disable-next-line: deprecation
    return this.meetupService.getMeetups().subscribe((data: any) => {
       data.forEach(meetup => {
         this.meetups.push(new Meetup(
            meetup.id,
            meetup.title,
            meetup.description,
            meetup.agenda,
            meetup.startDate,
            meetup.startTime,
            meetup.endDate,
            meetup.endTime,
            meetup.organizer,
            meetup.communityName));
       });
    });
  }
}