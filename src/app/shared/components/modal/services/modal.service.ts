import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector, TemplateRef } from '@angular/core';
import { ModalConfig } from '../interfaces/modal-config.interface';
import { ModalComponent } from '../modal.component';
import { ModalRef } from '../models/modal-ref';
import { BodyInjectorService } from './body-injector';

@Injectable()
export class ModalService {

  private componentFactory: ComponentFactory<ModalComponent>;

  constructor(componentFactoryResolver: ComponentFactoryResolver, private _injector: Injector,private _bodyInjectorService:BodyInjectorService) {
    this.componentFactory = componentFactoryResolver.resolveComponentFactory(ModalComponent);
  }

  public open(config: ModalConfig): ModalRef {
    const componentRef = this.createComponentRef();
    componentRef.instance.config = config;
    this._bodyInjectorService.stackBeforeAppRoot(componentRef);
    const modalRef = new ModalRef(componentRef);
    componentRef.instance.modalRef = modalRef;
    return modalRef;
  }

  private createComponentRef(): ComponentRef<ModalComponent> {
    return this.componentFactory.create(this._injector);
  }
}






