import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
  const { data: blogPosts, addBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        keyExtractor={(blog) => blog.title}
        data={blogPosts}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({});
