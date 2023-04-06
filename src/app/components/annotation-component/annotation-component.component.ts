import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-annotation-component',
  templateUrl: './annotation-component.component.html',
  styleUrls: ['./annotation-component.component.scss']
})
export class AnnotationComponentComponent implements OnInit, OnChanges {

  @Input() annotation: any;
  @Output() delete_annotation_event = new EventEmitter<any>();
  @Output() save_annotation_event = new EventEmitter<any>();

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

  ngOnChanges(): void {
  }

  enter_edit_mode(): void {
    this.edit_mode = !this.edit_mode;
    this.annotationForm.controls['content'].setValue(this.annotation.content);
  }

  save_edit(): void {
    //TODO: ADD LOGIC
    const { content, image } = this.annotationForm.value;
    this.annotation = {
      ...this.annotation,
      content,
      image: this.image_preview
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

}
