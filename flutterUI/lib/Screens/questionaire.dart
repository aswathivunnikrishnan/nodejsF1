import 'package:flutter/material.dart';

class Questions extends StatefulWidget {
  @override
  _QuestionsState createState() => _QuestionsState();
}

class _QuestionsState extends State<Questions> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Container(
      child: Text(
        "aswathy",
        style: TextStyle(
            fontSize: 14, fontWeight: FontWeight.bold, color: Colors.red),
      ),
    ));
  }
}
