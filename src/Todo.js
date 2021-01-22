import React, { useState } from 'react'
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Modal, Button } from '@material-ui/core'
import './Todo.css'
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Todo(props) {
    const classses = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const handleOpen = () => {
        setOpen(true);
    }

    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, {merge: true});
        setOpen(false);
    }

    return (
        <div>
            <>
            <Modal
                open={open}
                onClose={e => setOpen(false)}>
                    <form>
                        <div className = {classses.paper}>
                            <h1>Update</h1>
                            <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
                            <Button onClick={updateTodo} variant="contained" color="primary">Update Todo</Button>
                        </div>
                    </form>
                </Modal>
            <List className = 'todo__list'>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                        </Avatar>
                    </ListItemAvatar>
                        <ListItemText primary={props.todo.todo} secondary='Todo' />
                </ListItem>
                <Button onClick={e => setOpen(true)} variant="contained" color="primary">Edit</Button>
                <DeleteForeverIcon 
                onClick={event => db.collection('todos').doc(props.todo.id).delete()} variant="contained" color="secondary"/>
            </List> 
            </>
        </div>
    )
}

export default Todo
