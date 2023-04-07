import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.scss']
})
export class ColorSelectorComponent implements OnInit {

  @Input() selected_color: string = '';
  @Input() selected_opacity!: number;
  @Output() color_change_event = new EventEmitter<string>();
  @Output() opacity_change_event = new EventEmitter<number>();

  public colors: any = [
    {
      code: '#f58a07'
    },
    {
      code: '#29d606'
    },
    {
      code: '#FFFF00'
    },
    {
      code: '#2462f2'
    },
    {
      code: '#ba43fa'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  change_color(color: string): void {
    //SENDS COLOR TO ANNOTATION COMPONENT
    this.color_change_event.emit(color);
  }

  change_opacity(event: any): void {
    //SENDS NEW OPACITY TO ANNOTATION
    const new_opacity = Number(event.target.value) / 100;
    this.opacity_change_event.emit(new_opacity);
  }

  drag_event(event: any): void {
    event.preventDefault();
  }


}
