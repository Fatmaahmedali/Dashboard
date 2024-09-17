// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-sidenav',
//   templateUrl: './sidenav.component.html',
//   styleUrls: ['./sidenav.component.css']
// })
// export class SidenavComponent {

// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  private openDropdowns: Set<string> = new Set();

  toggleDropdown(key: string) {
    if (this.openDropdowns.has(key)) {
      this.openDropdowns.delete(key);
    } else {
      this.openDropdowns.add(key);
    }
  }

  isDropdownOpen(key: string): boolean {
    return this.openDropdowns.has(key);
  }

  toggleMenu() {
    // Implement toggle functionality for mobile view if needed
  }

}
