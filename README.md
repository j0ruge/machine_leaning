# machine_leaning

- [machine\_leaning](#machine_leaning)
  - [Testar](#testar)
  - [Troubleshootings](#troubleshootings)
    - ["... is not a function"](#-is-not-a-function)
  - [References](#references)

Classificação de imagem com MobileNet

:link: [ML5 Docs](https://docs.ml5js.org/#/)
:link: [ML5 Docs ver@0.12.2](https://archive-docs.ml5js.org/#/)

----

- [ml5.js: Classificação de imagem com MobileNet](https://www.youtube.com/watch?v=yNkAuWz5lnY&list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y&index=4)

- [ml5.js Cassificação de Imagens de Webcam](https://www.youtube.com/watch?v=D9BoBSkLvFo&list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y&index=4)

- [ml5.js: Object Detection with COCO-SSD](https://www.youtube.com/watch?v=QEzRxnuaZCk&list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y&index=5)
[@nebula.tv - ml5.js: Object Detection with COCO-SSD](https://nebula.tv/videos/the-coding-train-ml5-js-object-detection-with-coco-ssd)

:memo: [ml5.js: Transfer Learning with Feature Extractor](https://www.youtube.com/watch?v=kRpZ5OqUY6Y&list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y&index=6)

----

## Testar

- [Build a Deep CNN Image Classifier with ANY Images](https://youtu.be/jztwpsIzEGc?si=zwTPbtSkkNzr0W-P)
- ["I want Llama3.1 to perform 10x with my private knowledge" - Self learning Local Llama3.1 405B](https://www.youtube.com/watch?v=2PKCOVqhngY)

----

## Troubleshootings

### "... is not a function"

Quick Fix!
In the ml5 library's script tag, change latest to 0.12.2. If you are using p5.js, you can find the script tag in the index.html file of your p5 sketch.

Change this:

```html
<script src="https://unpkg.com/ml5@latest/dist/ml5.min.js"></script>
```

to this:

```html
<script src="https://unpkg.com/ml5@0.12.2/dist/ml5.min.js"></script>

```

Hope this works! ::

ref. [What happened to older ml5.js releases?](https://docs.ml5js.org/#/welcome/faq?id=what-happened-to-older-ml5js-releases)

----

## References

- [COCO - Common Objets in Context](https://cocodataset.org/#home)
- [Humans of AI](https://humans-of.ai/editorial/)
- [Excavating AI - The Politics of Images in Machine Learning Training Sets](https://excavating.ai/)