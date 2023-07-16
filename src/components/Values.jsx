import React from 'react'
import Image from '../images/values.jpg'
import SectionHead from './SectionHead'
import { GiCutDiamond } from 'react-icons/gi'
import { values } from '../data'
import Card from '../ui/Card'



const Values = () => {
    return (
        <section className='values'>
            <div className="container values__container">
                <div className="value__left">
                    <div className="value__image">
                        <img src={Image} alt="value" />
                    </div>
                </div>
                <div className="value__right">
                    <SectionHead icon={<GiCutDiamond />} title="Values" />
                    <p>Our values encompass dedication, perseverance, and the pursuit of excellence in fitness and well-being.</p>

                    <div className="values__wrapper">
                        {
                            values.map(({ id, icon, title, desc }) => {
                                return <Card key={id} className="values__value">
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{desc}</small>
                                </Card>
                            })
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Values