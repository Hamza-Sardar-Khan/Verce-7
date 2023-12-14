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
      // background: 'radial-gradient(60% 60% at 50% 50%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', 
      filter: 'blur(15px)',
      zIndex: '10',
      animationPlayState: 'paused',
      transform: `translate(${xdif}px, ${ydif}px) scale(1.8, 1.2)`,
      transition: 'transform 0.5s, background 2s linear 2s'
    }
    setStyle(style)
  }

  const handleMouseLeave = () => {
    const style = {
      background: 'radial-gradient(30% 50% at 50% 40%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)',
      filter: 'blur(15px)',
      zIndex: '10',
      animationPlayState: 'running',
      transition: 'transform 1s'
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
      
      transition: 'transform 0.5s, background 2s linear 2s'
    }
    setStyle2(style2)
  }

  const handleMouseLeave2 = () => {
    const style2 = {
      background: 'white',
      filter: 'blur(5px)',
      zIndex: '10',
      animationPlayState: 'running',
      transition: 'transform 2s'
    }
    setStyle2(style2)
  }

  const reducedAddress = (_address = "") => {
    return _address.slice(0, 5) + "..." + _address?.slice(_address.length - 5)
  }

  return (
    <main>
      <div className='flex justify-center pt-20 pb-40 sm:pb-0 overflow-visible z-20'>
        <div className="w-[330px] h-[374px] rounded-[28px] bg-[#161616] border border-[#9A9BA11C] shadow-md">
          <div className="flex justify-between pl-[18px] pr-[14px] pt-[18px] pb-[5px] border-b-[1px] border-[#9A9BA11C]">
            <div className="text-white text-[26px] pl-[7px] ">LP Claim</div>
            <div className="text-[#9b9ca1] pt-[9px] ">
              <div className="text-[18px] leading-[25px] ">Block-WETH</div>
              <div className="flex justify-end text-[16px]">$65.22</div>
            </div>
          </div>


          <div className="p-[19px] pr-[16px] pt-[17px]">
            <div className="flex justify-between text-[#9b9ca1] pb-[8px] pr-[9px] pt-[6px] pl-[13px] bg-[#3b3b3b2e] rounded-2xl border border-[#9A9BA11C]">
              <div className="pt-[4px]">Current LP Balance</div>
              <div className="align-top flex-row items-end ">
                <div className="text-white text-[23px] font-normal leading-[32.2px] tracking-[.1px]">24.321</div>
                <div className=" leading-[22.8px] mr-0 text-right pt-[0.5px] ">$1,586.21</div>
              </div>
            </div>



            <div className="flex justify-between text-[#9b9ca1] pb-[8px] pr-[9px] pt-[6px] pl-[13px] bg-[#3b3b3b2e] rounded-2xl mt-[19px] border border-[#9A9BA11C]">
              <div className="pt-[4px]">Claimable LP</div>
              <div>
                <div className=" text-[23px] font-normal leading-[33px] text-[#33c6ab] text-end tracking-[.1px]">54.146</div>
                <div className=" leading-[22.8px] text-right mr-0  pt-[0.5px]">$3,531.40</div>
              </div>
            </div>



            <div className="flex relative mt-[34px]  w-[294px] h-[56px] justify-center items-center cursor-pointer animate-btn" onClick={() => open()}  onMouseOver={(e) => handleMouseover2(e)}
                    onMouseLeave={(e) => handleMouseLeave2()}>
              <div className="absolute w-[294px]  overflow-hidden rounded-[188px] h-[56px] pb-1" style={{ zIndex: '5' }}>
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
                onMouseOver={(e) => handleMouseover(e)}
                onMouseLeave={(e) => handleMouseLeave()}>

              </div>
              
              <div className="absolute w-[290px] h-[52px]  z-15 rounded-[72px] bg-[#161616] pointer-events-none" style={{ zIndex: '15' }}></div>
              <p className="relative  text-[18px] text-[#33c6ab] tracking-[.2px] font-medium  z-30 pointer-events-none" style={{ zIndex: '30' }} >{isConnected ? reducedAddress(address) : "Connect Wallet"}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
