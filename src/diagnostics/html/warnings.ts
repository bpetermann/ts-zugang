export const warnings = {
  heading: {
    shouldExist:
      '[Zugang] Do not skip heading levels: always start from <h1>, followed by <h2> and so on.',
    shouldBeUnique: '[Zugang] The element should be unique: html',
  },
  meta: {
    shouldExist: '[Zugang] Set the viewport meta tag to not prohibit zooming',
    hasMissingAttribute:
      '[Zugang] Set the viewport meta tag to not prohibit zooming',
  },
  html: {
    hasMissingAttribute:
      '[Zugang] Define the natual language of your page by using the lang attribute on the <html> element',
  },
  title: {
    shouldExist:
      "[Zugang] Name your page using the <title> element to help screen reader users tell which page they're on",
    shouldBeUnique: '[Zugang] The element should be unique: title',
  },
  h1: "[Zugang] A page should generally have a single <h1> element that describes the content of the page (similar to the document's <title> element).",
  main: '[Zugang] There should only be one visible <main> element on the page',
  nav: '[Zugang] If you have more than one <nav> element on a page, you should label them with either aria-labelledby or aria-label to make them distinguishable.',
  link: {
    avoid:
      '[Zugang] Avoid generic link text, because it makes it difficult for users to anticipate what these links lead to. Link text: ',
    wrongAttribute: '[Zugang] A Link should not have a click event.',
    tabindex:
      'Negative tabindex values should not be used on elements that require direct keyboard navigation, like links or buttons.',
    mail: '[Zugang] Include the email address in the link text to help users who find it tedious to switch between applications',
  },
};
