const sr = ScrollReveal({
  origin: "top",
  distance: "-80px",
  duration: 2000,
  reset: false,
});

sr.reveal(
  `
  nav,.hero,.about,.skills,.portfolio,.services,.languages,.contact,footer,.lower_footer
`,
  {
    interval: 300,
  }
);

const sr2 = ScrollReveal({
  origin: "right",
  distance: "50%",
  duration: 3000,
  reset: false,
});

sr2.reveal(`
    #spring1,
    #spring2,
    #spring3
`);

const sr3 = ScrollReveal({
  origin: "left",
  distance: "50%",
  duration: 3000,
  reset: false,
});

sr3.reveal(`
    #springL1,
    #springL2,
    #springL3
`);
