import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { ClothesComponent } from './clothes/clothes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DisplayGroceryComponent } from './display-grocery/display-grocery.component';
import { UserComponent } from './user/user.component';
import { ContactappComponent } from './contactapp/contactapp.component';
import { ParentbehaviorComponent } from './parentbehavior/parentbehavior.component';
import { TemplatedriveformComponent } from './templatedriveform/templatedriveform.component';
import { ReactivefComponent } from './reactivef/reactivef.component';
import { ReactivesiginComponent } from './reactivesigin/reactivesigin.component';
import { ReactivedbComponent } from './reactivedb/reactivedb.component';
import { PipeComponent } from './pipe/pipe.component';
import { reactiveGuard } from './guards/reactive.guard';
import { EventemiterComponent } from './eventemiter/eventemiter.component';

export const routes: Routes = [
   { path: 'you', component:HomeComponent, title: 'Home'},
   { path: '', redirectTo: 'you', pathMatch: 'full'}, // redirect 
   { path: 'login', component: LoginComponent},
   { path: 'pipe', component: PipeComponent},
   { path: 'reactive', component: ReactivefComponent},
   { path: 'reactivedb/:id', component: ReactivedbComponent, canActivate:[reactiveGuard]},
   { path: 'reactivesignin', component: ReactivesiginComponent},
   { path: 'eventemiter', component: EventemiterComponent},
   { path: 'user', component: UserComponent},
   { path: 'templatedriven-form', component: TemplatedriveformComponent},
   { path: 'contactapp', component: ContactappComponent},
   { path: 'parentbehavior', component: ParentbehaviorComponent},
   { path: 'products', children: [
        { path: '', component: ProductsComponent, title: 'Products'},
        { path: 'groceries', title: 'Groceries', children: [
            { path: '', component: GroceriesComponent, title: 'Groceries'},
            { path: ':id', component: DisplayGroceryComponent, title: 'DisplayGrocery'}// parameterized or dynamic route
        ]},
        { path: 'applicies', component: AppliancesComponent, title: 'Applicies'},
        { path: 'clothes', component: ClothesComponent, title: 'Clothes'},
]
},
    { path: '**', component: PageNotFoundComponent}
];
