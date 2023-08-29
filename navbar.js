var navbarData = [
  { id: 1, name: "Home", name_kh: "ទំព័រដើម", href: "./index.html#home" },
  {
    id: 2,
    name: "Popular",
    name_kh: "តំបន់ពេញនិយម",
    href: "./index.html#popular",
  },
  {
    id: 3,
    name: "Ancient Temple",
    name_kh: "តំបន់ស្រស់បំព្រង",
    href: "./index.html#ancient_temple",
  },
  {
    id: 4,
    name: "Natural",
    name_kh: "តំបន់ធម្មជាតិ",
    href: "./index.html#natural",
  },
  {
    id: 5,
    name: "Reviewer",
    name_kh: "អ្នករុករកតំបន់ទេសចរណ៍",
    href: "./index.html#reviewer",
  },
];
$.each(navbarData, function (key, value) {
  var content = "";
  for (var i = 0, { length } = navbarData; i < length; i++) {
    content +=
      "<a onclick='myFunction(event)' href='" +
      navbarData[i].href +
      "'>" +
      navbarData[i].name_kh +
      "</a>";
  }
  $("#navbar").html(content);
});
