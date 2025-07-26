import { View, Text } from 'react-native'
import React from 'react'
import { useCurrentUser } from '../hooks/useCurrentUser'
import { usePosts } from '@/hooks/usePosts';

const PostsList = () => {
    const { currentUser } = useCurrentUser();
    const { posts, isLoading, error, refetch, toggleLike, deletePost, checkIsLiked } = usePosts();

    return (
        <View>
            <Text>PostsList</Text>
        </View>
    )
}

export default PostsList