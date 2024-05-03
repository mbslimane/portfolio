import React from 'react'
import tw from 'tailwind-styled-components'
import { Button, H1, Wrapper } from '../style/twS'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const ContactUs = () => {
    return (
        <Wrapper>
            <Container>
                <Contact>
                    <H1 className='tracking-widest '>Get In Touch.</H1>
                    <H3 className='py-7'>Feel free to ask any Question or send a Message </H3>
                    <Form>
                        <Input type="text" placeholder="Name" />
                        <Input type="email" placeholder="Email" />
                        <Input type="text" placeholder="Phone" />
                        <Message rows={4} placeholder="Message" />
                        <Button onClick={() => { }} type='submit' className=' block bg-fontColor-400 text-fontColor-100' >
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
                        <H3 className='w-1/2'>Oran-Algeria <br />
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
    flex justify-between
`
const Contact = tw.div`
    w-1/2
`
const Info = tw.div`
    w-1/2    
`

const InfoContaier = tw.div`
    px-14
`

const H2 = tw.h2`
    text-2xl
    pl-2
`

const H3 = tw.h3` 
    text-fontColor-200
    py-3
`

const Form = tw.form`
    px-2
    items-stretch
    flex-col
    
`

const Input = tw.input`
    outline-none
    bg-transparent
    border-b-2
    focus:border-b-bgGray-50
    border-b-fontColor-400
    p-2
    my-4
    w-3/4
`

const Message = tw.textarea`
outline-none
bg-transparent
border-b-2
focus:border-b-bgGray-50
border-b-fontColor-400
p-2
my-4
w-3/4
`