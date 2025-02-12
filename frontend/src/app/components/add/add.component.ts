import { Component, Input } from '@angular/core';
import { Add } from 'src/app/models/add';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  @Input() add: Add|null =null;
 
}

