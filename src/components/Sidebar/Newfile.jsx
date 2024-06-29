import React, { useState } from 'react';
import '../../styles/newfile.css';

import AddIcon from '@mui/icons-material/Add';

import { storage, db } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL, getMetadata } from 'firebase/storage';
import { Modal, Box, Button, Typography, Input } from '@mui/material';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const NewFile = () => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    setUploading(true);

    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
      (error) => {
        console.error(error);
        setUploading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);

          addDoc(collection(db, 'myFiles'), {
            timestamp: serverTimestamp(),
            caption: file.name,
            fileUrl: downloadURL,
            size: uploadTask.snapshot.bytesTransferred,
          }).then(() => {
            setUploading(false);
            setOpen(false);
            setFile(null);
          }).catch((error) => {
            console.error("Error adding document: ", error);
            setUploading(false);
          });
        }).catch((error) => {
          console.error("Error getting download URL: ", error);
          setUploading(false);
        });
      }
    );

    getMetadata(storageRef).then((metadata) => {
      console.log(metadata.size);
    }).catch((error) => {
      console.error("Error getting metadata: ", error);
    });
  };

  return (
    <div className='newFile'>
      <div className="newFile__container" onClick={handleOpen}>
        <AddIcon fontSize='large' />
        <p>New</p>
      </div>

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Select files you want to upload!
          </Typography>
          {
            uploading ? (
              <Typography>Uploading...</Typography>
            ) : (
              <>
                <Input type="file" onChange={handleChange} />
                <Button onClick={handleUpload}>Upload</Button>
              </>
            )
          }
        </Box>
      </Modal>
    </div>
  );
};

export default NewFile;
