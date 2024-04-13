import 'package:flutter/material.dart';
import 'package:mytuon/model/post.dart';

class PostProvider with ChangeNotifier {
  List<Post> postlist = [];

  List<Post> getPost() {
    return postlist;
  }

  void addPost(Post statement) {
    postlist.add(statement);
  }
}
