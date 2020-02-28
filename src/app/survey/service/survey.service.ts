import {Injectable} from '@angular/core';
import {Survey} from '../survey';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {QuizDataService} from '../../quiz/service/quiz.data.service';

@Injectable()
export class SurveyService {
  private surveyUrl = 'http://localhost:8080/survey';
  private surveySaveUrl = 'http://localhost:8080/surveyResult';

  const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient, private dataService: QuizDataService) {
  }

  getSurveys(): Observable<Survey[]> {
    return this.http.get<Survey[]>(this.surveyUrl);
  }

  saveSurvey() {
    this.http.post<any>(this.surveySaveUrl, JSON.stringify({
      'answers': this.dataService.answers,
      'survey': this.dataService.survey.id,
      'email': this.dataService.email
    }), this.httpOptions).subscribe();
  }
}
