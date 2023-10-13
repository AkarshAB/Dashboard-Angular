import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe((value) => {
      console.log(value);
      this.jumpTo(value)
    })
  }

  jumpTo(section:any) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
  }

}
