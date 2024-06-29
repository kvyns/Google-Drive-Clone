import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import FileItem from './FileItem';
import '../../styles/filesview.css';
import FileCard from './FileCard';

const FilesView = () => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'myFiles'), (snapshot) => {
            setFiles(snapshot.docs.map(doc => ({
                id: doc.id,
                item: doc.data()
            })));
        });

        // Cleanup the subscription
        return () => unsubscribe();
    }, []);

    console.log(files);

    return (
        <div className='fileView'>
            <div className="fileView__recents">
                Recent Files
            </div>
            <div className="fileView__row">
                
                {
                    files.slice(0, 5).map(({ id, item }) => (
                        <FileCard key={id} name={item.caption} /> // Added key for list rendering
                    ))
                }
            </div>
            <div className="fileView__titles">
                <div className="fileView__titles--left">
                    <p>Name</p>
                </div>
                <div className="fileView__titles--right">
                    <p>Last modified</p>
                    <p>File size</p>
                </div>
            </div>
            {
                files.map(({ id, item }) => (
                    <FileItem
                        key={id} // Added key for list rendering
                        id={id}
                        caption={item.caption}
                        timestamp={item.timestamp}
                        fileUrl={item.fileUrl}
                        size={item.size}
                    />
                ))
            }
        </div>
    );
};

export default FilesView;
