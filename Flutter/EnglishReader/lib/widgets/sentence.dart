import 'package:flutter/material.dart';
import 'package:EnglishReader/services/word.dart';

class Sentence extends StatelessWidget {
  final Word word;

  Sentence({this.word});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(8.0, 0, 0, 0),
      child: Text(
        word.phrase,
        style: TextStyle(
          fontSize: 24,
          color: word.col,
        ),
      ),
    );
  }
}
