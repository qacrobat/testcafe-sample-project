import OverviewPage from "../page-objects/overview-page";
import QuestionPage from "../page-objects/question-page";
import { Selector } from "testcafe";

fixture`Getting Started`.page`https://tilda-quiz.vercel.app/`;

test("Redirect to first question", async (t) => {
  await OverviewPage.clickOnQuiz();
  await t
    .expect(Selector("h2").innerText)
    .eql("Geography", "check element text", { timeout: 500 });
});
