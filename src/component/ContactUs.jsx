import React, { useRef } from 'react'
import tw from 'tailwind-styled-components'
import { Button, H1, Wrapper } from '../style/twS'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Element } from 'react-scroll'
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom'


const ContactUs = () => {

    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_d1xo932', 'template_q2e6nq6', form.current, {
                publicKey: 'Eh_ij5TfWcBup8w--',
            })
            .then(
                () => {
                    console.log('SUCCESS!');

                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset()
    };


    return (
        <Wrapper className='  my-8'>
            <Element id='contact' name='contact'>
                <H1 className='tracking-widest '>Get In Touch.</H1>
                <H3 className='py-7'>Feel free to ask any Question or send a Message </H3>
                <Container>
                    <Contact>
                        <Form ref={form} onSubmit={sendEmail}>
                            <Input required name='name' type="text" placeholder="Name" />
                            <Input required name='email' type="email" placeholder="Email" />
                            <Input name='phone' type="text" placeholder="Phone" />
                            <Message required name='message' rows={4} placeholder="Message" />
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
                                <Link onClick={() => { window.location.href = 'https://github.com/mbslimane' }}  >
                                    <FontAwesomeIcon className='border border-fontColor-400 rounded-full p-2 cursor-pointer' icon={faGithub} size='xl' />
                                </Link>
                                <Link onClick={() => { window.location.href = 'https://www.instagram.com/slimane.mb/' }}  >
                                    <FontAwesomeIcon className='border border-fontColor-400 rounded-full p-2 cursor-pointer' icon={faInstagram} size='xl' />
                                </Link>
                                <Link onClick={() => { window.location.href = 'https://github.com/mbslimane' }}  >
                                    <FontAwesomeIcon className='border border-fontColor-400 rounded-full p-2 cursor-pointer' icon={faLinkedin} size='xl' />
                                </Link>
                            </div>
                        </InfoContaier>
                    </Info>
                </Container>
            </Element>
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