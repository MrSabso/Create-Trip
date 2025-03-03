import React, { useEffect, useState } from 'react'

const ProgressBar = () => {
    const [remainingTime, setRemainingTime] = useState(5000)

    useEffect(() => {
        const interval = setInterval(() => {
        setRemainingTime(prevTime => prevTime - 10);
        }, 10);
    
        return () => {
          clearInterval(interval);
        }
      }, [])

  return (
    <progress value={remainingTime} max={5000} />
  )
}

export default ProgressBar
