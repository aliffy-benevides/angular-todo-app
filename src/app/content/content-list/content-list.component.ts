import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  @Input() name: string = '';
  @Input() data: object[] = [];
  @Input() baseRouterLink: string = '';
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  toggleDone(id) {
    
  }
}
