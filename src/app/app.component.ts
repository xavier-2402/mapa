import { Component } from '@angular/core';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
 declare var google;

@Component({
  selector: 'app-root',
  styles: [`
    agm-map {
      height: 300px;
    }
  `],
  template: `
  <agm-map [latitude]="lat" [longitude]="lng" (mapClick)="onChoseLocation($event )"  [zoom]="zoom">
  <agm-marker [latitude]="lat" [longitude]="lng" ></agm-marker>
  </agm-map> 
  `
})
export class AppComponent {

  
  lat =-2.866667;
  lng = -78.933333;
  zoom =16;
  onChoseLocation(event){
    console.log(event);
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }
  loadMap(){
    const mapEle : HTMLElement = document.getElementById('map');
    

  }

 
}




/* @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  latitude = -2.866667;
  longitude =  -78.933333;
  zoom =16;
  directionsService = new google.maps.DirectionService();
    
  onChoseLocation(event){
    console.log(event);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    
  }
  loadMap(){
    const mapEle : HTMLElement = document.getElementById('map');
    
  }
}
*/