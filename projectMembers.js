var members = [
  {
    id: 1,
    name: "Thoeun Rithe",
    img: "./images/avatar/trithe.jpg",
    des: "Project Member",
    text: "អ្នករុករកតំបន់ទេសចរណ៍ក្នុងស្រុក",
  },
  {
    id: 2,
    name: "Hing Sophat",
    img: "./images/avatar/sophat.jpg",
    des: "Project Member",
    text: "អ្នករុករកតំបន់ទេសចរណ៍ក្នុងស្រុក",
  },
  {
    id: 3,
    name: "Him Bunheang",
    img: "./images/avatar/bunheang.jpg",
    des: "Project Member",
    text: "អ្នករុករកតំបន់ទេសចរណ៍ក្នុងស្រុក",
  },
  {
    id: 4,
    name: "Chhong Chhanon",
    img: "./images/avatar/chhanon.jpg",
    des: "Project Member",
    text: "អ្នករុករកតំបន់ទេសចរណ៍ក្នុងស្រុក",
  },
  {
    id: 5,
    name: "Thorn Nimol",
    img: "./images/avatar/nimol.jpg",
    des: "Project Member",
    text: "អ្នករុករកតំបន់ទេសចរណ៍ក្នុងស្រុក",
  },
  {
    id: 6,
    name: "Men Puthpanha",
    img: "./images/avatar/panha.JPG",
    des: "Project Member",
    text: "អ្នករុករកតំបន់ទេសចរណ៍ក្នុងស្រុក",
  },
  {
    id: 7,
    name: "Phan Sopheaktra",
    img: "images/logo.jpg",
    des: "Project Member",
    text: "អ្នករុករកតំបន់ទេសចរណ៍ក្នុងស្រុក",
  },
  {
    id: 8,
    name: "Nou Virak",
    img: "./images/avatar/virak.jpg",
    des: "Project Member",
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
