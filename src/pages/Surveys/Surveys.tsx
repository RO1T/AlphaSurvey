import SurveyCard from "../../components/SurveyCard/SurveyCard";
import { SurveyProps } from "../../const/types";

type SurveysComponentProps = {
    surveys: SurveyProps[];
}

export default function Surveys({surveys}:SurveysComponentProps){
    return (
          <div className="surveys-container">
        {surveys.map((surveyCard) =>
        (
          <article className="small-surveys-card" key={surveyCard.id}>
            <SurveyCard {...surveyCard} />
          </article>
        )
      )}
        </div>
    );
}