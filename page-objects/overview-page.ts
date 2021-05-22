import { Selector, t } from "testcafe";

class OverviewPage {
  get getQuiz() {
    return Selector("[data-testid=quiz-card]");
  }

  async clickOnQuiz() {
    await t.click(this.getQuiz);
  }
}

export default new OverviewPage();
