import 'dart:async';

import 'package:flutter/material.dart';
import 'package:EnglishReader/services/word.dart';
import 'package:EnglishReader/widgets/sentence.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  List<Word> sent = [
    Word(phrase: "I love Sasha! ", isCurrent: false),
    Word(phrase: "Sasha is sexy! ", isCurrent: false),
  ];

  void initState() {
    super.initState();
    var index = 0;
    Map<int, Word> map = sent.asMap();
    print(map[0]);
    map[index].makeCurrent();

    var _timer = new Timer(const Duration(seconds: 3), () {
      startReading(map, index);
    });
  }

  void startReading(map, index) {
    var _timer = new Timer(const Duration(seconds: 2), () {
      startReading(map, index);
    });
    try {
      map[index].makeNotCurrent();
      index += 1;
      setState(() {
        map[index].makeCurrent();
      });
    } catch (e) {
      print("Reading Failed; error:");
      print("$e");
      _timer.cancel();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.deepOrange,
        title: Text("English Reader"),
        centerTitle: true,
      ),
      body: Row(
        children: sent
            .map((word) => Sentence(
                  //@todo Fix this thing
                  word: word,
                ))
            .toList(),
      ),
    );
  }
}
