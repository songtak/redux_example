import React,{useState} from "react";
import SigninTest from "./SigninTest"


const HideTest: React.FC = () =>{
    const [visible, setVisible] = useState(false)
    const onVisible = e =>{
        alert('클릭했음')
        setVisible(e.target.value)
    }
    return (
        <>
        <button onClick={()=>{onVisible(!visible)}}/>
            {visible ? `숨기기`: `보이기`}
            <hr/>
            {visible && <SigninTest/>}
        </>
    )

}
export default HideTest