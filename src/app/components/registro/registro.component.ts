import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  registro : FormGroup;
  constructor(private fb: FormBuilder ){
    this.registro = this.fb.group({  
      email: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
      telefono: ['', Validators.required],
      usuario: ['', Validators.required],
      nombre:['', Validators.required]
    })
  }

  
}
