import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { CategoryService } from 'src/app/category/category.service';
import { ListService } from 'src/app/list/list.service';

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

  queryParamsSubscription: Subscription;
  submitSubscription: Subscription;

  service: CategoryService | ListService;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
    private listService: ListService
  ) { }
  
  ngOnInit() {
    if(this.name == "Category") {
      this.service = this.categoryService;
    } else if(this.name == "List") {
      this.service = this.listService;
    }
  }
  
  ngOnChanges() {
    this.checkoutForm = this.formBuilder.group(this.item);
    this.queryParamsSubscription = this.route.queryParams
      .subscribe(
        queryParams => this.deleteMode = queryParams['delete'] || false,
        error => {
          console.error('Erro na aquisição do modo', error);
          this.router.navigate([this.baseRouterLink])
        }
      )
  }

  ngOnDestroy() {
    this.checkoutForm = null;
    this.submitSubscription && this.submitSubscription.unsubscribe();
  }

  onSubmit(data) {
    let submit;
    
    if (this.deleteMode) {
      submit = this.service.remove(data.id)
    } else {
      submit = this.service.save(data)
    }
    
    this.submitSubscription = submit.subscribe(
      () => { return; },
      error => console.error('Erro no submit', error),
      () => this.router.navigate([this.baseRouterLink])
    )
  }

  onCancel() {
    this.router.navigate([this.baseRouterLink])
  }

}
