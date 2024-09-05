registerChapter({ chapter: "u2-48-49", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Definiția atomului. Element chimic. Simbol chimic");
jade_mixins["subtitle"]("Paginile 48 - 49");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p48-at-msd-chim7-stii',
          top: 9.5,
          left: 27,
          width: 67,
          height: 10.5
        },
        {
          atom: 'p48-at-msd-chim7-inveti',
          top: 20.5,
          left: 27,
          width: 67,
          height: 36
        },
        {
          atom: 'p48-at-msd-chim7-stiai-ca',
          top: 9.5,
          left: 4,
          width: 21.5,
          height: 61.5
        },
        {
          atom: 'p48-at-msd-chim7-aplica',
          top: 57,
          left: 27,
          width: 67,
          height: 9.5
        },
        {
          atom: 'p48-at-msd-chim7-retine-1',
          top: 67.3,
          left: 27,
          width: 67,
          height: 6
        },
        {
          atom: 'p48-at-msd-chim7-caracteristici-atom',
          top: 74,
          left: 27,
          width: 44.5,
          height: 13.5
        },
        {
          atom: 'p48-at-msd-chim7-caracteristici-atom-video',
          top: 74,
          left: 71.5,
          width: 22.5,
          height: 13.5,
          type: "video"
        },
        {
          atom: 'p48-at-msd-chim7-retine-2',
          top: 88.5,
          left: 27,
          width: 67,
          height: 8
        }
      ],
      image: 'p048.jpg'
    },
    {
      hotspots: [
        {
          atom: 'p49-at-msd-chim7-stiai-ca',
          top: 11.5,
          left: 75,
          width: 22,
          height: 43.5
        },
        {
          atom: 'p49-at-msd-chim7-stiai-ca-video',
          top: 6.5,
          left: 75,
          width: 22,
          height: 4.5,
          type: "video"
        },
        {
          atom: 'p49-at-msd-chim7-diversitate',
          top: 8.5,
          left: 6.5,
          width: 67,
          height: 10.5
        },
        {
          atom: 'p49-at-msd-chim7-retine-1',
          top: 19.5,
          left: 6.5,
          width: 67,
          height: 6.5
        },
        {
          atom: 'p49-at-msd-chim7-carbonul',
          top: 26.5,
          left: 6.5,
          width: 67,
          height: 50
        },
        {
          atom: 'p49-at-msd-chim7-retine-2',
          top: 76.5,
          left: 6.5,
          width: 67,
          height: 8
        },
        {
          atom: 'p49-at-msd-chim7-simboluri',
          top: 85,
          left: 6.5,
          width: 67,
          height: 11
        },
      ],
      image: 'p049.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U2', '1', 'Definiția atomului. Element chimic. Simbol chimic', '48', 'blue', 'left', 'big');
}
}, {id: 'p48-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\">Lumea înconjurătoare este uimitoare prin marea diversitate a corpurilor care o alcătuiesc. Toate formele de materie, de la minusculul fir de nisip până la grandiosul Everest, de la firava albină până la colosalul elefant, de la cel mai neînsemnat meteorit până la orbitorul Soare, toate, așadar, au la baza alcătuirii lor o particulă extrem de redusă ca masă și dimensiuni.</div></div>");
}
}, 'stii pb0', 'Știi deja','');
}
}, {id: 'p48-at-msd-chim7-stii'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><ul class=\"arrows pb1\"><li> \nAceastă particulă se numește <strong>atom </strong>și este responsabilă de tot ceea ce există și se întâmplă în Universul cel fără limite.</li></ul><div class=\"block-subtitle msd-orange\">Să observăm</div><div class=\"text-indent1-5\">Privește cu atenție obiectul din figura <strong>1</strong>. Cu siguranță, ai recunoscut un diamant șlefuit. </div><div class=\"text-indent1-5\">Imaginează-­ți că ai putea fragmenta acest diamant (care cântărește 1,2 g) în 100 de părți, fiecare parte în alte 100 de părți și că ai putea repeta fragmentarea de 11 ori. </div><div class=\"text-indent1-5\"> \nCea de a 11-­a divizare în 100 de alte fragmente te-­ar conduce la particule care, în cazul diamantului, stau în colțurile unui cub cu latura de ");
jade_mixins["numar_putere"]("1,5", "10", "–10", "m");
buf.push(", strâns legate între ele (fig. <strong>2). </strong>&nbsp;Aceste particule au fost denumite <strong>atomi.</strong></div><div class=\"text-indent1-5\"> \nRaportul dintre mărimea unui atom și cea a unei mingi de tenis este comparabil cu raportul dintre mărimea unei mingi de tenis și cea a Pământului (fig. <strong>3</strong>).</div>");
jade_mixins["space1"]();
buf.push("<div class=\"row sm-center-row\"><div class=\"col-sm-4 col-xs-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p48-inveti-1.jpg', '1', 'grey');
buf.push("</div><div class=\"col-sm-4 col-xs-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p48-inveti-2.jpg', '2', 'grey');
buf.push("</div><div class=\"col-sm-4 col-xs-6\">");
jade_mixins["space1"]();
jade_mixins["img2"]('img/chimie7/p48-inveti-3.jpg', '3', 'grey');
buf.push("</div></div>");
jade_mixins["space1"]();
buf.push("</div>");
}
}, 'inveti', 'Înveți lucruri noi','');
}
}, {id: 'p48-at-msd-chim7-inveti'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content text-left\"><p> </p>Denumirea de <em> <strong>atom </strong></em>a fost dată particulei care stă la baza alcătuirii lumii înconjurătoare de către filozofii greci Leucip și Democrit, care au dezvoltat o întreagă teorie atomistă. În urmă cu aproape 2 500 de ani, Democrit considera că lumea este alcătuită din atomi și spațiu gol.<p> </p>Denumirea de atom provine din cuvântul grecesc <em> <strong>atomos</strong></em>, care înseamnă „ce nu poate fi tăiat”. La acel moment, cei doi considerau atomul drept o particulă invizibilă și indivizibilă.<div class=\"row\"><div class=\"col-xs-6\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p48-coloana-1.jpg');
buf.push("<div class=\"fs09 text-right\"> <strong>Leucip </strong>– sec. IV î.H.</div></div><div class=\"col-xs-6\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p48-coloana-2.jpg');
buf.push("<div class=\"fs09 text-right\"><strong>Democrit </strong>– sec. IV – III î.H.</div></div></div></div>");
}
}, 'stiai', 'Știai că?','');
}
}, {id: 'p48-at-msd-chim7-stiai-ca'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"text-indent1-5\"> \nRaza medie a Pământului este de 6 368 km, iar raza unei mingi de tenis de aproximativ 3 cm. Știind că atomul de plumb are raza de ");
jade_mixins["numar_putere"]("1,8", "10", "–10", "m");
buf.push(", determină câți atomi de plumb se pot alinia pe diametrul Pământului. Dar pe diametrul unei mingi de tenis?</div></div>");
}
}, 'aplica pb0', 'Aplică','');
}
}, {id: 'p48-at-msd-chim7-aplica'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content text-left\"><div class=\"text-indent1-5\"> \n <strong>Masa atomului </strong>este de ordinul ");
jade_mixins["numar_putere"]("", "10", "–27", "kg");
buf.push(", iar diametrul său este de ordinul ");
jade_mixins["numar_putere"]("", "10", "–10", "m");
buf.push(".</div></div>");
}
}, 'retine', 'Reține','pb1');
}
}, {id: 'p48-at-msd-chim7-retine-1'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block pb0\"><div class=\"block-content pb0\"><div style=\"align-items: flex-end; flex-wrap: wrap;\" class=\"row d-flex\"> <div class=\"col-sm-7 col-xs-12\">  <div style=\"max-width: 280px; margin: auto;\" class=\"msd-orange-bg-5 text-center\"> <strong>Caracteristicile atomului</strong></div><div class=\"arrow-line text-center msd-orange\">|</div><div class=\"down-arrow down-arrow-orange\"></div><ul class=\"disc marker-orange msd-orange-bg-4 p1 text-left\"><li>invizibil, cu dimensiuni foarte reduse;</li><li>divizibil prin procedee fizice în particule subatomice;</li><li>neutru din punct de vedere electric;</li><li>aflat în continuă mișcare;</li><li>implicat efectiv în desfășurarea fenomenelor chimice.</li></ul></div><div class=\"col-sm-5 col-xs-12\"> ");
jade_mixins["img"]('img/chimie7/p48-inveti-4.jpg');
buf.push("<div class=\"fs09 text-right\">Atomul  </div></div></div></div></div>");
}
}, {id: 'p48-at-msd-chim7-caracteristici-atom'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block pb1\"><div class=\"block-content\">");
jade_mixins["video"]("p48");
buf.push("</div></div>");
}
}, {id: 'p48-at-msd-chim7-caracteristici-atom-video'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content text-left\"><div class=\"text-indent1-5\">Atomul este cea mai mică particulă dintr­-o substanță care, prin procedee chimice obișnuite, nu poate fi divizată în particule mai simple.</div></div>");
}
}, 'retine', 'Reține','');
}
}, {id: 'p48-at-msd-chim7-retine-2'});
buf.push("");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('U2', '', 'Definiția atomului. Element chimic. Simbol chimic', '49', 'blue', 'right', 'small mb0');
}
}, {id: 'p49-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content text-left pb0\"><p> </p>Teoretic, cel mai mic atom este atomul de heliu, cu o rază de ");
jade_mixins["numar_putere"]("0,32", "10", "–10", "m");
buf.push(".<p> </p>Heliul a fost observat pentru prima dată, în anul 1868 de către astronomul Pierre Janssen, în stratul compus din gaze și aburi incandescenți care înconjoară Soarele, în timpul unei eclipse totale de Soare. De aceea, noul element a fost denumit heliu, de la cuvântul grecesc <em> <strong>helios</strong></em>, care înseamnă Soare. În anul 1881, heliul a fost descoperit și pe Pământ, în emanațiile vulcanului Vezuviu.<div class=\"row\"><div class=\"col-xs-6\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p49-vezuviu.jpg');
buf.push("<div class=\"fs09 text-right\"> \nVulcanul Vezuviu</div></div></div></div>");
}
}, 'stiai', 'Știai că?','mb0 pb0');
}
}, {id: 'p49-at-msd-chim7-stiai-ca'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\">");
jade_mixins["video"]("p49_v2");
buf.push("</div>");
}
}, 'stiai no-title', '','');
}
}, {id: 'p49-at-msd-chim7-stiai-ca-video'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block\"><div class=\"block-content pb0\"><div class=\"text-indent1-5\">Marea diversitate a substanțelor care formează corpurile din lumea înconjurătoare este determinată de faptul că există mai multe tipuri de atomi care se pot combina între ei într-­o multitudine de variante.</div>");
jade_mixins["space1"]();
buf.push("<ul class=\"arrows marker-orange\"><li>Atomii se deosebesc între ei prin structură, dimensiuni, masă și proprietăți. În prezent, se cunosc 118 tipuri de atomi, dintre care 94 de tipuri descoperite în natură și 24 de tipuri sintetizate artificial, în laborator.</li></ul></div></div>");
}
}, {id: 'p49-at-msd-chim7-diversitate'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content text-left\"><div class=\"text-indent1-5\">Totalitatea atomilor de același fel formează un <strong>element chimic.</strong></div></div>");
}
}, 'retine', 'Reține','pb1');
}
}, {id: 'p49-at-msd-chim7-retine-1'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block\"><div class=\"block-content\"><div class=\"text-indent1-5\">Să considerăm, de exemplu, un element chimic, carbonul. Acesta este prezent în diamant, în mina de creion sub formă de grafit, în cărbunii de pământ. Astfel, toți atomii de carbon, fie că sunt dintr-­o mină de creion, fie că sunt dintr-­un diamant sau din cărbuni formează elementul chimic numit carbon.</div><div class=\"row sm-center-row\"><div class=\"col-sm-4 col-xs-6\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p49-diamant.jpg');
buf.push("<div class=\"fs09 text-right\"> \nDiamant</div></div><div class=\"col-sm-4 col-xs-6\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p49-mine-creion.jpg');
buf.push("<div class=\"fs09 text-right\"> \nMine de creion</div></div><div class=\"col-sm-4 col-xs-6\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p49-carbuni.jpg');
buf.push("<div class=\"fs09 text-right\"> \nCărbuni</div></div></div>");
jade_mixins["space1"]();
buf.push("<div class=\"text-indent1-5\">Atomii de carbon sunt diferiți de atomii altor elemente, de exemplu de atomii de aur, de sulf, de plumb sau de argint.</div><div class=\"row sm-center-row\"><div class=\"col-sm-4 col-xs-6\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p49-pulbere-sulf.jpg');
buf.push("<div class=\"fs09 text-right\"> \nPulbere de sulf</div></div><div class=\"col-sm-4 col-xs-6\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p49-varietati-sulf.jpg');
buf.push("<div class=\"fs09 text-right\"> \nVarietăți de sulf nativ</div></div><div class=\"col-sm-4 col-xs-6\">");
jade_mixins["space1"]();
jade_mixins["img"]('img/chimie7/p49-bare-plumb.jpg');
buf.push("<div class=\"fs09 text-right\"> \nBare de plumb</div></div></div>");
jade_mixins["space1"]();
buf.push("<ul class=\"arrows marker-orange\"><li> \nFiecare dintre cele 118 elemente chimice cunoscute astăzi are o denumire și fiecărei denumiri îi este asociată o reprezentare prescurtată, stabilită prin convenție internațională, numită <strong>simbol chimic</strong>.</li></ul></div></div>");
}
}, {id: 'p49-at-msd-chim7-carbonul'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content text-left\"><div class=\"text-indent1-5\"><strong>Simbolul chimic  </strong>este litera sau grupul de litere cu care se notează prescurtat un element chimic.</div></div>");
}
}, 'retine', 'Reține','pb1');
}
}, {id: 'p49-at-msd-chim7-retine-2'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"msd-page-block\"><div class=\"block-content\"><div class=\"text-indent1-5\">Simbolurile chimice se regăsesc în Tabelul periodic al elementelor și în anexa de la finalul manualului, alături de denumirile elementelor chimice. Aceste denumiri provin, în general, din limba greacă sau latină.</div><div class=\"text-indent1-5\">Simbolurile chimice sunt folosite pentru scrierea formulelor chimice ale substanțelor și pentru reprezentarea, cu ajutorul acestora, a reacțiilor chimice.</div><div class=\"text-indent1-5\">Prima literă a unui simbol este scrisă întotdeauna cu majuscule (litere de tipar). Dacă simbolul este format din două litere, cea de a doua este literă mică.</div></div></div>");
}
}, {id: 'p49-at-msd-chim7-simboluri'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});