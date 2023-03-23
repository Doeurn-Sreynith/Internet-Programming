
var historyStyle = document.getElementById("historybtn");
var Vision = document.getElementById("visionbtn");
var Goals = document.getElementById("goalsbtn");
var text =  document.getElementById("text");

function historyClick(){
    // alert("ff")
    historyStyle.style.background = "#ffffff";
    Vision.style.background  = "#DBE2EC"
    Goals.style.background = "#DBE2EC"
    text.innerHTML = `<h3>History</h3><p>I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up xoxo lomo
    kombucha glossier bicycle rights. Umam1 kinfolk salv1a jean shorts offal venmo. Knausgaard tilde try•
    hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-b1t shaman
    chartreuse tacos. Viral direct trade hood1e ugh chambray. craft beer pork belly nannel tacos singleorigm
    coffee art party migas plaid pop-up</p>`;
}
function visionClick(){
    Vision.style.background = "#ffffff";
    historyStyle.style.background = "#DBE2EC";
    Goals.style.background = "#DBE2EC";
    text.innerHTML = `<h3>Vision</h3> <p>Man bun PBR&B keytar copper mug prism, hell of helvet,ca. Synth crucifix offal deep v hella biodiesel.
    Church-key listicle polaroid put a bird on It chillwave pale santo enamel pin, tattooed meggings
    franzen la croix cray, Retro yr aesthetic four loko tbh helverica air plant, neutra pale santo tofu
    mumblecore. Hood1e bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock
    master cleanse pop-up trufraut. bicycle rights skateboard affogato readymade sustainable deep v
    lrve-edge schl1tz narwhal.</p>`;
}
function goalsClick(){
    Goals.style.background = "#ffffff";
    Vision.style.background = "#DBE2EC";
    historyStyle.style.background = "#DBE2EC";
    text.innerHTML = `<h3>Goals</h3> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui quia natus voluptatibus dolore hic! Exercitationem eum sint sed?
    Voluptatibus, magni illo. 
    Hic ad necessitatibus praesentium et similique culpa suscipit! Veritatis.</p>`;
}