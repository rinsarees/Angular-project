import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-askquestion',
  templateUrl: './askquestion.component.html',
  styleUrls: ['./askquestion.component.css'],
})
export class AskquestionComponent implements OnInit {
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {}

  onAskQuestion(data: { title: any; question: any; }) {
    this.dataService
      .askQuestion(data.title, data.question)
      .subscribe((respons: any) => {
        this.router.navigate(['/']);
      });
  }
}