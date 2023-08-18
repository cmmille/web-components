interface Global {
  LitElement: typeof import("lit").LitElement;
  html: typeof import("lit").html;
  css: typeof import("lit").css;
}

interface Window extends Global {}
