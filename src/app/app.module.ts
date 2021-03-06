import { NgModule }                   from '@angular/core';
import { BrowserModule }              from '@angular/platform-browser';
import { BrowserAnimationsModule }    from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS }  from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }     from '@angular/forms';

import { AppComponent }               from '@r-app/app.component';
import { AppConfig }                  from '@r-app/app.config';
import { AppRoutingModule }           from '@r-app/app-routing.module';
import { MaterialModule }             from '@r-material/material.module';

import { MaterialService }            from '@r-material/material.service';
import { LoaderService }              from '@r-service/loader.service';
import { LoaderInterceptor }          from '@r-interceptor/loader.interceptor';
import { HeaderInterceptor }          from '@r-interceptor/header.interceptor';

import { BranchModule }               from '@r-branch/branch.module';
import { CategoryModule }             from '@r-category/category.module';
import { DiningtableModule }          from '@r-diningtable/diningtable.module';
import { CompanyModule }              from '@r-company/company.module';
import { MenuModule }                 from '@r-menu/menu.module';
import { OrderModule }                from '@r-order/order.module';
import { OrderItemModule }            from '@r-order-item/order-item.module';
import { OrderItemStatusModule }      from '@r-order-item-status/order-item-status.module';
import { OrderItemTypeModule }        from '@r-order-item-type/order-item-type.module';
import { OrderStatusModule }          from '@r-order-status/order-status.module';
import { ProductModule }              from '@r-product/product.module';
import { ServiceWorkerModule }        from '@angular/service-worker';
import { environment }                from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    AppRoutingModule,
    MaterialModule,

    BranchModule,
    CategoryModule,
    CompanyModule,
    DiningtableModule,
    MenuModule,
    OrderModule,
    OrderItemModule,
    OrderItemStatusModule,
    OrderItemTypeModule,
    OrderStatusModule,
    ProductModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule],
  bootstrap: [AppComponent],
  providers: [
    MaterialService,
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      useFactory: (service: LoaderService) => new LoaderInterceptor(service),
      multi: true,
      deps: [LoaderService]
    }
  ]
})
export class AppModule { }
