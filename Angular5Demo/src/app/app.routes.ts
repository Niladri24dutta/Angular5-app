import {Routes,RouterModule} from '@angular/router';
import {TestComponent} from './test/test.component';
import {StylebindingComponent} from './stylebinding/stylebinding.component';
import {ServicetestComponent} from './servicetest/servicetest.component';

const routes:Routes = [

    {
        path:'class',
        component:TestComponent
    },
    {
        path:'style',
        component:StylebindingComponent
    },
    {
        path:'service',
        component:ServicetestComponent 
    },
    {
        path:'',
        redirectTo:'/welcome',
        pathMatch:'full'
    }

];

export const routing = RouterModule.forRoot(routes);