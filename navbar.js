var baseHref = location.pathname.endsWith("index.html")
  ? ""
  : "/travelkh/index.html";

var navbarData = [
  { id: 1, name: "Home", name_kh: "ទំព័រដើម", href: baseHref + "#home" },
  {
    id: 2,
    name: "Popular",
    name_kh: "តំបន់ពេញនិយម",
    href: baseHref + "#popular",
  },
  {
    id: 3,
    name: "Ancient Temple",
    name_kh: "តំបន់ស្រស់បំព្រង",
    href: baseHref + "#ancient_temple",
  },
  {
    id: 4,
    name: "Natural",
    name_kh: "តំបន់ធម្មជាតិ",
    href: baseHref + "#natural",
  },
  {
    id: 5,
    name: "Reviewer",
    name_kh: "អ្នករុករកតំបន់ទេសចរណ៍",
    href: baseHref + "#reviewer",
  },
];

$.each(navbarData, function (key, value) {
  var content =
    "<a onclick='myFunction(event)' href='" +
    value.href +
    "'>" +
    value.name_kh +
    "</a>";
  $("#navbar").append(content);
});
