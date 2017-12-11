import { Component, Input, TemplateRef } from '@angular/core';
import { WeekDay } from 'calendar-utils';

@Component({
  selector: 'mwl-calendar-month-view-header',
  templateUrl:'./calendar-month-view-header.component.html'

})
export class CalendarMonthViewHeaderComponent {
  @Input() days: WeekDay[];

  @Input() locale: string;

  @Input() customTemplate: TemplateRef<any>;
}
