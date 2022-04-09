import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import Message from "./message";
import { Button } from "react-native-elements/dist/buttons/Button";
import { Rating } from "react-native-ratings";
import "./Account.css";
import { getUserMessages } from "../ServerFacade";

const win = Dimensions.get("window");
const isMobile = win.width < 600;

class MessagesTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false, //sets to true if api call fails
      pageSize: 10,
      lastPostId: null,
      isEnd: false, //if end of user's posts list is reached
      userId: props.userId,
      posts: [],
      scrolling: false,
      token: props.token,
      showUnresolved: props.showUnresolved,
    };

    getUserMessages(
      this.state.userId,
      this.state.pageSize,
      undefined,
      undefined,
      props.token
    ).then((response) => {
      if (response != -1) {
        this.setState((prevState) => ({
          ...prevState,
          lastPostId:
            response.length > 0 ? response[response.length - 1]._id : null,
          posts: response,
          isEnd: response.length === 0,
          error: false,
        }));
      } else {
        this.setState((prevState) => ({
          ...prevState,
          error: true,
        }));
      }
    });
  }

  onEndReached = () => {
    if (this.state.isEnd) {
      return;
    }

    getUserAccountPosts(
      this.state.userId,
      this.state.pageSize,
      this.state.lastPostId,
      this.state.lastPostDate,
      this.state.token
    ).then((response) => {
      if (response != -1) {
        let newPage = this.state.posts.concat(response);

        this.setState({
          pageSize: this.state.pageSize,
          lastPostId:
            response.length > 0
              ? response[response.length - 1]._id
              : this.state.lastPostId,
          posts: newPage,
          isEnd: response.length === 0,
          error: false,
        });
      } else {
        this.setState((prevState) => ({
          ...prevState,
          error: true,
        }));
      }
    });
  };

  render() {
    return (
      <FlatList
        style={[styles.postsContainer]}
        data={this.state.posts}
        renderItem={({ item }) => <Message props={item} />}
        keyExtractor={(item) => item._id}
        showsHorizontalScrollIndicator={false}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

const styles = StyleSheet.create({
  postsContainer: {
    // margin: '2%',
    height: win.height,
  },
});

export default MessagesTab;
