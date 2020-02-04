import React from 'react';
import { SocialIcon } from 'react-social-icons';

import styled from 'styled-components';

const Icons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2%;
    width: 50%;
`

export default function SocialLinks() {

return (
    <Icons>
        <SocialIcon url='http://facebook.com' network='facebook' bgColor="#fd9827" />
        <SocialIcon url='http://twitter.com'network='twitter' bgColor="#fd9827" />
        <SocialIcon url='http://instagram.com' network='instagram' bgColor="#fd9827 "/>
        <SocialIcon url='mailto:' network='mailto' bgColor="#fd9827" />
        <SocialIcon url='http://reddit.com' network='reddit' bgColor="#fd9827" />

    </Icons>
)
}