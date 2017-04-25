import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { Company } from '../company'
import { CompanyService } from '../company.service'

@Component({
  selector: 'company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css']
})
export class CompanyCreateComponent {
  company: Company
  constructor(
    private companyService: CompanyService,
    private router: Router
  ) {
    this.company = new Company({})
  }

  create() {
    this.companyService.create(this.company)
      .then(company => this.router.navigate(['/companies', company._id]))
  }

}
