import 'package:flutter/material.dart';
import 'package:mytuon/screen/homepage.dart';

void main() {
  runApp(MyApp()); // Instantiate MyApp within runApp
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor:
            Colors.white, // กำหนดสีพื้นหลังให้กับ Scaffold ใน MyApp
        body: navigatorBar(),
      ),
    );
  }
}

class navigatorBar extends StatefulWidget {
  const navigatorBar({super.key});

  @override
  State<navigatorBar> createState() => _navigatorBarState();
}

class _navigatorBarState extends State<navigatorBar> {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 4,
      child: Scaffold(
        backgroundColor: const Color.fromARGB(255, 221, 178, 193),
        body: TabBarView(
          children: [MyHomePage(), Container(), Container(), Container()],
        ),
        bottomNavigationBar: Container(
          decoration: BoxDecoration(
              borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(30), topRight: Radius.circular(30)),
              color: Colors.white),
          child: TabBar(
            labelColor: Colors.amber,
            tabs: [
              Tab(text: "Home"),
              Tab(text: "slide"),
              Tab(text: "tutor"),
              Tab(text: "profile"),
            ],
          ),
        ),
      ),
    );
  }
}
