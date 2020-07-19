import 'package:flutter/material.dart';
import 'msg.dart';
import 'msg_card.dart';

void main() {
  runApp(
    MaterialApp(
      home: Quote(),
    ),
  );
}

class Quote extends StatefulWidget {
  @override
  _QuoteState createState() => _QuoteState();
}

//Create a list of mesages
class _QuoteState extends State<Quote> {
  List<Msg> sent = [
    Msg("I want to spend my life with you", "Sasha"),
    Msg("I want to be with you", "Sasha"),
    Msg("I always want to be by your side", "Sasha"),
    Msg("I want to marry you", "Sasha"),
    Msg("And whether the ceremony is big or small, it doesn't matter", "Sasha"),
    Msg("I will gladly do it, as long as it's with you", "Sasha"),
    Msg("I can't wait for the 27th", "Sasha"),
    Msg("I can't wait to be forever yours", "Sasha"),
    Msg("And for you to be forever mine", "Sasha"),
    Msg("I love you Danny", "Sasha"),
    // "I want to spend my life with you",
    // "I want to be with you",
    // "I always want to be by your side",
    // "I want to marry you",
    // "And whether the ceremony is big or small, it doesn't matter",
    // "I will gladly do it, as long as it's with you",
    // "I can't wait for the 27th",
    // "I can't wait to be forever yours",
    // "And for you to be forever mine",
    // "I love you Danny"
  ];

//Create Card Widgets Template that we will use for Msgs

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.deepPurple[100],
      appBar: AppBar(
        backgroundColor: Colors.deepPurple[200],
        title: Text("I love Sasha"),
        centerTitle: true,
      ),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: sent
              .map((msg) => MsgCard(
                  msg: msg,
                  archive: () {
                    setState(() {
                      sent.remove(msg);
                    });
                  }))
              .toList(),
        ),
      ),
    );
  }
}
