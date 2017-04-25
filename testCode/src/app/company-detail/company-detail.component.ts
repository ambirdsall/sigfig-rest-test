import { Component, Input } from '@angular/core'
import { Company } from '../company'

@Component({
  selector: 'company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent {
  @Input() company: Company
}
