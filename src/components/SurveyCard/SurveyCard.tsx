import { Link } from 'react-router-dom'
import { PageSurveyProps } from '../../types/types'

type SurveyPropsSmall = {
  title: string;
  description: string;
  date_creation: string;
  pages: PageSurveyProps;
  user_id: number;
  creator: string;
}

type SurveyCardProps = {
  id: string;
  props: SurveyPropsSmall
}

export default function SurveyCard({id, props}:SurveyCardProps) {
	const price = 999
	const timeToSpend = 15
	return (
    
		<div className="survey-card-container">
			<div className="survey-card-left">
				<div className="survey-card-creator"><h4>{props.creator}</h4></div>
				<div className="survey-card-title"><h3>{props.title}</h3></div>
				<div className="survey-card-description"><p>{props.description}</p></div>
			</div>
			<div className="survey-card-right">
				<div className="survey-card-price"><span>{price}&#8381; </span><small>за опрос</small></div>
				<div className="survey-card-button-link link-class"><Link to={`surveys/${id}`}>Пройти опрос</Link></div>
				<div className="survey-card-time-to-spend"><span>≈{timeToSpend} минут</span></div>
			</div>
		</div>
	)
}

