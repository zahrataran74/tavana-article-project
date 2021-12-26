import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const Routes: Routes = [
    { path: '' , component: AuthComponent , children: [
        { path: 'login' , component: LoginComponent},
        { path: 'register' , component: RegisterComponent}
    ]}
]
@NgModule({
    imports: [
        RouterModule.forChild(Routes),
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule{

}