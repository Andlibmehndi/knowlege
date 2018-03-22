import { Component, OnInit } from '@angular/core';
import{login} from './model';
import { Routes, Router } from '@angular/router';
import {PasswordModule} from 'primeng/password';
import {GrowlModule} from 'primeng/growl';
import {Message} from 'primeng/api';
import {MessageService} from 'primeng/components/common/messageservice';
import { UtilityService } from '../../services/utility.services';

declare var $:any;

@Component({
    moduleId:module.id,
    selector: 'login-cmp',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit{
    test : Date = new Date();
    msgs: Message[] = [];
    private username:string;
    private password:string;
    checkFullPageBackgroundImage(){
        var $page = $('.full-page');
        var image_src = $page.data('image');

        if(image_src !== undefined){
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
            $page.append(image_container);
        }
    };
    ngOnInit(){
        this.checkFullPageBackgroundImage();

        setTimeout(function(){
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)

        this.utility.isLogged().then((result: boolean) => {
            if(result) {
                this._router.navigate(['/components/buttons']);
            }
        })
    }
    constructor(private _router:Router,private utility:UtilityService){}
    model = new login();
    // data:any;
    formsubmit(){
        
        if(this.model.Email=="abc@gmail.com" && this.model.password=="admin" ){
           // set session
            if(typeof (Storage)!=='undefined'){
                sessionStorage.setItem('User',this.model.Email)
                this._router.navigate(['/dashboard']);
            }
        }
        else{
            this.msgs = [];
            this.msgs.push({severity:'error', summary:'Login fail', detail:'Error of login'});
        }
    }
    
    
}
