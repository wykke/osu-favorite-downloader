import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import './style.css'
import '../../components/fontAwesome/css/font-awesome.min.css'
import LoginCard from '../../components/LoginCard'
import BackgroundImage from '../../components/BackgroundImage'

const { ipcRenderer } = window.require("electron");

export default class Login extends Component<RouteComponentProps>{

    constructor(props: RouteComponentProps){
        super(props)
        ipcRenderer.on("loginOsuReply", (event)=>{
            props.history.push("/download");
        })
    }

    render(){
        return (
            <div className="main-page">
                <BackgroundImage/>
                <LoginCard/>
            </div>
        )
    }
}
