import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', // use it as html selector property
  // select: '.app-servers, // use it as a class
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  /*template: `<app-server></app-server>
             <app-server></app-server>`,*/
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  // Method not really being used because I'm using 2 way binding instead of
  // event binding - see commented input on html file for event binding
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value; // cast to HTML Element
  }

}
