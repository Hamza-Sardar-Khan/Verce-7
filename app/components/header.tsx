'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from "next/navigation"
import { createWeb3Modal, defaultConfig, useWeb3Modal, useWeb3ModalAccount } from '@web3modal/ethers5/react'
import { metadata, mainnet, projectId } from './../context/web3'

createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    chains: [mainnet],
    projectId
})

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [headerStyle, setHeaderStyle] = useState({});
    const [logoStyle, setLogoStyle] = useState({});
    const router = useRouter()
    const pathname = usePathname();

    const handleClick = () => {
        setIsOpen(!isOpen);
        const headerStyle = {
            width: '100%',
            transform: 'scaleY(100vh/113px)',
            transition: 'transform 3s',
            zIndex: '50',

        }
        const logoStyle = {
            trasnform: 'translate3d(100px, 0, 0)',
            transition: 'transform 2s linear 2s'
        }

        setHeaderStyle(headerStyle)
        setLogoStyle(logoStyle)
    };

    const navigateTo = (path: string) => {
        setIsOpen(false)
        router.push(path)
    }
    const { open } = useWeb3Modal()
    const reducedAddress = (_address = "") => {
        return _address.slice(0, 5) + "..." + _address?.slice(_address.length - 5)
    }
    const { address = '', chainId, isConnected } = useWeb3ModalAccount()
    return (
        <header className={`${isOpen
            ? ` absolute flex flex-col items-center backdrop-blur-[3.5px] transition duration-500 linear `
            : 'fixed w-full backdrop-blur-[3.5px] z-10 h-[92px]'
            }`} style={headerStyle}>
            <div
                className={
                    isOpen ?
                        `transition-all duration-500 ease h-[100vh] w-[100vw] sm:w-auto justify-center px-5 md:px-10 py-[0px] md:py-[2px] flex border border-[#161616] bg-[#0F0F0F] ` :
                        'transition-all duration-500 flex h-[82px] md:h-[91px] w-[100vw] sm:w-auto justify-between  px-5 md:px-[40px] py-[0px] md:py-[0px] border border-[#161616] backdrop-blur-[9.5px]'}>
                <div
                    className={
                        isOpen ?
                            `transition-all duration-500  h-[82px] md:h-[91px] flex justify-between  items-center w-[100vw]  xs:px-[10vw] sm:px-[30vw] ` :
                            'transition-all  duration-500  h-[82px] md:h-[89.5px] flex justify-between  items-center  w-[100vw] '}>

                    <a href="/">
                        <div className='logo opacity-80 transition-all duration-500 cursor-pointer' style={logoStyle}>
                            <Image
                                width={124}
                                height={33}
                                src={'link.svg'}
                                alt='link'
                            />
                        </div>
                    </a>
                    <div className='justify-between gap-[24px] hidden md:flex '>
                        <Link href="/lpclaim" className={pathname == '/lpclaim' ? 'active' : 'non-active'}>LP Claim</Link>
                        <Link href="/lpstake" className={pathname == '/lpstake' ? 'active pr-[1px]' : 'non-active pr-[1px]'}>LP Stake</Link>
                    </div>
                    <div className='connect-btn '>
                        <p className='text-[#fbfbfb] px-[19.2px] py-[8.7px]  md:px-[23px] md:py-[13px] bg-[#1F1F1F] border-[1.4px] border-[#3B3B3B] rounded-[64px] cursor-pointer  hover:bg-[#303030] duration-300 tracking-[0.15px]' onClick={() => open()}>{isConnected ? reducedAddress(address) : "Connect"}</p>
                    </div>
                    <div className='md:hidden burger-btn '>
                        <button onClick={handleClick} className="w-[40px] h-[40px] rounded-xl bg-white flex flex-col justify-center items-center">
                            <span className={`bg-black block transition-all duration-300 ease-out 
                                        h-0.5 w-[18px] rounded-sm ${isOpen ?
                                    'rotate-45 translate-y-1' : '-translate-y-0.5'
                                }`} >
                            </span>
                            <span className={`bg-black block transition-all duration-300 ease-out 
                                        h-0.5 w-[18px] rounded-sm my-0.5 ${isOpen ?
                                    'opacity-0' : 'opacity-100'
                                }`} >
                            </span>
                            <span className={`bg-black block transition-all duration-300 ease-out 
                                        h-0.5 w-[18px] rounded-sm ${isOpen ?
                                    '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                                }`} >
                            </span>
                        </button>
                    </div>

                </div>



            </div>
            <div className='absolute top-[10%]'>
                {
                    isOpen ?
                        <div className='relative right-[0px] flex flex-col w-[100vw] items-start px-5  text-2xl text-[#fbfbfb] mt-[46px] '>
                            <Link href="/lpclaim" className={`py-[29px] pb-[26px] tracing-[0.5px] font-[500]+ ${pathname == '/lpclaim' ? 'active' : 'non-active'}`} onClick={() => navigateTo('/lpclaim')}>LP Claim</Link>
                            <Link href="/lpstake" className={`tracing-[0.5px] font-[500] + ${pathname == '/lpstake' ? 'active' : 'non-active'}`} onClick={() => navigateTo('/lpstake')}>LP Stake</Link>
                        </div>
                        : null
                }
            </div>
        </header>
    )
}