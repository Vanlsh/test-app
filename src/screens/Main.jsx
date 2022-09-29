import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {connect} from 'react-redux';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import {Card} from '../components/Card';
import {fetchTodo} from '../store/slices/todo';

export const Main = ({navigation}) => {
  const dispatch = useDispatch();
  const {todo, status} = useSelector(state => state.todoReducer);
  const loaded = status === 'loaded';
  useEffect(() => {
    dispatch(fetchTodo());
  }, []);
  const openPhoto = id => {
    navigation.navigate('Details', {
      itemId: id,
    });
  };

  return (
    <View style={styles.listContainer}>
      <ScrollView>
        {loaded &&
          todo.map(item => {
            return (
              <Card
                key={item.id}
                id={item.id}
                url={item.urls.full}
                name={item.description}
                author={item.user.name}
                openPhoto={openPhoto}
              />
            );
          })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 3,
  },
});
