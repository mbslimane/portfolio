import React from 'react'
import '../style/style.css'
import myImg from '../assets/myImg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import tw from 'tailwind-styled-components'
import { BgSvg, BgTexte, Button, LineContainer, LinePreTitle } from '../style/twS'
import { useInfo } from '../contexts/userContext/InfoContext'
const Home = () => {

    const { firstName, lastName } = useInfo()
    return (
        <Wrapper className='pt-14' >
            <BgTexte className='-ml-40' >
                <BgSvg >
                    <text x='0' y='100' fill='transparent'>Creative</text>
                </BgSvg>
            </BgTexte>
            <Intro>
                <RightIntro >
                    <LineContainer>
                        <LinePreTitle />
                        <p># INTRODUCTION</p>
                    </LineContainer>
                    <h1 className='text-3xl font-bold w-60'>I am {firstName} {lastName}</h1>
                    <p className='text-fontColor-300 my-4'>web designer, for your personnel and business brand</p>
                    <Button>View Profile</Button>
                </RightIntro>
                <LeftIntro>
                    <Img src={myImg} alt="personnel Img" />
                    <div className=" flex flex-col gap-5 justify-center">
                        <FontAwesomeIcon style={{ border: "1px solid #fa5d36", padding: 8, borderRadius: 50, cursor: 'pointer' }} icon={faGithub} size='xl' />
                        <FontAwesomeIcon style={{ border: "1px solid #fa5d36", padding: 8, borderRadius: 50, cursor: 'pointer' }} icon={faInstagram} size='xl' />
                        <FontAwesomeIcon style={{ border: "1px solid #fa5d36", padding: 8, borderRadius: 50, cursor: 'pointer' }} icon={faLinkedin} size='xl' />
                    </div>
                </LeftIntro>
            </Intro>

            <BgTexte>
                <BgSvg >
                    <text x='50%' y='120' fill='transparent'>Portfolio</text>
                </BgSvg>
            </BgTexte>
        </Wrapper>
    )
}

export default Home

const Wrapper = tw.div`
 bg-bgGray-200 text-fontColor-100 py-10
 px-40
`

const Intro = tw.div`
flex justify-between 
`
// Right Disgin......
const RightIntro = tw.div` `



// Left Design......
const LeftIntro = tw.div`
flex gap-10 
`
const Img = tw.img`
h-60 w-60 rounded-full  object-cover
`

