import tw from 'tailwind-styled-components'

export const Wrapper = tw.div`
bg-bgGray-200 text-fontColor-100 py-0
px-4
sm:px-9
lg:px-40
`

export const Button = tw.button` 
    border-2 
    border-solid 
    border-fontColor-400
    px-2 py-1
    sm:px-4 sm:py-2
    border-opacity-50
  `
export const BgSvg = tw.svg`
hidden
sm:flex
 w-full stroke-1 stroke-strokColor opacity-50
`

export const H1 = tw.text`
text-3xl font-bold w-60 text-fontColor-100
` 

export const LinePreTitle = tw.div`
w-20 border-t border-fontColor-400 
`

export const LineContainer = tw.div`
flex gap-2 items-center py-5 text-fontColor-400 uppercase tracking-widest
`

export const BgTexte = tw.h1`
text-9xl px-10
flex-row justify-items-end transform 
`

// https://youtu.be/EzTxYQmU8OE?si=6In9IkmnwwZdCqHN    to watch later