import 'package:flutter/material.dart';

class PostBox extends StatefulWidget {
  const PostBox({Key? key}) : super(key: key);

  @override
  State<PostBox> createState() => _PostBoxState();
}

class _PostBoxState extends State<PostBox> {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Container(
        decoration: BoxDecoration(
          color: Colors.red,
          borderRadius: BorderRadius.circular(30.0),
        ),
        height: 750,
        width: 450,
        child: Padding(
          padding: EdgeInsets.all(25.0),
          child: Column(
            children: [
              _buildTextField("หัวข้อ"),
              _buildTextField("รายละเอียด", maxLines: 3),
              _buildTextField("วัน/เวลา"),
              _buildTextField("สถานที่"),
              _buildTextField("วิชา"),
              _buildTextField("ติดต่อ"),
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
      ),
    );
  }

  Widget _buildTextField(String labelText, {int maxLines = 1}) {
    return Padding(
      padding: EdgeInsets.only(bottom: 15.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Align(
            alignment: Alignment.centerLeft,
            child: Text(
              labelText,
              style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
            ),
          ),
          TextFormField(
            maxLines: maxLines,
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
        ],
      ),
    );
  }
}
