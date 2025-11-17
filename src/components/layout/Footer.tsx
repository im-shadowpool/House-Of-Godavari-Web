import React from 'react'
import { Container } from './Container'
import Image from 'next/image'
import { FacebookIcon, InstagramIcon,WhatsappIcon,YoutubeIcon } from '@/components/icons/socialMediaIcons'

const socialMediaLinks = [
  { name: 'Facebook', url: 'https://google.com/', icon: <FacebookIcon />},
  { name: 'Instagram', url: 'https://google.com/', icon: <InstagramIcon />},
  { name: 'Whatsapp', url: 'https://google.com/', icon: <WhatsappIcon />},
  { name: 'Youtube', url: 'https://google.com/', icon: <YoutubeIcon />},
]

const Footer: React.FC = () => {
  return (
    <footer>
      <Container className=''>
        {/* Section 1 */}
        <div className=''>
          {/* Logo + Image */}
          <div>
            <Image src={"/logo.png"} alt='logo' width={156} height={156}/>
            <div>
              <h6>House of Godavari Foods</h6>
              <p>Crafting authentic sweets inspired by the flavours of Godavari.
From traditional recipes to modern delicacies - made fresh, made pure.</p>
              </div>
          </div>
          {/* Social Media Icons */}
          <div>
            <h6>
          Follow us
            </h6>
            <div> 
      {
        socialMediaLinks.map((item) => {
          return (
            <div className='IconItem' id={`item.name${'Icon'}`} key={item.name}>
              <a href={item.url} target='_blank' rel='noopener noreferrer'>
                
              </a>
            </div>
          )
        })
      }
            </div>
          </div>

         </div>
        {/* Section 2 */}
        {/* Section 3 */}
      </Container>
    </footer>
  )
}

export default Footer