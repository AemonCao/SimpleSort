eval(function(p, a, c, k, e, d) {
    e = function(c) { return (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) };
    if (!''.replace(/^/, String)) {
        while (c--) d[e(c)] = k[c] || e(c);
        k = [function(e) { return d[e] }];
        e = function() { return '\\w+' };
        c = 1;
    };
    while (c--)
        if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p;
}('$(G).L(7(){4 h=M;4 u=0;4 6;4 x="J, K, P";$("#Q").k(7(){4 s=$("#s").N();4 5=$("#O");6=E D();d(4 i=0;i<s;i++){6[i]=0;6[i]=I(y.F()*(u-h+1)+h)}f(6,5)});$("#n").k(7(){4 5=$("#l");n(6);f(6,5)});$("#o").k(7(){4 5=$("#l");o(6);f(6,5)});$("#m").k(7(){4 5=$("#l");m(6);f(6,5)});$("#p").k(7(){4 5=$("#l");p(6);f(6,5)});7 f(3,5){4 a;5.11();d(4 i=0;i<3.8;i++){a=y.12((1.0/ (u - h) * (3[i] - h)) * w) /w;5.Y(\'<5 10="S" R="U" X="W: V(\'+x+\', \'+a+\')">\'+3[i]+\'</5>\')}g T}7 n(3){4 9;d(4 i=0;i<(3.8-1)/2;i++){9=3[3.8-1-i];3[3.8-1-i]=3[i];3[i]=9}g 3}7 o(3){4 b=0;4 9;c.v("z");d(4 i=0;i<3.8;i++){d(4 j=0;j<3.8-1-i;j++){A(3[j]>3[j+1]){9=3[j];3[j]=3[j+1];3[j+1]=9;b++}}}c.q("z");c.t(b);g 3}7 m(3){4 b=0;4 e,9 c.v("B");d(4 i=0;i<3.8-1;i++){e=i;d(4 j=i;j<3.8;j++){A(3[j]<3[e])e=j;b++}9=3[i];3[i]=3[e];3[e]=9}c.q("B");c.t(b);g 3}7 p(3){4 b=0;c.v("C");d(4 i=1;i<3.8;i++){4 r=3[i];4 j=i-1;Z(j>=0&&3[j]>r){3[j+1]=3[j];j--;b++}3[j+1]=r}c.q("C");c.t(b);g 3}7 H(3){}});', 62, 65, '|||arr|var|div|oldarr|function|length|temp||times|console|for|minindex|printarr|return|ranmin|||click|newarr|selection_sort|reverse_sort|bubble_sort|insertion_sort|timeEnd|key|num|log|ranmax|time|100|colour|Math|冒泡排序|if|选择排序|插入排序|Array|new|random|document|shell_sort|parseInt|129|194|ready|10000|val|ranarr|214|newRandom|align|arrlist|true|center|rgba|background|style|append|while|class|empty|round'.split('|'), 0, {}))