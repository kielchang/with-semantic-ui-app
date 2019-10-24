import { useState } from 'react'
import { useSpring, useTransition, animated } from "react-spring";
import { Icon } from 'semantic-ui-react'
import styled from 'styled-components'

const Item = styled(animated.div)`
display: flex;
align-items: center;
margin : 10px;
padding :5px;
border-bottom: 1px #fafafa solid;
`

const Title = styled.p`
font-size: 2rem;
margin: 0;
flex: 1;
`

export default ({ title, children }) => {
    const [onScale, setOnScale] = useState(false)
    const transitions = useTransition(true, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    });
    const scale = useSpring({ transform: "scale(1.05)", from: { transform: "scale(1)" } })
    return transitions.map(({ item, key, props }) =>
        item ? (
            <Item key={key} onclick={() => setOnScale(true)} onMouseEnter={() => setOnScale(true)} onMouseLeave={() => setOnScale(false)} style={{ ...props, ...(onScale ? scale : {}) }}>
                <Title >{title}</Title>
                <Icon name="angle right" size="big" />
                {children}
            </Item>
        ) : null
    );
};
