import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      home: SashaFan(),
    ),
  );
}

class SashaFan extends StatefulWidget {
  @override
  _SashaFanState createState() => _SashaFanState();
}

class _SashaFanState extends State<SashaFan> {
  int likes = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.pink[200],
      appBar: AppBar(
        title: Text("Sasha Fan Club ID"),
        centerTitle: true,
        backgroundColor: Colors.pink[100],
        //elevation: 0.0,
      ),
      floatingActionButton: FloatingActionButton(
        backgroundColor: Colors.white,
        onPressed: () {
          setState(() {
            likes += 1;
          });
        },
        child: Row(
          children: [
            Icon(
              Icons.favorite,
              color: Colors.pink[600],
            ),
            Text(
              "Like",
              style: TextStyle(
                color: Colors.pink[600],
              ),
            ),
          ],
        ),
      ),
      body: Padding(
        padding: EdgeInsets.fromLTRB(30, 40, 30, 0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Center(
              child: CircleAvatar(
                backgroundImage: AssetImage("assets/Avatar.jpg"),
                radius: 42,
              ),
            ),
            Divider(
              height: 69.0,
              color: Colors.pink[100],
            ),
            Text(
              "Name",
              style: TextStyle(
                color: Colors.pink[50],
                letterSpacing: 2.0,
              ),
            ),
            SizedBox(
              height: 10.0,
            ),
            Text(
              "Danny",
              style: TextStyle(
                color: Colors.white,
                letterSpacing: 2.0,
                fontSize: 28.0,
                fontWeight: FontWeight.bold,
              ),
            ),
            SizedBox(
              height: 30.0,
            ),
            Text(
              "Fan Club Position",
              style: TextStyle(
                color: Colors.pink[50],
                letterSpacing: 2.0,
              ),
            ),
            SizedBox(
              height: 10.0,
            ),
            Text(
              "President & Founder",
              style: TextStyle(
                color: Colors.white,
                letterSpacing: 2.0,
                fontSize: 28.0,
                fontWeight: FontWeight.bold,
              ),
            ),
            SizedBox(
              height: 30.0,
            ),
            Row(
              children: <Widget>[
                Icon(
                  Icons.email,
                  color: Colors.grey[100],
                ),
                SizedBox(
                  width: 10.0,
                ),
                Text(
                  "renickdaniel@gmail.com",
                  style: TextStyle(color: Colors.white, fontSize: 18.0),
                ),
              ],
            ),
            SizedBox(
              height: 30.0,
            ),
            Row(
              children: [
                Icon(
                  Icons.favorite,
                  color: Colors.pink[600],
                ),
                SizedBox(
                  width: 10.0,
                ),
                Text(
                  "$likes likes",
                  style: TextStyle(color: Colors.pink[600], fontSize: 24.0),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
