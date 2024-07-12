import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';

const UpoloadAvatar = ({ token, userId, username, avatarUrl, setisUserUpdated }) => {
  const handleAvatarUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('avatar', file);

    try {
      const response = await axios.post(`http://localhost:1337/api/users/${userId}/avatar`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      setisUserUpdated(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="avatar-upload">
      <input type="file" onChange={handleAvatarUpload} />
      <button>Upload Avatar</button>
    </div>
  );
};

const Profile = ({ token }) => {
  const [user, setUser] = useState({});
  const [isUserUpdated, setisUserUpdated] = useState(false);

  useEffect(() => {
    const getProfileData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:1337/api/users/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        setisUserUpdated(false);
      } catch (error) {
        console.error(error);
      }
    };
    getProfileData();
  }, [token, isUserUpdated]);

  return (
    <div className="profile">
      <div className="avatar">
        <div className="avatar-wrapper">
          {user.avatarUrl ? (
            <img src={`http://localhost:1337${user.avatarUrl}`} alt={`${user.username} avatar`} />
          ) : (
            <IoPersonCircleOutline />
          )}
          <UpoloadAvatar
            token={token}
            userId={user.id}
            username={user.username}
            avatarUrl={user.avatarUrl}
            setisUserUpdated={setisUserUpdated}
          />
        </div>
      </div>
      <div className="body">
        <p>Name: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>
          Account created at: {new Date(user.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default Profile;