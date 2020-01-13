import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

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

  routeArray = [];
  routerLinks = [];

  routeArraySubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }
  
  ngOnChanges() {
    this.routeArraySubscription = this.route.url.subscribe(urlArray => this.routeArray = urlArray)
  
    this.routerLinks = [];
    this.routeArray.forEach((route, index) => {
      this.routerLinks.push({
        path: route.path,
        isLast: index === this.routeArray.length - 1,
        routerLink: ['/', ...this.routeArray.filter((_, i) => i <= index).map(value => value.path)]
      })
    })
  }

  ngOnDestroy() {
    this.routeArraySubscription && this.routeArraySubscription.unsubscribe();
  }
}
