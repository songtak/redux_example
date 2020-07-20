import React, {useState, useEffect} from "react";

const SigninTest:React.FC = () => {
    const [userid, setUserid] = useState("")
    const [password, setPassword] = useState("")

    useEffect(()=>{
        alert(`ID변화만 체크합니다 --> ${userid}`)
    }, [])
    const onChangeUserid = e => setUserid(e.target.value)
    const onChangePassword = e => setPassword(e.target.value)

    return (
        <>
            <div>
                <input type="text" value={userid} onChange={onChangeUserid}/>
                <input type="text" value={password} onChange={onChangePassword}/>
            </div>
            <div>
                <b>아이디: </b> {userid} <br/>
                <b>비밀번호: </b> {password} <br/>
            </div>
        </>
    )
}
export default SigninTest