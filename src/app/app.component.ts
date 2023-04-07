import { AfterViewInit, Component, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';
import { FileServiceService } from './services/file-service.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {

  public file: IPage[] = [];
  public total_pages: number = 0;
  public c_page_num: number = 1;

  public zoom: number = 100;

  public drag_start_pos_x: number = 0;
  public drag_start_pos_y: number = 0;

  public annotations: any = []

  constructor(private fileService: FileServiceService, private elementRef: ElementRef, private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
    this.getFileData();
  }

  ngAfterViewInit(): void {
  }

  //GET FILE DATA FROM API
  getFileData(): void {
    this.fileService.getFileData().subscribe((data: any) => {
      this.file = data.file.file_pages;
      this.total_pages = data.file.total_pages;

    })
  }

  next_page(): void {
    this.c_page_num < this.total_pages && this.c_page_num++;
  }

  prev_page(): void {
    this.c_page_num > 1 && this.c_page_num--;
  }

  //DOCUMENT ZOOM IN
  zoom_in(): void {
    this.zoom = this.zoom += 10;
  }

  //DOCUMENT ZOOM OUT
  zoom_out(): void {
    if (this.zoom > 10) this.zoom -= 10;
  }

  //EVENT THAT TRIGGERS WHEN DRAG ELEMENT STARTS
  drag_start(e: any) {
    console.log(this.annotations);
    this.drag_start_pos_y = e.layerY;
    this.drag_start_pos_x = e.layerX;
  }

  //EVENT THAT TRIGGERS WHEN DRAG ELEMENT ENDS
  drag_stop(e: any, annotation_id: string) {
    let { pageX, pageY } = e;
    let el: any = this.document.getElementById(`${annotation_id}`);
    let client = el.getBoundingClientRect();

    const annotationIndex = this.annotations.findIndex((a: any) => a.id === annotation_id);
    this.annotations[annotationIndex] = {
      ...this.annotations[annotationIndex],
      x: (pageX - this.drag_start_pos_x) - this.drag_start_pos_x,
      y: (pageY - this.drag_start_pos_y) - (this.drag_start_pos_y - client.height)
    }
  }

  //TO CREATE A NEW ANNOTATION
  add_annotation(): void {
    const annotation = {
      id: crypto.randomUUID(),
      page: this.c_page_num,
      x: 150,
      y: 150,
      content: 'Write your annotation.',
      color: '#FFFF00',
      opacity: 1,
      width: 200,
      height: 'auto',
      image: ''
    }
    this.annotations.push(annotation);
  }

  //TODO: VER LA UTILIDAD DE ESTA FUNCION
  set_annotations(): void {
    this.annotations.forEach((annotation: any) => {
      let el: any = this.document.getElementById(`${annotation.id}`);
      el.style.backgroundColor = annotation.color;
      el.style.top = `${annotation.y}px`;
      el.style.left = `${annotation.x}px`;
      el.style.width = `${annotation.width}px`;
      el.style.maxWidth = `${annotation.width}px`;
      el.style.height = `${annotation.height}px`;
    })
  }

  save_page(): void {

  }

  delete_annotation(annotation_id: string) {
    this.annotations = this.annotations.filter((annotation: any) => annotation.id != annotation_id);
  }

  save_annotation_edit(annotation: any): void {
    const annotationIndex = this.annotations.findIndex((a: any) => a.id === annotation.id);
    this.annotations[annotationIndex] = annotation;
  }

  update_annotation(annotation: any): void {
    //GETS NEW ANNOTATION WITH UPDATED VALUES AND SETS NEW VALUES
    const annotation_index = this.annotations.findIndex((a: any) => a.id === annotation.id);
    this.annotations[annotation_index] = annotation;
  }

}

export interface IPage {
  page: number;
  file: string;
}