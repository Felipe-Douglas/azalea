import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent {
  @Input() isVisible: boolean = false;
  @Input('title-widget') widgetTitle: string = "";

  constructor(private elementRef: ElementRef) {}

}
