import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-annotation-component',
  templateUrl: './annotation-component.component.html',
  styleUrls: ['./annotation-component.component.scss']
})
export class AnnotationComponentComponent implements OnInit {

  @Input() annotation: any;
  @Output() delete_annotation_event = new EventEmitter<any>();
  @Output() save_annotation_event = new EventEmitter<any>();
  @Output() send_color_event = new EventEmitter<string>();
  @Output() send_opacity_event = new EventEmitter<number>();

  public image_preview!: string;
  public edit_mode: boolean = false;
  annotationForm: FormGroup = this.fb.group({
    content: [''],
    image: ['']
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  enter_edit_mode(): void {
    this.edit_mode = !this.edit_mode;
    const { content, image } = this.annotation;
    this.annotationForm.setValue({ content, image });
  }

  save_edit(): void {
    const { content, image } = this.annotationForm.value;

    this.annotation = {
      ...this.annotation,
      content,
      image: this.image_preview ? this.image_preview : image
    }
    this.edit_mode = !this.edit_mode;
    this.image_preview = '';
    this.save_annotation_event.emit(this.annotation);
  }

  delete_annotation(): void {
    this.delete_annotation_event.emit(this.annotation.id)
  }

  handle_image(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (_event: any) => {
        this.image_preview = _event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  send_color(new_color: string): void {
    this.annotation.color = new_color;
    //SENDS ANNOTATION WITH NEW COLOR
    this.send_color_event.emit(this.annotation);
  }

  send_opacity(new_opacity: number): void {
    //UPDATES ANNOTATIONS OPACITY AND SENDS IT
    this.annotation.opacity = new_opacity
    this.send_opacity_event.emit(this.annotation);
  }

}
