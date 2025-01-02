import React from 'react'
import card from "../../../../../public/styles/services.module.css";
import Icon from '@/app/ui/reusable/Icon';
import { check } from '@/public/assets/Icons';
const IconCheck = () => {
  return (
    <Icon src={check} alt='check_icon'className={card.image_card} width={30} height={30}/>
  )
}

export default IconCheck