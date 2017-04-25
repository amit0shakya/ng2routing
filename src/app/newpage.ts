import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'new-page',
  template: `new page data here`
})

export class Newpage  {  

    constructor(){
        alert("new page")
    }
    
    ngOnInit(){
        alert("new page")
    }
}
