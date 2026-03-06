---
title: "Visual defect obfuscation based self-supervised anomaly detection"
category: "current"
image: research/EAR.png
---

To enhance the UAD performance, reconstruction-by-inpainting based methods have recently been investigated, especially on the masking strategy of suspected defective regions. However, there are still issues to overcome: 1) time-consuming inference due to multiple masking, 2) output inconsistency by random masking, and 3) inaccurate reconstruction of normal patterns for large masked areas. Motivated by this, this study proposes a novel reconstruction-by-inpainting method, dubbed Excision And Recovery (EAR), that features single deterministic masking based on the ImageNet pre-trained DINO-ViT and visual obfuscation for hint-providing. Experimental results on the MVTec AD dataset show that deterministic masking by pre-trained attention effectively cuts out suspected defective regions and resolves the aforementioned issues 1 and 2. Also, hint-providing by mosaicing proves to enhance the performance than emptying those regions by binary masking, thereby overcomes issue 3. The proposed approach achieves a high performance without any change of the model structure. Promising results are shown through laboratory tests with public industrial datasets.
