import {Component} from '@angular/core';

//A component in Angular is nothing but a TypeScript class, decorated with some attributes and metadata.
// The class encapsulates all the data and functionality of the component, while the decorator specifies how it
// translates into the HTML
@Component({
  //The app-selector is a CSS selector that identifies how Angular finds this particular component in any HTML page.
  // While we generally use element selectors (app-root in the preceding example, which translates to looking for
  // <app-root> elements in the HTML), they can be any CSS selector, from a CSS class to an attribute as well.
  selector: 'app-root',
  //The templateUrl is the path to the HTML used to render this component. We can also use inline templates instead of
  // specifying a templateUrl like we have done in the example. In this particular case, the template we are referring
  // to is app.component.html.
  templateUrl: './app.component.html',
  //The styleUrls is the styling counterpart to the template, encapsulating all the styles for this component. Angular
  // ensures that the styles are encapsulated, so you don’t have to worry about your CSS classes from one component
  // affecting another. Unlike templateUrl, styleUrls is an array.
  styleUrls: ['./app.component.css']
})
//The component class itself finally encapsulates all the functionality backing your component. It makes it easy to
// think of the responsibilities of the component class as twofold:
// - Load and hold all the data necessary for rendering the component
// - Handle and process any events that may arise from any element in the component
export class AppComponent {
  //Bound to the {{title}} in app.component.html
  title = 'Cam\'s first app';
}
