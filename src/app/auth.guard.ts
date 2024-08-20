import { inject } from '@angular/core';
import { CanActivateFn , Router } from '@angular/router';
import { AuthService } from './serives/auth.service';


export const authGuard: CanActivateFn = (route, state) => {
  const authservice = inject(AuthService)
  const isLoggedIn = authservice.isLoggedIn;


  const router = inject(Router);

  if (isLoggedIn) {
    return true;
  } else {
    router.navigate(['/home']);
    return false;
  }
};

