import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { FormEvent, useState } from 'react'
import { sendProfile } from '../../redux/store/api-actions'
import { useAppDispatch } from '../../hooks'

export default function ProfileDialog (): JSX.Element {
	const [username, setName] = useState('')
	const [description, setDescription] = useState('')
	const dispatch = useAppDispatch()


	function handleSubmit (evt: FormEvent<HTMLFormElement>) {
		evt.preventDefault()
		dispatch(sendProfile({
			username:username,
			description:description,
		}))
	}

	const [open, setOpen] = useState(false)

	const handleClickOpen = (): void => {
		setOpen(true)
	}

	const handleClose = (): void => {
		setOpen(false)
	}

	return (
		<>
			<Button onClick={handleClickOpen}>
                Редактировать профиль
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<form onSubmit={handleSubmit}>
					<DialogTitle>Редактирование профиля</DialogTitle>
					<DialogContent>
						<DialogContentText>
                        Введите информацию о себе
						</DialogContentText>

						<TextField
							autoFocus
							onChange={e => setName(e.target.value)}
							margin="dense"
							id="name"
							label="Имя"
							fullWidth
							variant="standard"
							value={username}
						/>
						<TextField
							onChange={e => setDescription(e.target.value)}
							margin="dense"
							id="desc"
							label="Описание о себе"
							fullWidth
							variant="standard"
							value={description}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose}>Отменить</Button>
						<Button type="submit">Отправить</Button>
					</DialogActions>
				</form>
			</Dialog>
		</>
	)
}
