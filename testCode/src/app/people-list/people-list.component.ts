import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { Location } from '@angular/common'

import 'rxjs/add/operator/switchMap'

import { PeopleService } from '../people.service'
import { Person } from '../person'
import { CompanyService } from '../company.service'
import { Company } from '../company'

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  providers: [ PeopleService ]
})
export class PeopleListComponent implements OnInit {
  people: Person[]
  company: Company

  constructor(
    private peopleService: PeopleService,
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getData(params.id)
    })
  }

  private getData(companyId: string) {
    this.peopleService.getPeople(companyId)
      .then(people => this.people = people)

    this.companyService.getCompany(companyId)
      .then(company => this.company = company)
  }
}
