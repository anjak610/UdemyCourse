import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  private http = inject(HttpClient); //this in how you inject Http today instead of using the constructor -> constructor(private http: HttpClient){}
  protected readonly title = signal('Dating app');

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/members').subscribe({
      next: response => console.log(response),
      error: error => console.log(error),
      complete: () => console.log('Completed the http request')
    })
  }
}
