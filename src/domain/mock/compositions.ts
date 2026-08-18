export interface ImageItem {
  src: string;
  credit?: string;
}

export interface CompositionSection {
  type:
    | 'info'
    | 'text'
    | 'text-accent'
    | 'quote'
    | 'testimonial'
    | 'photo-pair'
    | 'photo-grid'
    | 'photo-wide'
    | 'video'
    | 'video-grid'
    | 'audio'
    | 'link';
  content?: string;
  author?: string;
  src?: string;
  href?: string;
  images?: ImageItem[];
  videos?: { src: string; label?: string }[];
  label?: string;
}

export interface CompositionData {
  id: number;
  name: string;
  slug: string;
  cover: string;
  date: string;
  orchestra: string;
  time: string;
  description: string;
  sections?: CompositionSection[];
  trackUrl?: string;
  images?: string[];
  code?: string;
  coopName?: string;
  score?: string;
  videoSrc?: string;
  performed?: string;
  srcTitle?: string;
  srcLink?: string;
  venue?: string;
  ensemble?: string;
  duration?: string;
  instrumentation?: string;
  commission?: string;
  performedBy?: string;
  projectDescription?: string;
}

export const data: CompositionData[] = [
  {
    id: 1,
    name: 'implanted memories (2019-2026)',
    slug: 'implanted-memories',
    cover:
      'https://polina-image.s3.us-east-2.amazonaws.com/convert/implanted_memories_cover.webp',
    date: '2019-2026',
    orchestra: '',
    time: '',
    description: '',
    venue: '',
    ensemble: 'Klangforum Wien',
    duration: '45 minutes',
    instrumentation:
      'automated, microtonal arciorgano, singing performer, and a video-projection',
    performedBy: 'Johanna Vargas, Johannes Keller, and the arciorgano',
    commission: 'Musik der Jahrhunderte',
    sections: [
      {
        type: 'info',
      },
      {
        type: 'text',
        content: `Imagine a solitary human silhouette standing in dim blue lighting faced to a peculiar construction equipped with pipes, multiple keyboards and wires. Since the shadowy figure is turned in the opposite direction from the audience and the hall is rather gloomy, you cannot discern her face. Instead, the spotlight–literally and metaphorically–is on this steam-punk machinery, archaic and futuristic at once. The atmosphere resambles that of a cathedral–majestic and slightly ominous.`,
      },
      {
        type: 'photo-pair',
        images: [
          {
            src: '/implanted_memories/IMG_0021_1.JPG',
          },
        ],
      },
      {
        type: 'text',
        content: `When the performer begins to sing, subtle repetitions of a naively simplistic melody, coming across as an anxious kitschy pop-song, emerge:`,
      },
      {
        type: 'quote',
        content: `'please come here', 'i wanna hear your voice', 'why can't you just say three words?'`,
      },
      {
        type: 'text',
        content: `||The chasm between the august setting and the intimate confession reminiscent of a prayer is vividly sensible.||`,
      },
      {
        type: 'text',
        content: `After a short while, the machine commences replying to these vulnerable, emotional outbursts by copying and reproducing the already sung phrases with details pertinent to human voice, such as vibrato, glissando and timbral inconsistencies. However, this time, they are repeated in an identical, automated, almost preternatural manner, taking in account that no one is touching the keyboard! The keys are being pressed by themselves, maintaining contact with the performer strictly in a sonic, immaterial dimension.`,
      },
      {
        type: 'photo-pair',
        images: [
          {
            src: 'https://polina-image.s3.us-east-2.amazonaws.com/convert/implanted_memories_photo_1.webp',
          },
          {
            src: 'https://polina-image.s3.us-east-2.amazonaws.com/convert/implanted_memories_photo_2.webp',
          },
        ],
      },
      {
        type: 'text',
        content: `This peculiar dialogue is stretched over a larger span of time while undergoing various stages of interaction: contemplating the other, resonating with it, chasing, mirroring, merging, and, ultimately, leaving the audience wondering – who is the primary subject in this exchange and who is the volitionless double. In other words, ||is the singer only a clone of the machine or vice versa?||`,
      },
      {
        type: 'text',
        content: `**The ambivalence between radical intimacy and the forced performativity of spectacle–the exposed palette of human sensitivity and the mechanical, articulated indifference–shapes a critical investigation into the architecture of personal and collective memory and its role in the formation of gendered representation.**`,
      },
      {
        type: 'photo-pair',
        images: [
          {
            src: '/implanted_memories/image1.jpg',
          },
          {
            src: '/implanted_memories/image3.jpg',
          },
        ],
      },
      {
        type: 'text',
        content: `The work is situated between experimental composition, theatrical ritualistic procession and a pop gig, addressing a wide spectre of audience–the familiar faces in new music, contemporary art enthusiasts, and those seeking pleasure in new forms of reflexive experience.`,
      },
      {
        type: 'photo-wide',
        images: [
          {
            src: '/implanted_memories/image4.JPG',
          },
        ],
      },
      {
        type: 'text',
        content: `The premiere of a 25-minute excerpt took place in Stuttgart in the framework of ECLAT festival 2026.`,
      },
      {
        type: 'video',
        src: 'https://player.vimeo.com/video/1160793054?h=41995d9bdd&share=copy',
      },
      {
        type: 'testimonial',
        content: `I attended the premiere of Lin Korobkova's implanted memories this February at the Eclat Festival in Stuttgart. As everybody knows, it can be quite difficult to make a strong impression at a festival where one premiere follows another, but this piece immediately stood out. Its inherent tension between rather simple basic material and an extremely refined reinterpretation made it at once easy to follow and utterly compelling in the freshness of its approach.

The addition of a mechanical organ — half history, half future — introduces another carefully calculated contradiction, making the piece even more striking. And while the exaggerated precision of the notation treats the singer almost like a kind of voice robot, it also brings out the very best in her. It would be hard to find a more differentiated performance this year than Johanna Vargas' interpretation of implanted memories.

Add to this the fact that the piece is also highly entertaining, and it seems obvious that it should be performed again, in its entirety, as soon as possible.`,
        author: 'Sebastian Claren',
      },
      // {
      //   type: 'video',
      //   src: 'https://www.youtube.com/embed/Kqgv1BRcezg',
      // },
    ],
  },
  {
    id: 2,
    name: 'tap my head and mike my brain, stick that needle in my vein (2024-2025) ',
    slug: 'tap-my-head',
    cover: '/tap_my_head/imageCover.jpg',
    date: '(2024-2025)',
    orchestra: '',
    time: '20 minutes',
    description: '',
    score: '',
    duration: '20 minutes',
    instrumentation:
      'two performers with turntables, preprinted vinyls, phones, and transducers',
    performedBy: 'Anna Piroli and Erika Sofia Sollo; Juliet Fraser and Hannah Weirich',
    commission: 'Bludenzer Tage zeitgemäßer Musik 2024',
    sections: [
      {
        type: 'info',
      },
      {
        type: 'text-accent',
        content: `The composition explores how the human voice detaches from the body that produces it, reappearing on stage through vinyl records as a distorted doppelgänger of an earlier act of singing. Pushed to the limits of its capacities, the recorded imprint of the voice undergoes a series of technical manipulations before being imitated live by the same musicians who produced the tracks. Ultimately, the process is folded into a feedback loop that dispenses with the need for human participation altogether. Everyday playback and communication technologies—mobile phones, turntables, vinyl records, and loudspeakers—become critical artistic tools, gradually seizing and subsuming the signals they are meant to transmit along trajectories of their own.`,
      },
      {
        type: 'text',
        content: `Standing at their respective turntables, the performers press a button in unison, releasing an odd duet from two small loudspeakers. Homemade recordings of the musicians' voices emerge, weaving and intertwining with one another, forming polyphonic microtonal ornaments, coming apart and then melting back into unison.`,
      },
      {
        type: 'photo-pair',
        images: [
          { src: '/tap_my_head/image2.jpg' },
          { src: '/tap_my_head/image3.jpg', credit: '@ Andrea Romeo' },
        ],
      },
      {
        type: 'text',
        content: `For the first half of the performance, the only actions taking place on stage consist of manipulating the vinyl records by adjusting playback speed and direction of rotation. ||Due to a technical coupling between pitch and tempo, polyphony evolves in real time – the voices transform, reaching registers inaccessible to the unmediated human voice.||`,
      },
      {
        type: 'text',
        content: `Around halfway through the performance, sustained white noise produced by scratches on the records serves as a turning point of the piece's course: for the first time the performers begin to sing–bound to rhythms generated through their own manipulation of the turntables.`,
      },
      {
        type: 'text',
        content: `||In the last section, the live singing overlaps with the archival recordings: each performer mimics the captured voice of another.|| Moreover, the live voices are fed back into the records' surfaces through transducers, coiling into a closed circuit which irrevocably distorts the initial material. ||Technology ceases to function as a passive carrier of information and transforms into an active participant, redistributing agency across source, playback, channel, and presence until communication breaks down altogether.||`,
      },
      {
        type: 'text',
        content: `**Musicians exit the space of performance, leaving mechanical devices to produce sounds autonomously. Human presence is no longer a necessary condition for the process to go on.**`,
      },
      // {
      //   type: 'video',
      //   src: 'https://www.youtube.com/embed/iCb7Sje-jnU',
      // },
    ],
  },
  {
    id: 4,
    name: 'eight private spaces (work-in-progress)',
    slug: 'eight-private-spaces',
    cover: '/eight_private/image1.jpg',
    date: '',
    orchestra: '',
    time: '18 minutes',
    description: '',
    duration: '18 minutes',
    instrumentation: '18 musicians, 26 loudspeakers, and 2 spaces',
    performedBy: '',
    commission: 'Klangforum Wien',
    score: '',
    sections: [
      {
        type: 'info',
      },
      {
        type: 'text',
        content: `Picture a concert hall filled with twenty-eight loudspeakers varying in size, quality, and placement: some displayed like sculptures on a raised platform at its centre, as though occupying the places of absent musicians; others suspended from the ceiling or concealed entirely from view. The audience is free to roam through the microclimate generated by this chaotically structured sound system—moving across the hall, lying on cushions, or observing one another's reactions.`,
      },
      {
        type: 'text-accent',
        content: `From only a few of the loudspeakers emerges a striking mixture of a field recording of habitual yet seemingly incidental domestic actions—brushing one's teeth, opening drawers—with lounge music commonly encountered in shopping centres or airports. The latter is by no means independent of the activities taking place in the apartment. More: the music appears to hold sway over them, directing and propelling the movements as its tempo accelerates or slackens in step with the footsteps.`,
      },
      {
        type: 'photo-pair',
        images: [
          { src: '/eight_private/image2.jpg' },
          { src: '/eight_private/image3.jpg' },
        ],
      },
      {
        type: 'text',
        content: `After some time, an abrupt cut disrupts the established flow: a new constellation of active loudspeakers instantly transports the audience into another private space, with background music of its own. This sudden switch recurs seven more times over the course of the piece, bringing the conditions of sound's mediation to the foreground: each recording is coupled with a different loudspeaker configuration and quality of reproduction. ||Do the nagging buzz, the bass-starved compression, and the excessive delay originate in the loudspeakers, or are these distortions already inscribed in the tracks themselves?||`,
      },
      {
        type: 'text',
        content: `||As the audience is drawn deeper into this uncanny apparatus of surveillance, the provenance of the recordings—and eventually their status as recordings at all—becomes increasingly uncertain.|| Sounds of live instruments occasionally emerge from an adjacent room and coincide with the tracks, further destabilising the distinction between document and event. The performance draws to a close with a short circuit: only at the very end do several performers enter the hall, microphones in hand, amplifying its ambient noise back into the very space that produces it.`,
      },
      {
        type: 'text',
        content: `||The catalogue of 'eight private spaces' investigates music as a mechanism of behavioural regulation, the artifice inscribed in documentary recordings, and the unstable boundary between listening and surveillance.||`,
      },
    ],
  },
  {
    id: 3,
    name: 'flashbacks to perform (work-in-progress)',
    slug: 'flashbacks-to-perform',
    cover:
      'https://polina-image.s3.us-east-2.amazonaws.com/convert/flashbacks_to_perform_cover.webp',
    date: '(2019-...)',
    orchestra: '',
    time: '20 minutes',
    description: '',
    duration: '20 minutes',
    instrumentation: 'solo piano',
    performedBy: 'Jean-Pierre Collot; Dmitry Batalov; Dolores Privitera',
    commission: 'Ernst von Siemens Musikstiftung and Bavarian Academy of Fine Arts',
    score: '',
    sections: [
      {
        type: 'info',
      },
      {
        type: 'text',
        content: `For most of my childhood and adolescence—from the age of three until sixteen—I was trained as a professional pianist and performed on stage regularly. In practical terms, this meant spending the vast majority of my time with the instrument, often around eight hours a day.`,
      },
      {
        type: 'text',
        content: `||My physical existence and my conception of my body were therefore inextricably intertwined with the sensations of approaching the piano: the distribution of weight on a key, the nuanced gradation of pressing a pedal, the tension spilling from the back into the wrists.||`,
      },
      {
        type: 'text',
        content: `I stopped playing abruptly—within a single day—due to a professional injury to my hand. After undergoing surgery, I was forced to abandon the instrument and have not played since.`,
      },
      {
        type: 'photo-grid',
        images: [
          { src: '/flashback/images/image1.jpg' },
          { src: '/flashback/images/image2.jpg' },
          { src: '/flashback/images/image3.jpg', credit: '@ Astrid Ackermann' },
        ],
      },
      {
        type: 'text',
        content: `The cycle 'flashbacks to perform' delves into the tactile memory of intimacy between a performer and their instrument. ||Taking classical piano repertoire as its foundation, works by Chopin, Schubert, Mozart, and Schumann are fragmented and recontextualised through meticulous repetitions of small sections.||`,
      },
      {
        type: 'text',
        content: `||The left hand remains deliberately muted for much of the piece—imagined rather than heard, present as a phantom.||`,
      },
      {
        type: 'photo-pair',
        images: [
          { src: '/flashback/composition/image1.jpg' },
          { src: '/flashback/composition/image2.jpg' },
        ],
      },
      {
        type: 'text',
        content: `||The score becomes a surface for documenting the sensation of playing itself, using different colours to indicate weight, arrows marking the precise position of the arms, and lines tying the tempo of playing to performer's breathing.||`,
      },
      {
        type: 'text',
        content: `Dwelling as much in what is negatively present—that is, unheard—as in what is actually sounded, the piece traces the persistence of embodied technique after its interruption: ||a memory of playing that survives as symptom, absence, and return.||`,
      },
      {
        type: 'video',
        src: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/korobkova/flashbacks-to-performs-i-2020&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false',
      },
      // {
      //   type: 'video',
      //   src: 'https://www.youtube.com/embed/QKFeYKAm-5g',
      // },
    ],
  },
  {
    id: 5,
    name: 'haunted place (2021)',
    slug: 'haunted-place',
    cover:
      'https://polina-image.s3.us-east-2.amazonaws.com/convert/haunted_place_cover.webp',
    date: '(2021)',
    orchestra: '',
    time: '5 minutes',
    description: '',
    duration: '5 minutes',
    instrumentation: 'string quartet with transducers',
    performedBy: 'Quartetto Maurice',
    commission: "winner of the BTzM Composers' Workshop 2021",
    trackUrl:
      'https://polina-sound.s3.us-east-2.amazonaws.com/haunted_place/haunted_place_audio-MP3_xmjide.mp3',
    score: '',
    sections: [
      {
        type: 'info',
      },
      {
        type: 'text',
        content: `The piece brings into collision two modes of documenting the same event: an objective one, produced through a field recording, and a subjective one, reconstructed solely through evanescent recollection of my own lived experience.`,
      },
      {
        type: 'text',
        content: `||A train station in Vienna, where a soundtrack of sappy excerpts from nineteenth-century Romantic string quartets perpetually resounds as part of a municipal program, becomes the central protagonist of the work. ||This melancholic site where paths part and reunite is engraved—by means of transducers—into the bodies of an actual string quartet. ||Resonating with frequencies of the past, the instruments themselves turn into carriers of memory, rendering the performers the agents of disturbance—painting over the objective documentation with their bows.|| What once served as an ambient background–amplifying and estranging the emotions elicited by meetings and departures—is now the canvas for their retrospective recollection and alteration.`,
      },
      {
        type: 'text',
        content: `Beyond its recursive setting and principle of organisation, 'haunted place' is an unironic sentimental ode to personal and collective practices of escapism, compulsive repetitions of the Same, and loneliness.`,
      },
      {
        type: 'video',
        src: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/korobkova/haunted-place-2021&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false',
      },
    ],
  },
];

