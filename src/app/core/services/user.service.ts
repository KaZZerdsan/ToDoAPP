import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { SignUpUser, AuthUser, SignInUser, ApiUser } from '../interfaces/user';
import { environment } from 'src/environments/environment';
import { JwtService } from './jwt.service'
import { map, tap } from 'rxjs/operators';
import { ReplaySubject, Observable, BehaviorSubject, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  private currentUserSubject = new BehaviorSubject<AuthUser>({} as AuthUser);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(
    private apiService: ApiService,
    private jwtService: JwtService,
  ) { }

  registration(user: SignUpUser): Observable<AuthUser>{
    return this.apiService.post('/users', {user}).pipe(
      map((data:ApiUser)  => {
        this.setAuth(data.user);
        return data.user;
      })
    )
  }
  
  authentication(user: SignInUser): Observable<AuthUser>{
    return this.apiService.post('/users/login', {user})
        .pipe(map((data:ApiUser) => {
          this.setAuth(data.user);
          return data.user}))
  }
    
  setAuth(user: AuthUser){
    this.jwtService.saveToken(user.token);
    this.isAuthenticatedSubject.next(true);
    this.currentUserSubject.next(user);
  }
  purgeAuth(){
    this.jwtService.destroyToken();
    this.isAuthenticatedSubject.next(false);
    this.currentUserSubject.next({} as AuthUser);
  }
  populate(){
    if (this.jwtService.getToken()){
      this.apiService.get('/user')
        .subscribe((data:ApiUser) => {
          this.setAuth(data.user);
          return data.user}
          )
        }
    else this.purgeAuth();
  }
}
