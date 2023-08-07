import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges{
  @Input("rating") rating: number = 0
  @Output()
  ratingClicked: EventEmitter<string> = new EventEmitter<string>()

  cropWidth: number = 75

  ngOnChanges(changes: SimpleChanges): void {
    this.cropWidth = this.rating*75/5
  }
  onClick(): void{
    this.ratingClicked.emit(`rating ${this.rating} was clicked`)
  }
}
