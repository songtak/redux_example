import React, {useState} from "react";
import {MDBBtn} from "mdbreact";

const Greeting = () => {
    const [message, setMessage] = useState("")
    //두번째인자는 디스패치라고 정의되어 있으니까. 첫번째는 프로퍼티, 두번째는 프로퍼티를 set하는 함수라고 useState함수가 정의되어 있음
    const [color, setColor] = useState("")
    const onclickWelcome = () => setMessage("어서오세요")
    const onClickBy = () => setMessage("안녕히 가세요")
    const onRed = () => setColor("빨간 불 ")
    const onGreen = () => setColor("초록 불")
    const onBlue = () => setColor("파란 불")

    return (
        <>
            <MDBBtn color="default" onClick={onclickWelcome}>입장</MDBBtn>
            <MDBBtn color="default" onClick={onClickBy}>퇴장</MDBBtn>
            <h1 style={{color}}>{message}</h1>
            <MDBBtn color={"danger"} onClick={onRed}>적색 광선</MDBBtn>
            <MDBBtn color={"success"} onClick={onGreen}>녹색 광선</MDBBtn>
            <MDBBtn color={"primary"} onClick={onBlue}>청색 광선</MDBBtn>
        </>
    )
}
/*<>는 다른 컴포넌트의 부품이라는 뜻 */
export default Greeting