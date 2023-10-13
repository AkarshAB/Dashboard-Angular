import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe((value) => {
      console.log(value);
      this.jumpTo(value)
    })
  }
  jumpTo(section: any) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
  }
  panelOpenState = false;
}
