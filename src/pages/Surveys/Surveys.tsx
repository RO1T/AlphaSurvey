import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";

type SurveyComponentProps = {
    css: object;
    json: object;
    onComplete: (sender: any) => void
}

function SurveyComponent({css, json, onComplete}: SurveyComponentProps) {
    const survey = new Model(json);

    survey.applyTheme(css);
    survey.onComplete.add(onComplete);

    return (<Survey model={survey}/>);
}

export default SurveyComponent;