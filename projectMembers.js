var members = [
  {
    id: 1,
    name: "Coding with Dev",
    img: "./images/avatar/dev.png",
    des: "Developer",
    text: "អ្នករុករកតំបន់ទេសចរណ៍ក្នុងស្រុក",
  },
  {
    id: 2,
    name: "IT Student KH",
    img: "./images/avatar/dev.png",
    des: "Project Manager",
    text: "អ្នករុករកតំបន់ទេសចរណ៍ក្នុងស្រុក",
  },
];
$.each(members, function (key, value) {
  var content = "";
  for (var i = 0, { length } = members; i < length; i++) {
    content +=
      "<div class='box'>" +
      "<img src='" +
      members[i].img +
      "'" +
      "alt=''>" +
      "<h3>" +
      members[i].name +
      "</h3>" +
      "<h5 class='font-wotfard'>" +
      members[i].des +
      "</h5>" +
      "<p>" +
      members[i].text +
      "</p>" +
      "</div>";
  }
  $("#project_members").html(content);
});
