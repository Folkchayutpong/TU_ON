class Post {
   late String title;
   late String description;
   late String datetime;
   late String location;
   late String subject;
   late String tel;

   Post(this.title, this.description, 
   this.datetime, this.location, 
   this.subject, this.tel);

  static void add(Post statement) {}

}
