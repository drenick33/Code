import 'package:flutter/material.dart';

class Word {
  String phrase; //get a phrase of words
  bool isCurrent;
  Color col = Colors.black;

  Word({this.phrase, this.isCurrent});

  void makeCurrent() {
    this.isCurrent = true;
    this.col = Colors.blue;
  }
}

//@TODO add functions to change is current
