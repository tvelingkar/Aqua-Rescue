const cssCB = function () {
    const l = document.createElement('link'); l.rel = 'stylesheet';
    l.href = window.location.origin + window.location.pathname.split('/starter')[0] + '/starter/static/css/site.min.css';
    const h = document.getElementsByTagName('head')[0]; h.parentNode.insertBefore(l, h);
};
const cssRaf = requestAnimationFrame || mozRequestAnimationFrame ||
    webkitRequestAnimationFrame || msRequestAnimationFrame;
if (cssRaf) cssRaf(cssCB);
else window.addEventListener('load', cssCB);