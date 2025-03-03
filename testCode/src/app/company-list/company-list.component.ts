import { Component, OnInit } from '@angular/core'
import { CompanyService } from '../company.service'
import { Company } from '../company'

@Component({
  selector: 'company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
  providers: [ CompanyService ]
})
export class CompanyListComponent implements OnInit {
  // TODO: handle upstream http errors gracefully
  companies: Company[]
  mode = 'Observable'

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.getCompanies()
  }

  getCompanies(): void {
    this.companyService.getCompanies()
      .then(companies => this.companies = companies)
  }
}
