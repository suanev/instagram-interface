import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { Loading } from './styles';
import Post from '../../components/post';

const Feed = () => {
    const [feed, setFeed] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [viewable, setViewable] = useState([]);

    const loadPage = async (pageNumber = page, shouldRefresh = false) => {
        if (total && pageNumber > total) return;

        setLoading(true);

        const response = await fetch(
            `http://localhost:3000/feed?_expand=author&_limit=5&_page=${pageNumber}`
        );

        const data = await response.json();
        const totalItems = response.headers.get('X-Total-Count')

        setTotal(Math.floor(totalItems / 5));
        setFeed(shouldRefresh ? data : [...feed, ...data]);
        setPage(pageNumber + 1);
        setLoading(false);
    }


    useEffect(() => {
        loadPage();
    }, []);

    const refreshList = async () => {
        setRefreshing(true);

        await loadPage(1, true);

        setRefreshing(false);
    }

    const handleViewableChanged = useCallback(({ changed }) => {
        setViewable(changed.map(({ item }) => item.id));
    }, []);

    viewabilityConfig = { viewAreaCoveragePercentThreshold: 20 }

    return (
        <View>
            <FlatList
                data={feed}
                keyExtractor={post => String(post.id)}
                onEndReached={() => loadPage()}
                onEndReachedThreshold={0.2}
                onRefresh={refreshList}
                refreshing={refreshing}
                onViewableItemsChanged={handleViewableChanged}
                viewabilityConfig={this.viewabilityConfig}
                ListFooterComponent={loading && <Loading />}
                renderItem={({ item }) => (
                    <Post item={item} viewable={viewable} />
                )}
            />
        </View>
    );
};

export default Feed;
