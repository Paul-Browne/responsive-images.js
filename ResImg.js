
function ResImg() {
    var a = document.getElementsByTagName("body")[0].getElementsByTagName("img");
    if (0 !== a.length) {
        var b = function(a, b) {
            return a.hasAttribute(b)
        };
        for (var c = window.devicePixelRatio ? window.devicePixelRatio : 1, d = 0; d < a.length; d++) {
            var e = a[d],
                f = c * e.parentNode.offsetWidth,
                g = "data-src",
                h = "data-src-base";
            if (b(e, g))
                for (var i = b(e, h) ? e.getAttribute(h) : "", j = e.getAttribute(g), k = j.split(","), l = 0; l < k.length; l++) {
                    var p, q, m = k[l].replace(":", "||").split("||"),
                        n = m[0],
                        o = m[1];
                    if (-1 !== n.indexOf("<"))
                        if (p = n.split("<"), k[l - 1]) {
                            var r = k[l - 1].split(/:(.+)/),
                                s = r[0].split("<");
                            q = f <= p[1] && f > s[1]
                        } else q = f <= p[1];
                    else if (p = n.split(">"), k[l + 1]) {
                        var t = k[l + 1].split(/:(.+)/),
                            u = t[0].split(">");
                        q = f >= p[1] && f < u[1]
                    } else q = f >= p[1];
                    if (q) {
                        var w, v = -1 !== o.indexOf("//") ? 1 : 0;
                        w = 1 === v ? o : i + o, e.src !== w && e.setAttribute("src", w);
                        break
                    }
                }
        }
    }
}
window.addEventListener("load", ResImg), window.addEventListener("resize", ResImg);
