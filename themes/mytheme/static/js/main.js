var main={bigImgEl:null,numImgs:null,init:function(){$(window).scroll(function(){$(".navbar").offset().top>50?$(".navbar").addClass("top-nav-short"):$(".navbar").removeClass("top-nav-short")}),$("#main-navbar").on("show.bs.collapse",function(){$(".navbar").addClass("top-nav-expanded")}),$("#main-navbar").on("hidden.bs.collapse",function(){$(".navbar").removeClass("top-nav-expanded")}),$("#main-navbar").on("click",".navlinks-parent",function(n){var i=n.target;$.each($(".navlinks-parent"),function(n,a){a==i?$(a).parent().toggleClass("show-children"):$(a).parent().removeClass("show-children")})});var n=$(".navlinks-container");if(n.length>0){$("#main-navbar").find("ul").append("<li class='fake-menu' style='display:none;'><a></a></li>");var i,a=$(".fake-menu");$.each(n,function(i){$(n[i]).find(".navlinks-parent");var t=$(n[i]).find(".navlinks-children a"),e=[];$.each(t,function(n,i){e=e.concat($(i).text().trim().split(/\s+/))});var o=0;$.each(e,function(n,i){a.html("<a>"+i+"</a>");var t=a.width();t>o&&(o=t)}),$(n[i]).css("min-width",o+"px")}),a.remove()}main.initImgs()},initImgs:function(){if($("#header-big-imgs").length>0){main.bigImgEl=$("#header-big-imgs"),main.numImgs=main.bigImgEl.attr("data-num-img");var n=main.getImgInfo(),i=n.src,a=n.desc,t=n.position;main.setImg(i,a,t);var e=function(){var n=main.getImgInfo(),i=n.src,a=n.desc,t=n.position;new Image().src=i,setTimeout(function(){var n=$("<div></div>").addClass("big-img-transition").css("background-image","url("+i+")");void 0!==t&&n.css("background-position",t),$(".intro-header.big-img").prepend(n),setTimeout(function(){n.css("opacity","1")},50),setTimeout(function(){main.setImg(i,a,t),n.remove(),e()},1e3)},6e3)};main.numImgs>1&&e()}},getImgInfo:function(){var n,i=Math.floor(Math.random()*main.numImgs+1),a=main.bigImgEl.attr("data-img-src-"+i);return{src:a,desc:main.bigImgEl.attr("data-img-desc-"+i),position:main.bigImgEl.attr("data-img-position-"+i)}},setImg:function(n,i,a){if($(".intro-header.big-img").css("background-image","url("+n+")"),void 0!==a?$(".intro-header.big-img").css("background-position",a):$(".intro-header.big-img").css("background-position",""),void 0!==i&&!1!==i){var t=/\[(.*?)\]\((.+?)\)/;if(i.match(t)){var e=i.split(t),o=$(".img-desc");e.forEach(function(n,i){if(i%3==0&&o.append(n),i%3==2){var a=$("<a>",{href:n,target:"_blank",rel:"noopener noreferrer"}).text(e[i-1]);o.append(a)}}),o.show()}else $(".img-desc").text(i).show()}else $(".img-desc").hide()}};$(document).ready(function(){document.addEventListener("DOMContentLoaded",main.init);var n=$(".fixme").offset().top;$(window).scroll(function(){$(window).scrollTop()>=n?$(".fixme").css({position:"fixed",top:"50px","z-index":"9",width:"100%",left:"0"}):$(".fixme").css({position:"static"})})});