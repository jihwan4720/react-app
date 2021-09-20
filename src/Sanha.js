import React from "react";
import { Component } from "react";

class Sanha extends Component {
    render() {
       return(
        <div>
            <hr></hr>
            <h1>산하정보기술 로그인</h1>
                <h4>Email address</h4>
                <input
                    type="text"
                    placeholder="Enter email"
                />
                <h4>Password</h4>
                <input
                    type="password"
                    placeholder="Enter Password"
                />
                <br></br>
                <checkBox>Remember me</checkBox>
        </div>
       );
    }
}


export default Sanha;