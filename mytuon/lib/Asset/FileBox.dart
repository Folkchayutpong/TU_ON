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
  Color tapColor1 = Colors.white;
  Color tapColor2 = Colors.white;

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
        height: 470,
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
              padding: EdgeInsets.only(left: 25.0, right: 25),
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
                  const SizedBox(
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
                                style: const TextStyle(
                                    fontWeight: FontWeight.bold, fontSize: 13)),
                            Spacer(),
                            SizedBox(
                              height: 50, // กำหนดความสูงของปุ่ม
                              width: 100, // กำหนดความกว้างของปุ่ม
                              child: FloatingActionButton(
                                onPressed: () async {
                                  await selectFile();
                                },
                                child: const Text('Select file',
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
                  const SizedBox(
                    height: 16,
                  ),
                  Row(
                    children: [
                      Text("ประเภท :",
                          style: TextStyle(
                              fontWeight: FontWeight.bold, fontSize: 16)),
                      SizedBox(
                        width: 15,
                      ),
                      Text("Mid"),
                      SizedBox(
                        width: 5,
                      ),
                      //ปุ่มกด mid
                      Container(
                        decoration: BoxDecoration(
                            shape: BoxShape.circle, color: tapColor1),
                        height: 10,
                        width: 10,
                        child: InkWell(
                          onTap: () {
                            setState(() {
                              tapColor1 = tapColor1 == Colors.white
                                  ? Colors.black
                                  : Colors.white;
                            });
                          },
                        ),
                      ),
                      SizedBox(
                        width: 16,
                      ),
                      Text("Final"),
                      SizedBox(
                        width: 5,
                      ),
                      //ปุ่มกด final
                      Container(
                        decoration: BoxDecoration(
                            shape: BoxShape.circle, color: tapColor2),
                        height: 10,
                        width: 10,
                        child: InkWell(
                          onTap: () {
                            setState(() {
                              tapColor2 = tapColor2 == Colors.white
                                  ? Colors.black
                                  : Colors.white;
                            });
                          },
                        ),
                      )
                    ],
                  ),
                  Padding(
                    padding: const EdgeInsets.all(5.0),
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
