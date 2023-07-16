import React from 'react'
import Header from '../../components/Header'
import Headerimage from '../../images/header_bg_4.jpg'
import Card from '../../ui/Card'
import { plans } from '../../data'
import './Plans.css'

const Plans = () => {
    return (
        <>
        <Header title= "Membership Plans" image={Headerimage}>Discover our membership plans, meticulously crafted to cater to diverse fitness needs. Unlock a world of unlimited possibilities, exceptional facilities, expert guidance, and a supportive community that will propel you towards your health and fitness goals.</Header>
        <section className='plans'>
            <div className="container plans__container">
                {

                    plans.map(({id,name,desc,price,features})=>{
                        return <Card key={id} className= 'plan'>
                            <h3>{name}</h3>
                            <small>{desc}</small>
                            <h1>{`$${price}`}</h1> <h2>/Mo</h2>
                            <h4>Features</h4>
                            {
                                features.map(({feature,available},index)=>{
                                    return <p key={index} className={!available?'disabled':''}> {feature} </p>
                                })
                            }
                            <button className='btn lg'>Choose Plan</button>
                        </Card>
                    })
                }

            </div>
        </section>
        </>
    )
}

export default Plans    