function home(){$d(body,"","content");let e=pullID("content");$h(2,e,"Character Sheets","","homeTitle"),$hr(e,"divider",""),$b(e,"New Sheet",function(){router("engine()")},"button",""),$b(e,"Load Sheet",function(){router('engine("load")')},"button",""),$b(e,"Character apps",function(){router("applets()")},"button",""),$b(e,"Delete Sheet",function(){localStorage.clear()})}