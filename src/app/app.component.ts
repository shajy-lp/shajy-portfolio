import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'shajy-portfolio';
  showShajyLancy = false;
  showGloom = false;
  frame = true;
  loaderPopuop = false;
  close = false;
  closing = false;
  popupVisible = false;
  data: any;
  constructor(private dataService: SharedService) { } 
  ngOnInit() {
    
    document.body.classList.add('disable-mouse');
    setTimeout(() => {
      this.showShajyLancy = true;     
    }, 1500);
    setTimeout(() => {
      document.body.classList.remove('disable-mouse');
      this.showGloom = true;
      this.data = 'home';
    }, 1500);

    this.dataService.data$.subscribe(data => {
      this.data = data; 
    });
  }

  
  showPopup(): void {
    this.loaderPopuop = true;
    this.close = false;
    this.closing = false;
    setTimeout(() => {
      this.popupVisible = true;
      this.loaderPopuop = false
    }, 1500);
  } 
  preventClose(event: Event): void {
    event.stopPropagation();  // Prevent the event from bubbling up
  }

  closePopup(type: any): void {
    if (type === 'blur') {
      this.popupVisible = false;
    }
  }
  navigateTo(url: string) {
    window.open(url); // Opens in a new tab
  }
}
