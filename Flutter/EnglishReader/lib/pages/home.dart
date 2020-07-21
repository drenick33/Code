import 'package:flutter/material.dart';
import 'package:EnglishReader/services/word.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  Word test;
  Color highlight = Colors.blue;

  void initState() {
    super.initState();
    test = Word(phrase: "I love Sasha", isCurrent: false);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.deepOrange,
        title: Text("English Reader"),
        centerTitle: true,
      ),
      body: Column(
        children: [
          Text(
            test.phrase,
            style: TextStyle(
              fontSize: 24,
              color: highlight,
            ),
          )
        ],
      ),
    );
  }
}
