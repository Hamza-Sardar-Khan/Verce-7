"use client"

import { useState, useEffect, useRef, MutableRefObject } from "react"

import { createWeb3Modal, defaultConfig, useWeb3Modal, useWeb3ModalAccount } from '@web3modal/ethers5/react'
import { metadata, mainnet, projectId } from './../context/web3'

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet],
  projectId
})

export default function Lpclaim() {
  const [style, setStyle] = useState({
    background: 'radial-gradient(40% 50% at 50% 20%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)',
    filter: 'blur(15px)',
    zIndex: '10'
  })

  const [temp,] = useState(Array(2))
  const { open } = useWeb3Modal()
  const { address = '', chainId, isConnected } = useWeb3ModalAccount()
  const handleMouseover = (e: any) => {
    temp[0] = e.target.offsetLeft;
    temp[1] = e.target.offsetTop;
    const xdif = 0 - temp[0];
    const ydif = 0 - temp[1];

    const style: any = {
      background: 'radial-gradient(30% 50% at 50% 40%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', 
      filter: 'blur(15px)',
      zIndex: '10',
      animationPlayState: 'paused',
      transform: `translate(${xdif}px, ${ydif}px) scale(2, 1.7)`,
      transition: 'transform 1.2s, background 2s linear 2s'
    }
    setStyle(style)
  }

  const handleMouseLeave = () => {
    const style = {
      background: 'radial-gradient(30% 50% at 50% 40%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)',
      filter: 'blur(15px)',
      zIndex: '10',
      animationPlayState: 'running',
      transition: 'transform 1.2s'
    }
    setStyle(style)
  }

  const [style2, setStyle2] = useState({
    background: 'white',
    filter: 'blur(5px)',
    zIndex: '10'
  })

  const handleMouseover2 = (e: any) => {
    temp[0] = e.target.offsetLeft;
    temp[1] = e.target.offsetTop;
    const xdif2 = 0 - temp[0];
    const ydif2 = 0 - temp[1];
    
    const style2: any = {
      background: 'white',
      filter: 'blur(5px)',
      zIndex: '10',
      animationPlayState: 'paused',
      transform: `translate(${xdif2}px, ${ydif2}px) scale(3.8, 5.8)`,
      transition: 'transform 1.2s, background 2s linear 2s'
    }
    setStyle2(style2)
  }

  const handleMouseLeave2 = () => {
    const style2 = {
      background: 'white',
      filter: 'blur(5px)',
      zIndex: '10',
      animationPlayState: 'running',
      transition: 'transform 1.2s'
    }
    setStyle2(style2)
  }

  const reducedAddress = (_address = "") => {
    return _address.slice(0, 5) + "..." + _address?.slice(_address.length - 5)
  }

  return (
    <main className="  top-[127px]" >
      <div className='flex justify-center pt-20 pb-40 sm:pb-0 overflow-visible z-20'>
        <div className="w-[330px] h-[374px] rounded-[28px] bg-[#161616] border border-[#9A9BA11C] shadow-md">
          <div className="flex justify-between pl-[18px] pr-[16px] pt-[19.2px] pb-[4.3px] border-b-[1px] border-[#9A9BA11C]">
            <div className="text-white text-[26px] pl-[7px] ">LP Claim</div>
            <div className="text-[#9b9ca1] pt-[10.5px] ">
              <div className="text-[18px] leading-[24.2px] ">Block-WETH</div>
              <div className="flex justify-end text-[16px]">$65.22</div>
            </div>
          </div>


          <div className="p-[19px] pr-[16px] pt-[17px]">
            <div className="flex justify-between text-[#9b9ca1] pb-[7.2px] pr-[9px] pt-[6.5px] pl-[13px] bg-[#3b3b3b2e] rounded-2xl border border-[#9A9BA11C]">
              <div className="pt-[4.3px]">Current LP Balance</div>
         

              <div className="pt-[.3px]">
                <div className=" text-[23px] font-normal leading-[32.2px] text-white text-end ">24.321</div>
                <div className=" leading-[22.7px] text-right mr-0  pt-[0.5px]">$1,586.21</div>
              </div>
            </div>



            <div className="flex justify-between text-[#9b9ca1] pb-[7px] pr-[9px] pt-[6.5px] pl-[13px] bg-[#3b3b3b2e] rounded-2xl mt-[19px] border border-[#9A9BA11C]">
              <div className="pt-[4.3px]">Claimable LP</div>
              <div className="pt-[.5px]">
                <div className=" text-[23px] font-normal leading-[32.2px] text-[#33c6ab] text-end ">54.146</div>
                <div className=" leading-[22.7px] text-right mr-0  pt-[0.5px]">$3,531.40</div>
              </div>
            </div>



            <div className="group flex relative mt-[34px]  w-[294px] h-[56px] justify-center items-center cursor-pointer animate-btn" onClick={() => open()}  >
              <div className="absolute w-[294px]  overflow-hidden rounded-[188px] h-[56px] pb-1 border-[1px] border-[#303030]" style={{ zIndex: '5' }}>
                <div className="relative" >
                  <div
                    className="absolute w-[144px] h-[19px] ml-[75px] mt-1 animate-div"
                    style={style2}
                  >

                  </div>
                </div>
              </div>

              <div
                className="absolute w-[292px] h-[40px] animate-div"
                style={style}
                onMouseOver={(e) => { handleMouseover(e); handleMouseover2(e); }}

                onMouseLeave={(e) => { handleMouseLeave(); handleMouseLeave2() }}>

              </div>

              <div className="absolute w-[290px] h-[50px]  z-15 rounded-[72px] bg-[#161616] pointer-events-none" style={{ zIndex: '15' }}></div>
              <p className="relative  text-[18px]  group-hover:text-white duration-500 text-[#B0B0B0]  font-medium  z-30 pointer-events-none tracking-[.2px]" style={{ zIndex: '30' }} >{isConnected ? reducedAddress(address) : "Connect Wallet"}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
