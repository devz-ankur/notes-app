import React from 'react';
import PropTypes from 'proptypes';
import './Note.css';
import deleteIcon from '../../Assets/deleteicon.png';


let timer = 500, timeout;
function Note(props) {
    const formatDate = (value) => {
        if (!value) return '';
        const date = new Date(value);
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let hrs = date.getHours();
        let amPm = hrs > 12 ? 'PM' : 'AM';
        hrs = hrs ? hrs : '12';
        hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;

        let min = date.getMinutes();
        min = min < 10 ? '0' + min : min;
        let day = date.getDate();
        const month = monthNames[date.getMonth()];
        return `${hrs}:${min} ${amPm} ${day} ${month}`;

    }

    const debounce = (func) => {
        clearTimeout(timeout);
        timeout = setTimeout(func, timer);
    }

    const updateText = (text,id) => {
        debounce(() => props.updateText(text,id))
    }
    return (
        <>
            <div className='note' style={{ backgroundColor: props.note?.color || 'cyan' }}>
                <textarea className='note_text' defaultValue={props.note?.text || ''}
                    onChange={(event) => updateText(event.target.value, props.note.id)}
                />
                <div className='note-footer'>
                    <p>{formatDate(props.note?.time || '')}</p>
                    <img
                    width={'20px'}
                        src={deleteIcon.src}
                        alt='Delete Note'
                        onClick={() => props.deleteNote(props.note.id)}
                    />
                </div>
            </div>
        </>
    );
};

Note.propTypes = {
    note: PropTypes.shape({
        color: PropTypes.string,
        text: PropTypes.string,
        time: PropTypes.string
    })
}

export default Note