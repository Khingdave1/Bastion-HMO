import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-individual-family',
  templateUrl: './individual-family.component.html',
  styleUrls: ['./individual-family.component.css']
})
export class IndividualFamilyComponent implements OnInit {

  id: any = "monthly"
  packageId: any = "berly"

  plans = [
    {
      id: 1,
      name: "Berly",
      price: 150000,
      benefits: [
        {
          name: "Consultation Coverage",
        },
        {
          name: "Screening and Diagnostics",
        },
        {
          name: "Maternal & Infant Care",
        },
        {
          name: "Dental, Eye, ENT, etc",
        },
      ]
    },
    {
      id: 2,
      name: "Ruby",
      price: 250000,
      benefits: [
        {
          name: "Consultation Coverage",
        },
        {
          name: "Screening and Diagnostics",
        },
        {
          name: "Maternal & Infant Care",
        },
        {
          name: "Dental, Eye, ENT, etc",
        },
        {
          name: "Premium",
        },
      ]
    },
    {
      id: 3,
      name: "Sapphirre",
      price: 350000,
      benefits: [
        {
          name: "Consultation Coverage",
        },
        {
          name: "Screening and Diagnostics",
        },
        {
          name: "Maternal & Infant Care",
        },
        {
          name: "Dental, Eye, ENT, etc",
        },
        {
          name: "Premium",
        },
      ]
    }
  ]


  constructor() { }

  ngOnInit(): void {
    console.log(this.plans)
  }

  tabChange(ids: any) {
    this.id = ids

    console.log(this.id)
  }

  packageChange(ids: any) {
    this.packageId = ids

    console.log(this.id)
  }
}
