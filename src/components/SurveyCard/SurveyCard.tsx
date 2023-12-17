import { Link } from "react-router-dom";
import { SurveyProps } from "../../const/types";


export default function SurveyCard({creatorName, title, description, price, id, timeToSpend}: SurveyProps) {
  return (
    
    <div className="survey-card-container">
        <div className="survey-card-left">
            <div className="survey-card-creator"><h4>{creatorName}</h4></div>
            <div className="survey-card-title"><h3>{title}</h3></div>
            <div className="survey-card-description"><p>{description}</p></div>
        </div>
        <div className="survey-card-right">
            <div className="survey-card-price"><span>{price}&#8381; </span><small>за опрос</small></div>
            <div className="survey-card-button-link link-class"><Link to={`surveys/${id}`}>Пройти опрос</Link></div>
            <div className="survey-card-time-to-spend"><span>≈{timeToSpend} минут</span></div>
        </div>
    </div>
  );
}

