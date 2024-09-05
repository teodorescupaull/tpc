registerChapter({ chapter: "u1-12-13", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Norme de protecție a muncii în laborator");
jade_mixins["subtitle"]("Paginile 12 - 13");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p12-at-msd-chim7-stiai',
          top: 9,
          left: 0,
          width: 25,
          height: 25.8269
        },
        {
          atom: 'p12-at-msd-chim7-stii-video',
          top: 9,
          left: 27,
          width: 66,
          height: 3.4619,
          type: 'video'
        },
        {
          atom: 'p12-at-msd-chim7-stii',
          top: 12.485,
          left: 27,
          width: 66,
          height: 7.575,
          type: 'text'
        },
        {
          atom: 'p12-at-msd-chim7-inveti',
          top: 20.3685,
          left: 27,
          width: 33.8182,
          height: 76.0411
        }
      ],
      image: 'p012.jpg'
    },
    {
      hotspots: [
        {
          atom: 'p13-at-msd-chim7-retine',
          top: 44.3616,
          left: 7,
          width: 66,
          height: 8.5176
        },
        {
          atom: 'p13-at-msd-chim7-stiai',
          top: 32.6221,
          left: 75,
          width: 25,
          height: 46.9923
        },
        {
          atom: 'p13-at-msd-chim7-aplica',
          top: 53.2734,
          left: 7,
          width: 66,
          height: 42.9649
        }
      ],
      image: 'p013.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U1', '2', 'Norme de protecție a muncii în laborator', '12', 'blue', 'left', 'big');
}
}, {id: 'p12-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <div class=\"text-indent1-5\">Laboratorul de chimie este spațiul în care se efectuează experimente, folosind substanțe chimice, ustensile și aparatură de laborator.</div>");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p12-stii-deja.jpg');
buf.push("</div>");
}
}, 'stii pb0', 'Știi deja','');
}
}, {id: 'p12-at-msd-chim7-stii'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block\">");
jade_mixins["video"]("p12");
jade_mixins["space2"]();
buf.push("</div>");
}
}, {id: 'p12-at-msd-chim7-stii-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\">În secolul al XIX-lea, sacrificiul în numele științei era acceptat, așa cum reiese dintr-o scrisoare din anul 1890 a marelui chimist August Kekulé. Acesta scria: „Liebig mi-a spus: cine nu își riscă sănătatea pentru studiile sale nu va ajunge nicăieri în chimie”.<br/>Astăzi, această atitudine pare la fel de veche ca și alchimia. Dezvoltarea noilor tehnologii a dus la realizarea unor medii sigure și sănătoase în care înveți și lucrezi.</div>");
}
}, 'stiai', 'Știai că?','');
}
}, {id: 'p12-at-msd-chim7-stiai'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <div class=\"text-indent1-5\">Activitatea din <em>laboratorul de chimie </em>se desfășoară cu respectarea strictă a unor norme de protecție a propriei persoane, a celor din jur și a mediului.</div><div class=\"text-indent1-5\">Combinarea substanțelor chimice sau manipularea acestora poate fi uneori chiar periculoasă și poate avea urmări nedorite: intoxicații, arsuri, incendii sau explozii. Manipularea necorespunzătoare a unor substanțe poate provoca arsuri pe piele, deteriorarea hainelor, distrugerea mobilierului. De asemenea, ingerarea accidentală de substanțe chimice poate duce la îmbolnăviri grave sau chiar la deces. Folosirea necorespunzătoare a surselor de încălzire poate produce fie arsuri, fie incendii, cu efecte devastatoare asupra persoanelor și a mediului. </div><div class=\"text-indent1-5\">Nerespectarea acestor norme poate avea efecte negative și asupra rezultatelor experimentelor. Din aceste motive, se impune respectarea cu strictețe a normelor de protecție a muncii în laboratorul de chimie.</div><div class=\"block-subtitle msd-orange\">Norme de protecție a propriei persoane</div><ul class=\"disc\"><li>Nu intra în laboratorul de chimie cu ghiozdan, haine groase, alimente sau alte lucruri în afară de caiet, cartea de chimie și instrumentele de scris.</li><li>Poartă întotdeauna un halat alb pentru protejarea hainelor și a pielii; strânge-ți părul (dacă este cazul).<div class=\"row\"><div class=\"col-xs-12 col-md-6\">");
jade_mixins["img"]('img/chimie7/p12-coloana-1.jpg');
buf.push("<div class=\"fs08 text-right\">Ținuta în laborator: cu halat și părul strâns</div>");
jade_mixins["space1"]();
buf.push("</div></div></li><li>Nu gusta și nu atinge cu mâna substanțele din laboratorul de chimie. Este <strong>strict interzis! </strong></li><li>Nu mirosi substanțele direct din vasele în care se află acestea. Ventilează cu mâna aerul de deasupra recipientului cu care lucrezi, pentru a aduce spre nas o cantitate mică de gaz.</li><li>Respectă pictogramele de pe etichetele recipienților și măsurile de precauție corespunzătoare acestora.</li><li>Apucă eprubetele și paharele de partea superioară, astfel încât, dacă vasul se sparge, lichidul din vas să nu se prelingă pe mână.</li><li>În cazul în care pielea vine în contact cu diverse substanțe, spală repede zona cu multă apă. </li><li>Nu atinge cu mâna vasele de sticlă care au fost încălzite. Sticla fierbinte arată precum cea rece.</li></ul><div class=\"block-subtitle msd-orange\">Norme de protecție în timpul lucrului în laborator</div><ul class=\"disc\"><li>Lucrează experimentele stând în picioare.<div class=\"row\"><div class=\"col-xs-12 col-md-6\">");
jade_mixins["img"]('img/chimie7/p12-coloana-2.jpg');
buf.push("<div class=\"fs08 text-right\">Execuția lucrării de laborator, stând în picioare</div>");
jade_mixins["space1"]();
buf.push("</div></div></li><li>Folosește numai vase și ustensile curate. Clătește-le bine cu apă distilată înainte de a le folosi.</li><li>Realizează transvazarea (turnarea) substanțelor lichide, prin prelingerea lentă a acestora pe pereții eprubetei (fig. <strong>1</strong>).</li><li>Pune substanțele solide pe sticle de ceas și cântărește-le direct pe talerele balanței, iar pe cele urât mirositoare sau toxice, numai în flacoane închise.</li><li>Toarnă cu mare atenție acizii. Șterge cu o cârpă sau cu hârtie absorbantă picăturile prelinse.</li><li>Încălzește eprubetele în flacără, folosind cleștele de lemn. Pe toată perioada încălzirii, ține eprubeta înclinată spre o zonă unde nu se află nimeni, agitând încontinuu (fig. <strong>2</strong>).</li><li>Încălzește vasele cu fund plat pe sita metalică cu inserție ceramică (fig. <strong>3</strong>).</li><li>Nu aprinde fitilul unei spirtiere cu bucăți de hârtie aprinse de la o altă spirtieră. Este <strong>interzis!</strong></li><li>Nu lăsa spirtiera aprinsă la plecarea din laborator, chiar și pentru scurt timp. Este <strong>strict interzis! </strong>Stinge spirtiera cu un capac, nu suflând în flacără (fig. <strong>4</strong>).</li></ul><div class=\"row\"><div class=\"col-sm-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p13-inveti-lucruri-1.jpg', '1', 'grey');
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p13-inveti-lucruri-2.jpg', '2', 'grey');
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p13-inveti-lucruri-3.jpg', '3', 'grey');
buf.push("</div><div class=\"col-sm-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p13-inveti-lucruri-4.jpg', '4', 'grey');
buf.push("</div></div><div class=\"block-subtitle msd-orange\">Norme de protecție a mediului înconjurător</div><ul class=\"disc\"><li>După terminarea lucrărilor de laborator, respectă indicațiile profesorului cu privire la locul unde trebuie depuse sticluțele cu reactivi, ustensilele folosite.</li><li>Nu arunca la chiuvetă substanțele folosite în experimente. În felul acesta vei proteja mediul înconjurător, căci unele resturi pot fi toxice sau corozive. Întreabă profesorul cum trebuie să procedezi.</li></ul></div>");
}
}, 'inveti', 'Înveți lucruri noi','');
jade_mixins["space3"]();
}
}, {id: 'p12-at-msd-chim7-inveti'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U1', '', 'Norme de protecție a muncii în laborator', '13', 'blue', 'right', 'small');
}
}, {id: 'p13-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <div class=\"text-indent1-5\">Profesorul este cel care decide când și cum se efectuează experimentele în laboratorul de chimie, precum și cu ce cantități de substanțe se lucrează.</div></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p13-at-msd-chim7-retine'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\">Pe sticlele cu reactivi care au potențial vătămător, sunt trecute pictograme de avertizare care trebuie cunoscute și respectate. Reține și respectă aceste avertizări, pe care le poți întâlni și în afara laboratorului de chimie!<div class=\"row\"><div class=\"col-xs-6 col-md-4\">");
jade_mixins["img"]('img/chimie7/p13-stiai-ca-1.png');
buf.push("<div class=\"fs08 text-right\">substanță explozivă</div>");
jade_mixins["space1"]();
buf.push("</div><div class=\"col-xs-6 col-md-4\">");
jade_mixins["img"]('img/chimie7/p13-stiai-ca-2.png');
buf.push("<div class=\"fs08 text-right\">substanță corozivă</div>");
jade_mixins["space1"]();
buf.push("</div><div class=\"col-xs-6 col-md-4\">");
jade_mixins["img"]('img/chimie7/p13-stiai-ca-3.png');
buf.push("<div class=\"fs08 text-right\">substanță toxică</div>");
jade_mixins["space1"]();
buf.push("</div><div class=\"col-xs-6 col-md-4\">");
jade_mixins["img"]('img/chimie7/p13-stiai-ca-4.png');
buf.push("<div class=\"fs08 text-right\">substanță inflamabilă</div>");
jade_mixins["space1"]();
buf.push("</div><div class=\"col-xs-6 col-md-4\">");
jade_mixins["img"]('img/chimie7/p13-stiai-ca-5.png');
buf.push("<div class=\"fs08 text-right\">substanță poluantă pentru mediu</div>");
jade_mixins["space1"]();
buf.push("</div><div class=\"col-xs-6 col-md-4\">");
jade_mixins["img"]('img/chimie7/p13-stiai-ca-6.png');
buf.push("<div class=\"fs08 text-right\">substanță care produce radiații periculoase</div>");
jade_mixins["space1"]();
buf.push("</div></div></div>");
}
}, 'stiai', 'Știai că?','');
}
}, {id: 'p13-at-msd-chim7-stiai'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"> <ul class=\"numbers\"><li>Scrie în caiet, cu fiecare literă a cuvântului LABORATOR, câte un obiect/ustensilă/substanță folosit/folosită în laboratorul de chimie.</li><li>Tabelul de mai jos cuprinde diferite acțiuni permise sau nu în laboratorul de chimie. Copiază-l în caiet și scrie în căsuțele libere, plasate în fiecare casetă, litera C sau litera I pentru o activitate corectă, respectiv incorectă, care poate fi desfășurată în laboratorul de chimie.</li></ul><div class=\"msd-table-overflow\"><table class=\"msd-table columns-5 vertical-borders purple-table\"><tr><td class=\"with-tick\">Amesteci reactivii la întâmplare în timpul experimentului, fără a respecta indicațiile profesorului.<span class=\"tick\"></span></td><td class=\"with-tick\">Te speli pe mâini și părăsești laboratorul, după ce profesorul a anunțat terminarea activității.<span class=\"tick\"></span></td><td class=\"with-tick\">Efectuezi experimentele urmând instrucțiunile. Ai grijă să nu îndrepți spre colegi eprubeta pe care o încălzești.<span class=\"tick\"></span></td><td class=\"with-tick\">Te muți în timpul orei la o altă masă, unde lucrează prietenul tău.<span class=\"tick\"></span></td><td class=\"with-tick\">Notezi în caiet observațiile pe care le faci în timpul experimentului.<span class=\"tick\"></span></td></tr><tr><td class=\"with-tick\">La indicația profesorului, la finalul activității, stingi spirtiera cu ajutorul capacului.<span class=\"tick\"></span></td><td class=\"with-tick\">La sfârșitul orei, stingi spirtiera suflând în flacără și părăsești în grabă laboratorul.<span class=\"tick\"></span></td><td class=\"with-tick\">În timp ce colegii lucrează un experiment, tu încerci să-ți termini tema la limba engleză.<span class=\"tick\"></span></td><td class=\"with-tick\">Ai un moment de pauză și mănânci la repezeală un pachet de biscuiți.<span class=\"tick\"></span></td><td class=\"with-tick\">Arunci la chiuvetă conținutul eprubetelor folosite în timpul orei.<span class=\"tick\"></span></td></tr></table></div><ul class=\"numbers\"><li>Din următoarea enumerare de ustensile, alege-le pe cele care <strong><em>nu </em></strong>sunt din sticlă și notează-le în caietul de chimie, indicând pentru fiecare materialul din care este confecționat: pâlnie de separare, lingură de ars, refrigerent, trepied, cilindru gradat, stativ pentru eprubete, creuzet, pipetă, spatulă, suport cu clemă. </li></ul></div>");
}
}, 'aplica', 'Aplică','');
}
}, {id: 'p13-at-msd-chim7-aplica'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});