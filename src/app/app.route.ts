import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StoresComponent } from './stores/stores.component';
import { StoreDetailComponent } from './store-detail/store-detail.component';
import { MenuComponent } from './store-detail/menu/menu.component';
import { ReviewComponent } from './store-detail/review/review.component';
import { OrderComponent } from './order/order.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

export const ROUTES : Routes = [
    { path: '', component: HomeComponent },
    { path: 'stores', component: StoresComponent },
    { path: 'stores/:id', component: StoreDetailComponent, 
        children:[
            { path: '', redirectTo: 'instruments', pathMatch: 'full'},
            { path: 'instruments', component: MenuComponent },
            { path: 'reviews', component: ReviewComponent }
    ]},
    { path: 'order', component: OrderComponent },
    { path: 'summary', component: OrderSummaryComponent },
    { path: 'about', component: AboutComponent }
]