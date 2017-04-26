import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { ActivatedRoute, Params } from '@angular/router'
import { Location } from '@angular/common'

import { PeopleService } from '../people.service'
import { Person } from '../person'

@Component({
  selector: 'person-detail',
  templateUrl: './person-detail.component.html'
})
export class PersonDetailComponent implements OnInit {
  person: Person

  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getPerson(params.personId)
    })
  }

  delete(): void {
    this.peopleService.delete(this.person._id)
      .then(() => this.router.navigate(['/companies', this.person.companyId, 'people']))
  }

  private getPerson(personId: string): void {
    this.peopleService.getPerson(personId)
      .then(person => this.person = person)
  }
}
