import {Routes,RouterModule} from '@angular/router';
import {TestComponent} from './test/test.component';
import {StylebindingComponent} from './stylebinding/stylebinding.component';
import {ServicetestComponent} from './servicetest/servicetest.component';
import {TemplateFrmComponent} from './template-frm/template-frm.component'
import {ReactformComponent} from './reactform/reactform.component'

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
        path:'templateform',
        component:TemplateFrmComponent 
    },
    {
        path:'reactform',
        component:ReactformComponent 
    },
    {
        path:'',
        redirectTo:'/class',
        pathMatch:'full'
    }

];

export const routing = RouterModule.forRoot(routes);