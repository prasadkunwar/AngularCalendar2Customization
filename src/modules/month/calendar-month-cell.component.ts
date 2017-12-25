import {
  Component,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { MonthViewDay, CalendarEvent } from 'calendar-utils';


@Component({
  selector: 'mwl-calendar-month-cell',
  templateUrl: './calendar-month-cell.component.html',
  host: {
    class: 'cal-cell cal-day-cell',
    '[class.cal-past]': 'day.isPast',
    '[class.cal-today]': 'day.isToday',
    '[class.cal-future]': 'day.isFuture',
    '[class.cal-weekend]': 'day.isWeekend',
    '[class.cal-in-month]': 'day.inMonth',
    '[class.cal-out-month]': '!day.inMonth',
    '[class.cal-has-events]': 'day.events.length > 0',
    '[class.cal-open]': 'day === openDay',
    '[style.backgroundColor]': 'day.backgroundColor'
  }
})
export class CalendarMonthCellComponent {
  isWeekRowVisible: boolean = false;
  @Input()rowIndex: number;
@ViewChild('defaultTemplate') defaultTemplate;
hideSelectedWeek: boolean = false;
  @Input() day: MonthViewDay;

  @Input() openDay: MonthViewDay;

  @Input() locale: string;

  @Input() tooltipPlacement: string;

  @Input() tooltipAppendToBody: boolean;

  @Input() customTemplate: TemplateRef<any>;

  @Input() tooltipTemplate: TemplateRef<any>;

  @Output() highlightDay: EventEmitter<any> = new EventEmitter();

  @Output() unhighlightDay: EventEmitter<any> = new EventEmitter();

  @Output()
  eventClicked: EventEmitter<{ event: CalendarEvent }> = new EventEmitter<{
    event: CalendarEvent;
  }>();

@Output()
hideWeekClicked: EventEmitter<any>= new EventEmitter<any>();

  /**
   * @hidden
   */
  onEventClick(mouseEvent: MouseEvent, calendarEvent: CalendarEvent): void {
    if (mouseEvent.stopPropagation) {
      mouseEvent.stopPropagation();
    }
    this.eventClicked.emit({ event: calendarEvent });
  }

  toggleWeekRow(rowNum : number) : void {
    this.isWeekRowVisible =  !this.isWeekRowVisible;
    console.log("child data " + rowNum);
    this.hideWeekClicked.emit(
      {
        isWeekRowVisible: this.isWeekRowVisible,
        rowNum: rowNum
      });
    console.log(this.defaultTemplate);
    this.hideSelectedWeek = true;
    console.log(this.hideSelectedWeek);


  }
}
