import {
  Component,
  ChangeDetectionStrategy,
  AfterContentInit,
  ContentChild,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import { jsPanel } from 'jspanel4';

/**
 * Js panel wrapper.
 */
@Component({
  selector: 'app-js-panel',
  templateUrl: './js-panel.component.html',
  styleUrls: ['./js-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class JsPanelComponent implements AfterContentInit {
  /**
   * A reference to panel content.
   */
  @ContentChild('content')
  public content: ElementRef;

  /**
   * @inheritdoc
   */
  public ngAfterContentInit(): void {
    jsPanel.create({
      theme: 'dark',
      headerToolbar: '<span class="text-sm">Just some text in optional header toolbar ...</span>',
      footerToolbar: '<span class="flex flex-grow">You can have a footer toolbar too</span>' +
        '<i class="fal fa-clock mr-2"></i><span class="clock">loading ...</span>',
      panelSize: {
        width: () => Math.min(800, window.innerWidth * 0.9),
        height: () => Math.min(500, window.innerHeight * 0.6)
      },
      animateIn: 'jsPanelFadeIn',
      headerTitle: 'I\'m a jsPanel',
      content: this.content.nativeElement,
    });
  }
}
