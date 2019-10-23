import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meetup } from '../_models/meetup';

@Injectable({ providedIn: "root" })
export class MeetupService {
  meetups: Array<Meetup>;

  constructor(private http: HttpClient) {}

  getMeetups() {
    return this.http.get<Meetup[]>(`/meetup`);
  }
}
