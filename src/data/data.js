


export const articleData = [
  {
    headingIndex: "1",
    heading: "Introduction",
    sectionCount: 2,
    "1": {
      content: [
        { text: "There is a peculiar attitude, here at the beginning of the 21st century. On the one hand, we agree things aren’t fine. On the other hand, there’s a widespread feeling that there’s nothing to be done." },
        { text: "The first thing to recognize is that this isn’t always how the present feels: often in the past, people had a sense that there was something — something huge — to be done. Essays like the Communist Manifesto give people this sense. Before that, at the dawn of modern democracy, documents like Common Sense (in the US) and the Declaration of the Rights of Man and of the Citizen (in France) gave people the same sense. There was something to be done." },
        { text: "I’d like to address, here, why things feel different now." },
      ],
      // grab comments from database? 
    },
    "2": {
      content: [
        { text: "Despite what activists say, I believe this feeling is somewhat justified. I believe it shows where our society is stuck. It’s not stuck for a simple reason — not just because of apathy, consumer comfort, the rise of clicktivism, or anything like that." }
      ],
      links: [
        {
          index: "2-6",
          relevance: "It’s not because of “greed of the powerful” or “balancing incentives” either, and it won’t be solved through old models and new technology."
          // grab text 'preview' directly from parent data
        },
      ],
      special: 'reasonsForNTD.js' // give file name of special module

    },
  },
  {
    headingIndex: "2",
    heading: "What's The Problem?",
    sectionCount: 7,
    "1": {
      content: [
        { text: "Despite what activists say, I believe this feeling is somewhat justified. I believe it shows where our society is stuck. It’s not stuck for a simple reason — not just because of apathy, consumer comfort, the rise of clicktivism, or anything like that." }
      ],
    },
    "2": {
      content: [
        {
          image: "2-2.png",
          caption: "Our institutions are what's causing our problems"
        },
        { text: "Despite what activists say, I believe this feeling is somewhat justified. I believe it shows where our society is stuck. It’s not stuck for a simple reason — not just because of apathy, consumer comfort, the rise of clicktivism, or anything like that." },

      ]
    },
    "3": {
      content: [
        { text: "A second kind of nothing-to-be-done view says that human nature is fixed, and that our current batch of institutions — including markets, democracies, and social networks — represents a kind of final, unimprovable compromise between the different aspects of human nature. On this view, our current institutions make the best possible balance of autonomy against collective responsibility, of equality against opportunity, of consumer affluence against self-expression and public participation, and so on. Broadly, they’re the best way to balance individual incentives with our ideals." },
      ],
    },
    "4": {
      content: [
        { text: "This view, too, falls apart in the light of history. We find a breathtakingly different story: Human nature, far from being fixed, is read differently from age to age. These different readings give rise to totally new ideas for institutions. And these new readings and new institutions seem to reshape us. Often, what works out in practice would have seemed impossible on the previous views. Furthermore, the traits we are supposedly balancing — autonomy, collective responsibility, equality, etc — are themselves changing. They, also, are expressions of one view of human nature or another." },

      ],
      links: [
        {
          index: "3-2",
          relevance: "All these differing visions and institutions are still very much with us."
        },
      ]
    },
    "5": {
      content: [
        { text: "So what blocks the creation of new institutions? It’s not the greed of the powerful; it’s not some physics of balancing incentives:" },
        { emphasis: "We’re waiting on a new vision of human nature." },
        { text: "Until we have it, we’re stuck recycling old models (unions, co-ops, local currencies, whatever) or, worse, grasping at tech trends (blockchains, wikipedia, the “sharing economy”)." },
        { text: "That’s like trying to invent voting by asking “so, fellas, what can we do with pencils?”" },
      ],
      links: [
        {
          index: "7-6",
          relevance: "Each view draws our attention to a particular part of us, which leads us to think about society, and how it ought to be, in certain ways."
        },
      ]
    },
    "6": {
      content: [
        { text: "So what blocks the creation of new institutions? It’s not the greed of the powerful; it’s not some physics of balancing incentives:" },
        { emphasis: "We’re waiting on a new vision of human nature." },
        { text: "Until we have it, we’re stuck recycling old models (unions, co-ops, local currencies, whatever) or, worse, grasping at tech trends (blockchains, wikipedia, the “sharing economy”)." },
        { text: "That’s like trying to invent voting by asking “so, fellas, what can we do with pencils?”" },
        {
          text: "Believe it or not, it wasn’t new technologies that led to new institutions in the past, it was changing ideas of human nature and society.",
          footnote: "1"
        },
      ],
      footnotes: [
        // no images in any of the footnotes so can just be text
        { "1": "Economists and technologists (and marxists!) often guess that changes in material conditions must precede changes in ideas and culture. Deirdre McClosky (see below) has convincingly argued that it usually goes in the other direction — new ideas spread through a culture shortly before a large material / economic shift!" }
      ],
      links: [
        {
          index: "9-4",
          relevance: "What this new vision is won’t be described in full in this essay, but will be hinted at."
        },
      ]
    },
    "7": {
      content: [
        { text: "But we can’t imagine how that could happen again today. We can’t even see how our current visions shape our designs, lives, organizations, and our self-conceptions." },
        { text: "I’ll do my best to reveal the visions of human nature which underlie our designs, and how our design cultures keep us locked inside those visions. Once we see the culture we live inside, we’re ready to step outside and see new opportunities." },
      ],
    }
  },
]

// export const colophonData = (
  // <div>
  //   <h2>Colophon</h2>
  //   <div style={ { marginTop: '2.4rem' } }>
  //     Type set in:
  //     <ul>
  //       <li><span style={ { fontStyle: 'italic' } }>Spectral</span>, designed by Production Type.</li>
  //       <li><span style={ { fontFamily: 'IBM Plex Sans', fontStyle: 'italic' } }>IBM Plex Sans</span>, designed by Mike Abbink, in collaboration with Bold Monday.</li>
  //     </ul>
  //   </div>
  //   <p>Summaries, links and website by <a href="http://www.vincentli.space/" target="_blank">Vincent Li</a></p>
  // </div>
// )