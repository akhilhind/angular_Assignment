import { Component, OnInit } from '@angular/core';
import {Users} from '../users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users: Users[] = [
    {name: 'Akhil', username: 'akhil90', email: 'akhilas.singh@gmail.com'},
    {name: 'Ansh', username: 'ansh2008', email: 'ansh999@gmail.com'},
    {name: 'Nitin', username: 'nitin1998', email: 'nitin99@gmail.com'},
    {name: 'Rina', username: 'rinalucky', email: 'rina123@gmail.com'},
    {name: 'Ankit', username: 'ankit123', email: 'ankit@gmail.com'},
    {name: 'Angel', username: 'cuteangel', email: 'angel@gmail.com'},
    {name: 'Vinni', username: 'smallvinni', email: 'vinnichinni@gmail.com'},
    {name: 'Abhimanyu', username: 'abhicooldude', email: 'abhimanyu@gmail.com'},
    {name: 'Someone', username: 'someone123', email: 'someone@gmail.com'}
  ]

  dup = this.users;
  show:boolean = true;
  rem() {
    console.log(11);
    if(this.dup.length === 0) {
      console.log('upar');
      this.dup = this.users;
      this.show = !this.show;
    } else {
      console.log('neeche');
      this.dup = [];
      this.show = !this.show;
    } 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
