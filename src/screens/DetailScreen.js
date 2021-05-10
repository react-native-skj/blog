import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { BlogContext } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const DetailScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state: blogPosts } = useContext(BlogContext);
  const blogPost = blogPosts.find((blog) => blog.key === id);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

DetailScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Create', {
            id: navigation.getParam('id'),
          })
        }
      >
        <Feather name="edit" size={25} />
      </TouchableOpacity>
    ),
  };
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: 'space-around',
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 10,
    marginHorizontal: 2,
  },
  title: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginVertical: 10,
  },
});
