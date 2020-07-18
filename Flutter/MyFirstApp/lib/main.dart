import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    home: Home(),
  ));
}

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          "I love Sasha!",
          style: TextStyle(
            fontSize: 24.0,
            fontFamily: "Test",
          ),
        ),
        centerTitle: true,
        backgroundColor: Colors.pink[200],
      ),
      // body:
      // Padding(
      //   padding: EdgeInsets.all(69.0),
      //   child: Text("Sexy Sasha"),
      // ),

      // Container(
      //   padding: EdgeInsets.all(20.0),
      //   margin: EdgeInsets.all(420.0),
      //   color: Colors.pink[300],
      //   child: Text("Sexy Sasha"),
      // ),

      body: Center(
        //   child: IconButton(onPressed: () {}, icon: Icon(Icons.alternate_email)),
        //   //     child: RaisedButton.icon(
        //   //   onPressed: () {},
        //   //   icon: Icon(Icons.mail),
        //   //   label: Text("Sasha is Sexy"),
        //   //   color: Colors.pink[200],
        //   // )
        child: FlatButton(
          onPressed: () {},
          child: Image.asset("assets/dash.jpg"),
          color: Colors.black,
        ),
        //   // child: Icon(
        //   //   Icons.airport_shuttle,
        //   //   color: Colors.pinkAccent,
        //   //   size: 420,
        //   // ),
        //   // child: Image(
        //   //   image: AssetImage("assets/dash.jpg"),
        //   // ),
      ),
      floatingActionButton: FloatingActionButton(
          onPressed: () {},
          backgroundColor: Colors.pink[200],
          child: Text("Sasha is Sexy")),
    );
  }
}
