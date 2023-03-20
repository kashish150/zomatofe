import React from 'react'

const Navbaar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/login">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/signup">Signup</a>
        </li>
        </ul>
       </div>
  </div>
</nav>
    </div>
  )
}

export default Navbaar ;
