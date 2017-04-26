import { Component } from '@angular/core';
import { Router } from '@angular/router'

import { Person } from '../person'
import { PeopleService } from '../people.service'

@Component({
  selector: 'person-create',
  templateUrl: './person-create.component.html',
  providers: [ PeopleService ]
})
export class PersonCreateComponent {
  person: Person

  constructor(
    private peopleService: PeopleService,
    private router: Router
  ) {
    this.person = new Person({})
  }

  create() {
    this.peopleService.create(this.person)
      .then(person => this.router.navigate(['/companies', person.companyId, 'people', person._id]))
  }
}
