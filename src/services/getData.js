var s;
let time = setIntertval(() => {
  s = document.querySelector("#ctaDesktopBodyPhone");
  if (s) {
    console.log(s);
    clearInterval(time);
  }
}, 3000)(function(w, i, d, g, e, t) {
  w["WidgetTrackerObject"] = g;
  (w[g] =
    w[g] ||
    function() {
      (w[g].q = w[g].q || []).push(arguments);
    }),
    (w[g].ds = 1 * new Date());
  (e = "script"), (t = d.createElement(e)), (e = d.getElementsByTagName(e)[0]);
  t.async = 1;
  t.src = i;
  e.parentNode.insertBefore(t, e);

  var s;
  let time = setIntertval(() => {
    s = document.querySelector("#ctaDesktopBodyPhone");
    if (s) {
      console.log(s);
      clearInterval(time);
    }
  }, 3000);
})(window, "https://widgetbe.com/agent", document, "widgetTracker");
window.widgetTracker("create", "WT-EPOITYND");
window.widgetTracker("send", "pageview");

(function(w, i, d, g, e, t) {
  w["WidgetTrackerObject"] = g;
  (w[g] =
    w[g] ||
    function() {
      (w[g].q = w[g].q || []).push(arguments);
    }),
    (w[g].ds = 1 * new Date());
  (e = "script"), (t = d.createElement(e)), (e = d.getElementsByTagName(e)[0]);
  t.async = 1;
  t.src = i;
  e.parentNode.insertBefore(t, e);
  var s;
  let time=setInterval(()=>{
      s=document.querySelector("")
  })
})(window, "https://widgetbe.com/agent", document, "widgetTracker");
window.widgetTracker("create", "WT-EPOITYND");
window.widgetTracker("send", "pageview");
var s;
                       let time=setInterval(()=>{
                       s=document.querySelector("#ctaDesktopBodyPhone");
 
 
 
                       siteAxios.interceptors.response.use(function(res) {
                        let a=res&&res.listings;
                        let b=res&&res.searchType;
                        
                        if(a)
                        {if(b=="sold"){
                        for(i=0;i<a.length;i++)
                        {
                        a[i].soldDateStr=a[i].soldDateStr.split("-").join("/");
                        
                        }
                        console.log(a);
                        }
                        }
                        return res;
                        })
                        
                        
                          var s;
                        
                        let time=setInterval(()=>{
                        s=document.querySelector(".update-time");
                        if(s){
                        var s1=document.querySelectorAll('.info-title');
                          var s2=document.querySelectorAll('.info-data');
                          for(i=0;i<s1.length;i++){
                        
                          if(s1[i].innerHTML=="Sold Date"){
                        console.log(s1[i].innerHTML);
                        console.log(s2[i].innerHTML)
                        s.innerHTML="SOLD DATE : "+s2[i].innerHTML;
                          
                        }}clearInterval(time);
                        }},1000);                      console.log(s)},3000)