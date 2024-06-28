import React from 'react'
import Newfile from './Newfile'
import SidebarItem from './SidebarItem'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import QueryBuilder from '@mui/icons-material/QueryBuilder';
import StorageIcon from '@mui/icons-material/Storage';
import "../../styles/sidebar.css"

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Newfile/>
        <div className="sidebar__itemsContainer">
            <SidebarItem arrow icon={<InsertDriveFileIcon/>} label={'My Drive'}/>
            <SidebarItem arrow icon={<ImportantDevicesIcon/>} label={'Computers'}/>
            <SidebarItem icon={<PeopleAltIcon/>} label={'Shared with me'}/>
            <SidebarItem icon={<QueryBuilder/>} label={'Recent'}/>
            <SidebarItem icon={<StarBorderIcon/>} label={'Starred'}/>
            <SidebarItem icon={<DeleteOutlineIcon/>} label={'Bin'}/>
            <hr/>
            <SidebarItem icon={<StorageIcon/>} label={'Storage'}/>
        </div>
      
    </div>
  )
}

export default Sidebar
