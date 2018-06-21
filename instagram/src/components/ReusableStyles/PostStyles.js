
import Styled from 'styled-components';


    export const PostImage = Styled.img`
    width: 600px;
    `;

    export const Likes = Styled.p`
    display: flex;
    justify-content: flex-start;
    margin: 0 15px;
    font-size: 14px;
    letter-spacing: 0.5px;
    font-weight: bold;
    `;

    export const PostIcons = Styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 14px;
    `;

    export const HeartIcon = Styled.img`
    width: 30px;
    height: 30px;
    filter: hue-rotate(90deg) brightness(50%);
    &:hover {
        cursor: pointer;
        filter: hue-rotate(90deg) brightness(50%);
    }
    `;

    export const CommentIcon = Styled.img`
    width: 40px;
    height: 40px;
    &:hover {
        cursor: pointer;
        filter: hue-rotate(90deg);
    }
    `;
