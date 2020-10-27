import React from 'react'

import './style.css'

import LoginInput from '../LoginInput'
import LoginButton from '../LoginButton'

export interface IDownloadPanelState{
    favoriteCount: number
}

export interface IDownloadPanelProps extends IDownloadPanelState{
    buttonFunction(event: React.MouseEvent<Element, MouseEvent> | undefined): void
}

export interface IDownloadProperties{
    withVideo: boolean,
    beatmapCount: number,
    offset: number
}

export default class DownloadPanel extends React.Component<IDownloadPanelProps>{
    state: IDownloadPanelState = {
        favoriteCount: this.props.favoriteCount
    }

    public getDownloadProperties = (): IDownloadProperties => {
        const videoSelect = document.getElementById("video") as HTMLSelectElement
        const offsetInput = document.getElementById("download-panel-offset-input") as HTMLInputElement
        const countInput = document.getElementById("download-panel-count-input") as HTMLInputElement

        return {
            withVideo: videoSelect.value === "with-video" ? true : false,
            offset: Number.parseInt(offsetInput.value),
            beatmapCount: Number.parseInt(countInput.value)
        }
    }

    render() {
        return(
            <div className="download-panel-container">
                <h1>Favorite Count: {this.state.favoriteCount}</h1>
                <div className="download-panel-type-container">
                    <div className="download-panel-offset-container">
                        <select className="download-panel-video-select" name="video" id="video">
                            <option value="no-video">No Video</option>
                            <option value="with-video">With Video</option>
                        </select>
                    </div>
                    <div className="download-panel-offset-container">
                        <h1>Offset:</h1>
                        <LoginInput id="download-panel-offset-input" placeholder="offset" value="0" type="number"/>
                    </div>
                    <div className="download-panel-offset-container">
                        <h1>Count:</h1>
                        <LoginInput id="download-panel-count-input" placeholder="offset" value="0" type="number"/>
                    </div>
                    <div className="download-panel-offset-container">
                        <LoginButton text="Download" onClick={this.props.buttonFunction}/>
                    </div>
                </div>
            </div>
        )
    }
}