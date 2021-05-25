import { Selector, t } from "testcafe";

class OverviewPage {
  quizCard: Selector;

  constructor() {
    this.quizCard = Selector("[data-testid=quiz-card]");
  }
}

export default new OverviewPage();