export const materials: CompositionData[] = [
  {
    id: 5,
    name: 'anonymous material i',
    slug: 'anonymous-material_i',
    cover:
      'https://polina-image.s3.us-east-2.amazonaws.com/convert/anonymous_material_i_cover.webp',
    date: '',
    orchestra: '',
    time: `ca.3 min <br> for chamber orchestra with electric guitar and electric bass instead of string instruments and 3 singers`,
    description: `was written for and performed by orkest de ereprijs in apeldoorn, netherlands`,
    srcTitle: 'won the 26th Apeldoorn commission prize',
    srcLink: 'https://www.ereprijs.nl/en/youngcomposers?start=1',
    trackUrl:
      'https://polina-sound.s3.us-east-2.amazonaws.com/anonymous_material_i/anonymous_material_i_audio-MP3_py1igr.mp3',
    score:
      'https://drive.google.com/file/d/13KWAVyZMbSK8Eu5uA4q1KaSpx6b0Mfyu/view?usp=drive_link',
    sections: [
      {
        type: 'text',
        content: `was written for and performed by orkest de ereprijs in apeldoorn, netherlands`,
      },
      {
        type: 'photo-grid',
        images: [
          {
            src: 'https://polina-image.s3.us-east-2.amazonaws.com/convert/anonymous_material_i_photo_1.webp',
          },
          {
            src: 'https://polina-image.s3.us-east-2.amazonaws.com/convert/anonymous_material_i_photo_2.webp',
          },
          {
            src: 'https://polina-image.s3.us-east-2.amazonaws.com/convert/anonymous_material_i_photo_3.webp',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: 'anonymous material ii',
    slug: 'anonymous-material_ii',
    cover:
      'https://polina-image.s3.us-east-2.amazonaws.com/convert/anonymous_material_ii_cover.webp',
    date: '',
    orchestra: '',
    time: 'ca.2 min <br> for trombone, percussion, viola, cello and fixed electronics',
    description: `was performed by julian pfeil, tobias furholt, justyna robak and sebastian triebener at HMDK, Stuttgart, Germany`,
    trackUrl:
      'https://polina-sound.s3.us-east-2.amazonaws.com/anonymous_material_ii/anonymous_material_ii_recording-MP3_pwmoby.mp3',
    score:
      'https://drive.google.com/file/d/182b61Ef1OzAjFURC2r7twV1wRS97kG6b/view?usp=drive_link',
    sections: [
      {
        type: 'text',
        content: `was performed by julian pfeil, tobias furholt, justyna robak and sebastian triebener at HMDK, Stuttgart, Germany`,
      },
      {
        type: 'photo-grid',
        images: [
          {
            src: 'https://polina-image.s3.us-east-2.amazonaws.com/convert/anonymous_material_ii_photo_1.webp',
          },
          {
            src: 'https://polina-image.s3.us-east-2.amazonaws.com/convert/anonymous_material_ii_photo_2.webp',
          },
          {
            src: 'https://polina-image.s3.us-east-2.amazonaws.com/convert/anonymous_material_ii_photo_3.webp',
          },
          {
            src: 'https://polina-image.s3.us-east-2.amazonaws.com/convert/anonymous_material_ii_photo_4.webp',
          },
          {
            src: 'https://polina-image.s3.us-east-2.amazonaws.com/convert/anonymous_material_ii_photo_5.webp',
          },
        ],
      },
    ],
  },
];
