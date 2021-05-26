import { Selector, t } from "testcafe";

class QuestionPage {
  backButton: Selector;
  nextButton: Selector;
  selectedQuestion: Selector;

  constructor() {
    this.backButton = Selector("[data-testid=question-back]");
    this.nextButton = Selector("[data-testid=question-next]");
    this.selectedQuestion = Selector("[data-checked]");
  }

  selectQuestion(position: number): Selector {
    return Selector("label.css-1u8qly9").nth(position);
  }
}

export default new QuestionPage();
