import React from 'react'
import tw from 'tailwind-styled-components'
import { Button, H1, Wrapper } from '../style/twS'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const ContactUs = () => {
    return (
        <Wrapper className=' my-8'>
            <H1 className='tracking-widest '>Get In Touch.</H1>
            <H3 className='py-7'>Feel free to ask any Question or send a Message </H3>
            <Container>
                <Contact>
                    <Form>
                        <Input type="text" placeholder="Name" />
                        <Input type="email" placeholder="Email" />
                        <Input type="text" placeholder="Phone" />
                        <Message rows={4} placeholder="Message" />
                        <Button type='submit' className=' block bg-fontColor-400 text-fontColor-100' >
                            Send Message
                            <FontAwesomeIcon className='px-3' icon={faArrowRight} />
                        </Button>
                    </Form>
                </Contact>

                <Info>
                    <div className="flex">
                        <FontAwesomeIcon className='border border-fontColor-400 py-2 px-3 rounded-full cursor-pointer' size='xl' icon={faLocationDot} />
                        <H2>Contact & Information</H2>
                    </div>
                    <InfoContaier>
                        <H3 >Oran-Algeria <br />
                            have the ability to move anywhere in Algeria
                        </H3>
                        <H3>call us: +213 665 022 588</H3>
                        <H3>email: mbslimane16@gmail.com</H3>
                        <H2>follow us:</H2>
                        <div className=" py-4 justify-center  ">
                            <FontAwesomeIcon style={{ border: "1px solid #fa5d36", padding: 8, marginInline: 5, borderRadius: 50, cursor: 'pointer' }} icon={faGithub} size='xl' />
                            <FontAwesomeIcon style={{ border: "1px solid #fa5d36", padding: 8, marginInline: 5, borderRadius: 50, cursor: 'pointer' }} icon={faInstagram} size='xl' />
                            <FontAwesomeIcon style={{ border: "1px solid #fa5d36", padding: 8, marginInline: 5, borderRadius: 50, cursor: 'pointer' }} icon={faLinkedin} size='xl' />
                        </div>
                    </InfoContaier>
                </Info>
            </Container>
        </Wrapper>
    )
}

export default ContactUs

const Container = tw.div`
    grid grid-cols-1 md:grid-cols-2 gap-4 grid-flow-row-dense py-10 
`
const Contact = tw.div`
    order-last md:order-first
`
const Info = tw.div`
`

const InfoContaier = tw.div`
    pl-14 
`
const H2 = tw.h2`
    text-2xl pl-2
`

const H3 = tw.h3` 
    text-fontColor-200 py-3
`
const Form = tw.form`
    px-2
    flex-col
    
`

const Input = tw.input`
    outline-none bg-transparent border-b-2 p-2 my-4 w-3/4
    focus:border-b-bgGray-50 border-b-fontColor-400 
`

const Message = tw.textarea`
    outline-none bg-transparent border-b-2 p-2 my-4 w-3/4
    focus:border-b-bgGray-50
    border-b-fontColor-400 
`