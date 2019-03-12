
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  [x: string]: any;
  name:string;
  email:string;
  mensaje:string;

  constructor() { }

  ngOnInit() {
  }

  
  processForm() {
    console.log("Enviamos el formulario!");
    console.log(this.name);
    console.log(this.email);
    console.log(this.mensaje);
    this._MessageService.sendMessage(this.form).subscribe(() => {
      console.log("Formulario de contacto”, “Mensaje enviado correctamente", 'success');
      });
    
  }

}
