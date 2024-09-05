registerChapter({ chapter: "06-07", content: (function template(context, locals, use_buf) {
var buf = context.buf = context.buf || [];
buf.length = 0;
var jade = context.jade;
var jade_mixins = context.jade_mixins = context.jade_mixins || {};
jade_mixins.dynamic_dummy = function () { return ""; };
var jade_interp;
context.self = ((locals === false) ? context.self : locals) || {};

jade_mixins["title"]("Cuprins\nCompetențe generale și specifice");
jade_mixins["subtitle"]("Paginile 6 - 7");
buf.push("<div class=\"lfa-print-spread\">");
jade_mixins["print-spread"]([
    {
      hotspots: [
        {
          atom: 'p06-at-msd-chim7-u1',
          top: 8.0291,
          left: 4.7879,
          width: 95.2727,
          height: 30.0257,
          type: 'text'
        },
        {
          atom: 'p06-at-msd-chim7-u2',
          top: 38.3633,
          left: 5.0303,
          width: 95.1515,
          height: 14.8586
        },
        {
          atom: 'p06-at-msd-chim7-u3',
          top: 53.359,
          left: 5.0303,
          width: 94.7879,
          height: 24.8843
        },
        {
          atom: 'p06-at-msd-chim7-u4',
          top: 78.6375,
          left: 4.9091,
          width: 95.0303,
          height: 17.6864
        }
      ],
      image: 'p006.jpg'
    },
    {
      hotspots: [
        {
          atom: 'p07-at-msd-chim7-general',
          top: 49.9314,
          left: 27.8182,
          width: 71.5152,
          height: 13.7446,
          type: 'text'
        },
        {
          atom: 'p07-at-msd-chim7-specifice',
          top: 63.8132,
          left: 27.8182,
          width: 71.7576,
          height: 32.6821
        },
        {
          atom: 'p07-at-msd-chim7-img',
          top: 8.2005,
          left: 27.697,
          width: 72,
          height: 41.3368
        }
      ],
      image: 'p007.jpg'
    }
  ]);
buf.push("</div>");
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-header"]('', '', 'Cuprins', '6', 'cuprins', 'left', 'big');
buf.push("<div class=\"_full-width\"><table><tr><td class=\"left-td empty\"></td><td class=\"right-td w-20 empty\">Nr pag.</td><td class=\"right-td w-80 empty\">Lecții</td></tr></table></div>");
}
}, {id: 'p06-at-msd-chim7-header'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"_full-width\"><table><tr><td class=\"left-td uppercase\"><strong>Unitatea I</strong></td><td class=\"right-td w-20 blue-2\"></td><td class=\"right-td w-80 blue-2\"><strong>Laboratorul de chimie</strong></td></tr><tr><td class=\"left-td text-start\"> Chimia și viața.</td><td class=\"right-td w-20 blue-2 text-center\"><strong>10</strong></td><td class=\"right-td w-80 blue-2\">L1: Aparatură și ustensile utilizate în laboratorul de chimie</td></tr><tr><td class=\"left-td text-start\"> Substanțele</td><td class=\"right-td w-20 blue-2 text-center\"><strong>12</strong></td><td class=\"right-td w-80 blue-2\">L2: Norme de protecție a muncii în laborator</td></tr><tr><td class=\"left-td text-start\"> în natură</td><td class=\"right-td w-20 blue-2 text-center\"><strong></strong></td><td class=\"right-td w-80 blue-2\"><strong>Chimia, știință a naturii</strong></td></tr><tr><td class=\"left-td\"></td><td class=\"right-td w-20 blue-2 text-center\"><strong> 14</strong></td><td class=\"right-td w-80 blue-2\">L3: Materie. Substanță</td></tr><tr><td class=\"left-td\"></td><td class=\"right-td w-20 blue-2 text-center\"><strong> 16</strong></td><td class=\"right-td w-80 blue-2\">L4: Fenomene fizice. Fenomene chimice</td></tr><tr><td class=\"left-td\"><strong>Competențe</strong></td><td class=\"right-td w-20 blue-2 text-center\"><strong> 18</strong></td><td class=\"right-td w-80 blue-2\">L5: Proprietăți fizice. Proprietăți chimice</td></tr><tr><td class=\"left-td\"><strong>specifice asociate</strong></td><td class=\"right-td w-20 blue-2 text-center\"><strong> 21</strong></td><td class=\"right-td w-80 blue-2\">L6: Substanță pură. Amestecuri de substanțe. Puritate</td></tr><tr><td class=\"left-td text-start\">1.1; 1.2;</td><td class=\"right-td w-20 blue-2 text-center\"><strong> 24</strong></td><td class=\"right-td w-80 blue-2\">L7: Metode de separare a componentelor din amestecuri omogene</td></tr><tr><td class=\"left-td text-start\">2.1; 2.2; 2.3;</td><td class=\"right-td w-20 blue-2 text-center\"><strong> 26</strong></td><td class=\"right-td w-80 blue-2\">L8: Metode de separare a componentelor din amestecuri eterogene</td></tr><tr><td class=\"left-td text-start\">3.1; 3.2;</td><td class=\"right-td w-20 lavender text-center\"><strong> 28</strong></td><td class=\"right-td w-80 lavender\"><strong>Evaluare. Exerciții și probleme. Test</strong></td></tr><tr><td class=\"left-td text-start\">4.1; 4.2</td><td class=\"right-td w-20 blue-2 text-center\"><strong></strong></td><td class=\"right-td w-80 blue-2\"><strong>Substanțe și amestecuri în natură</strong></td></tr><tr><td class=\"left-td\"></td><td class=\"right-td w-20 blue-2 text-center\"><strong> 29</strong></td><td class=\"right-td w-80 blue-2\">L9: Apa în natură</td></tr><tr><td class=\"left-td\"></td><td class=\"right-td w-20 blue-2 text-center\"><strong> 33</strong></td><td class=\"right-td w-80 blue-2\">L10: Soluții apoase. Solubilitatea substanțelor</td></tr><tr><td class=\"left-td\"></td><td class=\"right-td w-20 blue-2 text-center\"><strong> 37</strong></td><td class=\"right-td w-80 blue-2\">L11: Concentrația procentuală masică a soluțiilor</td></tr><tr><td class=\"left-td\"></td><td class=\"right-td w-20 blue-2 text-center\"><strong> 40</strong></td><td class=\"right-td w-80 blue-2\">L12: Aerul</td></tr><tr><td class=\"left-td\"></td><td class=\"right-td w-20 blue-2 text-center\"><strong> 42</strong></td><td class=\"right-td w-80 blue-2\">L13: Solul – amestec eterogen</td></tr><tr><td class=\"left-td\"></td><td class=\"right-td w-20 blue-2 text-center\"><strong> 43</strong></td><td class=\"right-td w-80 blue-2\">L14: Poluarea aerului, a apei și a solului</td></tr><tr><td class=\"left-td\"></td><td class=\"right-td w-20 green text-center\"><strong> 45</strong></td><td class=\"right-td w-80 green\"><strong>Proiect – Poluarea mediului înconjurător</strong></td></tr><tr><td class=\"left-td\"></td><td class=\"right-td w-20 lavender text-center\"><strong> 46</strong></td><td class=\"right-td w-80 lavender\"><strong>Evaluare. Exerciții și probleme. Test</strong></td></tr></table></div>");
}
}, {id: 'p06-at-msd-chim7-u1'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"_full-width\"><table><tr><td class=\"left-td uppercase\"><strong>Unitatea ii</strong></td><td class=\"right-td w-20 blue-2 text-center\"><strong></strong></td><td class=\"right-td w-80 blue-2\"><strong>Structura atomului</strong></td></tr><tr><td class=\"left-td text-start\">Atom</td><td class=\"right-td w-20 blue-2 text-center\"><strong> 48</strong></td><td class=\"right-td w-80 blue-2\">L1: Definiția atomului. Element chimic. Simbol chimic</td></tr><tr><td class=\"left-td text-start\">Element chimic</td><td class=\"right-td w-20 blue-2 text-center\"><strong> 52</strong></td><td class=\"right-td w-80 blue-2\">L2: Nucleul</td></tr><tr><td class=\"left-td\"></td><td class=\"right-td w-20 blue-2 text-center\"><strong> 54</strong></td><td class=\"right-td w-80 blue-2\">L3: Învelișul de electroni</td></tr><tr><td class=\"left-td\"></td><td class=\"right-td w-20 blue-2 text-center\"><strong> 56</strong></td><td class=\"right-td w-80 blue-2\">L4: Izotopi</td></tr><tr><td class=\"left-td text-start\"><strong>Competențe</strong></td><td class=\"right-td w-20 blue-2 text-center\"><strong> 58</strong></td><td class=\"right-td w-80 blue-2\">L5: Masa atomică. Mol de atomi</td></tr><tr><td class=\"left-td text-start\"><strong>specifice asociate</strong></td><td class=\"right-td w-20 blue-2 text-center\"><strong></strong></td><td class=\"right-td w-80 blue-2\"><strong>Tabelul periodic al elementelor</strong></td></tr><tr><td class=\"left-td text-start\">1.2; 1.3;</td><td class=\"right-td w-20 blue-2 text-center\"><strong>60</strong></td><td class=\"right-td w-80 blue-2\">L6: Tabelul periodic al elementelor. Introducere. Structură</td></tr><tr><td class=\"left-td text-start\">2.1; 2.2;</td><td class=\"right-td w-20 blue-2 text-center\"><strong>62</strong></td><td class=\"right-td w-80 blue-2\">L7: Relația dintre structura învelișului de electroni și poziția ocupată de un element în Tabelul periodic al elementelor</td></tr><tr><td class=\"left-td text-start\">3.1; 4.1; 4.2;</td><td class=\"right-td w-20 lavender text-center\"><strong>64</strong></td><td class=\"right-td w-80 lavender\"><strong>Evaluare. Exerciții și probleme. Test</strong></td></tr></table></div>");
}
}, {id: 'p06-at-msd-chim7-u2'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"_full-width\"><table><tr><td class=\"left-td uppercase\"><strong>Unitatea iii</strong></td><td class=\"right-td w-20 blue-2 text-center\"><strong></strong></td><td class=\"right-td w-80 blue-2\"><strong>Ioni. Metale și nemetale</strong></td></tr><tr><td class=\"left-td text-start\">Compuși chimici</td><td class=\"right-td w-20 blue-2 text-center\"><strong> 66</strong></td><td class=\"right-td w-80 blue-2\">L1: Formarea ionilor pozitivi. Caracter metalic</td></tr><tr><td class=\"left-td\"></td><td class=\"right-td w-20 blue-2 text-center\"><strong> 68</strong></td><td class=\"right-td w-80 blue-2\">L2: Formarea ionilor negativi. Caracter nemetalic</td></tr><tr><td class=\"left-td\"></td><td class=\"right-td w-20 blue-2 text-center\"><strong> 70</strong></td><td class=\"right-td w-80 blue-2\">L3: Metale și nemetale. Proprietăți fizice. Aliaje</td></tr><tr><td class=\"left-td text-start\"><strong>Competențe specifice asociate</strong></td><td class=\"right-td w-20 blue-2 text-center\"><strong> 72</strong></td><td class=\"right-td w-80 blue-2\">L4: Formarea compușilor ionici. Proprietăți fizice</td></tr><tr><td class=\"left-td text-start\"><strong> </strong></td><td class=\"right-td w-20 blue-2 text-center\"><strong></strong></td><td class=\"right-td w-80 blue-2\"><strong>Molecule</strong></td></tr><tr><td class=\"left-td text-start\">1.1; 1.2; 1.3;</td><td class=\"right-td w-20 blue-2 text-center\"><strong> 75</strong></td><td class=\"right-td w-80 blue-2\">L5: Formarea unor molecule</td></tr><tr><td class=\"left-td text-start\">2.1; 2.2; 2.3;</td><td class=\"right-td w-20 blue-2 text-center\"><strong> 78</strong></td><td class=\"right-td w-80 blue-2\">L6: Proprietăți fizice ale unor compuși moleculari</td></tr><tr><td class=\"left-td text-start\">3.1; 3.2;</td><td class=\"right-td w-20 blue-2 text-center\"><strong></strong></td><td class=\"right-td w-80 blue-2\"><strong>Valența</strong></td></tr><tr><td class=\"left-td\">4.1; 4.2</td><td class=\"right-td w-20 blue-2 text-center\"><strong> 80</strong></td><td class=\"right-td w-80 blue-2\">L7: Valența. Stabilirea valenței unui element</td></tr><tr><td class=\"left-td\"></td><td class=\"right-td w-20 blue-2 text-center\"><strong> 82</strong></td><td class=\"right-td w-80 blue-2\">L8: Formula chimică a unei substanțe</td></tr><tr><td class=\"left-td\"></td><td class=\"right-td w-20 blue-2 text-center\"><strong></strong></td><td class=\"right-td w-80 blue-2\"><strong>Substanțe chimice</strong></td></tr><tr><td class=\"left-td\"></td><td class=\"right-td w-20 blue-2 text-center\"><strong> 84</strong></td><td class=\"right-td w-80 blue-2\">L9: Substanțe simple. Substanțe compuse</td></tr><tr><td class=\"left-td\"></td><td class=\"right-td w-20 blue-2 text-center\"><strong> 86</strong></td><td class=\"right-td w-80 blue-2\">L10: Substanțe compuse. Oxizi. Baze. Acizi. Săruri</td></tr><tr><td class=\"left-td\"></td><td class=\"right-td w-20 blue-2 text-center\"><strong></strong></td><td class=\"right-td w-80 blue-2\"><strong>Scala de pH</strong></td></tr><tr><td class=\"left-td\"></td><td class=\"right-td w-20 blue-2 text-center\"><strong> 92</strong></td><td class=\"right-td w-80 blue-2\">L11: pH-ul soluțiilor</td></tr><tr><td class=\"left-td\"></td><td class=\"right-td w-20 green text-center\"><strong> 94</strong></td><td class=\"right-td w-80 green text-start\"><strong>Proiect – Prepararea și folosirea unui indicator acido-bazic la determinarea <em>p</em>H-ului unor soluții</strong></td></tr><tr><td class=\"left-td\"></td><td class=\"right-td w-20 lavender text-center\"><strong> 96</strong></td><td class=\"right-td w-80 lavender\"><strong>Evaluare. Exerciții și probleme. Test</strong></td></tr></table></div>");
}
}, {id: 'p06-at-msd-chim7-u3'});
jade_mixins["atom"].call({
block: function(){
buf.push("<div class=\"_full-width\"><table><tr><td class=\"left-td uppercase\"><strong>Unitatea iv</strong></td><td class=\"right-td w-20 blue-2 text-center\"><strong> 98</strong></td><td class=\"right-td w-80 blue-2\">L1: Mol. Masă molară</td></tr><tr><td class=\"left-td text-start\">Calcule pe baza</td><td class=\"right-td w-20 blue-2 text-center\"><strong> 100</strong></td><td class=\"right-td w-80 blue-2\">L2: Raport atomic. Raport de masă</td></tr><tr><td class=\"left-td text-start\">formulei chimice</td><td class=\"right-td w-20 blue-2 text-center\"><strong> 102</strong></td><td class=\"right-td w-80 blue-2\">L3: Compoziția procentuală elementală a unei substanțe compuse</td></tr><tr><td class=\"left-td\"></td><td class=\"right-td w-20 blue-2 text-center\"><strong> 104</strong></td><td class=\"right-td w-80 blue-2\">L4: Determinarea formulei chimice a unei substanțe compuse</td></tr><tr><td class=\"left-td\"></td><td class=\"right-td w-20 blue-2 text-center\"><strong> 106</strong></td><td class=\"right-td w-80 blue-2\">L5. Determinarea masei unei element dintr-o cantitate dată de substanță compusă</td></tr><tr><td class=\"left-td text-start\"><strong>Competențe specifice asociate</strong></td><td class=\"right-td w-20 blue-2 text-center\"><strong> 107</strong></td><td class=\"right-td w-80 blue-2\">L6. Determinarea masei de substanță compusă care conține o cantitate dată dintr-un element</td></tr><tr><td class=\"left-td text-start\"><strong> </strong></td><td class=\"right-td w-20 lavender text-center\"><strong> 108</strong></td><td class=\"right-td w-80 lavender\"><strong>Evaluare. Exerciții și probleme. Test</strong></td></tr><tr><td class=\"left-td text-start\">1.3;</td><td class=\"right-td w-20 blue-3 text-center\"><strong> 109</strong></td><td class=\"right-td w-80 blue-3\"><strong>Recapitulare finală</strong></td></tr><tr><td class=\"left-td text-start\">2.3;</td><td class=\"right-td w-20 blue-3 text-center\"><strong>110</strong></td><td class=\"right-td w-80 blue-3\"><strong>Răspunsuri</strong></td></tr><tr><td class=\"left-td text-start\">3.1; 3.2;</td><td class=\"right-td w-20 blue-3 text-center\"><strong>111</strong></td><td class=\"right-td w-80 blue-3\"><strong>Anexă</strong></td></tr><tr><td class=\"left-td text-start\">4.2</td><td class=\"right-td w-20 blue-3 text-center\"><strong>112</strong></td><td class=\"right-td w-80 blue-3\"><strong>Tabelul periodic al elementelor</strong></td></tr><tr><td class=\"left-td empty\"></td><td class=\"right-td w-20 empty\"></td><td class=\"right-td w-80 empty\"></td></tr></table></div>");
}
}, {id: 'p06-at-msd-chim7-u4'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\">");
jade_mixins["img"]("img/chimie7/p7.jpg");
buf.push("</div>");
}
}, 'intro no-title', 'Știai că?','');
}
}, {id: 'p07-at-msd-chim7-img'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-blue\">Competențe generale</div><ul class=\"numbers\"><li>Explorarea unor fenomene și proprietăți ale substanțelor întâlnite în activitatea cotidiană</li><li>Interpretarea unor date și informații obținute în cadrul unui demers investigativ</li><li>Rezolvarea de probleme în situații concrete, utilizând algoritmi și instrumente specifice chimiei</li><li>Evaluarea consecințelor proceselor și acțiunii substanțelor chimice asupra propriei persoane și asupra mediului înconjurător</li></ul></div>");
}
}, 'intro no-title', 'Știai că?','');
}
}, {id: 'p07-at-msd-chim7-general'});
jade_mixins["atom"].call({
block: function(){
jade_mixins["msd-page-block"].call({
block: function(){
buf.push("<div class=\"block-content\"><div class=\"block-subtitle msd-blue\">Competențe specifice</div><ul class=\"numbers\"><li class=\"_1-1\">Identificarea unor proprietăți/fenomene, substanțe/amestecuri în contexte cunoscute</li><li class=\"_1-2\">Descrierea unor fenomene și proprietăți ale substanțelor întâlnite în contexte cunoscute prin utilizarea terminologiei specifice chimiei</li><li class=\"_1-3\">Utilizarea simbolurilor specifice chimiei pentru reprezentarea unor elemente, substanțe simple sau compuse și transformări ale substanțelor</li><li class=\"_2-1\">Formularea unor ipoteze cu privire la caracteristicile substanțelor și a relațiilor dintre ele</li><li class=\"_2-2\">Utilizarea echipamentelor de laborator și a tehnologiilor informatice pentru a studia proprietăți/fenomene</li><li class=\"_2-3\">Investigarea unor procese și fenomene în scopul identificării noțiunilor și relațiilor relevante</li><li class=\"_3-1\">Identificarea informațiior și datelor necesare rezolvării unei probleme în contexte variate</li><li class=\"_3-2\">Rezolvarea de probleme calitative și cantitative pe baza conceptelor studiate</li><li class=\"_4-1\">Identificarea consecințelor proceselor chimice asupra organismului și asupra mediului înconjurător</li><li class=\"_4-2\">Aprecierea impactului substanțelor chimice asupra organismului și asupra mediului înconjurător</li></ul></div>");
}
}, 'intro no-title', 'Știai că?','');
}
}, {id: 'p07-at-msd-chim7-specifice'});
jade_mixins["dynamic_dummy"]();;
if (use_buf !== false) { return buf.join(""); }
})});