import { Component, Input } from '@angular/core';
import { Company } from '../company'

@Component({
  selector: 'company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent {
  @Input() company: Company
}
