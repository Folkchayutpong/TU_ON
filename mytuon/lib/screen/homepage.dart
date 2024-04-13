import 'package:flutter/material.dart';

class MsgBox extends StatefulWidget {
  const MsgBox({super.key});

  @override
  State<MsgBox> createState() => _MsgBoxState();
}

class _MsgBoxState extends State<MsgBox> {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Container(
        decoration: BoxDecoration(
            color: Colors.red, borderRadius: BorderRadius.circular(30.0)),
        height: 700,
        width: 450,
        child: Column(
          children: [
            const Padding(
              padding: EdgeInsets.all(25.0),
              child: Text("สร้างโพสต์หาเพื่อนติวหรืออ่านหนังสือหนังสือ",
                  style:
                      TextStyle(fontWeight: FontWeight.bold, fontSize: 20.0)),
            ),
            Padding(
              padding: EdgeInsets.only(left: 15.0, right: 15),
              child: Column(
                children: [
                  const Align(
                      alignment: Alignment.centerLeft,
                      child: Text("หัวข้อ",
                          style: TextStyle(
                              fontWeight: FontWeight.bold, fontSize: 16))),
                  TextFormField(
                    decoration: InputDecoration(
                      hintText: "เขียนอะไรสักอย่าง...",
                      hintStyle: TextStyle(fontSize: 14),
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(30.0),
                      ),
                      filled: true,
                      fillColor: Colors.grey[200],
                    ),
                  ),
                  const Align(
                      alignment: Alignment.centerLeft,
                      child: Text("รายละเอียด",
                          style: TextStyle(
                              fontWeight: FontWeight.bold, fontSize: 16))),
                  TextFormField(
                    maxLines:
                        3, // ระบุจำนวนบรรทัดสูงสุดที่ให้กล่องรับข้อความได้
                    decoration: InputDecoration(
                      hintText: "เขียนอะไรสักอย่าง...",
                      hintStyle: TextStyle(fontSize: 14),
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(30.0),
                      ),
                      filled: true,
                      fillColor: Colors.grey[200],
                    ),
                  ),
                  const Align(
                      alignment: Alignment.centerLeft,
                      child: Text("วัน/เวลา",
                          style: TextStyle(
                              fontWeight: FontWeight.bold, fontSize: 16))),
                  TextFormField(
                    decoration: InputDecoration(
                      hintText: "เขียนอะไรสักอย่าง...",
                      hintStyle: TextStyle(fontSize: 14),
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(30.0),
                      ),
                      filled: true,
                      fillColor: Colors.grey[200],
                    ),
                  ),
                  const Align(
                      alignment: Alignment.centerLeft,
                      child: Text("สถานที่",
                          style: TextStyle(
                              fontWeight: FontWeight.bold, fontSize: 16))),
                  TextFormField(
                    decoration: InputDecoration(
                      hintText: "เขียนอะไรสักอย่าง...",
                      hintStyle: TextStyle(fontSize: 14),
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(30.0),
                      ),
                      filled: true,
                      fillColor: Colors.grey[200],
                    ),
                  ),
                  const Align(
                      alignment: Alignment.centerLeft,
                      child: Text("วิชา",
                          style: TextStyle(
                              fontWeight: FontWeight.bold, fontSize: 16))),
                  TextFormField(
                    decoration: InputDecoration(
                      hintText: "เขียนอะไรสักอย่าง...",
                      hintStyle: TextStyle(fontSize: 14),
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(30.0),
                      ),
                      filled: true,
                      fillColor: Colors.grey[200],
                    ),
                  ),
                  const Align(
                      alignment: Alignment.centerLeft,
                      child: Text("ติดต่อ",
                          style: TextStyle(
                              fontWeight: FontWeight.bold, fontSize: 16))),
                  TextFormField(
                    decoration: InputDecoration(
                      hintText: "เขียนอะไรสักอย่าง...",
                      hintStyle: TextStyle(fontSize: 14),
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(30.0),
                      ),
                      filled: true,
                      fillColor: Colors.grey[200],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(13.0),
                    child: Align(
                      alignment: Alignment.centerRight,
                      child: FloatingActionButton(
                        child: const Text("POST"),
                        backgroundColor: Colors.grey,
                        onPressed: () {},
                      ),
                    ),
                  )
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
