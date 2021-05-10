import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { BlogContext } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  const { state: blogPosts, deleteBlogPost } = useContext(BlogContext);
  return (
    <View>
      <FlatList
        data={blogPosts}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Detail', {
                id: item.key,
              })
            }
          >
            <View style={styles.item}>
              <Text>{item.title}</Text>
              <TouchableOpacity onPress={() => deleteBlogPost(index)}>
                <Feather name="trash" size={20} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        style={{ marginRight: 10 }}
        onPress={() => navigation.navigate('Create')}
      >
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

export default IndexScreen;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: 'black',
    borderStyle: 'solid',
    fontSize: 18,
  },
});
