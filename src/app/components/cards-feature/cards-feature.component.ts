import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-feature',
  templateUrl: './cards-feature.component.html',
  styleUrls: ['./cards-feature.component.scss']
})
export class CardsFeatureComponent implements OnInit {

  @Input() public isActive;

  constructor() { }

  ngOnInit(): void {
  }

}
