import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalRef, ModalService } from './shared/components/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;
  title = 'a11y-p1';
  public form: FormGroup = null;
  public firstName = 'Pedro';
  public modalRef: ModalRef;

  constructor(formBuilder: FormBuilder, private modalService: ModalService) {
    this.form = formBuilder.group({
      yesNoAnswer: [{
        value: null, disabled: true
      }]
    });
  }

  submit() {
    console.log(this.form.value);
  }

  public show(): void {
    this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details'
    })
  }
}
