import { SurveyAnswersProps } from '../../types/types'



export default function CompletedSurveyCard(props: SurveyAnswersProps) {

	const title = props.surveyTitle
	const users_answers = props.users_answers

	function beauty(answers: JSON) {
		const answ_obj = JSON.stringify(answers)
		const str = answ_obj.replace(/[\\[\]\\{\\}]+/g, '')
		return str
	}

	return (
		<div>
            Название опроса - {title}<br></br>
			{users_answers.map((el)=>
				<div key={el.username}>
					{`Имя прошедшего - ${el.username}`}<br></br>
					{`Ответы - ${beauty(el.answers)}`}
					<br></br>
					<br></br>
				</div>
			)}
		</div>
        
	)
}