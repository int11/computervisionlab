---
title: "Monocular Depth Exploiting Monocular Depth Estimation for Style Harmonization in Landscape Painting"
category: "current"
image: research/figure.png
---

Style harmonization, also known as painterly image harmonization, is a technique to seamlessly blend objects from realistic photo into the background of paintings of different styles. While deep learning-based methods have produced satisfactory results, there are important factors to consider for successful style harmonization depending on the type of image being targeted. In particular, if a certain region of the target image takes up a large portion of the entire image, the object to be blended will be heavily affected by the region, failing to achieve plausible object conversion synthesis results. In this study, focusing on landscape painting in which significant portion of the entire image in occupied by sky regions, wepropose a novel method, Discarding Dominant Region (DRD),that effectively removes the sky by utilizing monocular depthestimation and Segment Anything Model(SAM).
