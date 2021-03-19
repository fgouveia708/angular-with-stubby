import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-with-stubby';
  users: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get('http://localhost:1500/users').subscribe(response => { this.users = response; });
  }
}
