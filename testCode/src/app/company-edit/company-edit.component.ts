import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { ActivatedRoute, Params } from '@angular/router'
import { Location } from '@angular/common'

import { Company } from '../company'
import { CompanyService } from '../company.service'

@Component({
  selector: 'company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css'],
  providers: [ CompanyService ]
})
export class CompanyEditComponent implements OnInit {
  company: Company

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  edit() {
    this.companyService.edit(this.company)
      .then(() => this.router.navigate(['/companies', this.company._id]))
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getCompany(params.id)
    })
  }

  private getCompany(companyId: string): void {
    this.companyService.getCompany(companyId)
      .then(company => this.company = company)
  }
}
