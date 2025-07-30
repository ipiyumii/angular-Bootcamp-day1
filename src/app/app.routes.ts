import { Routes } from "@angular/router";
import { authGuard } from "./_guards/auth.guard";
import { ContainerComponent } from "./container/container.component";
import { LoginComponent } from "./login/login.component";

export const routes: Routes = [
    {path: '',component: LoginComponent},

     { path: 'tasks', component: ContainerComponent, canActivate: [authGuard] },
    
]