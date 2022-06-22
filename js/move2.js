const p = document.querySelector('#see-1')

document.addEventListener('scroll', (e) => {
  let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
  
  p.style.setProperty('--percentage', `${scrolled * 100}%`)
})
const p = document.querySelector('#see-2')

document.addEventListener('scroll', (e) => {
  let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
  
  p.style.setProperty('--percentage', `${scrolled * 100}%`)
})

const p = document.querySelector('#see-3')

document.addEventListener('scroll', (e) => {
  let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
  
  p.style.setProperty('--percentage', `${scrolled * 100}%`)
})
