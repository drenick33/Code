import 'package:flutter/material.dart';
import 'package:EnglishReader/services/word.dart';

class Sentence extends StatelessWidget {
  final Word word;

  Sentence({this.word});

  @override
  Widget build(BuildContext context) {
    return Text(
      word.phrase,
      style: TextStyle(
        fontSize: 24,
        color: word.col,
      ),
    );
  }
}
