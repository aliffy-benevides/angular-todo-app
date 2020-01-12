import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { CategoryService } from 'src/app/category/category.service';

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.css']
})
export class ContentFormComponent implements OnInit {

  @Input() name: string = '';
  @Input() item: object = null;

  @Input() baseRouterLink: string = '';

  checkoutForm;

  deleteMode: boolean = false;

  queryParamsSubscription: Subscription

  constructor(
    private formBuilder : FormBuilder, 
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.queryParamsSubscription = this.route.queryParams
      .subscribe(
        queryParams => this.deleteMode = queryParams['delete'] || false,
        error => {
          console.error('Erro na aquisição do modo', error);
          this.router.navigate([this.baseRouterLink])
        }
      )
  }
  
  ngOnChanges() {
    this.checkoutForm = this.formBuilder.group(this.item);
  }

  ngOnDestroy() {
    this.checkoutForm = null;
  }

  onSubmit(data) {
    if(this.name == 'Category') {
      if(this.deleteMode) {
        this.categoryService.remove(data.id)
      } else {
        this.categoryService.save(data)
          .subscribe(
            data => { return; }, 
            error => console.error('Erro no submit', error),
            () => this.router.navigate([this.baseRouterLink])
          )
      }
    }
  }

  onCancel() {
    this.router.navigate([this.baseRouterLink])
  }

}
