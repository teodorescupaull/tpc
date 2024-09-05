registerChapter({ chapter: "u1-22-23", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Substanță pură.Amestecuri de substanțe. Puritate");
jade_mixins["subtitle"]("Paginile 22 - 23");
var subex = 'msd-chimie7-', e = 1
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p22-at-msd-chim7-inveti-1',
          top: 9,
          left: 27,
          width: 66,
          height: 4.9186
        },
        {
          atom: 'p22-at-msd-chim7-retine',
          top: 14.4559,
          left: 27,
          width: 66,
          height: 12.3736
        },
        {
          atom: 'p22-at-msd-chim7-inveti-2',
          top: 9,
          left: 0,
          width: 25,
          height: 71.5853
        },
        {
          atom: 'p22-at-msd-chim7-inveti-interactiv-1',
          top: 27.3093,
          left: 25.6667,
          width: 6.9697,
          height: 12.0308,
          type: 'exercise'
        },
        {
          atom: 'p22-at-msd-chim7-inveti-video',
          top: 39.6487,
          left: 27,
          width: 66,
          height: 3.2905,
          type: 'video'
        },
        {
          atom: 'p22-at-msd-chim7-inveti-3',
          top: 43.2476,
          left: 27,
          width: 66,
          height: 15.4584,
          type: 'text'
        },
        {
          atom: 'p22-at-msd-chim7-inveti-interactiv-2',
          top: 58.9289,
          left: 27,
          width: 66,
          height: 5.6041,
          type: 'exercise'
        },
        {
          atom: 'p22-at-msd-chim7-stii',
          top: 70.2399,
          left: 27,
          width: 66,
          height: 9.0317,
          type: 'text'
        },
        {
          atom: 'p22-at-msd-chim7-inveti-4',
          top: 80.0943,
          left: 27,
          width: 66,
          height: 15.8869
        },
        {
          atom: 'p22-at-msd-chim7-inveti-2',
          top: 27.3093,
          left: 32.9091,
          width: 60.1212,
          height: 11.8595,
          type: 'text'
        }
      ],
      image: 'p022.jpg'
    },
    {
      hotspots: [
        {
          atom: 'p23-at-msd-chim7-retine-1',
          top: 8.886,
          left: 7,
          width: 66,
          height: 8.6033
        },
        {
          atom: 'p23-at-msd-chim7-inveti-1',
          top: 17.9692,
          left: 7,
          width: 66,
          height: 34.1388
        },
        {
          atom: 'p23-at-msd-chim7-retine-2',
          top: 53.0163,
          left: 7,
          width: 66,
          height: 7.4036
        },
        {
          atom: 'p23-at-msd-chim7-inveti-2',
          top: 61.3282,
          left: 7,
          width: 66,
          height: 7.1465
        },
        {
          atom: 'p23-at-msd-chim7-aplica-static',
          top: 70.7541,
          left: 7,
          width: 66,
          height: 6.8038,
          type: 'audio'
        },
        {
          atom: 'p23-at-msd-chim7-aplica',
          top: 77.8663,
          left: 7,
          width: 66,
          height: 20,
          type: 'text'
        },
        {
          atom: 'p23-at-msd-chim7-stiai',
          top: 9,
          left: 75,
          width: 25,
          height: 75.8698
        }
      ],
      image: 'p023.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U1', '', 'Substanță pură.Amestecuri de substanțe. Puritate', '22', 'blue', 'left', 'small');
}
}, {id: 'p22-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><strong>Concluzie</strong><div class=\"text-indent1-5\">În funcție de natura componentelor care formează un amestec, se disting diferite tipuri de amestecuri.</div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p22-at-msd-chim7-inveti-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <ul class=\"disc\"><li> <strong>Amestecul </strong>este rezultatul punerii la un loc a două sau mai multe substanțe gazoase, lichide sau solide, între care nu au loc fenomene chimice. </li><li>Amestecurile pot avea compoziție variabilă.</li><li>Într-un amestec, substanțele își păstrează nemodificată compoziția. </li><li>Din amestec, substanțele componente pot fi separate prin operații fizice. </li></ul></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p22-at-msd-chim7-retine'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <div class=\"msd-orange-bg-5 inline-inline p025\">Tipuri  de amestecuri</div>");
jade_mixins["space1"]();
buf.push("<div class=\"msd-orange\">Amestec omogen</div><ul class=\"disc\"><li>Prezintă aceeași compoziție și aceleași proprietăți în toată masa lui. <br/>Exemple: alcoolul sanitar, oțetul, serul fiziologic, aerul, aliajele etc.</li><li>Amestecurile omogene se numesc și soluții.</li></ul><div class=\"row\"><div class=\"col-xs-12 col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p22-coloana-1.jpg');
buf.push("<div class=\"fs08 text-right\">Oțet</div></div><div class=\"col-xs-12 col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p22-coloana-2.jpg');
buf.push("<div class=\"fs08 text-right\">Ser fiziologic</div></div><div class=\"col-xs-12 col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p22-coloana-3.jpg');
buf.push("<div class=\"fs08 text-right\">Aliaj</div></div></div>");
jade_mixins["space1"]();
buf.push("<div class=\"msd-orange\">Amestec eterogen</div><ul class=\"disc\"><li>Nu prezintă aceeași compoziție și aceleași proprietăți în toată masa lui. <br/>Exemple: rocile, apa de râu, amestecul de apă cu ulei, solul etc.</li></ul><div class=\"row\"><div class=\"col-xs-12 col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p22-coloana-4.jpg');
buf.push("<div class=\"fs08 text-right\">Apă de râu</div></div><div class=\"col-xs-12 col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p22-coloana-5.jpg');
buf.push("<div class=\"fs08 text-right\">Amestec de apă și ulei</div></div><div class=\"col-xs-12 col-md-4\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p22-coloana-6.jpg');
buf.push("<div class=\"fs08 text-right\">Roci</div></div></div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p22-at-msd-chim7-inveti-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content pt0 pb0\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"msd-exercise-icon blue\"></div><span>Identifică tipul fiecăruia dintre amestecurile date, bifând varianta corespunzătoare.</span>");
}
}, "p22_interactiv_a");
jade_mixins["exercise"].call({
block: function(){
jade_mixins["validator"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-xs-6 col-sm-5\"><b>Amestecul</b></div><div class=\"col-xs-3 col-sm-3 text-center\"><b>Amestec omogen</b></div><div class=\"col-xs-3 col-sm-3 text-center\"><b>Amestec eterogen</b></div></div>");
jade_mixins["select-to-highlight"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-xs-6 col-sm-5\"><span>1. saramură</span></div><div class=\"col-xs-3 col-sm-3 text-center\"><div class=\"btn good\"></div></div><div class=\"col-xs-3 col-sm-3 text-center\"><div class=\"btn bad\"></div></div></div>");
jade_mixins["space1"]();
}
}, {
            name: 'p22-23-' + subex + e++, className: 'md-select',
            showResults: false
          });
jade_mixins["select-to-highlight"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-xs-6 col-sm-5\"><span>2. apă + nisip</span></div><div class=\"col-xs-3 col-sm-3 text-center\"><div class=\"btn bad\"></div></div><div class=\"col-xs-3 col-sm-3 text-center\"><div class=\"btn good\"></div></div></div>");
jade_mixins["space1"]();
}
}, {
            name: 'p22-23-' + subex + e++, className: 'md-select',
            showResults: false
          });
