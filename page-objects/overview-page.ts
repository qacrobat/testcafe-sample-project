import { Selector, t } from "testcafe";

class OverviewPage {
  quizCard: Selector;
  quizScore: Selector;

  constructor() {
    this.quizCard = Selector("[data-testid=quiz-card]");
    this.quizScore = Selector("[data-testid=quiz-score]");
  }

  selectQuiz(position: number): Selector {
    return Selector("[data-testid=quiz-card]").nth(position);
  }

  getQuizScore(position: number): Selector {
    return Selector("[data-testid=quiz-card]")
      .nth(position)
      .find("[data-testid=quiz-score]");
  }
}

export default new OverviewPage();
