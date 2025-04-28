import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() class: string = '';
  @Input() name: string = 'settings';
  @Input() size: string = '15px';
}