jade_mixins["select-to-highlight"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-xs-6 col-sm-5\"><span>3. pietriș + alcool</span></div><div class=\"col-xs-3 col-sm-3 text-center\"><div class=\"btn bad\"></div></div><div class=\"col-xs-3 col-sm-3 text-center\"><div class=\"btn good\"></div></div></div>");
jade_mixins["space1"]();
}
}, {
            name: 'p22-23-' + subex + e++, className: 'md-select',
            showResults: false
          });
jade_mixins["select-to-highlight"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-xs-6 col-sm-5\"><span>4. vin</span></div><div class=\"col-xs-3 col-sm-3 text-center\"><div class=\"btn good\"></div></div><div class=\"col-xs-3 col-sm-3 text-center\"><div class=\"btn bad\"></div></div></div>");
jade_mixins["space1"]();
}
}, {
            name: 'p22-23-' + subex + e++, className: 'md-select',
            showResults: false
          });
jade_mixins["select-to-highlight"].call({
block: function(){
buf.push("<div class=\"row\"><div class=\"col-xs-6 col-sm-5\"><span>5. apă de râu</span></div><div class=\"col-xs-3 col-sm-3 text-center\"><div class=\"btn bad\"></div></div><div class=\"col-xs-3 col-sm-3 text-center\"><div class=\"btn good\"></div></div></div>");
jade_mixins["space1"]();
}
}, {
            name: 'p22-23-' + subex + e++, className: 'md-select',
            showResults: false
          });
