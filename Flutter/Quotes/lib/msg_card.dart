import 'package:flutter/material.dart';
import 'msg.dart';

class MsgCard extends StatelessWidget {
  final Msg msg;
  final Function archive;

  MsgCard({this.msg, this.archive});

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: EdgeInsets.fromLTRB(20, 20, 20, 0),
      color: Colors.deepPurple[50],
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.end,
          children: [
            Text(
              msg.text,
              style: TextStyle(
                fontSize: 24,
                color: Colors.blueGrey[600],
              ),
            ),
            SizedBox(
              height: 6.0,
            ),
            Text(
              msg.author,
              style: TextStyle(
                fontSize: 16,
                color: Colors.blueGrey[300],
              ),
            ),
            SizedBox(
              height: 8,
            ),
            FlatButton.icon(
              onPressed: archive,
              label: Text("Archive Message"),
              icon: Icon(Icons.cached),
            )
          ],
        ),
      ),
    );
  }
}
