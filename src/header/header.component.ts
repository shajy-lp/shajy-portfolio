import { Component } from '@angular/core';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  selectedTab = 'home'
  constructor(private dataService: SharedService) { }


  selectTab(type:any){
    this.selectedTab = type;
 if(type === 'about'){
  this.dataService.updateData('about');
 }
 if(type === 'home'){
  this.dataService.updateData('home');
 }
 if(type === 'resume'){
  // this.dataService.updateData('resume');
 }
  }
  downloadResume(): void {
    const filePath = 'resume/shajy-resume.pdf'; // Adjust the file name as needed
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'Shajy-Resume.pdf'; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}
