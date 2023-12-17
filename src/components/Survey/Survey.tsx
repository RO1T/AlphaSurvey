import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";

type SurveyComponentProps = {
    css: object;
    json: object;
    onComplete: (sender: unknown) => void
}

export default function SurveyComponent({css, json, onComplete}: SurveyComponentProps) {
    let jsonCurrent = json;
    if (window.localStorage.getItem('survey-json')){
        jsonCurrent = window.localStorage.getItem('survey-json');
    }
    const survey = new Model(jsonCurrent);

    survey.applyTheme(css);
    survey.onComplete.add(onComplete);

    return (<Survey model={survey}/>);
}