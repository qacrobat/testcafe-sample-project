import OverviewPage from "../page-objects/overview-page";
import QuestionPage from "../page-objects/question-page";
import { Selector } from "testcafe";

fixture`Getting Started`.page`https://tilda-quiz.vercel.app/`;

test("Redirect to first question and go back to the Quiz-Overview", async (t) => {
  await t.click(OverviewPage.quizCard);
  await t
    .expect(Selector("h2").innerText)
    .eql("Geography", "check element text", { timeout: 500 });

  await t.click(QuestionPage.backButton);
  await t
    .expect(Selector("h2").innerText)
    .eql("Tilda Quiz", "check element text", { timeout: 500 });
});

test("Finish quiz successfully", async (t) => {
  await t.click(OverviewPage.quizCard);
  await t
    .expect(Selector("h2").innerText)
    .eql("Geography", "check element text", { timeout: 500 });

  await t.click("div.css-1kn7z7o"); // select first question
  await t.click(QuestionPage.nextButton); // click next button

  await t.click("div.css-1kn7z7o"); // select 2nd question
  await t.click(QuestionPage.nextButton); // click next button

  await t.click("div.css-1kn7z7o"); // select 3rd question
  await t.click(QuestionPage.nextButton); // click next button

  await t
    .expect(Selector("h2").innerText)
    .eql("Tilda Quiz", "check element text", { timeout: 500 });
});
