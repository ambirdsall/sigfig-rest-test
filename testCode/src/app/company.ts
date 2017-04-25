export class Company {
  _id: string
  name: string
  address: string
  revenue: number
  phone: string

  constructor(data) {
    this._id = data._id
    this.name = data.name
    this.address = data.address
    this.revenue = data.revenue
    this.phone = data.phone
  }
}
