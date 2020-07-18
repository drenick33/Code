import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    home: Home(),
  ));
}

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    //Create and display many different widgets
    return Scaffold(
      //Create an AppBar on the top
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

      //Expanded Widgets: Create flex, can help contain images with other elements
      body: Row(
        children: <Widget>[
          Expanded(
            flex: 5,
            child: Image.asset("assets/dash.jpg"),
          ),
          Expanded(
            flex: 1,
            child: Container(
              padding: EdgeInsets.all(42.0),
              color: Colors.pink[50],
              child: Text("I"),
            ),
          ),
          Expanded(
            flex: 2,
            child: Container(
              padding: EdgeInsets.all(42.0),
              color: Colors.pink[100],
              child: Text("Love"),
            ),
          ),
          Expanded(
            flex: 3,
            child: Container(
              padding: EdgeInsets.all(42.0),
              color: Colors.pink[200],
              child: Text("Sasha"),
            ),
          )
        ],
      ),

      //Create a Column, have a row in the column
      // body: Column(
      //   mainAxisAlignment: MainAxisAlignment.center,
      //   crossAxisAlignment: CrossAxisAlignment.center,
      //   children: <Widget>[
      //     Text("I love Sasha"),
      //     Row(
      //       mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      //       crossAxisAlignment: CrossAxisAlignment.end,
      //       children: <Widget>[
      //         Text("I love Sasha"),
      //         RaisedButton(
      //           onPressed: () {},
      //           color: Colors.pink[50],
      //           child: Text("Sasha is Sexy"),
      //         ),
      //         Container(
      //           color: Colors.pink[100],
      //           padding: EdgeInsets.all(42),
      //           child: Text("Sasha in a Box"),
      //         ),
      //       ],
      //     ),
      //     RaisedButton(
      //       onPressed: () {},
      //       color: Colors.pink[50],
      //       child: Text("Sasha is Sexy"),
      //     ),
      //     Container(
      //       color: Colors.pink[100],
      //       padding: EdgeInsets.all(42),
      //       child: Text("Sasha in a Box"),
      //     ),
      //   ],
      // ),

      //Create a Row
      // body: Row(
      //   mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      //   crossAxisAlignment: CrossAxisAlignment.end,
      //   children: <Widget>[
      //     Text("I love Sasha"),
      //     RaisedButton(
      //       onPressed: () {},
      //       color: Colors.pink[50],
      //       child: Text("Sasha is Sexy"),
      //     ),
      //     Container(
      //       color: Colors.pink[100],
      //       padding: EdgeInsets.all(42),
      //       child: Text("Sasha in a Box"),
      //     ),
      //   ],
      // ),
      // body:
      // Padding(
      //   padding: EdgeInsets.all(69.0),
      //   child: Text("Sexy Sasha"),
      // ),

      //Create a Container
      // Container(
      //   padding: EdgeInsets.all(20.0),
      //   margin: EdgeInsets.all(420.0),
      //   color: Colors.pink[300],
      //   child: Text("Sexy Sasha"),
      // ),

      //Create basic widgets, Icon, Buttons, Images, Text
      // body: Center(
      //   //   child: IconButton(onPressed: () {}, icon: Icon(Icons.alternate_email)),
      //   //   //     child: RaisedButton.icon(
      //   //   //   onPressed: () {},
      //   //   //   icon: Icon(Icons.mail),
      //   //   //   label: Text("Sasha is Sexy"),
      //   //   //   color: Colors.pink[200],
      //   //   // )
      //   child: FlatButton(
      //     onPressed: () {},
      //     child: Image.asset("assets/dash.jpg"),
      //     color: Colors.black,
      //   ),
      //   // child: Icon(
      //   //   Icons.airport_shuttle,
      //   //   color: Colors.pinkAccent,
      //   //   size: 420,
      //   // ),
      //   // child: Image(
      //   //   image: AssetImage("assets/dash.jpg"),
      //   // ),
      // ),
      floatingActionButton: FloatingActionButton(
          onPressed: () {},
          backgroundColor: Colors.pink[200],
          child: Text("Sasha is Sexy")),
    );
  }
}
