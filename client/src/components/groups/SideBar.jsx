import React from 'react';
import {Link} from 'react-router-dom'
const SideBar = () =>{
return(
<div class="ui inverted vertical pointing menu">
<Link class="item">
  Home
</Link>
<Link class="item active">
  Messages
</Link>
<Link class="item">
  Friends
</Link>
</div>)
}
