import {Component, OnInit} from '@angular/core';

import {Stock} from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})

export class StockItemComponent implements OnInit {

public stocks: Array<Stock>;
public stock: Stock;

public stockClasses; //What class is this then?
public stockStyles;

  constructor() {
  }

  ngOnInit() {

this.stock = new Stock('test Stock Company', 'TSC', 85,84);
    // this.stocks = [
    //   new Stock('Cam\'s Test Stock', "CTS", 150,200),
    //   new Stock('Leslie Stock', "LTS", 20,184),
    //   new Stock('Will Test Stock', "WTS", 15,184),
    //   new Stock('Sam Test Stock', "STS", 200,100)
    //   ];

    // let diff = (this.stock.price / this.stock.previousPrice) - 1;
    // let largeChange = Math.abs(diff) > 0.01; // 1% ?

    this.stockClasses = {
      "positive":this.stock.isPositiveChange(),
      "negative":!this.stock.isPositiveChange(),
      "large-change":this.stock.isLargeChange(),
      "small-change": this.stock.isSmallChange()
    };
    // this.stockStyles = {
    //   "color": this.stock.isPositiveChange() ? "green" : "red",
    //   "font-size": largeChange ? "1.2em" : "0.8em"
    // };
  }

  toggleFavoriteSingle(event) {
    console.log('We are toggling the favorite state for this stock:',event,this.stock.favorite);
    this.stock.favorite = !this.stock.favorite;
  }
  toggleFavorite(event,index) {
    console.log('We are toggling the favorite state for this stock:',index,event,this.stocks[index].favorite);
    this.stocks[index].favorite = !this.stocks[index].favorite;
    console.log('After the toggle, the flag is ', this.stocks[index].favorite);
    console.log (this.stocks[index].getClasses());
  }

  trackStockByCode(index,stock) {
    return stock.code;
  }
}
