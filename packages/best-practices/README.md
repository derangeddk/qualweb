# QualWeb best practices

Implementation of accessibility best practices for web pages.

## How to use

**This is an internal module of QualWeb. To use it check either [@qualweb/cli](https://github.com/qualweb/cli) or [@qualweb/core](https://github.com/qualweb/core).**

## How to use

This package is intended to be used with [@qualweb/core](https://github.com/qualweb/core).

Add both packages to your project: 

```bash
npm i --save @qualweb/core @qualweb/best-practices
```

In your own code, pass an instance of the `BestPractices` class to QualWeb's evaluate method:

```typescript
import { BestPractices } from '@qualweb/best-practices';
import { QualWeb } from '@qualweb/core';

async function main() {
  const qw = new QualWeb();

  await qw.start();

  const bpInstance = new BestPractices({
    // Include/exclude specific rules here. Omitting any filters implies *all*
    // rules are included.
    levels: ['A', 'AA'],
  });

  const urlToEvaluate = 'https://www.google.com';

  const report = await qw.evaluate({
    url: urlToEvaluate,
    modules: [bpInstance],
  });

  await qw.stop();

  console.debug(report[urlToEvaluate].metadata);
}
```

## Implemented best practices

| QualWeb best practice ID | Related to | Rule ID | Best practice Name |
|---|---|---|---|
| QW-BP1 | HTML | [H42](https://www.w3.org/WAI/WCAG22/Techniques/html/H42) | Using h1-h6 to identify headings |
| QW-BP2 | HTML | None | Concise images alt text |
| QW-BP3 | HTML | [H33?](https://www.w3.org/WAI/WCAG22/Techniques/html/H33) | Link element with text content equal to the content of the title attribute |
| QW-BP4 | HTML | [H97](https://www.w3.org/WAI/WCAG21/Techniques/html/H97) | Grouped links not within a nav element |
| QW-BP5 | HTML | None | Using table elements inside other table elements |
| QW-BP6 | HTML | [None?](https://www.w3.org/Provider/Style/TITLE.html) | Title element is not too long (64 characters) |
| QW-BP7 | HTML | [H86](https://w3c.github.io/wcag/techniques/html/H86) | Title element contains ASCII-art |
| QW-BP8 | HTML | None? | Headings with images should have an accessible name |
| QW-BP9 | HTML | None | Table element without header cells has a caption |
| QW-BP10 | HTML | None | HTML elements are used to control visual presentation of content |
| QW-BP11 | HTML | [H48](https://www.w3.org/TR/WCAG20-TECHS/H48.html) | Using br to make a list |
| QW-BP12 | HTML | [H63](https://www.w3.org/TR/WCAG20-TECHS/H63.html) | Using scope col and row |
| QW-BP13 | HTML | [H2](https://www.w3.org/WAI/WCAG21/Techniques/html/H2) | Using consecutive links with the same href and one contains an image |
| QW-BP14 | CSS | None | At least one container's width has been specified using values expressed in px |
| QW-BP15 | CSS | None? | At least one width attribute of an HTML element is expressed in absolute values |
| QW-BP17 | HTML | [G123](https://www.w3.org/TR/2008/WD-WCAG20-TECHS-20080430/G123.html) | Adding a link at the beginning of a block of repeated content to go to the end of the block |
| QW-BP18 | CSS | [C23](https://www.w3.org/TR/WCAG20-TECHS/C24) | Using percentage values in CSS for container sizes |
| QW-BP19 | HTML | None | Landmark banner is top level |
| QW-BP20 | HTML | None | Landmark no duplicate banner |
| QW-BP21 | HTML | None | Landmark no duplicate contentinfo |
| QW-BP22 | HTML | None | Landmark has one main |
| QW-BP23 | HTML | None | Listitems are used semantically |
| QW-BP24 | HTML | None | Lists are used correctly |
| QW-BP25 | HTML | None | Landmark complementary is top level |
| QW-BP26 | HTML | None | Landmark contentinfo is top level |
| QW-BP27 | HTML | None | Landmark main is top level |
| QW-BP28 | HTML | None | h1 element is used and unique |
| QW-BP29 | HTML | [5b7ae0](https://www.w3.org/WAI/standards-guidelines/act/rules/5b7ae0/proposed/) | HTML page lang and xml:lang attributes have matching values |
| QW-BP30 | HTML | [3ea0c8](https://www.w3.org/WAI/standards-guidelines/act/rules/3ea0c8/proposed/) | Id attribute value is unique |

# License

ISC