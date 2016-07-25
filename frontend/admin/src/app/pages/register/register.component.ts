import {Component, ViewEncapsulation} from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators, AbstractControl} from '@angular/common';
import {EmailValidator, EqualPasswordsValidator} from '../../theme/validators';
import {Inject} from '@angular/core';
import {Http} from '@angular/http';
import {Headers} from '@angular/http';

@Component({
  selector: 'register',
  encapsulation: ViewEncapsulation.None,
  directives: [],
  styles: [require('./register.scss')],
  template: require('./register.html'),
})
export class Register {

  public form:ControlGroup;
  public name:AbstractControl;
  public email:AbstractControl;
  public password:AbstractControl;
  public repeatPassword:AbstractControl;
  public passwords:ControlGroup;

  public submitted:boolean = false;

  constructor(fb:FormBuilder) {

    this.form = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
      }, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')})
    });

    this.name = this.form.controls['name'];
    this.email = this.form.controls['email'];
    this.passwords = <ControlGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {


      // Autenticando no servidor



        class DataService {

          constructor(private _http: Http){ }

          sendCoffe(){

            var headers = new Headers();
            headers.append('Content-Type', 'application/json');

          return this._http.put("http://www.mocky.io/v2/57882e5e0f00008c12bd1659",{name: values.name, email: values.email, passwords: values.passwords.password},{ headers : headers}).map(res => res);
          console.log(values.passwords.password);
          console.log(res);
    }

        }
       console.log(values);
    }
  }
}
