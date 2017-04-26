import { Component, Input } from '@angular/core';
import { Company } from '../company'

@Component({
  selector: 'company-form',
  templateUrl: './company-form.component.html'
})
export class CompanyFormComponent {
  @Input() company: Company
}
