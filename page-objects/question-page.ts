import { Selector, t } from "testcafe";

class QuestionPage {
  backButton: Selector;
  nextButton: Selector;

  constructor() {
    this.backButton = Selector("[data-testid=question-back]");
    this.nextButton = Selector("[data-testid=question-next]");
  }
}

export default new QuestionPage();
