import { Location } from '@angular/common';
import { inject, Directive } from '@angular/core';


@Directive()
export abstract class BaseComponent {
  protected location = inject(Location);

  goBack(): void {
    this.location.back();
  }
}
