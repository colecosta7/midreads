import React, { useState } from 'react';
import { useAuth } from '../Auth';

const UploadPhoto = () => {
    const { currentUser } = useAuth();
    const [photo, setPhoto] = useState(null);

    const handleFileChange = (e) => {
        setPhoto(e.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('photo', photo);
        formData.append('uid', currentUser.uid);

        try {
            const response = await fetch('http://localhost:8000/api/uploads/uploadPhoto', { 
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Error: ${response.statusText} - ${errorText}`);
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error uploading photo:', error);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload Photo</button>
        </div>
    );
};

export default UploadPhoto;
