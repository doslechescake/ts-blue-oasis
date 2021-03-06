import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import UserService from './User.service';

@Injectable()
class AuthGuard implements CanActivate {

    private __router: Router;
    private __userService: UserService;
    public constructor(router: Router, userService: UserService) {
        this.__router = router;
        this.__userService = userService;
    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.__userService.isLoggedIn().map((value: boolean) => {
            if (value === false) {
                this.__router.navigate(['/signin']);

                return false;
            }

            return true;
        });
    }
}

export default AuthGuard;
