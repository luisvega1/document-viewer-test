import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-component',
  templateUrl: './page-component.component.html',
  styleUrls: ['./page-component.component.scss']
})
export class PageComponentComponent implements OnInit {

  @Input() page: any;

  constructor() { }

  ngOnInit(): void {
  }

}
