import OverviewPage from "../page-objects/overview-page";
import QuestionPage from "../page-objects/question-page";
import { Selector } from "testcafe";

fixture`Getting Started`.page`https://tilda-quiz.vercel.app/`;

const header = Selector("h2");

test("Go to the first question, select an answer and go back to the Quiz-Overview", async (t) => {
  await t.click(OverviewPage.selectQuiz(0));
  await t
    .expect(header.innerText)
    .eql("Geography", "check element text", { timeout: 500 });

  await t.click(QuestionPage.selectQuestion(0));
  await t.expect(QuestionPage.selectedQuestion.count).eql(1);

  await t.click(QuestionPage.backButton);
  await t
    .expect(Selector(header).innerText)
    .eql("Tilda Quiz", "check element text", { timeout: 500 });
});

test("Go through a Quiz completely", async (t) => {
  await t.click(OverviewPage.quizCard);
  await t
    .expect(Selector(header).innerText)
    .eql("Geography", "check element text", { timeout: 500 });

  // select first question
  await t.click(QuestionPage.selectQuestion(0));
  await t.click(QuestionPage.nextButton);

  // select 2nd question
  await t.click(QuestionPage.selectQuestion(0));
  await t.click(QuestionPage.nextButton);

  // select 3rd question
  await t.click(QuestionPage.selectQuestion(0));
  await t.click(QuestionPage.nextButton);

  await t
    .expect(OverviewPage.getQuizScore(0).innerText)
    .eql("Score: 1/3", "check element text", { timeout: 500 });
});
