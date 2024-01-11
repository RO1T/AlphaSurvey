import { SurveyCreatorComponent, SurveyCreator } from 'survey-creator-react'
import 'survey-core/defaultV2.min.css'
import 'survey-creator-core/survey-creator-core.min.css'
import { useAppDispatch } from '../../hooks'
import { sendSurvey } from '../../redux/store/api-actions'

const creatorOptions = {
	showLogicTab: true,
	isAutoSave: false,
	showSaveButton: true,
}
// {
//   "title": "TitileOfSurvey",
//   "description": "Descript about surveys",
//   "pages": [
//       {
//           "name": "Name",
//           "elements": [
//               {
//                   "type": "text",
//                   "name": "FirstName",
//                   "title": "Enter your first name:"
//               },
//               {
//                   "type": "text",
//                   "name": "LastName",
//                   "title": "Enter your last name:"
//               }
//           ],
//           "title": "Page1 name",
//           "description": "descr of page 1"
//       },
//       {
//           "name": "page1",
//           "elements": [
//               {
//                   "type": "text",
//                   "name": "question1",
//                   "title": "dasdas"
//               }
//           ],
//           "title": "Page 2 name",
//           "description": "desc of page 2"
//       }
//   ]
// }
const defaultJson = {
	pages: [{
		name: 'Name',
		elements: [{
			name: 'FirstName',
			title: 'Enter your first name:',
			type: 'text'
		}, {
			name: 'LastName',
			title: 'Enter your last name:',
			type: 'text'
		}]
	}]
}

export default function SurveyCreatorWidget() {
	const dispatch = useAppDispatch()
	const creator = new SurveyCreator(creatorOptions)
	creator.text = window.localStorage.getItem('survey-json') || JSON.stringify(defaultJson)
	creator.saveSurveyFunc = (saveNo: never, callback: (arg0: never, arg1: boolean) => void) => { 
		console.log(creator.JSON)
		callback(saveNo, true)
		dispatch(sendSurvey(
			creator.JSON
		))

	}
	return ( <>
		<SurveyCreatorComponent creator={creator} />
	</>  )
}


// saveSurveyJson(
//     "https://your-web-service.com/",
//     creator.JSON,
//     saveNo,
//     callback
// );
// function saveSurveyJson(url, json, saveNo, callback) {
//   fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=UTF-8'
//     },
//     body: JSON.stringify(json)
//   })
//   .then(response => {
//     if (response.ok) {
//       callback(saveNo, true);
//     } else {
//       callback(saveNo, false);
//     }
//   })
//   .catch(error => {
//     callback(saveNo, false);
//   });
// }