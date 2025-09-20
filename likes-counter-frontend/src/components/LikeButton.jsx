import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export default function LikeButton(props) {
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(props.initiallikes);
    function handleClick() {
        setLiked(!liked);
        setLikesCount(liked ? likesCount - 1 : likesCount + 1);
    }

    return (
        <>
            <div
                style={{
                    display: "flex",
                    textAlign: "center",
                    gap: "10px",
                    margin: "30px"


              }}
            >
            <button
                onClick={handleClick}
                style={{
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    fontSize: "20px",
                    display: "flex",
                    alignItems: "center"
                }}>
                {liked ? <FaHeart color='red' /> : <FaRegHeart color='gray' />}

            </button>  
                <span>{likesCount}</span>
            </div>
        </>
    )
}
