import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalRef } from './shared/components/modal/models/modal-ref';
import { ModalService } from './shared/components/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;
  title = 'a11y-p1';
  public form: FormGroup = null;
  public formModal: FormGroup = null;
  public modalRef: ModalRef;
  public info = false;


  constructor(private formBuilder: FormBuilder, private modalService: ModalService) {
    this.form = formBuilder.group({
      yesNoAnswer: [{
        value: null, disabled: true
      }]
    });
  }
  ngOnInit(): void {
    this.formModal = this.formBuilder.group({
      name:['Pedro',Validators.required],
      surname:['',Validators.required],
      age:['',Validators.required],
      info:[false]
    })
  }

  submit() {
    console.log(this.form.value);
  }

  submitModal(){
    if(this.formModal.invalid){
      return;
    }
    console.log(this.formModal.value);
    this.modalRef.close();
  }

  public show(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'Detalhes do Usuário'
    })
  }
}
