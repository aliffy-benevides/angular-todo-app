import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() title: string = '';
  @Input() data: object[] = [];
  @Input() item: object = null;

  constructor() { }

  ngOnInit() {
  }

}
