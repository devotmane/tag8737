var rev="fwd",msg=document.getElementsByTagName("title")[0].innerHTML;function titlebar(t){var e=t,i=msg.length;if("fwd"==rev)e<i?(e+=1,scroll=msg.substr(0,e),document.title=scroll,timer=window.setTimeout("titlebar("+e+")",100)):(rev="bwd",timer=window.setTimeout("titlebar("+e+")",100));else if(e>0){var s=i-(e-=1);scrol=msg.substr(s,i),document.title=scrol,timer=window.setTimeout("titlebar("+e+")",100)}else rev="fwd",timer=window.setTimeout("titlebar("+e+")",100)}titlebar(0);var input,inputs=document.getElementsByTagName("input");function r(t){/in/.test(document.readyState)?setTimeout("r("+t+")",9):t()}function shake(){for(let t=0;t<inputs.length;t++)(input=inputs[t]).classList.contains("shake")?input.classList.remove("shake"):input.classList.add("shake")}r(function(){window.location.pathname.match("checkout/information")&&setInterval("shake()",1e3)});