import { Presenter } from '@r-model/presenter.model';
import { Company   } from '@r-company/company.model';
import { Branch    } from '@r-app/branch/branch.model';
import { Product   } from '@r-app/product/product.model';
import { Order     } from '@r-app/order/order.model';
import { Menu      } from '@r-app/menu/menu.model';

/**
 * Model OrderDetail
 * @class OrderDetail
 */
export class OrderDetail {
  constructor(
    public id?: number,
    public order_id?: number,
    public menu_id?: number,
    public product_id?: number,
    public dining_table_id?: number,
    public order_detail_status_id?:  number,
    public order_detail_type_id?:    number,
    public price_person?: number,
    public price_alacarte?: number,
    public quantity?: number,
    public comment?: string,

    public diningtable?: Presenter<Diningtable>,
    public product?: Presenter<Product>,
    public order_detail_status?:      Presenter<OrderDetailStatus>,
    public orderDetailType?:       Presenter<OrderDetailType>,
    public menu?: Presenter<Menu>
  ) { }
}

export class OrderDetailType {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
  ) { }
}

export class OrderDetailStatus {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
  ) { }
}

export class Diningtable {
  constructor(
    public id?: number,
    public code?: string,
    public description?: string,
  ) { }
}