gsap.to('.nav-item',{duration:1,x:10,stagger:.5})
gsap.from('.nav-item',{duration:1,opacity:.5,delay:1})
gsap.from('.bi',{duration:1,x:-100})
gsap.from('.bi',{duration:1,opacity:.5,delay:1,stagger:.5})
gsap.to('.name',{duration:3,delay:.2,x:100,opacity:1,stagger:.5})
 
const timeline=gsap.timeline({default:{duration:.3}})
timeline.from('.hea',{x:-100,opacity:0})
timeline.from('.im',{x:-100,opacity:0})
timeline.from('li',{x:-100,opacity:0})
timeline.from('.edu',{x:-100,opacity:0})
timeline.from('.yr',{x:-100,opacity:0})
timeline.from('.clg',{x:-100,opacity:0})
timeline.from('.skil',{x:-100,opacity:0})
timeline.to('.pro1',{width:'100%',stagger:.5})
timeline.to('.pro2',{width:'90%',stagger:.6})
timeline.to('.pro3',{width:'83%',stagger:.6})
timeline.to('.pro4',{width:'50%',stagger:.6})
timeline.to('.pro5',{width:'40%',stagger:.6})
timeline.to('.pro6',{width:'70%',stagger:.6})
timeline.to('.pro7',{width:'60%',stagger:.6})
timeline.from('.project',{x:-100,opacity:0})
