import './src/GLOBAL_CSS/main.styl'

document.getElementById('navigationButton').addEventListener('click', (e)=>{
  document.getElementById('navigationButton').firstChild.classList.toggle('c-hamburger--isActive')
  document.getElementById('headerNavigation').classList.toggle('o-header--navigation__opened')
})

window.addEventListener('load', ()=>{
  let windowInnerHeight = innerHeight + 100
  let scrollEffect = (element, classToBeAdded)=>{
    if(pos[elements.indexOf(element)]  <= (pageYOffset + windowInnerHeight )) element.classList.add(classToBeAdded)
  }
  let elements = [
    document.querySelector('.o-firstIntro-plant'),
    document.querySelector('.o-firstIntro-heading'),
    document.querySelector('.o-body-secondIntro'),
    ...document.querySelectorAll('.c-project'),
    ...document.querySelectorAll('.c-skill'),
    document.querySelector('.o-footer')
  ]
  let pos = []
  elements.forEach(element=>{
    pos.push((element.offsetTop + element.offsetHeight))
  })
  console.log(pos, elements)
  window.addEventListener('scroll', (e)=>{
    elements.forEach(element=>{
      if(element.classList.contains('c-skill')) {
        scrollEffect(element, 'c-skill-progress--isLoaded')
      }
      else scrollEffect(element, 'u-animation-fadeInto-direction--isActive')
    })
    
  })
})