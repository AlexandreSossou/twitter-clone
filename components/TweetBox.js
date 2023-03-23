import React from "react";
import '../styles/TweetBox.module.css';
import {Avatar , Button } from '@mui/material'


function TweetBox() {
    return(
        <div className="tweetBox">
            <form>
                <div className="tweetbox__input">
                    <Avatar src='twitter-clone/public/AlexandreSossou.png'></Avatar>
                    <input  placeholder="wassup?"  type="text" />


                </div>
                <Button>Tweet</Button>
            </form>

        </div>
    )
}




export default TweetBox;