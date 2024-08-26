import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const reactiveGuard: CanActivateFn = (route, state) => {
  let user= JSON.parse(localStorage.getItem('currentreactiveapp')!)
  let router=inject(Router)
  if(!user){
    router.navigate(['/pipe'])
  }
  return true;
};
