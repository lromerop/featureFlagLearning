import { Injectable } from '@angular/core';
import flagsmith from 'flagsmith';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeatureFlagsService {

  public getFlags(){
    return flagsmith.getAllFlags();
  }

}

export function preloadFlags() {
  return async function() { 
    return flagsmith.init({
      environmentID: environment.apiKeyFeatureFlags
    });
  };
}
