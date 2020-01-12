import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() name: string = '';
  @Input() title: string = '';
  @Input() data: object[] = [];
  @Input() item: object = null;

  @Input() baseRouterLink: string = '';

  constructor() { }

  ngOnInit() {
  }

}
