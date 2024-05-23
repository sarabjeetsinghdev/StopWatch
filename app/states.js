import React from 'react'

const Table_State = () => {
    // eslint-disable-next-line no-use-before-define
    let [Base, setBaseCount] = React.useState(0)
    let [H, setH] = React.useState(0)
    let [M, setM] = React.useState(0)
    let [S, setS] = React.useState(0)
    let [startDisabled, setstartDisabled] = React.useState(false)
    let [TimerObjKeeper, setTimerObjKeeper] = React.useState(null)
    const StartTimer = React.useCallback(() => {
        setstartDisabled(true)
        return setInterval(() => {
            // Base Logic
            setS(++S)

            // setBaseCount(++Base)

            // Second Logic
            if (S === 60) {
                S = 0
                setS(0)
                setM(++M)
            }

            // Minute Logic
            if (M === 60) {
                M = 0
                setM(0)
                setH(++H)
            }

            // Hour Logic
            if (H === 12) {
                H = 0
                setH(0)
            }
        }, 1000)
    }, [H, M, S])
    const StopTimer = React.useCallback((Starter) => {
        clearInterval(Starter)
    }, [])
    const ResetTimer = React.useCallback((Starter) => {
        clearInterval(Starter)
        setH(0)
        setM(0)
        setS(0)
    }, [setH, setM, setS])
    return {
        Hour: H,
        Minute: M,
        Second: S,
        TimerObjKeeper: TimerObjKeeper,
        startDisabled: startDisabled,
        setTimerObjKeeper: setTimerObjKeeper,
        setstartDisabled: setstartDisabled,
        StartTimer: StartTimer,
        StopTimer: StopTimer,
        ResetTimer: ResetTimer
    }
}

export default Table_State