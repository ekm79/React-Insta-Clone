import React from 'react';
import {Header,LogoWrapper, LogoImage, LogoText, Search, IconsWrapper, LogOut, ShareContainer, Heart, FriendIcon, ShareIcon, SearchBox} from '../ReusableStyles/SearchBarStyles';

const SearchBar = props => {
    return (
        <Header>
            <LogoWrapper>
                <LogoImage alt='logo' src='https://cdn.dribbble.com/users/59145/screenshots/2722476/instagram_new_logo.jpg'/>
                <LogoText alt='instagram' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png' />
            </LogoWrapper>
            <Search>
                <SearchBox type='text'
                placeholder='Search'
                onKeyDown={props.searchFunction}
                />
               
            </Search>
            <IconsWrapper>
                <ShareContainer>
                    
                <ShareIcon alt='share icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIYtgKIdJZP0tzYF0PpZ6oA06CkzvmfdP8yBkNEEkRox6ptOyTjw' />
                 </ShareContainer>
                 <Heart alt='heart icon' src='https://png.icons8.com/metro/1600/like.png'/>
                 <FriendIcon alt='friend icon' src='https://d30y9cdsu7xlg0.cloudfront.net/png/682465-200.png'/>
                <LogOut onClick={props.logOut}> Log Out </LogOut>
            </IconsWrapper>
        </Header>
    )
}

export default SearchBar;