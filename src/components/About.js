import React,{useState } from 'react'

const About = () => {
    const [header] = useState ({
        header:'About',
        mainHeader:'About Me',
        mainContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text."
    })
    const [state] = useState([
        {
          id:1,
          title:"Name",
          text: "Mehedi Ahammed" 
        },
        {
          id:2,
          title:"Email",
          text: "mollameehedi@gmail.com" 
        },
        {
          id:3,
          title:"Phone",
          text: "01863567583" 
        },
        {
          id:4,
          title:"Linkedin",
          text: "mollameehedi" 
        },
    ])
  return (
    <div className='about'>
      <div className='container'>
      <div className='common'>
         <h3 className='heading'>{header.heading}</h3>
            <h1 className='mainHeader'>{header.mainHeader}</h1>
            <p className='mainContent'>{header.mainContent}</p>
            <div className='commonBorder'></div>
         </div>
         <div className='row h-650 alignItem'>
                <div className='col-6'>
                    <div className='about__img'>
                        <img src='images/about.png' alt='about.png'/>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='about__info'>
                        <h1>Hi There</h1>
                        <p className="about__info__p1">In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis</p>
                        <p className="about__info__p2">nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis porta sem turpis quis leo. Nulla in feugiat elit</p>
                        
                    </div>
                    <div className='about__info__contacts'>
                        <div className='row'>
                            { state.map(info => (
                                 <div className='col-6'>
                                 <strong>{ info.title }</strong>
                                 <p>{ info.text }</p>
                             </div>
                            )) }
                           
                        </div>
                    </div>
                </div>
         </div>
      </div>
    </div>
  )
}

export default About
