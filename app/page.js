'use client'
import { Button } from '@nextui-org/react'
import { motion } from 'framer-motion'
import Table_State from './states'
import React from 'react'
import SocialButtons from './SocialButton'

const Main = () => {
  const Tabled_State = Table_State()
  const [color, setcolor] = React.useState('')
  return (
    <>
      <motion.div className={`fixed top-0 start-0 z-40 vw-100 vh-100 ${color}`}></motion.div>
      <div className='absolute top-50 start-50 translate-middle text-center z-50'>
        <div className={`display-3 text-uppercase mb-2 mytitle ${color === 'bg-success-600' ? 'text-white' : ''} ${color === 'bg-danger' ? 'text-white' : ''} ${color === 'bg-yellow-300' ? 'text-dark' : ''}`} style={{ marginTop: '-50px', letterSpacing: '2px' }}>StopWatch</div>
        <div className={`myname mb-2 ${color === 'bg-success-600' ? 'text-white' : ''} ${color === 'bg-danger' ? 'text-white' : ''} ${color === 'bg-yellow-300' ? 'text-dark' : ''}`}>Sarabjeet</div>
        <div className={`text-nowrap fw-bold border border-dark p-4 rounded-4 ${color === 'bg-danger' ? 'text-white' : ''} ${color === 'bg-yellow-300' ? 'text-dark' : ''} ${(color === 'bg-success-600') ? 'text-stone-200' : ''}`} style={{ fontSize: '4rem' }}>
          {Tabled_State.Hour < 9 && '0'}{Tabled_State.Hour} : {Tabled_State.Minute < 10 && '0'}{Tabled_State.Minute} : {Tabled_State.Second < 10 && '0'}{Tabled_State.Second} : {Tabled_State.Millisecond < 10 && '0'}{Tabled_State.Millisecond}
        </div>
        <br />
        <Button
          className={`fs-6 fw-bold ${Tabled_State.startDisabled ? '' : 'text-white'}`}
          color={Tabled_State.startDisabled ? 'default' : 'success'}
          size='lg'
          onClick={() => {
            const starter = Tabled_State.StartTimer()
            Tabled_State.setTimerObjKeeper(starter)
            setcolor('bg-success-600')
          }}
          isDisabled={Tabled_State.startDisabled}
        >
          START
        </Button>
        <Button
          className='fs-6 fw-bold mx-4'
          color='warning'
          size='lg'
          onClick={() => {
            Tabled_State.setstartDisabled(false)
            Tabled_State.StopTimer(Tabled_State.TimerObjKeeper)
            setcolor('bg-yellow-300')
          }}
          isDisabled={!Tabled_State.startDisabled}
        >
          PAUSE
        </Button>
        <Button
          className={`fs-6 fw-bold ${color === 'bg-danger' ? 'border border-white' : ''}`}
          color='danger'
          size='lg'
          onClick={() => {
            Tabled_State.setstartDisabled(false)
            Tabled_State.ResetTimer(Tabled_State.TimerObjKeeper)
            setcolor('bg-danger')
          }}
        >
          RESET
        </Button>
      </div>
      <SocialButtons />
    </>
  )
}

export default Main