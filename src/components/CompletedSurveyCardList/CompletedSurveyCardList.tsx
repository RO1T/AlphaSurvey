import { MySureysProps, SurveyAnswersProps } from '../../types/types'
import CompletedSurveyCard from '../CompletedSurveyCard/CompletedSurveyCard'


export default function CompletedSurveyCardList({mySurveys}: MySureysProps) {
	return (
		<div>
			{mySurveys.map((element) => (
				<article key={element.surveyTitle}>
					<CompletedSurveyCard surveyTitle={element.surveyTitle} users_answers={element.users_answers} />			
				</article>
			))}
		</div>
	)
}