(function(){
  'use strict'

  var sbl=document.querySelectorAll('.sbl:not(.sl)')
  var ss=document.querySelectorAll('section[id]')
  function act(){
    var sy=window.scrollY+80,cur=''
    ss.forEach(function(s){var t=s.offsetTop,h=s.offsetHeight;if(sy>=t&&sy<t+h)cur=s.getAttribute('id')})
    sbl.forEach(function(n){n.classList.toggle('active',n.getAttribute('href')==='#'+cur)})
  }
  window.addEventListener('scroll',act);act()

  var up=document.getElementById('up')
  if(up){
    window.addEventListener('scroll',function(){up.classList.toggle('show',window.scrollY>300)})
    up.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})})
  }

  document.querySelectorAll('.email-btn').forEach(function(btn){
    btn.addEventListener('click',function(e){
      e.preventDefault()
      var user=this.getAttribute('data-user')
      var domain=this.getAttribute('data-domain')
      if(user&&domain) window.location.href='mailto:'+user+'@'+domain
    })
  })
})()
