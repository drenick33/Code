import 'package:flutter/material.dart';
import 'package:EnglishReader/services/word.dart';
import 'package:EnglishReader/widgets/sentence.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  List<Word> sent = [
    Word(phrase: "I love Sasha! ", isCurrent: true),
    Word(phrase: "Sasha is sexy! ", isCurrent: false),
  ];
  Color highlight = Colors.blue;
  Color normal = Colors.black;

  void initState() {
    super.initState();
    sent[0] = Word(phrase: "I love Sasha!", isCurrent: true);
    sent[0].makeCurrent();
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
