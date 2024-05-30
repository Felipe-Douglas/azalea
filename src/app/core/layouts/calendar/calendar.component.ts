import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements OnInit {
  currentYear!: number;
  currentMonth!: number;
  monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  dayNames = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  days: { date: number, otherMonth: boolean }[] = [];


  ngOnInit() {
    const today = new Date();
    this.currentYear = today.getFullYear();
    this.currentMonth = today.getMonth();
    this.generateCalendar();
  }

  generateCalendar() {
    const firstDay = new Date(this.currentYear, this.currentMonth, 1);
    const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);

    const prevMonthLastDay = new Date(this.currentYear, this.currentMonth, 0);
    const nextMonthFirstDay = new Date(this.currentYear, this.currentMonth + 1, 1);

    const daysInPrevMonth = firstDay.getDay();
    const daysInNextMonth = 6 - lastDay.getDay();

    this.days = [];

    for (let i = daysInPrevMonth; i > 0; i--) {
      this.days.push({
        date: prevMonthLastDay.getDate() - i + 1,
        otherMonth: true
      });
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      this.days.push({
        date: i,
        otherMonth: false
      });
    }

    for (let i = 1; i <= daysInNextMonth; i++) {
      this.days.push({
        date: i,
        otherMonth: true
      });
    }
  }

  previousMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendar();
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendar();
  }

  selectDay(day: { date: number, otherMonth: boolean }) {
    if (day.otherMonth) return;
    alert(`Create a reminder for ${day.date} ${this.monthNames[this.currentMonth]} ${this.currentYear}`);
  }
}
