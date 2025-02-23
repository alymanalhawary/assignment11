import { Component } from "@angular/core";
import{FormsModule} from '@angular/forms'


@Component({
    selector:'app-contact',
    templateUrl:'./contact.component.html',
    styleUrl:'./contact.component.css',
    imports:[FormsModule]
}

)
export class ContactComponent{
    username:string='';
    userage:string='';
    useremail:string='';
    userpassword:string='';

}