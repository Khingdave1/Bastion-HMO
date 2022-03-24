import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-individual-family',
  templateUrl: './individual-family.component.html',
  styleUrls: ['./individual-family.component.css']
})
export class IndividualFamilyComponent implements OnInit {

  id: any = "monthly"


  constructor() { }

  ngOnInit(): void {
  }

  tabChange(ids: any) {
    this.id = ids

    console.log(this.id)
  }

}
