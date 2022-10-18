import { Injectable, TemplateRef } from '@angular/core';
import { ModalConfig } from '../interfaces/modal-config.interface';

@Injectable()
export class ModalService {

  public open(config: ModalConfig): ModalRef {
    console.log('open called')
    return new ModalRef();
  }
}

export class ModalRef {

  public close(): void {
    console.log('close called')
  }
}


