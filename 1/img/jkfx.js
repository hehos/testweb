
document.writeln("                    <script type=\"text/javascript\">");
document.writeln("                    (function(){");
document.writeln("                        ");
document.writeln("                        function G(s){");
document.writeln("                            return document.getElementById(s);");
document.writeln("                        }");
document.writeln("                        ");
document.writeln("                        function getStyle(obj, attr){");
document.writeln("                            if(obj.currentStyle){");
document.writeln("                                return obj.currentStyle[attr];");
document.writeln("                            }else{");
document.writeln("                                return getComputedStyle(obj, false)[attr];");
document.writeln("                            }");
document.writeln("                        }");
document.writeln("                        ");
document.writeln("                        function Animate(obj, json){");
document.writeln("                            if(obj.timer){");
document.writeln("                                clearInterval(obj.timer);");
document.writeln("                            }");
document.writeln("                            obj.timer = setInterval(function(){");
document.writeln("                                for(var attr in json){");
document.writeln("                                    var iCur = parseInt(getStyle(obj, attr));");
document.writeln("                                    iCur = iCur ? iCur : 0;");
document.writeln("                                    var iSpeed = (json[attr] - iCur) / 3;");
document.writeln("                                    iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);");
document.writeln("                                    obj.style[attr] = iCur + iSpeed + \'px\';");
document.writeln("                                    if(iCur == json[attr]){");
document.writeln("                                        clearInterval(obj.timer);");
document.writeln("                                    }");
document.writeln("                                }");
document.writeln("                            }, 30);");
document.writeln("                        }");
document.writeln("                    ");
document.writeln("                        var oPic = G(\"apicBox\");");
document.writeln("                    ");
document.writeln("                        var oList = G(\"alistBox\");");
document.writeln("                        ");
document.writeln("                        var oPrev = G(\"aprev\");");
document.writeln("                        var oNext = G(\"anext\");");
document.writeln("                        var oPrevTop = G(\"aprevTop\");");
document.writeln("                        var oNextTop = G(\"anextTop\");");
document.writeln("                    ");
document.writeln("                        var oPicLi = oPic.getElementsByTagName(\"li\");");
document.writeln("                        var oListLi = oList.getElementsByTagName(\"li\");");
document.writeln("                        var len1 = oPicLi.length;");
document.writeln("                        var len2 = oListLi.length;");
document.writeln("                        ");
document.writeln("                        var oPicUl = oPic.getElementsByTagName(\"ul\")[0];");
document.writeln("                        var oListUl = oList.getElementsByTagName(\"ul\")[0];");
document.writeln("                        var w1 = oPicLi[0].offsetWidth;");
document.writeln("                        var w2 = oListLi[0].offsetWidth;");
document.writeln("                    ");
document.writeln("                        oPicUl.style.width = w1 * len1 + \"px\";");
document.writeln("                        oListUl.style.width = w2 * len2 + \"px\";");
document.writeln("                    ");
document.writeln("                        var index = 0;");
document.writeln("                        ");
document.writeln("                        var num =3;");
document.writeln("                        var num2 = Math.ceil(num / 1);");
document.writeln("                    ");
document.writeln("                        function Change(){");
document.writeln("                    ");
document.writeln("                            Animate(oPicUl, {left: - index * w1});");
document.writeln("                            ");
document.writeln("                            if(index < num2){");
document.writeln("                                Animate(oListUl, {left: 0});");
document.writeln("                            }else if(index + num2 <= len2){");
document.writeln("                                Animate(oListUl, {left: - (index - num2 + 1) * w2});");
document.writeln("                            }else{");
document.writeln("                                Animate(oListUl, {left: - (len2 - num) * w2});");
document.writeln("                            }");
document.writeln("                    ");
document.writeln("                            for (var i = 0; i < len2; i++) {");
document.writeln("                                oListLi[i].className = \"\";");
document.writeln("                                if(i == index){");
document.writeln("                                    oListLi[i].className = \"on\";");
document.writeln("                                }");
document.writeln("                            }");
document.writeln("                        }");
document.writeln("                        ");
document.writeln("                        oNextTop.onmouseover = oNext.onclick = function(){");
document.writeln("                            index ++;");
document.writeln("                            index = index == len2 ? 0 : index;");
document.writeln("                            Change();");
document.writeln("                        }");
document.writeln("                    ");
document.writeln("                        oPrevTop.onmouseover = oPrev.onclick = function(){");
document.writeln("                            index --;");
document.writeln("                            index = index == -1 ? len2 -1 : index;");
document.writeln("                            Change();");
document.writeln("                        }");
document.writeln("                    ");
document.writeln("                        for (var i = 0; i < len2; i++) {");
document.writeln("                            oListLi[i].index = i;");
document.writeln("                            oListLi[i].onmouseover = function(){");
document.writeln("                                index = this.index;");
document.writeln("                                Change();");
document.writeln("                            }");
document.writeln("                        }");
document.writeln("                        ");
document.writeln("                    })()");
document.writeln("                    </script>");
