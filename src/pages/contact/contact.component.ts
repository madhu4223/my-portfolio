import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  mailId = "madhu4223@gmail.com";
  contactInfo = [
    {displayName: 'Name', displayVal: 'Madhukar Gurram', isLink: false},
    {displayName: 'Email', displayVal: 'madhu4223@gmail.com', isLink: false},
    {displayName: 'Phone', displayVal: '+91-9542575332', isLink: false},
    {displayName: 'LinkedIn', displayVal: '', isLink: true, hrefLink: 'https://www.linkedin.com/in/madhukar-gurram-32002113b'},
    {displayName: 'GitHub', displayVal: '', isLink: true, hrefLink: 'https://github.com/madhu4223'}, 
  ]
}