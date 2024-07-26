const displayMenu = () => {
  let topNav = document.getElementById('my-topnav')
  if (topNav.className === 'topnav') {
    topNav.className += 'responsive'
  } else {
      topNav.className = 'topnav'
  }
}