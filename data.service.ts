import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';
import { exhaustMap, map, take } from 'rxjs/operators';
import { QuestionsResponse } from 'models/questionsresponse.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  submitAnswer: any;
  showQuestion: any;
  deleteAnswer: any;
  deleteQuestion: any;
  editAnswer: any;
  editQuestion: any;
  listQuestions: any;
  searchQuestions: any;
  listMyQuestions: any;
  askQuestion: any;
  constructor(private http: HttpClient, private authService: AuthService) {}
}
/*
listQuestions(url: string) {
  return this.http.get(url);
}

function listQuestions(url: any, string: any) {
  throw new Error('Function not implemented.');
}

searchQuestions(keyword: string) {
  return this.http
    .get('https://forum.mashupstack.com/api/question/search?keyword=' + keyword)
    .pipe(
      map((response: { result: QuestionsResponse }) => {
        let questions: QuestionsResponse = response.result;
        console.log(questions);
        return questions;
      })
    );
}

function searchQuestions(keyword: any, string: any) {
  throw new Error('Function not implemented.');
}

askQuestion(title: string, question: string) {
  return this.authService.user.pipe(
    take(1),
    exhaustMap((user) => {
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        Authorization: 'Bearer ' + user.token,
      });
      const body = new HttpParams()
        .set('title', title)
        .set('question', question);
      return this.http.post(
        'https://forum.mashupstack.com/api/question',
        body,
        {
          headers: headers,
        }
      );
    })
  );
}

function askQuestion(title: any, string: any, question: any, string1: any) {
  throw new Error('Function not implemented.');
}

showQuestion(id: number) {
  return this.http.get(
    'https://forum.mashupstack.com/api/question/' + id
  );
}

function showQuestion(id: any, number: any) {
  throw new Error('Function not implemented.');
}


submitAnswer(answer: string, questionId: number) {
  return this.authService.user.pipe(
    take(1),
    exhaustMap((user) => {
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        Authorization: 'Bearer ' + user.token,
      });
      const body = new HttpParams().set('answer', answer);
      return this.http.post(
        'https://forum.mashupstack.com/api/question/' + questionId + '/answer',
        body,
        { headers: headers }
      );
    })
  );
}

listAnsweredQuestions(url: string) {
  return this.authService.user.pipe(
    take(1),
    exhaustMap((user) => {
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        Authorization: 'Bearer ' + user.token,
      });
      return this.http.get(url, { headers: headers }).pipe(
        map((response: { questions: QuestionsResponse }) => {
          let questions: QuestionsResponse = response.questions;
          console.log(questions);
          return questions;
        })
      );
    })
  );
}
function submitAnswer(answer: any, string: any, questionId: any, number: any) {
  throw new Error('Function not implemented.');
}
function listAnsweredQuestions(url: any, string: any) {
  throw new Error('Function not implemented.');
}

deleteAnswer(answerId: number) {
  return this.authService.user.pipe(
    take(1),
    exhaustMap((user) => {
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        Authorization: 'Bearer ' + user.token,
      });
      return this.http.delete(
        'https://forum.mashupstack.com/api/answer/' + answerId,
        { headers: headers }
      );
    })
  );
}

function deleteAnswer(answerId: any, number: any) {
  throw new Error('Function not implemented.');
}

deleteQuestion(questionId: number) {
  return this.authService.user.pipe(
    take(1),
    exhaustMap((user) => {
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        Authorization: 'Bearer ' + user.token,
      });
      return this.http.delete(
        'https://forum.mashupstack.com/api/question/' + questionId,
        { headers: headers }
      );
    })
  );
}

function deleteQuestion(questionId: any, number: any) {
  throw new Error('Function not implemented.');
}

editQuestion(questionId: number, title: string, question: string) {
  return this.authService.user.pipe(
    take(1),
    exhaustMap((user) => {
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        Authorization: 'Bearer ' + user.token,
      });
      const body = new HttpParams()
        .set('title', title)
        .set('question', question);
      return this.http.put(
        'https://forum.mashupstack.com/api/question/' + questionId,
        body,
        { headers: headers }
      );
    })
  );
}

function editQuestion(questionId: any, number: any, title: any, string: any, question: any, string1: any) {
  throw new Error('Function not implemented.');
}


  editAnswer(answerId: number, answer: string) {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
          Authorization: 'Bearer ' + user.token,
        });
        const body = new HttpParams().set('answer', answer);
        return this.http.put(
          'https://forum.mashupstack.com/api/answer/' + answerId,
          body,
          { headers: headers }
        );
      })
    );
  }

function editAnswer(answerId: any, number: any, answer: any, string: any) {
  throw new Error('Function not implemented.');
}
*/
