


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
    sectionCount: 3,
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
    // this should be '5'
    "3": {
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
      footnotes: {
        // no images in any of the footnotes so can just be text
        "1": "Economists and technologists (and marxists!) often guess that changes in material conditions must precede changes in ideas and culture. Deirdre McClosky (see below) has convincingly argued that it usually goes in the other direction—new ideas spread through a culture shortly before a large material / economic shift!"
      }
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