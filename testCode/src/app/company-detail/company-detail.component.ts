import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Location } from '@angular/common'

import 'rxjs/add/operator/switchMap'

import { CompanyService } from '../company.service'
import { Company } from '../company'

@Component({
  selector: 'company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  company: Company

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getCompany(params.id)
    })
  }

  private getCompany(id: string): void {
    this.companyService.getCompany(id)
      .then(company => this.company = company)
  }
}
