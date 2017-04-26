import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { ActivatedRoute, Params } from '@angular/router'
import { Location } from '@angular/common'

import { Person } from '../person'
import { PeopleService } from '../people.service'
import { Company } from '../company'
import { CompanyService } from '../company.service'

@Component({
  selector: 'person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css'],
  providers: [ PeopleService, CompanyService ]
})
export class PersonEditComponent implements OnInit {
  person: Person
  companies: Company[]

  constructor(
    private peopleService: PeopleService,
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getData(params.personId)
    })
  }

  edit() {
    this.peopleService.edit(this.person)
      .then(() => this.router.navigate(['/companies', this.person.companyId, 'people']))
  }

  private getData(personId: string): void {
    this.peopleService.getPerson(personId)
      .then(person => this.person = person)
      .then(() => {
        this.companyService.getCompanies()
          .then(companies => this.companies = companies)
      })
  }
}
