import React from 'react';
import { Container, Header, Avatar, Name, Description } from './styles';
import LazyImage from '../LazyImage';

const Post = ({ item, viewable }) => (
    <Container>
        <Header>
            <Avatar source={{ uri: item.author.avatar }} />
            <Name>{item.author.name}</Name>
        </Header>

        <LazyImage
            shouldLoad={viewable.includes(item.id)}
            ratio={item.aspectRatio}
            smallSource={{ uri: item.small }}
            source={{ uri: item.image }}
        />

        <Description>
            <Name>{item.author.name}</Name>
            {item.description}
        </Description>
    </Container>

);

export default Post;