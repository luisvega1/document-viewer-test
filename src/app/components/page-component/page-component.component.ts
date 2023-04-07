import { Component, Input, OnInit } from '@angular/core';
import { IPage } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-page-component',
  templateUrl: './page-component.component.html',
  styleUrls: ['./page-component.component.scss']
})
export class PageComponentComponent implements OnInit {

  @Input() page!: IPage;

  constructor() { }

  ngOnInit(): void {
  }

}
