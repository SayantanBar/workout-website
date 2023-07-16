import React from "react"
import "./Gallery.css"
import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_3.jpg"

const Gallery = () => {
   const galleryLength = 15;
   const images = [];

   for (let i = 1; i <= galleryLength; i++) {
      images.push(require(`../../images/gallery${i}.jpg`))
   }

   return (
      <>
         <Header title="Our Gallery" image={HeaderImage}>
            Immerse yourself in a captivating visual journey, where extraordinary achievements, cutting-edge gym instruments, and unforgettable moments come to life. Witness the essence of our fitness experience in stunning imagery.
         </Header>

         <section className="gallery">
            <div className="container gallery__container">
               {images.map((image, index) => {
                  return <article key={index}>
                     <img src={image} alt={`Gallery ${index + 1}`} />
                  </article>
               })}
            </div>
         </section>
      </>
   )
}

export default Gallery
