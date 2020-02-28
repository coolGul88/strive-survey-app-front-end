export interface Survey {
  id: number;
  name: string;
  quiz: Quiz;
}

export interface Question {
  id: number;
  question: string;
}

export interface Quiz {
  id: number;
  questions: Question[];

}
