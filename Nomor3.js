for (n = prompt(o = i = ''); i++ < n; o += '\n')
    for (s = j = 1; j <= i; s = s * (i - j) / j++) o += s + ' ';
alert(o)