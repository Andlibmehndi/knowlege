import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../services/utility.services';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'grid-cmp',
    templateUrl: 'grid.component.html'
})

export class GridSystemComponent implements OnInit{
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
}
