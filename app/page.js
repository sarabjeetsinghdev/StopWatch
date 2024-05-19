'use client'
import SocialButtons from './SocialButton'
import { Button } from '@nextui-org/react'
import Table_State from './states'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Main = () => {
  const Tabled_State = Table_State()
  const [color, setcolor] = React.useState('helloworld')
  React.useEffect(() => {
    document.querySelector('.bodyColor').className = 'bodyColor ' + color
  }, [color])
  return (
    <>
      <div className='text-center centerized'>
        <div className={`display-3 text-uppercase mb-2 mytitle ${color === 'bg-success-600' ? 'text-white' : ''} ${color === 'bg-danger' ? 'text-white' : ''} ${color === 'bg-yellow-300' ? 'text-dark' : ''}`} style={{ letterSpacing: '2px' }}>StopWatch</div>
        <SocialButtons>CONNECT WITH ME</SocialButtons>
        <br />
        <div className={`myname mb-3 ${color === 'bg-success-600' ? 'text-white' : ''} ${color === 'bg-danger' ? 'text-white' : ''} ${color === 'bg-yellow-300' ? 'text-dark' : ''}`}>By Sarabjeet</div>
        <Container>
          <div className={`timefont text-nowrap fw-bold border border-dark rounded-4 px-3 py-2 ${color === 'bg-danger' ? 'text-white' : ''} ${color === 'bg-yellow-300' ? 'text-dark' : ''} ${(color === 'bg-success-600') ? 'text-stone-200' : ''}`}>
            {Tabled_State.Hour < 9 && '0'}{Tabled_State.Hour} : {Tabled_State.Minute < 10 && '0'}{Tabled_State.Minute} : {Tabled_State.Second < 10 && '0'}{Tabled_State.Second} : {Tabled_State.Millisecond < 10 && '0'}{Tabled_State.Millisecond}
          </div>
        </Container>
        <br />
        <Container>
          <Row className='g-4'>
            <Col>
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
            </Col>
            <Col>
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
            </Col>
            <Col>
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
            </Col>
          </Row>
        </Container>
      </div >
    </>
  )
}

export default Main