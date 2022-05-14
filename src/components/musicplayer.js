import React, { Component as comp } from 'react'

class sound extends comp {
    constructor(props) {
        super(props);
        this.state = {
            play: false,
            pause: true,
        }
        this.url = "https://vgmsite.com/soundtracks/the-witcher-3-wild-hunt-unofficial-tracks/punnoyalpp/%27Whispers%20of%20Oxenfurt%27%20Instrumental%20Extended.mp3";
        this.audio = new Audio(this.url);

    }
    toogle = () => { 
        if (this.state.play === false) {
            this.setState({ play: true, pause: false })
            this.audio.play();
        } else{
            this.setState({ play: false, pause: true })
            this.audio.pause();
        }
    }
    render() {
        return (<div><button className="link" onClick={this.toogle}>{this.state.play ? <div>Pause</div> : <div>Play</div>}</button></div>);
    }
}
export default sound