import React,{ useState } from 'react';
import TextField from '@material-ui/core/TextField';

function AddTodo({saveTodo}){
    const [value, setValue] = useState('');
    return(
        <form onSubmit= {e =>{e.preventDefault(); setValue(''); saveTodo(value)} } >
            <TextField variant='outlined' placeholder='add todo' margin='normal' 
                onChange= { e => { setValue(e.target.value) } } value={value}
            />
        </form>
    );
}
export default React.memo(AddTodo);