import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  @ViewChild('input') searchInput!: ElementRef;

  searchTerm: String = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  focusOnClick() {
    this.searchInput.nativeElement.focus();
  }

  search() {
    if (this.searchTerm) {
      this.router.navigateByUrl('/search/' + this.searchTerm)
    }
  }
}
