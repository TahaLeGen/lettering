
import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import FontPicker from 'font-picker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text = new FormControl('');
  values = '';
  apiUrl = "AIzaSyB7RRINN5YV3rytz8CG232CPZJwNCkCLhM"
  fontPicker:any
  opened =  false
  ngOnInit() {
    this.fontPicker = new FontPicker(
      "AIzaSyB7RRINN5YV3rytz8CG232CPZJwNCkCLhM", // Google API key
      "Open Sans", // Default font
      { limit: 120 }, // Additional options
    );
  }
  onKey(event: any) { // without type info
    this.values = event.target.value ;
  }
  expand () {
    this.opened = !this.opened
  }



  
}
