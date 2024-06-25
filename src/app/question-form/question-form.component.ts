import { Component } from '@angular/core';
import { QuestionData } from '../question-data.model';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent {
  questionData: QuestionData = {
    mainQuestion: '',
    additionalQuestion1: '',
    additionalQuestion2: '',
    additionalQuestion3: ''
  };
  showModal: boolean = false;
  answer1: string = '';
  answer2: string = '';
  submitted: boolean = false;

  constructor() {}

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  submitForm() {
    if (this.questionData.mainQuestion.trim()) {
      this.submitted = true;
      this.openModal(); // Only open modal if form is submitted
    }
  }

  submitModal() {
    // Handle modal form submission here if needed
    this.closeModal();
  }

  saveData() {
    // Save data to database or perform other actions
    console.log('Data saved:', this.questionData);
  }
}
