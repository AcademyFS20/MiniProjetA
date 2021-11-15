import React from 'react'

const User = ({login, avatar_url}) =>
<div className="User">
    <img src={avatar_url}></img> 
    <p>{login}</p>

</div>

export default User
