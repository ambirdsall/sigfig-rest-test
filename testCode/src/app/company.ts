export class Company {
  id: string
  name: string
  address: string
  revenue: number
  phone: string

  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.address = data.address
    this.revenue = data.revenue
    this.phone = data.phone
  }
}
