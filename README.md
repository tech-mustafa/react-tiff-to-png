# TIFF to PNG Client

A group of functions that converts tiff or tif files to PNG on client side, it can be single image or a multi image tiff file

# Purpose

This library is mainly developed to embed tiff files to your web browsers without any server side code.

# How it works

Each function takes an input and returns an array of URLs, if the tiff file is Multipage then the response will be an array of each page covnerted into PNG. see the examples below

# Getting Started

## Installation

Install "tiff-to-png-client" using npm, append "--save" to save it in your package.json

```
npm install tiff-to-png-client

```

## Import the functions

```javascript
import {
  getPNGfromBlob,
  getPNGfromFile,
  getPNGfromURL,
} from "tiff-to-png-client";
```

## Usage

```javascript
const convertFromFile = async (file) => {
  const images = await getPNGfromFile(file);
  return images;
};

const convertFromBlob = async (blob) => {
  const images = await getPNGfromBlob(blob);
  return images;
};

const convertFromUrl = async (imageUrl) => {
  const images = await getPNGfromUrl(imageUrl);
  return images;
};
```

in the above examples each function receives a file in different formats and return an array of URLs which are converted into png and ready to be used in image tag.

## Function response

1. For Multipage tiff => `["https://pngurl_1", "https://pngurl_2", "https://pngurl_3"]`
2. For Singlepage tiff => ` ["https://pngurl_1"]`
