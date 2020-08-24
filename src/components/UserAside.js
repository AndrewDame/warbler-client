import React from 'react';
import DefaultProfileImg from '../images/default-profile-image.jpg';

const UserAside = ({profileImageUrl, username}) => (
  <aside className="col-sm-2">
    <div className="panel panel-default">
      <div className="panel-body" style={{display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px"}}>
        <img
        src={profileImageUrl || DefaultProfileImg}
        alt={username}
        width= "200"
        height= "200"
        className="img-thumbnail"
        />
        <div class="text-center username">@{ username }</div>
      </div>
    </div>
  </aside>
)

export default UserAside;
