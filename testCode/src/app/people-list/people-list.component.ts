import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { Location } from '@angular/common'

import 'rxjs/add/operator/switchMap'

import { PeopleService } from '../people.service'
import { Person } from '../person'

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
  providers: [ PeopleService ]
})
export class PeopleListComponent implements OnInit {
  people: Person[]

  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getPeople(params.id)
    })
  }

  private getPeople(companyId: string) {
    this.peopleService.getPeople(companyId)
      .then(people => this.people = people)
  }
}
