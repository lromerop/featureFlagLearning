import { Component, OnInit } from '@angular/core';
import { FeatureFlagsService } from './service/feature-flags.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public isActive: boolean;

  constructor(private featureFlags: FeatureFlagsService ) { }

  ngOnInit(){
    const { testfeatureflag } = this.featureFlags.getFlags();
    console.log('testfeatureflag',testfeatureflag);
    this.isActive = testfeatureflag.enabled;
  }
  
}
