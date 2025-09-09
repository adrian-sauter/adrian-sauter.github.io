---
layout: page
title: Visually Grounded Text Embeddings
description: Exploring the effects of visual grounding on text embeddings. More info coming soon! :)
img: /assets/img/Visually_Grounded_Word_Embs_thumbnail.png
importance: 1
category: Academic
#related_publications: true
---

<!-- Intro -->
<div class="row align-items-center my-4">
  <div class="col-md-6">
    {% include figure.liquid path="/assets/img/projects/visually_grounded_text/intro.png" title="Background information" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-md-6">
    <p>
      This project investigates whether <strong>visually grounded BERT embeddings</strong> improve semantic representations. {% cite zhang2021explainable %} {% cite searle1980minds %} {% cite stroop1935studies %} {% cite radford2021learning %} {% cite tenney2019bert %}
    </p>
  </div>
</div>

<!-- RQs and results -->
<div class="row align-items-center my-4">
  <div class="col-md-6">
    {% include figure.liquid path="/assets/img/projects/visually_grounded_text/research_questions_results.png" title="Research Questions" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-md-6">
    <p>
      Details.
    </p>
  </div>
</div>

---

<!-- Experiment 1 -->
<div class="row align-items-center my-4">
  <div class="col-md-6 order-md-2">
    {% include figure.liquid path="/assets/img/projects/visually_grounded_text/probing.png" title="Experiment 1: Probing" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-md-6 order-md-1">
    <h3>Experiment 1: Concrete vs Abstract</h3>
    <p>
      Experiment 1.
    </p>
  </div>
</div>

<!-- Experiment 2 -->
<div class="row align-items-center my-4">
  <div class="col-md-6">
    {% include figure.liquid path="/assets/img/projects/visually_grounded_text/abstract_concrete.png" title="Experiment 2: Abstract vs concrete categories" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-md-6">
    <h3>Experiment 2: Abstract vs concrete categories</h3>
    <p>
      Experiment 2.
    </p>
  </div>
</div>

<!-- Experiment 3 -->
<div class="row align-items-center my-4">
  <div class="col-md-6 order-md-2">
    {% include figure.liquid path="/assets/img/projects/visually_grounded_text/lexical_ambiguity.png" title="Experiment 3: Lexical ambiguity" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-md-6 order-md-1">
    <h3>Experiment 3: Lexial Ambiguity</h3>
    <p>
      Experiment 3.
    </p>
  </div>
</div>

<!-- Experiment 4 -->
<div class="row align-items-center my-4">
  <div class="col-md-6 order-md-2">
    {% include figure.liquid path="/assets/img/projects/visually_grounded_text/lexical_ambiguity.png" title="Experiment 3: Lexical ambiguity" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-md-6 order-md-1">
    <h3>Experiment 3: Lexial Ambiguity</h3>
    <p>
      Experiment 3.
    </p>
  </div>
</div>

---

<!-- Conclusion -->
<div class="row my-4">
  <div class="col">
    <h3>Conclusion</h3>
    <p>
      Grounding language models in vision enhances their treatment of concrete 
      concepts, disambiguates homonyms, and improves semantic clustering, 
      without disrupting their syntactic representations.
    </p>
  </div>
</div>

## References
{% bibliography --cited --template bib %}