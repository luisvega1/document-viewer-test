import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.scss']
})
export class ColorSelectorComponent implements OnInit {

  @Input() selected_color: string = '';
  @Output() color_change_event = new EventEmitter<any>();

  public colors: any = [
    {
      code: '#f58a07',
      opacity: 1
    },
    {
      code: '#29d606',
      opacity: 1
    },
    {
      code: '#FFFF00',
      opacity: 1
    },
    {
      code: '#2462f2',
      opacity: 1
    },
    {
      code: '#ba43fa',
      opacity: 1
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  change_color(color: any): void {
    //SENDS COLOR TO ANNOTATION COMPONENT
    this.color_change_event.emit(color);
  }

  change_opacity(event: any): void {
    console.log(event);
  }

  drag_event(event: any): void {
    event.preventDefault();
  }


}
