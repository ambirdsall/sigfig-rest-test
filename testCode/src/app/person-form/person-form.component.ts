import { Component, Input, OnInit } from '@angular/core';

import { Person } from '../person'
import { Company } from '../company'
import { CompanyService } from '../company.service'

@Component({
  selector: 'person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
  providers: [ CompanyService ]
})
export class PersonFormComponent implements OnInit {
  companies: Company[]

  @Input() person: Person

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.getCompanies()
  }

  getCompanies(): void {
    this.companyService.getCompanies()
      .then(companies => this.companies = companies)
  }
}
