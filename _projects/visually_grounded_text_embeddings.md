---
layout: page
title: Visually Grounded Text Embeddings
description: Short project on the effects of visual grounding on the semanticity of text embeddings.
img: /assets/img/Visually_Grounded_Word_Embs_thumbnail.png
importance: 1
category: Academic
related_publications: true
---

<!-- TL;DR text above the image -->
<p>
  <strong>TL;DR:</strong> This mini-project was done in 4 days as part of the <a href="https://coursecatalogue.uva.nl/xmlpages/page/2023-2024-en/search-course/course/110133">Interpretability and Explainability in AI</a> and earned my group the "best project award" out of ~30 projects. Given the short duration of the project, the results here should be taken as very preliminary (e.g., due to the tiny dataset size). However, I still want to include this mini-project since it gave some cool results and inspired a bigger individual <a href="https://arxiv.org/pdf/2509.15837?">follow-up project</a>, where I compared the effects of visual grounding in text-based and speech-based language encoders.
</p>


<!-- Intro -->
<div class="text-center my-4">
    <div class="row">
        <div class="col-sm mt-3 mt-md-0">
            {% include figure.liquid loading="eager" path="/assets/img/projects/visually_grounded_text/paper_info.png" title="VG-BERT Overview" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
  <div class="caption mt-2">
    Overview over different types of embeddings. Classic word embeddings are learned through text only. VG-BERT combines a language stream and a visual stream to obtain visually grounded word embeddings. The bilinear relation module further enhances these embeddings, resulting in relationally grounded word embeddings.
  </div>
</div>

<div class="row my-4">
  <div class="col">
    <h3>Background</h3>
    <p>
      This project is based on the paper "Explainable Semantic Space by Grounding Language to Vision with Cross-Modal Contrastive Learning" {% cite zhang2021explainable %}. The authors introduce VG-BERT, a vision-language model, which grounds language learning in vision, which is inspired by the fact that humans learn language by grounding concepts in perception and action and follows other research on vision-language models (e.g., CLIP {% cite radford2021learning%}). The model consists of a visual stream, based on a VGG model {% cite simonyan2014very %}, and a language stream, based on a BERT-model {% cite devlin2019bert %}. The model learns to align visual and language representations via cross-modal contrastive learning. After training, the language stream is a stand-alone language model capable of embedding concepts in a visually grounded semantic space. For more details on the architecture of VG-BERT, refer to the original paper {% cite zhang2021explainable %}. 
    </p>
  </div>
</div>

<!-- Research Questions -->
<div class="row my-4">
  <div class="col">
    <h3>Research Questions</h3>
    <p>
      Inspired by the findings that VG-BERT's representational space is semantically more meaningful compared to BERT's representatinal space {% cite zhang2021explainable %}, we pose the following research questions to further examine the impact of visual grounding:
    </p>
    <ul>
      <li>Does visual grounding equally impact concrete and abstract concepts?</li>
      <li>Does visual grounding help with resolving lexical ambiguities?</li>
      <li>Are the visually grounded embeddings clustered better?</li>
      <li>How does VG-BERT compare to BERT on probing tasks?</li>
    </ul>
  </div>
</div>

<!-- Concrete and abstract concepts -->
<div class="row my-4">
  <div class="col">
    <div class="text-center my-4">
        <div class="row">
            <div class="col-sm mt-3 mt-md-0">
                {% include figure.liquid loading="eager" path="/assets/img/projects/visually_grounded_text/abstract_concrete.png" title="Abstract vs Concrete words" class="img-fluid rounded z-depth-1" %}
            </div>
        </div>
        <div class="caption mt-2">
        Cosine similarities between BERT and VG-BERT for abstract and concrete words. Higher scores means that the embeddings remain similar.
        </div>
    </div>
    <p>
    To answer the first question, we compare the cosine similarity of embeddings of concrete and abstract words between the ungrounded BERT-model and the visually grounded VG-BERT model. In this work, the concreteness of a word is defined as the degree to which its referent is a perceptible entity. Note that while cosine similarity can lead to misleading results when comparing different models (due to the representational spaces not necessarily aligning), it can be used here since VG-BERT uses the pretrained BERT as its main backbone and is simply fine-tuned with additional visual data.  
    As can be seen in the plot above, the visually grounded embeddings of abstract words (freedom, justice, love, etc.) show a higher cosine similarity to their ungrounded counterpart embeddings compared to the embeddings of concrete words (apple, car house, etc.), which means that the visual grounding process <i>affects the embeddings of conctete words more than the embeddings of abstract words</i>. This should come as little surprise, since while concrete words such as apple or car are very likely to be represented in an image-caption dataset such MS COCO, which was used to visually ground the BERT-embeddings {% cite zhang2021explainable %}, whereas abstract words like freedom or justice are much harder to find unique visualizations for.
    </p>
  </div>
</div>



---

<!-- Conclusion -->
<div class="row my-4">
  <div class="col">
    <h3>Conclusion</h3>
    <p>
      Grounding language models in vision enhances their treatment of concrete concepts, disambiguates homonyms, and improves semantic clustering, without disrupting their syntactic representations.
    </p>
  </div>
</div>

