import React from 'react'

function FilesView() {
  return (
    <div className='fileView'>
        <div className="fileView__row">
            {/* file cards */}
        </div>
        <div className="filesView__titles">
            <div className="filesView__titles--left">
                <p>Name</p>
            </div>
            <div className='fileView__titles--right'>
                <p>Last modified</p>
                <p>File size</p>
            </div>
        </div>
        {/* file items */}
    </div>
  )
}

export default FilesView
