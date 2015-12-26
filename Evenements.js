// Evenements

<div id="capt1">
    <span id="capt2">Cliquez-moi pour la phase de capture.</span>
</div>

<div id="boul1">
    <span id="boul2">Cliquez-moi pour la phase de bouillonnement.</span>
</div>

<script>
    var capt1 = document.getElementById('capt1'),
        capt2 = document.getElementById('capt2'),
        boul1 = document.getElementById('boul1'),
        boul2 = document.getElementById('boul2');
  
    capt1.addEventListener('click', function() {
        alert("L'événement du div vient de se déclencher.");
    }, true);
  
    capt2.addEventListener('click', function() {
        alert("L'événement du span vient de se déclencher.");
    }, true);
  
    boul1.addEventListener('click', function() {
        alert("L'événement du div vient de se déclencher.");
    }, false);
  
    boul2.addEventListener('click', function() {
        alert("L'événement du span vient de se déclencher.");
    }, false);
</script>