jade_mixins["select-to-highlight"].call({
block: function(){
buf.push("<div class=\"row text-left\"><div class=\"col-xs-6 col-sm-5\"><span>6. sodă de rufe + alcool</span></div><div class=\"col-xs-3 col-sm-3 text-center\"><div class=\"btn good\"></div></div><div class=\"col-xs-3 col-sm-3 text-center\"><div class=\"btn bad\"></div></div></div>");
jade_mixins["space1"]();
}
}, {
            name: 'p22-23-' + subex + e++, className: 'md-select',
            showResults: false
          });
jade_mixins["select-to-highlight"].call({
block: function(){
buf.push("<div class=\"row mb-15\"><div class=\"col-xs-6 col-sm-5\"><span>7. oțel</span></div><div class=\"col-xs-3 col-sm-3 text-center\"><div class=\"btn good\"></div></div><div class=\"col-xs-3 col-sm-3 text-center\"><div class=\"btn bad\"></div></div></div>");
jade_mixins["space3"]();
}
}, {
            name: 'p22-23-' + subex + e++, className: 'md-select',
            showResults: false
          });
}
});
}
}, {name: 'p22-ex_a'});
buf.push("</div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p22-at-msd-chim7-inveti-interactiv-1', class: 'msd-exercise blue'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block\">");
jade_mixins["video"]("p22");
jade_mixins["space2"]();
buf.push("</div>");
}
}, {id: 'p22-at-msd-chim7-inveti-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-orange\">Să experimentăm (2)</div><ul class=\"numbers\"><li>Într-un mojar, amestecă până la uniformizare pulbere de sulf și pilitură de fier. </li><li>Pune pe o sticlă de ceas o parte din amestecul obținut și apropie un magnet de acesta.</li></ul><ul class=\"disc\"><li>Urmărește transformările care au loc.</li><li>Notează observațiile.</li></ul>");
jade_mixins["space1"]();
buf.push("<strong>Interpretarea rezultatelor</strong><ul class=\"disc\"><li>Amestecul format este solid, de culoare cenușie, având reflexe verzui.</li><li>Magnetul atrage doar pilitura de fier, iar sulful rămâne pe sticla de ceas.</li></ul>");
jade_mixins["space1"]();
buf.push("<strong>Concluzie</strong><div class=\"text-indent1-5\">În amestecul fier – sulf, componentele își păstrează proprietățile inițiale. </div>");
jade_mixins["space1"]();
buf.push("<ul class=\"arrows\"><li>Se dau substanțele: sodă de rufe, apă, sulf, alcool și șpan de aluminiu. <br/>Indică trei amestecuri omogene și trei amestecuri neomogene, de câte două componente, pe care le poți obține folosind aceste substanțe.</li></ul>");
jade_mixins["space3"]();
buf.push("</div>");
}
}, 'inveti no-title pb0', 'Înveți lucruri noi','');
}
}, {id: 'p22-at-msd-chim7-inveti-3'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content pt0 pb0\">");
jade_mixins["audio"].call({
block: function(){
buf.push("<div class=\"msd-exercise-icon blue\"></div><span>Pentru fiecare dintre afirmațiile de mai jos, bifează A, dacă enunțul este adevărat, sau F, dacă este fals.</span>");
jade_mixins["space1"]();
}
}, "p22_interactiv_b");
jade_mixins["exercise"].call({
block: function(){
jade_mixins["validator"].call({
block: function(){
buf.push("<div class=\"row md-yesno-false-true\"><div class=\"col-xs-9\"><div><strong class=\"msd-blue\">a. </strong>Amestecul eterogen prezintă aceeași compoziție în toată masa lui.</div></div><div class=\"col-xs-3\">");
jade_mixins["yesno"]({
                answer: false,
                name: '22-23-' + subex + e++,
                yes: 'A',
                no: 'F'
              });
buf.push("</div></div><div class=\"row md-yesno-false-true\"><div class=\"col-xs-9\"><div><strong class=\"msd-blue\">b. </strong>Substanța pură este substanța perfect curată, nu conține particule ale unei alte substanțe și are compoziție bine determinată.</div></div><div class=\"col-xs-3\">");
jade_mixins["yesno"]({
                answer: true,
                name: '22-23-' + subex + e++,
                yes: 'A',
                no: 'F'
              });
buf.push("</div></div><div class=\"row md-yesno-false-true\"><div class=\"col-xs-9\"><div><strong class=\"msd-blue\">c. </strong>Amestecul de gaze aflat deasupra unui vulcan care erupe este un amestec omogen.</div></div><div class=\"col-xs-3\">");
jade_mixins["yesno"]({
                answer: false,
                name: '22-23-' + subex + e++,
                yes: 'A',
                no: 'F'
              });
buf.push("</div></div><div class=\"row md-yesno-false-true\"><div class=\"col-xs-9\"><div><strong class=\"msd-blue\">d. </strong>Un amestec omogen prezintă aceleași proprietăți în toată masa lui.</div></div><div class=\"col-xs-3\">");
jade_mixins["yesno"]({
                answer: true,
                name: '22-23-' + subex + e++,
                yes: 'A',
                no: 'F'
              });
buf.push("</div></div><div class=\"row md-yesno-false-true\"><div class=\"col-xs-9\"><div><strong class=\"msd-blue\">e. </strong>Alcoolul și apa nu formează un amestec omogen.</div></div><div class=\"col-xs-3\">");
jade_mixins["yesno"]({
                answer: false,
                name: '22-23-' + subex + e++,
                yes: 'A',
                no: 'F'
              });
buf.push("</div></div><div class=\"row md-yesno-false-true\"><div class=\"col-xs-9\"><div><strong class=\"msd-blue\">f. </strong>Fonta este un amestec omogen solid.</div></div><div class=\"col-xs-3\">");
jade_mixins["yesno"]({
                answer: true,
                name: '22-23-' + subex + e++,
                yes: 'A',
                no: 'F'
              });
buf.push("</div></div>");
jade_mixins["space2"]();
}
});
}
}, {name: 'p22-ex_b'});
buf.push("</div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p22-at-msd-chim7-inveti-interactiv-2', class: 'msd-exercise blue'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-subtitle\">Puritatea substanțelor</div>");
}
}, {id: 'p22-at-msd-chim7-subtitle'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <ul class=\"disc\"><li>Materia care are aceeași compoziție și proprietăți, în aceleași condiții de mediu, se numește <em>substanță pură.</em></li><li>În natură, substanțele se găsesc, de cele mai multe ori, sub formă de amestecuri.</li></ul></div>");
}
}, 'stii pb0', 'Știi deja','');
}
}, {id: 'p22-at-msd-chim7-stii'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <div class=\"block-subtitle msd-orange\">Să observăm</div><div class=\"text-indent1-5\">În figurile de mai jos sunt reprezentate două pahare Berzelius. </div><div class=\"text-indent1-5\">Unul conține apă distilată (fig. a) și celălalt apă în care s-a adăugat zahăr (fig. b). </div><div class=\"text-indent1-5\">Precizează în care pahar se găsește substanță pură.</div><div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p22-inveti-lucruri-a.jpg', 'a', 'grey');
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p22-inveti-lucruri-b.jpg', 'b', 'grey');
buf.push("</div></div></div>");
}
}, 'inveti', 'Înveți lucruri noi','');
}
}, {id: 'p22-at-msd-chim7-inveti-4'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U1', '', 'Substanță pură.Amestecuri de substanțe. Puritate', '23', 'blue', 'right', 'small');
}
}, {id: 'p23-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <div class=\"text-indent1-5\"><strong>Substanța impură </strong>este substanța care nu este perfect curată. Aceasta poate fi un amestec de două sau mai multe substanțe, dintre care, într-un anumit proces, doar una are valoare din punct de vedere chimic.</div></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p23-at-msd-chim7-retine-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <div class=\"text-indent1-5\">Pentru a obține o substanță pură, se pot îndepărta impuritățile prin diverse operații fizice.</div><div class=\"text-indent1-5\">O substanță pură are întotdeauna un punct de topire și un punct de fierbere specifice. Aceste valori se găsesc în tabele de constante fizice care pot fi consultate pentru a stabili dacă o substanță este pură.</div><div class=\"block-subtitle msd-orange\">Să experimentăm (3)</div><ul class=\"numbers\"><li>Pe masa de lucru sunt două eprubete în care se află apă pură, respectiv apă impurificată cu sare de bucătărie. Privește cu atenție cele două eprubete. Poți indica eprubeta în care se află apa pură?</li><li>Determină temperatura de fierbere atât pentru lichidul din prima eprubetă, cât și pentru cel din a doua eprubetă. </li></ul>");
jade_mixins["space1"]();
buf.push("<ul class=\"disc\"><li>Notează datele în caiet.</li><li>Precizează în care dintre eprubete se află apa pură. </li></ul>");
jade_mixins["space1"]();
buf.push("<strong>Interpretarea rezultatelor</strong><div class=\"text-indent1-5\">Vizual, nu s-a putut identifica eprubeta care conține apă pură. Determinând însă temperatura de fierbere, s-a constatat că doar lichidul dintr-o eprubetă fierbe la 100 °C. Lichidul din cealaltă eprubetă a început să fiarbă la o temperatură mai mare. </div>");
jade_mixins["space1"]();
buf.push("<strong>Concluzie</strong><div class=\"text-indent1-5\">Prezența impurităților în apă, cum ar fi, în acest caz, sarea de bucătărie, a determinat modificarea temperaturii de fierbere.</div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p23-at-msd-chim7-inveti-1'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <div class=\"text-indent1-5\">Cantitativ, puritatea unei substanțe, exprimată în procente de masă, reprezintă masa de substanță pură care se află în 100 de unități de masă de substanță impură.</div></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p23-at-msd-chim7-retine-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"row\"><div class=\"col-sm-4\"><span><em>p = </em></span><span class=\"fraction\"><div class=\"numarator\"><em>m</em><sub>subst. pură</sub></div><div class=\"numitor\"><em>m</em><sub>subst. impură</sub></div></span><span class=\"middot\"> • 100</span></div><div class=\"col-sm-8 text-left\"><span>unde <em>p </em>= puritatea substanței;</span><p><em>m</em><sub>subst. pură </sub>= masa de substanță pură, exprimată în unități de masă;</p><span><em>m</em><sub>subst. impură </sub>= masa de substanță impură, exprimată în unități de masă</span></div></div></div>");
}
}, 'inveti no-title', 'Înveți lucruri noi','');
}
}, {id: 'p23-at-msd-chim7-inveti-2'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <div class=\"block-subtitle msd-purple\">Problemă rezolvată</div><ul class=\"arrows\"><li>Sarea de bucătărie se extrage din zăcămintele de sare gemă. Calculează masa de sare de bucătărie pură care se obține din 10 kg de sare gemă, de puritate 98,5%.</li></ul>");
jade_mixins["space1"]();
buf.push("<div><ul class=\"letters columns-1-2\"><li>Se notează datele problemei.<p><em>m</em><sub>impură </sub>= 10 kg</p><span><div class=\"fraction\"><div class=\"numarator __left-align-w150\"><em>p = 98,5%</em></div><div class=\"numitor __left-align-w150\"><em>m</em><sub>pură </sub>= ?</div></div></span></li><li>Se calculează masa de sare de bucătărie pură.<br/><span><em>m</em><sub>pură </sub>= </span><span><div class=\"fraction\"><div class=\"numarator\"><em>m</em><sub>impură  </sub><em class=\"middot\">• p</em></div><div class=\"numitor\">100</div></div></span>= <span><div class=\"fraction\"><div class=\"numarator\">10 kg  •<span class=\"middot\"> 98,5 </span></div><div class=\"numitor\">100</div></div></span><p><em>m</em><sub>pură </sub>= 9,85 kg de sare </p></li></ul></div>");
jade_mixins["space2"]();
buf.push("<div class=\"row\"><div class=\"col-xs-2 col-md-1\"><span class=\"msd-purple\">sau</span></div><div class=\"col-xs-10 col-md-8 text-center\">100 kg de sare gemă impură … 98,5 kg de sare pură<br/>10 kg de sare gemă impură … x kg de sare pură<br/>x = 9,85 kg de sare pură</div></div></div>");
}
}, 'aplica', 'Aplică','');
}
}, {id: 'p23-at-msd-chim7-aplica'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block\"><div class=\"msd-amii-static\"></div>");
jade_mixins["img"]("img/chimie7/p23_static_aplica.jpg");
jade_mixins["space1"]();
buf.push("</div>");
}
}, {id: 'p23-at-msd-chim7-aplica-static'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <ul class=\"disc\"><li>La obținerea medicamentelor, atât a celor produse în laboratoare, cât și în cazul celor extrase din plante sau produse animale, se urmărește atingerea unui grad de puritate cât mai mare. <br/>Departamentul de control al medicamentelor se asigură că impuritățile nu depășesc o anumită limită pentru ca medicamentele să nu fie toxice pentru organism. <br/>Impuritățile rămase sunt reprezentate, de cele mai multe ori, de substanțe prezente în organism și sunt în cantități care nu influențează efectul terapeutic al medicamentului respectiv.<div class=\"row\"><div class=\"col-xs-12 col-md-3\"></div><div class=\"col-xs-12 col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p23-stiai-ca-1.jpg');
jade_mixins["space1"]();
buf.push("</div></div></li><li>Aurul pur este un metal moale, care se poate zgâria ușor. <br/>Bijuteriile din aur sunt confecționate de fapt din aliaje ale aurului cu alte metale, putând avea culori diferite în funcție de metalul cu care este aliat. <br/>Aurul alb conține paladiu sau argint și un strat fin de rodiu. <br/>Variantele de aur galben și roz conțin procente diferite de argint și cupru.<div class=\"row\"><div class=\"col-xs-12 col-md-3\"></div><div class=\"col-xs-12 col-md-6\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p23-stiai-ca-2.png');
jade_mixins["space1"]();
buf.push("</div></div></li></ul></div>");
}
}, 'stiai', 'Știai că?','');
}
}, {id: 'p23-at-msd-chim7-stiai'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});