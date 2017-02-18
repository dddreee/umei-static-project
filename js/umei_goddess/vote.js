/**
 * Created by nero on 16/11/14.
 */
$('html').css('font-size', $(window).width()/375*100);

function alertDialog(e){
    e.stopPropagation();
    var btn = e.target,
        url = btn.getAttribute('url'),
        uuid = btn.getAttribute('uuid'),
        name = btn.getAttribute('name'),
        count = btn.getAttribute('count');
}