import React, { useState } from "react";
import { Component } from "react/cjs/react.production.min";

const EventPratice = () => {
    const [form, setForm ] = useState({
        username : '',
        message : ''
    })

    const { username, message } = form;
    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name] : e.target.value
        };
        setForm(nextForm);
    };

    const onClick = () => {
        alert(username + ': ' + message);
        setForm({
            username: '',
            message: ''
        });
    };

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력하기"
                value={message}
                onChange={onChangeMessage}
                onKeyPress={onkeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EventPratice;