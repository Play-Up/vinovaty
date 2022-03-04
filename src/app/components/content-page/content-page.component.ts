import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SearchResult} from "./search-result-interface";
import {RESULTS} from "./SEARCH-CONTENT";

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss']
})
export class ContentPageComponent implements OnInit {

  @ViewChild('input') searchInput!: ElementRef;

  searchTerm: String = "";
  lastSearchTerm: String = "";
  searchResultsTemp: SearchResult[] = RESULTS;
  searchResults!: SearchResult[];
  descriptionItem!: SearchResult | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.searchTerm = params['searchTerm'];
        this.lastSearchTerm = this.searchTerm;
        this.filterSearch();
      }
    })
  }

  focusOnClick() {
    this.searchInput.nativeElement.focus();
  }

  search() {
    if (this.searchTerm) {
      this.router.navigateByUrl('/search/' + this.searchTerm);
      this.filterSearch();
    }
  }

  filterSearch() {
    this.searchResults = this.searchResultsTemp.filter(searchResult =>
      searchResult.fullName.toLowerCase().includes(this.searchTerm.toLowerCase()));

    if (this.searchResults[0]) {
      this.descriptionItem = this.searchResults[0];
    } else {
      this.descriptionItem = undefined
    }
  }

  changeItem(searchResult: SearchResult) {
    this.descriptionItem = searchResult;
  }
}
