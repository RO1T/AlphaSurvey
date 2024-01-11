export type UserAnswersProps = {
    username: string;
    answers: JSON;
}


export type MySureysProps = {
    mySurveys: SurveyAnswersProps[]
}

export type SurveyAnswersProps = {
    surveyTitle: string;
    users_answers: UserAnswersProps[];
}

export type SmallSurveyProps = {
    creatorName: string;
    title: string;
    description: string;
    price: number;
    id: string;
    timeToSpend: number;
};

export type SurveyContentProps = {
    title: string,
    description: string,
    date_creation: string,
    pages: PageSurveyProps
}

export type SurveyProps = {
    id: SurveyContentProps
};

export type PageSurveyProps = {
    name: string;
    elements: QuestionProps[];
}

export type QuestionProps = {
    type: string;
    name: string;
    title: string;
    choices: string[] | null;
    isRequired: boolean | null;
    placeholder: string | null;
}

