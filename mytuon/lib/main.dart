import 'package:flutter/material.dart';
import 'package:mytuon/screen/homepage.dart';

void main() {
  runApp(MyApp()); // Instantiate MyApp within runApp
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: Scaffold(
        body: Padding(
          padding: EdgeInsets.all(60.0),
          child: MyHomePage(),
        ),
      ),
    );
  }
}
