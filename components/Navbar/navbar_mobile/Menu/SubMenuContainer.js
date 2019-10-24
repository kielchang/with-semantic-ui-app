import { useTransition, animated } from "react-spring";
import styled from 'styled-components'

const SubMenu = styled(animated.div)`
position: absolute;
background-color: #fafafa;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
/* border-bottom: 1px #fafafa solid; */
`


export default ({ isOpened, children }) => {
    // const transitions = useTransition(true, null, {
    //     from: { opacity: 0 },
    //     enter: { opacity: 1 },
    //     leave: { opacity: 0 }
    // });
    // return transitions.map(({ item, key, props }) =>
    //     item ? (
    //         <SubMenu key={key} style={{ ...props }}>
    //             {children}
    //         </SubMenu>
    //     ) : null
    // );
    return (<SubMenu >
        {children}
    </SubMenu>)
};
