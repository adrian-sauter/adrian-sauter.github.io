---
layout: page
title: Visually Grounded Text Embeddings
description: Exploring the effects of visual grounding on text embeddings.
img: /assets/img/Visually_Grounded_Word_Embs_thumbnail.png
importance: 1
category: Academic
related_publications: true
---



<!-- TL;DR text above the image -->
<p class="text-center">
  <strong>TL;DR:</strong> This mini-project was done in 4 days as part of the [Interpretability and Explainability in AI](https://coursecatalogue.uva.nl/xmlpages/page/2023-2024-en/search-course/course/110133) and earned my partners and me the "best project award" out of ~30 projects. 
</p>

<!-- Centred image (max-width keeps it from spanning full page) -->
<div class="text-center my-4">
  <img src="/assets/img/projects/visually_grounded_text/paper_info.png"
       alt="VG-BERT Overview"
       class="img-fluid rounded z-depth-1"
       style="max-width:600px;">
  <div class="caption mt-2">
    Overview over different types of embeddings. Classic word embeddings are learned through text only. VG-BERT combines a language stream and a visual stream to obtain visually grounded word embeddings. The bilinear relation module further enhances these embeddings, resulting in relationally grounded word embeddings.
  </div>
</div>

<!-- Introduction text below the image -->
<p>
  This project is based on the paper "Explainable Semantic Space by Grounding Language to Vision with Cross-Modal Contrastive Learning" {% cite zhang2021explainable %}. The authors introduce VG-BERT, a vision-language model, which grounds language learning in vision. This approach is inspired by the fact that humans learn language by grounding concepts in perception and action, and follows other research on vision-language models (e.g. CLIP {% cite radford2021learning%}). The model consists of a visual stream, based on a VGG model {% cite simonyan2014very %}, and a language stream, based on a BERT-model {% cite devlin2019bert %}. The model learns to align visual and language representations via cross-modal contrastive learning. After training, the language stream is a stand-alone language model capable of embedding concepts in a visually grounded semantic space. For more details on the architecture of VG-BERT, refer to the original paper {% cite zhang2021explainable %}. 
</p>



<!-- Intro -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

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

<div class="row text-center">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid 
       loading="eager" 
       path="assets/img/1.jpg" 
       title="Example image 1" 
       class="img-fluid rounded z-depth-1" %}
    <div class="caption mt-2">
      On the left, a road goes through a tunnel.
    </div>
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid 
       loading="eager" 
       path="assets/img/3.jpg" 
       title="Example image 2" 
       class="img-fluid rounded z-depth-1" %}
    <div class="caption mt-2">
      In the middle, leaves artistically fall in a hipster photoshoot.
    </div>
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid 
       loading="eager" 
       path="assets/img/5.jpg" 
       title="Example image 3" 
       class="img-fluid rounded z-depth-1" %}
    <div class="caption mt-2">
      On the right, in another hipster photoshoot, a lumberjack grasps pine needles.
    </div>
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

