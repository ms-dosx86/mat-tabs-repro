import { OnDestroy, Directive } from '@angular/core';
import { Subject } from 'rxjs';

@Directive()
// tslint:disable-next-line: directive-class-suffix
export abstract class Destroyable implements OnDestroy {
  protected destroy$ = new Subject();
  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
