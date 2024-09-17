// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent {
//   expand() {
//     const input = document.querySelector('.search-wrapper input') as HTMLInputElement;
//     input.classList.add('expanded');
//   }

//   shrink() {
//     const input = document.querySelector('.search-wrapper input') as HTMLInputElement;
//     input.classList.remove('expanded');
//   }
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  expand() {
    const input = document.querySelector('.search-wrapper input') as HTMLInputElement;
    input.classList.add('expanded');
  }

  shrink() {
    const input = document.querySelector('.search-wrapper input') as HTMLInputElement;
    input.classList.remove('expanded');
  }
}
