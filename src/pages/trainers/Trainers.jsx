import React from 'react'
import './Trainers.css'
import { trainers } from '../../data'
import Header from '../../components/Header';
import HeaderImage from "../../images/header_bg_5.jpg"
import {GrInstagram} from 'react-icons/gr'
import {GrTwitter} from 'react-icons/gr'
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import Trainer from './Trainer';


const Trainers = () => {
    return (
        <>
      <Header title={Trainers} image={HeaderImage}>Meet our team of exceptional trainers who are not only highly experienced but also deeply passionate about fitness. With their expertise, dedication, and personalized approach, they will guide and inspire you to surpass your limits and achieve remarkable results on your fitness journey.</Header>
        <section className="trainers">
            <div className="container trainers__container">
                {
                    trainers.map(({id,image,name,job,socials})=>{
                       return <Trainer key={id} image={image} name={name} job={job} socials={[

                            { icon: <GrInstagram/>, link: socials[0]},
                            { icon: <GrTwitter/>, link: socials[1]},
                            { icon: <BsFacebook/>, link: socials[2]},
                            { icon: <BsLinkedin/>, link: socials[3]}



                        ]} />
                    })
                }
            </div>
        </section>


</>
      )
}

export default Trainers 