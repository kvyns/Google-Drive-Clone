import React from 'react'
import '../../styles/sideicons.css'
import AddIcon from '@mui/icons-material/Add';

const index = () => {
    return (
        <div className='sideIcons'>
            <div className="sideIcons__top">
                <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-calendar-512.png" alt="Google Calendar" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Keep_icon_%282015-2020%29.svg/768px-Google_Keep_icon_%282015-2020%29.svg.png?20210606170001" alt="Google Keep" />
                <img src="https://www.androidpolice.com/wp-content/uploads/2018/03/nexus2cee_new-tasks-icon.png" alt="Google Tasks" />
            </div>

            <hr />

            <div className="sideIcons__plusIcon">
                <AddIcon />
            </div>
        </div>
    )
}

export default index