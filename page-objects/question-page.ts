import { Selector, t } from 'testcafe';

class QuestionPage {

    get QuizTitle() { return Selector('h2').withText('Geography') }

    async getQuizTitle() {
        return this.QuizTitle
    }
}

export default new QuestionPage();