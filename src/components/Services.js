import React from 'react'
import {FaGithub,FaCamera,FaCodepen,FaApple,FaFileVideo,FaSearchPlus} from 'react-icons/fa'

const Services = () => {
    const [header] = React.useState({
        heading:"Services",
        mainHeader:"My Services",
        mainContent:"Lorem Ipsum is simply dummy text of the printing and typesetting/ industry. Lorem Ipsum standard dummy text."


    });

    const [state] = React.useState([
        {
            id:1,
            icon:'FaGithub',
            heading:"Web Development",
            text:"Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy"
        },
        {
            id:2,
            icon:'FaCamera',
            heading:"Photography",
            text:"Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy"
        },
        {
            id:3,
            icon:'FaCodepen',
            heading:"Web Design",
            text:"Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy"
        },
        {
            id:4,
            icon:'FaApple',
            heading:"App Developing",
            text:"Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy"
        },
        {
            id:5,
            icon:'FaFileVideo',
            heading:"Video Editing",
            text:"Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy"
        },
        {
            id:6,
            icon:'FaSearchPlus',
            heading:"SEO Expart",
            text:"Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy"
        },
    ]);
  return (
    <div className='services'>
        <div className='container'>
            <div className='service__header'>
                 <div className='common'>
                 <h3 className='heading'>{header.heading}</h3>
                    <h1 className='mainHeader'>{header.mainHeader}</h1>
                    <p className='mainContent'>{header.mainContent}</p>
                    <div className='commonBorder'></div>
                 </div>
            </div>
            <div className='row'>
                { state.map(info => (
                    <div className='col-4'>
                    <div className='service__box'>
                        <FaGithub className='commonIcon'/>
                        <div className='service__box_header'>{info.heading}</div>
                        <div className='service__box_p'>{info.text}</div>
                    </div>
                </div>
                )) }
                
            </div>
        </div>
    </div>
  )
}

export default Services
