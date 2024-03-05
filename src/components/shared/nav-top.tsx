import { PhoneCall } from 'lucide-react'
import React from 'react'

const NavTop = () => {
    return (
        <div className='flex justify-between w-[1340px] mx-auto py-3'>
            <div></div>
            <ul className='flex items-center gap-8 text-[16px]'>
                <li>Доставка и оплата</li>
                <li>Пункты выдачи</li>
                <li>Поддержка</li>
                <li className='flex items-center gap-2'><PhoneCall className='w-4 h-4' /> +998 90 253 77 53</li>
            </ul>
        </div>
    )
}

export default NavTop