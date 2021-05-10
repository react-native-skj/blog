import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { BlogContext } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state: blogPosts, addBlogPost, updateBlogPost } = useContext(
    BlogContext
  );
  const [{ title, content }, setform] = useState({ title: '', content: '' });
  useEffect(() => {
    if (id) {
      const { title: t, content: c } = blogPosts.find(
        (blog) => blog.key === id
      );
      updateForm({ title: t, content: c });
    }
  }, []);
  const updateForm = (newValue) => {
    setform((prev) => ({
      ...prev,
      ...newValue,
    }));
  };
  const submitForm = () => {
    if (title && content) {
      id
        ? updateBlogPost(id, { title, content })
        : addBlogPost({ title, content });
      navigation.navigate('Index');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(txt) => updateForm({ title: txt })}
      />
      <Text style={styles.label}>Enter Content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(txt) => updateForm({ content: txt })}
      />
      <Button title="Submit" onPress={submitForm} />
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    height: 30,
    padding: 6,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
});
