import 'package:http/http.dart';
import 'dart:convert';
import 'package:intl/intl.dart';

class WorldTime {
  String location; //Location name for the ui
  String time; //Time in that location
  String flag; //url to asset flag icon
  String url; //location url for api endpoint
  bool isDayTime; //check if it's day or night

  WorldTime({this.location, this.flag, this.url});

  Future<void> getTime() async {
    try {
      Response response =
          await get('http://worldtimeapi.org/api/timezone/$url');
      Map data = jsonDecode(response.body);
      //print(data);

      //get properties from data
      String datetime = data['datetime'];
      String offset = data['utc_offset'].substring(0, 3);
      //print(datetime);
      // print(offset);

      //create datetime object
      DateTime now = DateTime.parse(datetime);
      // DateTime now = DateTime.parse(datetime).toLocal();

      now = now.add(Duration(hours: int.parse(offset)));

      isDayTime = now.hour > 6 && now.hour < 20 ? true : false;

      time = DateFormat.jm().format(now);
    } catch (e) {
      print("Caught error: $e");
      time = "Couldn't get time";
    }
  }
}
