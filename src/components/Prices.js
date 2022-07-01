import React,{useState} from 'react'

const Prices = () => {
    const [header] = useState({
        heading:"CHOOSE A PLAN",
        mainHeader:'Pricing Plan',
        mainContent:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.',
    })

    const [state] = useState([
        {id:1,package:'Basic', price:50, featureList:['5GB Storage Space','20GB Monthly Bandwidth','My SQL Databases','100 Email Account','10 Free Domain Names']},
        {id:1,package:'Standard', price:80, featureList:['10GB Storage Space','20GB Monthly Bandwidth','My SQL Databases','150 Email Account','15 Free Domain Names']},
        {id:1,package:'Premium', price:160, featureList:['20GB Storage Space','20GB Monthly Bandwidth','My SQL Databases','200 Email Account','20 Free Domain Names']},
    ])

  return (
    <div className='prices'>
      <div className='container'>
        <div className='prices__header'>
             <div className='common'>
             <h3 className='heading'>{header.heading}</h3>
                <h1 className='mainHeader'>{header.mainHeader}</h1>
                <p className='mainContent'>{header.mainContent}</p>
                <div className='commonBorder'></div>
             </div>
        </div>
        <div className='row package_center'>
            {state.map(info =>(
                <div className='col-4'>
                <div className='price'>
                    <div className='priceHeading'>{info.package}</div>
                    <div className='price__rs'><span>$</span>{info.price}</div>
                    <ul>
                        {info.featureList.map(item =>(
                        <li>{item}</li>
                        ))}
                    </ul>
                    <div className='price__btn'>
                        <a href='' className='btn btn-outline'>Purchase</a>
                    </div>
                </div>
            </div>
            ))}
            
        </div>
      </div>
    </div>
  )
}

export default Prices
