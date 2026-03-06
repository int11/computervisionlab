---
title: "Unsupervised Image-to-Image Translation Based on Bidirectional Style Transfer"
category: "current"
image: research/PHK.png
---

Image-to-image translation (I2I) is an image synthesis technique that aims to map a source image to the style of target domain while preserving its content information. Existing image to image translation studies have achieved excellent image synthesis performance using generative adversarial network (GAN) based models, but they are not capable of efficiently handling the style of the target domain. As a way to overcome this limitation, a bidirectional style transfer network has been developed to perform image synthesis by intersecting images of two domains with each other’s styles, but the type of applicable dataset is limited due to supervised learning-based training. In this paper, we propose an unsupervised image-to-image translation method that employs bidirectional style transfer network with a cyclic collaborative loss to train the model. Experimental results show that the proposed network accurately reflects the style of the target domain in the image synthesis task.
