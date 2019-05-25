import { Component, OnInit } from '@angular/core';
import {DataUserService} from '../../services/data-user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-user',
  templateUrl: './lista-user.page.html',
  styleUrls: ['./lista-user.page.scss'],
})
export class ListaUserPage implements OnInit {

  usuarios: Observable<any>;

  constructor(private dataU: DataUserService) { }

  ngOnInit() {
    this.usuarios =this.dataU.getUser();
  }

}
