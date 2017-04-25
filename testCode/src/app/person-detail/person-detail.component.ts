import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router'
import { Location } from '@angular/common'

import 'rxjs/add/operator/switchMap'

import { PeopleService } from '../people.service'
import { Person } from '../person'

@Component({
  selector: 'person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  person: Person

  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getPerson(params.personId)
    })
  }

  private getPerson(personId: string): void {
    this.peopleService.getPerson(personId)
      .then(person => this.person = person)
  }
}
