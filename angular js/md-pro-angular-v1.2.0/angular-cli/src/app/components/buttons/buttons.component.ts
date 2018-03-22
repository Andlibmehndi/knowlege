import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../services/utility.services';
import { Router } from '@angular/router';

declare var $:any;
//declare var sass:any;
@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent implements OnInit {
  // name=sessionStorage.get('User');
  // constructor(private navbarTitleService: NavbarTitleService, private notificationService: NotificationService) { }
sass=sessionStorage.getItem('User');
constructor(private utility:UtilityService,private _router:Router){}
  
public ngOnInit():void{
  
   
          // this.showNotification('top','right');
          this.utility.isLogged().then((result: boolean) => {
            if(!result) {
                this._router.navigate(['/pages/login']);
            }else{
              
            }
        });
        
  }
//   showNotification(from, align){
//     var type = ['','success'];

//     var color = Math.floor((Math.random() * 6) + 1);

//   $.notify({
//       icon: "notifications",
//       message: "Welcome <b> USER</b>"

//     },{
//         type: type[color],
//         timer: 3000,
//         placement: {
//             from: from,
//             align: align
//         }
//     });
// }

}
