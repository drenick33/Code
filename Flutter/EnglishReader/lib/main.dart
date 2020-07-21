import 'package:flutter/material.dart';
import 'package:EnglishReader/pages/home.dart';

void main() {
  runApp(
    MaterialApp(
      initialRoute: "/",
      routes: {
        "/": (context) => Home(),
      },
    ),
  );
}
