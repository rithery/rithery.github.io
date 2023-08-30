var popular = [
  {
    id: 1,
    author: "Coding with Dev",
    title: "កោះរ៉ុង ​ជា​កោះមួយ​ក្នុង​ខេត្ត​ព្រះ​សីហនុ",
    src: "./images/koh_rong.jpg",
    alt: "koh rong",
    href: "./pages/Koh_rong.html",
    paragraph:
      "កោះរ៉ុងជាកោះមួយស្ថិតនៅចំងាយ៤០គីឡូម៉ែតពីឆ្នេរសមុទ្រខេត្តព្រះសីហនុ",
  },
  {
    id: 2,
    author: "Coding with Dev",
    title: "តំបន់ទេសចរណ៍ធម្មជាតិភ្នំ១៥០០ «ផ្លូវបុប្ផាលាក់ខ្លួន»",
    src: "images/popular2.jpg",
    alt: "phnom1500",
    href: "./pages/phnom1500.html",
    paragraph:
      "តំបន់ទេសចរណ៍ធម្មជាតិភ្នំ១៥០០ ស្ថិតក្នុងស្រុកវាលវែងខេត្តពោធិ៍សាត់ដែលជាខេត្តមួយ នៅភាគខាងលិចនៃប្រទេសកម្ពុជា",
  },
  {
    id: 3,
    author: "Coding with Dev",
    title: "សម្រស់កោះកុងក្រៅ ឆ្នេរខ្សាច់ស ទឹកថ្លាធ្លុះដល់បាត",
    src: "images/kohkong2.jpeg",
    alt: "koh kong krav",
    href: "./pages/kohkong.html",
    paragraph:
      "កោះសម្បូរទៅដោយសក្តានុពលផ្នែកធនធានធម្មជាតិ​អំណោយផលដល់ការស្រាវជា្រវប្រព័ន្ធបរិស្ថានជីវៈចម្រុះនិងមានឆ្នេរខ្សាច់ល្អសក្បុស ស្ថិតនៅលើផ្ទៃទឹកសមុទ្រដ៏ធំល្វឹងល្វើយ",
  },
];

$.each(popular, function (key, value) {
  var content = "";
  for (var i = 0, { length } = popular; i < length; i++) {
    content +=
      "<div class='box'>" +
      "<a href='" +
      popular[i].href +
      "'class='link'>" +
      "<img class='image' src='" +
      popular[i].src +
      "'" +
      "alt='" +
      popular[i].alt +
      "'>" +
      "<h3 class='title'>" +
      popular[i].title +
      "</h3>" +
      "</a>" +
      "<p class='paragraph'>" +
      popular[i].paragraph +
      "</p>" +
      "<div size='16' class='space'>" +
      "<p class='content-author'>" +
      popular[i].author +
      "</p>" +
      "</div>" +
      "</div>";
  }
  $("#popularContent").html(content);
});

var natural = [
  {
    id: 1,
    author: "Coding with Dev",
    title: "កោះរ៉ុង ​ជា​កោះមួយ​ក្នុង​ខេត្ត​ព្រះ​សីហនុ",
    src: "./images/koh_rong.jpg",
    alt: "koh rong",
    href: "./pages/Koh_rong.html",
    paragraph:
      "កោះរ៉ុងជាកោះមួយស្ថិតនៅចំងាយ៤០គីឡូម៉ែតពីឆ្នេរសមុទ្រខេត្តព្រះសីហនុ",
  },
  {
    id: 2,
    author: "Coding with Dev",
    title: "សម្រស់កោះកុងក្រៅ ឆ្នេរខ្សាច់ស ទឹកថ្លាធ្លុះដល់បាត",
    src: "images/kohkong2.jpeg",
    alt: "koh kong krav",
    href: "./pages/kohkong.html",
    paragraph:
      "កោះសម្បូរទៅដោយសក្តានុពលផ្នែកធនធានធម្មជាតិ​អំណោយផលដល់ការស្រាវជា្រវប្រព័ន្ធបរិស្ថានជីវៈចម្រុះនិងមានឆ្នេរខ្សាច់ល្អសក្បុស ស្ថិតនៅលើផ្ទៃទឹកសមុទ្រដ៏ធំល្វឹងល្វើយ",
  },
  {
    id: 3,
    author: "Coding with Dev",
    title: "សម្រស់បឹងយក្សលោម",
    src: "images/yeak_lom_6.jpg",
    alt: "boeung yeak lorm",
    href: "./pages/beong_yeak_lom.html",
    paragraph:
      "បឹបឹងយក្សឡោមជាបឹងមួយស្ថិតនៅក្នុងឃុំយក្សឡោម ស្រុកបានលុង ខេត្តរតនគិរី",
  },
  {
    id: 4,
    author: "Coding with Dev",
    title:
      "«ឆ្នេរតាបារាំង» ទឹករាក់ ខ្សាច់សក្បុស ខ្យល់អាកាសបរិសុទ្ធ ទេសភាពស្អាតៗ",
    src: "images/tabarang.jpg",
    alt: "ta barang",
    href: "./pages/tabarang.html",
    paragraph:
      "ឆ្នេរ​តា​បារាំង ​តំបន់​ទេសចរណ៍​ក្នុង​ខេត្ត​ព្រះ​សី​ហ​នុ ​ពិត​ជា​មាន​ទេសភាព​ស្អាត​ខ្លាំង ​មិន​ចាញ់​កោះ​រ៉ុង​ប៉ុន្មាន​នោះ​ទេ។ ​ឆ្នេរ​នេះ​មាន​ខ្សាច់​​សក្បុស ​ទឹក​រាក់​​ស្រួល​លេង និង​មាន​ខ្យល់​បរិសុទ្ធ​​ធម្មជាតិ​ត្រជាក់​កាយ​តែ​ម្ដង ស្ងប់ស្ងាត់​ ជាមួយ​ទេសភាព​ស្រស់​ត្រកាល។",
  },
];
$.each(natural, function (key, value) {
  var naturalContent = "";
  for (var i = 0, { length } = natural; i < length; i++) {
    naturalContent +=
      "<div class='box'>" +
      "<a href='" +
      natural[i].href +
      "'class='link'>" +
      "<img class='image' src='" +
      natural[i].src +
      "'" +
      "alt='" +
      natural[i].alt +
      "'>" +
      "<h3 class='title'>" +
      natural[i].title +
      "</h3>" +
      "</a>" +
      "<p class='paragraph'>" +
      natural[i].paragraph +
      "</p>" +
      "<div size='16' class='space'>" +
      "<p class='content-author'>" +
      natural[i].author +
      "</p>" +
      "</div>" +
      "</div>";
  }
  $("#naturalContent").html(naturalContent);
});
