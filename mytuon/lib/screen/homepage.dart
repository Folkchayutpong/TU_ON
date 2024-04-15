import 'dart:math';

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
    return Center(
      child: Column(
        children: [
          FloatingProfile(),
          Expanded(
              child: ListView(
            shrinkWrap: false,
            children: [
              PostBox(),
              SizedBox(
                height: 23,
              ),
              FileBox(),
            ],
          )),
        ],
      ),
    );
  }
}

class FloatingProfile extends StatelessWidget {
  const FloatingProfile({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          height: 150,
          color: Colors.black,
          child: Stack(
            alignment: AlignmentDirectional.bottomStart,
            children: [
              Positioned(
                top: 0,
                child: Container(
                  height: 150,
                  width: 550,
                  decoration: const BoxDecoration(
                    color: Color.fromARGB(255, 240, 207, 218),
                    borderRadius: BorderRadius.only(
                      bottomLeft: Radius.circular(1000.0),
                      bottomRight: Radius.circular(1000.0),
                    ),
                  ),
                ),
              ),
              Positioned(
                bottom: 0,
                child: Container(
                  width: 150,
                  height: 150,
                  padding: EdgeInsets.all(8),
                  decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(30)),
                  child: Container(
                    width: 205,
                    height: 205,
                    decoration: BoxDecoration(
                        color: Colors.yellow,
                        borderRadius: BorderRadius.circular(30)),
                    child: ClipRect(
                      child: Image(
                        image: NetworkImage(
                          "https://cdn.pixabay.com/photo/2016/10/26/22/02/dog-1772759_1280.jpg",
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }
}
