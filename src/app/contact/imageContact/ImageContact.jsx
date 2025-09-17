'use client'
import Image from 'next/image'
import EmailCampaignAnimation from './email-campaign-animate.svg'


export default function ImageContact() {
  return (
    <Image
        src={EmailCampaignAnimation}
        alt="Animação de campanha de email"
        width={500}
        height={500}
        priority
    />
  )
}
