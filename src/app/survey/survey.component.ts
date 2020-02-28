import {Component, OnInit} from '@angular/core';
import {Survey} from './survey';
import {SurveyService} from './service/survey.service';
import {QuizDataService} from '../quiz/service/quiz.data.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  surveys: Survey[];

  ngOnInit() {
    this.getSurveys();
  }

  constructor(private surveyService: SurveyService, private dataService: QuizDataService) {
  }

  getSurveys() {
    this.surveyService.getSurveys().subscribe(data => {
      console.log(data);
      this.surveys = data;
    });
  }

  setSurvey(survey: Survey) {
    this.dataService.survey = survey;
  }
}
