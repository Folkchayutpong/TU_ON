import 'package:file_picker/file_picker.dart';
import 'package:flutter/material.dart';

class FileBox extends StatefulWidget {
  const FileBox({super.key});

  @override
  State<FileBox> createState() => _FileBoxState();
}

class _FileBoxState extends State<FileBox> {
  PlatformFile? pickedFile;
  String? aText;

  Future<void> selectFile() async {
    final result = await FilePicker.platform.pickFiles();
    if (result != null) {
      setState(() {
        pickedFile = result.files.first;
        aText = pickedFile!.name;
        aText = aText?.substring(0, 15);
        aText = "$aText...";
      });
    }
  }

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
              child: Text("อัปโหลดไฟล์",
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
                  SizedBox(
                    height: 16,
                  ),
                  Align(
                    alignment: Alignment.centerLeft,
                    child: Container(
                      decoration: BoxDecoration(
                          color: Colors.blue,
                          borderRadius: BorderRadius.circular(30.0)),
                      height: 100,
                      width: 300,
                      child: Padding(
                        padding: const EdgeInsets.all(20.0),
                        child: Row(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            Text(aText ?? 'file.pdf',
                                style: TextStyle(
                                    fontWeight: FontWeight.bold, fontSize: 13)),
                            Spacer(),
                            SizedBox(
                              height: 50, // กำหนดความสูงของปุ่ม
                              width: 100, // กำหนดความกว้างของปุ่ม
                              child: FloatingActionButton(
                                onPressed: () async {
                                  await selectFile();
                                },
                                child: Text('Select file',
                                    style: TextStyle(
                                        fontWeight: FontWeight.bold,
                                        fontSize: 14)),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ),
                  SizedBox(
                    height: 16,
                  ),
                  Row(
                    children: [
                      Text("ประเภท",
                          style: TextStyle(
                              fontWeight: FontWeight.bold, fontSize: 16))
                    ],
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
