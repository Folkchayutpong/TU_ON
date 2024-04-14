import 'package:flutter/material.dart';
import 'package:mytuon/Asset/FileBox.dart';
import 'package:mytuon/Asset/PostBox.dart';

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return FileBox();
  }
}
