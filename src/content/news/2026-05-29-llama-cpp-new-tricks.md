---
title: New tricks for llama.cpp
date: 2026-05-29
section: llama-cpp
category: tooling
org: ggml-org × Hugging Face
emoji: 🦙
summary: >-
  llama.cpp gets a new build almost every time someone merges a change, so a
  lot happened this year. These are the four new features we liked best.
timeline:
  - name: WebGPU support
    date: 2026-05-20
    detail: After about a year in the works, llama.cpp can run most open models in a browser tab, on your GPU.
    url: https://reeselevine.github.io/llamas-on-the-web/
  - name: llama.app
    date: 2026-05-29
    detail: A website with a one-line installer, and a single llama command that bundles all the separate tools.
    url: https://github.com/ggml-org/llama.cpp/discussions/23875
  - name: Decision models
    date: 2026-10-02
    detail: Give the model a fixed set of answers and it puts a probability on each one, instead of writing out a reply.
    url: https://huggingface.co/blog/ggml-org/decision-models-in-llamacpp
  - name: Hexagon NPU kernels
    date: 2026-11-14
    org: Qualcomm
    size: NVFP4 · IQ2_XXS
    detail: The backend for Snapdragon NPUs kept growing all year, and picked up two more low-bit formats in November.
    url: https://github.com/ggml-org/llama.cpp/releases/tag/b12376
links:
  - label: Llamas on the Web
    url: https://reeselevine.github.io/llamas-on-the-web/
  - label: Decision models in llama.cpp
    url: https://huggingface.co/blog/ggml-org/decision-models-in-llamacpp
  - label: llama.app
    url: https://llama.app/
theme: cyan
---
