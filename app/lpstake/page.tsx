"use client"

import { useState, useEffect, useRef, MutableRefObject } from "react"
import { createWeb3Modal, defaultConfig, useWeb3Modal, useWeb3ModalAccount } from '@web3modal/ethers5/react'
import { metadata, mainnet, projectId } from './../context/web3'

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet],
  projectId
})

export default function Lpstake() {
  const [style, setStyle] = useState({
    background: 'radial-gradient(40% 50% at 50% 20%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)',
    filter: 'blur(15px)',
    zIndex: '10'
  })

  const [temp,] = useState(Array(2))

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
      transform: `translate(${xdif2}px, ${ydif2}px) scale(1.8, 5.2)`,
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
  const { open } = useWeb3Modal()
  const { address = '', chainId, isConnected } = useWeb3ModalAccount()
  const reducedAddress = (_address = "") => {
    return _address.slice(0, 5) + "..." + _address?.slice(_address.length - 5)
  }
  return (
    <main className="top-[64px]">
      <div className='flex justify-center pt-20 pb-40 sm:pb-0 '>
        <div className="w-[330px]  rounded-[28px] bg-[#161616] border border-[#9A9BA11C] shadow-md mb-28">

        <div className="flex justify-between pl-[18px] pr-[16px] pt-[19.7px] pb-[4.3px] border-b-[1px] border-[#9A9BA11C]">
            <div className="text-white text-[26px] pl-[7px] ">LP Stake</div>
            <div className="text-[#9b9ca1] pt-[9px] ">
              <div className="text-[18px] leading-[24.2px] ">Block-WETH</div>
              <div className="flex justify-end text-[16px]">$65.22</div>
            </div>
          </div>



          <div className="p-[17px] pl-[18px] pr-[15.6px] ">



            <div className="flex justify-between text-[#9b9ca1] pb-[8px] pr-[9px] pt-[6px] pl-[13.5px] bg-[#3b3b3b2e] rounded-2xl border border-[#9A9BA11C]">
              <div className="pt-[4.5px]">Current LP Staked</div>
              <div className="align-top flex-row items-end pt-[0.5px] pr-[0.9px]">
                <div className="text-white text-[23px] font-normal leading-[32.5px] ">63.527</div>
                <div className=" leading-[22.4px] mr-0 text-right">$4,143.23</div>
              </div>
            </div>

            <div className="flex justify-between text-[#9b9ca1] mt-[17px] pb-[8px] pr-[9px] pt-[6px] pl-[13.5px] bg-[#3b3b3b2e] rounded-2xl border border-[#9A9BA11C]">
              <div className="pt-[4.5px]">LP Available to Stake</div>
              <div className="align-top flex-row items-end pt-[0.5px] pr-[0.9px]">
                <div className="text-white text-[23px] font-normal leading-[32.5px] ">24.321</div>
                <div className=" leading-[22.4px] mr-0 text-right">$1,586.21</div>
              </div>
            </div>

            <div className="flex justify-between text-[#9b9ca1] mt-[17px] pb-[8px] pr-[9px] pt-[6px] pl-[13.5px] bg-[#3b3b3b2e] rounded-2xl border border-[#9A9BA11C]">
              <div className="pt-[4.5px]">ETH Earnings</div>
              <div className="align-top flex-row items-end pt-[0.5px] pr-[0.9px]">
                <div className="text-right text-[23px] font-normal leading-[32.5px] text-[#33c6ab] ">1.779</div>
                <div className=" leading-[22.4px] mr-0 text-right">$3,182.63</div>
              </div>
            </div>


            <div className="pl-[3px] pt-[7px] text-start"><span className="text-[12px] text-[#9b9ca1] ">unStaking before unlock incurs a early withdraw fee</span></div>
            <div className="flex flex-row justify-between mt-[11.9px]">
              <div>
                <p className="text-xs text-[#9b9ca1] text-center mb-[5px] mr-[2.5px]">Locks for 4 days</p>
                <p className='w-[135px] text-[#fbfbfb] py-[12px] bg-[#3b3b3b3e] border-2 border-[#9A9BA11C] rounded-[64px] text-center hover:bg-[#303030] duration-300 cursor-pointer'>Stake</p>
              </div>
              <div>
                <p className="text-xs text-[#9b9ca1] text-center mb-[5px]">01:06:25:06</p>
                <p className='w-[135px] text-[#fbfbfb] py-[11.9px] bg-[#3b3b3b3e] border-2 border-[#9A9BA11C] rounded-[64px] text-center hover:bg-[#303030] duration-300 cursor-pointer'>unStake</p>
              </div>
            </div>
            <div className="group flex relative mt-[15px]  w-[294px] h-[63px] justify-center items-center cursor-pointer animate-btn" onClick={() => open()}>
              <div className="absolute w-[294px]  overflow-hidden rounded-[188px] h-[59px]  border-[1px] border-[#303030]" style={{ zIndex: '5' }}>
                <div className="relative " >
                  <div
                    className="absolute w-[184px] h-[40px] ml-[75px] mt-1 animate-div"
                    style={style2}
                  >

                  </div>
                </div>
              </div>
              <div
                className=" absolute w-[292px] h-[40px] animate-div"
                style={style}
                onMouseOver={(e) => { handleMouseover(e); handleMouseover2(e); }}
                onMouseLeave={(e) => { handleMouseLeave(); handleMouseLeave2() }}></div>

              <div className="absolute w-[289px] h-[55px]  z-15 rounded-[72px] bg-[#161616] pointer-events-none" style={{ zIndex: '15' }}></div>


              <p className="relative text-[18px] group-hover:text-white duration-500 text-[#B0B0B0] font-medium  z-30 pointer-events-none" style={{ zIndex: '30' }} >{isConnected ? reducedAddress(address) : "Claim ETH"}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
