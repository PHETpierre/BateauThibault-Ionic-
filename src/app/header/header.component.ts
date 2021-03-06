import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() category: string;

  constructor(private router: Router) { }

  ngOnInit() {}

  goHome(){
    this.router.navigate(['/home']);
  }

  goCart(){
    this.router.navigate(['/cart']);
  }

}
