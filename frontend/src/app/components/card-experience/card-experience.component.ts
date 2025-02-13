import { Component, Input, OnInit } from '@angular/core';
import { Travel } from 'src/app/models/travel';
import { MediaService } from 'src/app/services/media.service';

@Component({
  selector: 'app-card-experience',
  templateUrl: './card-experience.component.html',
  styleUrls: ['./card-experience.component.css'],
})
export class CardExperienceComponent implements OnInit {

  @Input() travel: Travel | null = null;

  path: string = '';
  info: string = '';

  months: string[] = [
    "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
  ];

  constructor(private service: MediaService) {
    this.path = this.service.path;
  }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    
    if (this.travel) {

      const start = new Date(this.travel.date_start);
      const end = new Date(this.travel.date_end);

      if (start.getMonth() != end.getMonth() && start.getFullYear() == end.getFullYear()) {
        this.info = `${start.getDate()}/${start.getMonth() + 1} - ${end.getDate()}/${end.getMonth() + 1}`;
      }

      if (start.getMonth() == end.getMonth() && start.getFullYear() == end.getFullYear()) {
        this.info = `${start.getDate()} AL ${end.getDate()} DE ${this.months[start.getMonth()]}`;
      }

      this.info += ` | DESDE ${this.travel.cost} USD`;   

    }
  }
}
