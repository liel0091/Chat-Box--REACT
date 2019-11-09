import React, {useState}  from 'react';  
import { useSpring, animated as a } from 'react-spring'
import '../style/header.css'
 
function Header() { 
    const [flipped, set] = useState(false)

    const { transform, opacity } = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
      config: { mass: 5, tension: 500, friction: 80 }
    })

    return (   
        <div className="header white-border" onClick={() => set(state => !state)}>
            <a.div className="h-img back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
            <h1>Spooky Headline</h1>
            <a.div className="h-img front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
        </div> 
    )
}

export default Header; 
 